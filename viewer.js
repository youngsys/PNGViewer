//{ Global
	// content.mousedown controls selection status; (word|page).mouseenter controls selection content
	selectionEnum = {
		NotSelecting : 0,
		SelectionStarted : 1,
		SelectionFinished : 2
	}
	
	colorEnum = {
		backgroundColor : "#F1F1EF",
		outlineColor : "#FFD2D2"
	}

	
	function onLoad(){
		$docDiv = $("#documentDiv");
		$docPanel = $("#docPanel");
		$modelPanel = $("#modelPanel");

		$docDiv.resizable({
			handles: "e",
			resize: function(event){content.docPanelResize(event);}
		});
		
		$docDiv.on('wheel', function(event){content.mouseWheelResize(event);});	
		$(window).resize(function(event) {content.setModelPanelWidth();});
		
		content = new Content(1);		// need to get the documentNo from the URL
		content.setModelPanelWidth();
						
		$docPanel.mousedown(function(event){content.OnMouseDown(event)})
					.mouseup(function(event){content.OnMouseUp(event)});
					
		$docPanel.keyup(function(event){content.OnKeyUp(event)});
	}
	
//} -Global
//{ Word
	
	function Word(wd){
		this._left = wd.l;
		this._top = wd.t;
		this._right = wd.r;
		this._bottom = wd.b;
		this._height = this._bottom-this._top;
		this._width = this._right-this._left;
		this.wNo = wd.n;
		
		var d = new Date();
		this._id = 'wd' + wd.n + '_' + d.getTime();			// need to review unique id for word
		this._word = wd.w;
	}
	
	Word.prototype.left = function() {return this._scaleLeft;}
	Word.prototype.top = function() {return this._scaleTop;}
	Word.prototype.right = function() {return this._scaleRight;}
	Word.prototype.bottom = function() {return this._scaleBottom;}
	Word.prototype.height = function() {return this._scaleHeight;}
	Word.prototype.width = function() {return this._scaleWidth;}
	Word.prototype.id = function() {return this._id;}
	Word.prototype.word = function() {return this._word;}
		
	Word.prototype.scale = function(imgWidth, imgHeight){
		this._scaleLeft = Math.round((this._left * 10000) / imgWidth) / 100;
		this._scaleTop = Math.round((this._top * 10000) / imgHeight) / 100;
		this._scaleRight = Math.round((this._right * 10000) / imgWidth) / 100;
		this._scaleBottom = Math.round((this._bottom * 10000) / imgHeight) / 100;
		this._scaleWidth = Math.round((this._width * 10000) / imgWidth) / 100;
		this._scaleHeight = Math.round((this._height * 10000) / imgHeight) / 100;
	}
		
	Word.prototype.drawText = function($pgTxt){
			this._div = document.createElement('div');
			this._div.id = this.id();
			this._div.wd = this;
			$pgTxt.append(this._div);
			
			$("#" + this.id())
				.mouseenter(this.mouseEnter)
				.mousemove(this.mouseEnter)
				.mouseleave(this.mouseLeave)
				.addClass("wd");
		
		$("#" + this.id())
			.css("left",this.left() + "%")
			.css("top",this.top() + "%")
			.css("width",this.width() + "%")
			.css("height",this.height() + "%");
	}
		
	Word.prototype.mouseEnter = function(event){
		// NB "this" is the div
		
		var wd = this.wd;
		if(!wd.content.docPanelIsMinimized){
			if(wd.content.selecting === selectionEnum.NotSelecting) {
				var div = wd._div;
				var $hoverDiv = wd.page.$hoverDiv;
				
				$hoverDiv.show();
				$hoverDiv.html(wd.word());			
				
				var iHeight = div.offsetHeight * 1.3;
				var iLeft = div.offsetLeft + div.offsetWidth / 2 - parseInt($hoverDiv.css( "width" )) / 2;
				var iTop = div.offsetTop - iHeight * 2.5;
				$hoverDiv.css("left",iLeft).css("top",iTop);
			} else if(wd.content.selecting === selectionEnum.SelectionStarted){
				var sg = wd.segment;
				var wNo = wd.wNo;			
				
				if(content.selectedSegment === undefined){
					content.selectedSegment = sg;
					sg.selectionStart = wNo;
				} 
				if(content.selectedSegment === sg){
					sg.selectionEnd = wNo;
					sg.drawSelection();
				}
			}
		}
	}
		
	Word.prototype.mouseLeave = function(event){
		var wd = this.wd;
		if(!wd.content.docPanelIsMinimized){		
			wd.page.$hoverDiv.hide();
		}
	}

//} -Word
//{ Segment	
	
	function Segment(){
		this.words = {};
	}
	
	Segment.prototype.addWord = function(wd){
		wd.segment = this;
		this.words[wd.wNo] = wd;
		this.content.words[wd.wNo] = wd;
	}

	Segment.prototype.drawSelection = function(){
		// we need to be able to redraw when the user drags back (ie undo is by redraw)
		$(".wd").css("backgroundColor",'transparent');
		for(var wd in this.words){
			var _wd = this.words[wd]
			var wNo = _wd.wNo;
			if(	(wNo>=this.selectionStart && wNo<=this.selectionEnd) ||
					(wNo>=this.selectionEnd && wNo<=this.selectionStart)) {
				$("#" +_wd.id()).css("backgroundColor",'red');
			}
		}
	}

//} -Segment
//{ Page

	function Page() {
		this.words = {};
	}
	
	Page.prototype.init = function(pageNo, imageFile){
		this._imageFile = imageFile;
		this._pageNo = pageNo;
	}

	Page.prototype.initRender = function(){
		this.img = document.createElement('img')
		this.img.docPage = this;
		this.img.id = "pgImg_" + this._pageNo;
		$(this.img).addClass("pgImg");
		this.img.onload = function() {this.docPage.onImageLoad(i)};
		this.img.src = "file:///" + this._imageFile;
	}

	Page.prototype.onImageLoad = function(){
		this.originalWidth = this.img.width;
		this.originalHeight = this.img.height;
		
		var pgDiv = document.createElement('div');
		pgDiv.id = "docPage_" + this._pageNo;
		pgDiv.docPage = this;
		this._div = pgDiv;
		$(pgDiv).addClass("docPage");
		$(pgDiv).css("border-width",this.content.scrollBarWidth);
		
		var pgOutline = document.createElement('div');
		this._docOutline = pgOutline;
		$(pgOutline).addClass("docOutline");

		$(pgOutline).append(this.img);
		$(pgDiv).append(pgOutline);
		$docPanel.append(pgDiv);
		this.content.reSize();
		$docPanel.append(pgDiv);

		var pgHvr = document.createElement('div');
		pgHvr.id = "docHover_" + this._pageNo;
		$(pgHvr).addClass("hoverLayer");
		var pgHvrTxt = document.createElement('div')
		pgHvrTxt.id = "docHoverText_" + this._pageNo;
		this.$hoverDiv = $(pgHvrTxt);
		$(pgHvrTxt).addClass("hoverText").addClass("btn").addClass("btn-primary");
		$(pgHvr).append(pgHvrTxt);
		$(pgDiv).append(pgHvr);
		
		var pgTxt = document.createElement('div');
		pgTxt.id = "docTxt_" + this._pageNo;
		$(pgTxt).addClass("docTxt");
		$(pgDiv).append(pgTxt);
		this.renderWords($(pgTxt));
		$(pgDiv).mousedown(this.mouseDown)
				.mouseenter(this.mouseEnter)
				.mouseleave(this.mouseLeave);
		
		if(this.nextPage !== undefined){
			this.nextPage.initRender();
		}
	}

	Page.prototype.mouseDown = function(event){
		if(!event.altKey){
			var pg = this.docPage;
			var content = pg.content;
			
			if(content.docPanelIsMinimized){
				var pgNo = pg._pageNo;
				
				if(!(event.ctrlKey | event.shiftKey)){
					content.notSelectingPages();
					pg.outlinePage();
				}
				
				if(event.shiftKey & content._lastSelectedPage !== undefined){
					content.selectPageRange(pgNo)
				} else if(content.selectedPages[pgNo] === undefined){
					content.selectedPages[pgNo] = pg;
					pg.outlinePage();
				} else if(event.ctrlKey) {
					delete content.selectedPages[pgNo];
				}
				
				content._lastSelectedPage = pgNo;
			}
		}
	}

	Page.prototype.mouseEnter = function(event){
		var pg = this.docPage;

		pg.content.hoverPage = pg;
		if(pg.content.docPanelIsMinimized){
			var hover = pg.$hoverDiv;
			pg.outlinePage();
			hover.show();
			hover.html("Page: " + pg.pgNo);			
			hover.css("left",0).css("top",0);
		}
	}

	Page.prototype.mouseLeave = function(event){
		var pg = this.docPage;
		var content = pg.content;
		
		if(content.docPanelIsMinimized){
			var pgNo = pg._pageNo;
			if(content.selectedPages[pgNo] === undefined){
				$(pg._docOutline).css("border-color",colorEnum.backgroundColor);
			}
			pg.$hoverDiv.hide();
		}
	}
	
	Page.prototype.renderWords = function(pgTxt) {
		if(Object.keys(this.words).length === 0){
			var cnt = this.content;
			var wds = getWords(cnt.documentNo(),this.pgNo);
			for(var i=0;i<wds.length;i++){
				wdd = wds[i];
				wd = new Word(wdd);
				wd.page = this;
				wd.content = this.content;
				wd.scale(this.originalWidth,this.originalHeight);
				this.words[wd.wNo] = wd;
				cnt.segments(wdd.s).addWord(wd);
			}
		}
		
		for(var wNo in this.words){
			this.words[wNo].drawText(pgTxt);
		}
	}
	
	Page.prototype.outlinePage = function(){
		$(this._docOutline).css("border-color",colorEnum.outlineColor);
	}

//} -Page
//{ Content 
//{ 	General	
	function Content(documentNo) {
		this.__documentNo = documentNo;
		this._pages = {};
		this._segments = {};
		this.words = {};
		this.selectedPages = {};
		
		// GUI bits
		this._imageScale = 100;																// docPage's percentage of the docPanel - converted to pixels by imageScale()
		this._resizingDocPanel = false;
		this._docPanelResizeWithCtrl = false;
		this.selecting = selectionEnum.NotSelecting;
		this.docPanelIsMinimized = false;
		
		this._minPageWidth = $(window).width() / 20
		this.scrollBarWidth = Math.floor($docPanel.prop("offsetWidth") - $docPanel.prop("clientWidth"));
		$docDiv.css("min-width",this._minPageWidth + this.scrollBarWidth *2);				// set the min width in pixels depending on the screen resolution
		this.initPages();
	}
		
	Content.prototype.pageCount = function(){return Object.keys(this._pages).length;}
	Content.prototype.documentNo = function(){return this._documentNo;}
	
	Content.prototype.pages = function(pgNo){
		if(pgNo === undefined) {
			return this._pages;
		} else
		if(this._pages[pgNo] === undefined){
			pg = new Page();
			pg.content = this;
			pg.pgNo = pgNo;
			this._pages[pgNo] = pg;
		}
		return this._pages[pgNo];
	}

	Content.prototype.segments = function(sgNo){
		if(sgNo === undefined){
			return this._segments;
		} else
		if(this._segments[sgNo] === undefined){
			this._segments[sgNo] = new Segment();
			this._segments[sgNo].content = this;
		}
		return this._segments[sgNo];
	}
	
	Content.prototype.initPages = function(){
		var pages = getPages(this._documentNo);
		for(i=0;i<pages.length;i++){
			var pgNo = pages[i].pg;
			this.pages(pgNo).init(pgNo, pages[i].url);
			if(i>0){
				var pgPrev = pages[i-1].pg;
				this.pages(pgPrev).nextPage = this.pages(pgNo);
			}
		}
		this.pages(1).initRender();
	}

//} 	-General
//{ 	Selection
	
	Content.prototype.OnMouseDown = function (event){
		this.hideHovertext();
		$(".wd").css("backgroundColor",'transparent');

		if(this.selecting === selectionEnum.SelectionFinished | event.altKey){
			this.selecting = selectionEnum.NotSelecting;
			this.selectedSegment = undefined;
			
			if(event.altKey){
				if(this._imageScale === 100){
					this.reSizeMinimum();
				} else {
					this.reSizeMaximum();
				}
			}
		} else if(this.selecting === selectionEnum.NotSelecting){
			this.selecting = selectionEnum.SelectionStarted;
		}
	}
	
	Content.prototype.OnMouseUp = function (event){
		if(this.selecting === selectionEnum.SelectionStarted){
			this.selecting = selectionEnum.SelectionFinished;
		}
		else {
			if(this._resizingDocPanel){
				this._resizingDocPanel = false;
				this.setScale();
			}
			else {
				this.selecting = selectionEnum.NotSelecting;
				this._mouseWheelHoverPage = undefined;
			}
		}		
	}	
	
	Content.prototype.notSelectingPages = function (event){
		this.selectedPages = {};
		this._lastSelectedPage = undefined;
		this.clearPageOutlines();
	}	
	
	Content.prototype.clearPageOutlines = function (event){
		$(".docOutline").css("border-color",colorEnum.backgroundColor);
	}	
	
	Content.prototype.selectPageRange = function (endPgNo){
		var startPgNo = this._lastSelectedPage;
		var incr = startPgNo > endPgNo ? -1 : 1;

		for(tmpNo = startPgNo; tmpNo !== endPgNo + incr; tmpNo += incr){
			if(this.selectedPages[tmpNo] === undefined){
				var pg = this.pages(tmpNo);
				this.selectedPages[tmpNo] = pg;								
				pg.outlinePage();
			}
		}
	}	
		
	Content.prototype.drawPageSelection = function (){
		for(var pg in this.selectedPages){
			this.selectedPages[pg].outlinePage();
		}
	}	
		
	Content.prototype.hideHovertext = function (){
		$(".hoverText").hide();
	}	

//} 	-Selection
//{ 	GUI Navigation
	
	Content.prototype.imageScale = function(){
		return $docPanel.prop("clientWidth") * this._imageScale * 0.01;
	}

	Content.prototype.setScale = function(){
		var docWidth = $(".docPage").width() + this.scrollBarWidth;
		var panelWidth = $docPanel.prop("clientWidth");
		this._imageScale = Math.round((docWidth / panelWidth) * 100);
	}

	Content.prototype.setModelPanelWidth = function(){
		$modelPanel.css("width",Math.floor($(window).width() - $docDiv.width()));
	}

	Content.prototype.reSize = function (){
		$(".docPage").css("width",this.imageScale());
		var width = $(".docPage").width();
		
		if(width < this._minPageWidth){
			this.reSizeMinimum();
		} else if(width > this._minPageWidth * 4){
			this.noLongerMinimized();
		}
		if(!this.docPanelIsMinimized){
			this.scrollToCurrentPage();
		}
	}
	
	Content.prototype.noLongerMinimized = function (){
		if(this.docPanelIsMinimized){
			this.docPanelIsMinimized = false;
			this.clearPageOutlines();
		}
	}
	
	Content.prototype.reSizeMinimum = function (){
		this.docPanelIsMinimized = true;
		$(".docPage").css("width",this._minPageWidth + this.scrollBarWidth);
		this.setScale();
		this.drawPageSelection();
		this.hideHovertext();		
	}
	
	Content.prototype.reSizeMaximum = function (){
		this._imageScale = 100;
		this.reSize();
		this.noLongerMinimized();
		this.hideHovertext();		
	}
	
	Content.prototype.scrollToCurrentPage = function (){
		var pg = this._mouseWheelHoverPage === undefined ? this.hoverPage : this._mouseWheelHoverPage;
		if(pg !== undefined){
			$docPanel.scrollTop(pg._div.offsetTop);
		}
	}
	
	Content.prototype.docPanelResize = function (event){
		this._resizingDocPanel = true;
		if(this._docPanelResizeWithCtrl != event.ctrlKey) {
			this._docPanelResizeWithCtrl = event.ctrlKey;
			this.setScale();
		}
		if(event.ctrlKey){
			this.reSize();
		}
	}
	
	Content.prototype.mouseWheelResize = function (event){
		if(event.ctrlKey){
			event.preventDefault();
			
			if(this._mouseWheelHoverPage === undefined){
				this._mouseWheelHoverPage = this.hoverPage;
			}
			
			if(event.originalEvent.deltaY < 0){
				this._imageScale += 10;
			} else {
				this._imageScale -= 10;
			}
			this.reSize();
		}
	}
	
//} 	-GUI Navigation
//} -Content
