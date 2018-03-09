function getPages(fileNo){
	return [ 
			{pg :  1, url : 'D:\\Temp\\NewDev\\code\\Canvas\\png\\1_1.png'},
			{pg :  2, url : 'D:\\Temp\\NewDev\\code\\Canvas\\png\\1_2.png'},
			{pg :  3, url : 'D:\\Temp\\NewDev\\code\\Canvas\\png\\1_3.png'},
			{pg :  4, url : 'D:\\Temp\\NewDev\\code\\Canvas\\png\\1_4.png'},
			{pg :  5, url : 'D:\\Temp\\NewDev\\code\\Canvas\\png\\1_5.png'},
			{pg :  6, url : 'D:\\Temp\\NewDev\\code\\Canvas\\png\\1_6.png'}
			
			];
}

function getWords(fileNo,pageNo){
	
	if(pageNo!==11){
		return [{l:662,t:331,r:831,b:364,s:0,n:5350,w:"CREDIT"},
				{l:844,t:331,r:1049,b:364,s:0,n:5351,w:"SUPPORT"},
				{l:1062,t:331,r:1503,b:364,s:0,n:5352,w:"ANNEX--ELECTIONS"},
				{l:1516,t:331,r:1609,b:364,s:0,n:5353,w:"AND"},
				{l:1623,t:331,r:1876,b:364,s:0,n:5354,w:"VARIABLES"},
				{l:335,t:434,r:535,b:473,s:0,n:5355,w:"Paragraph"},
				{l:549,t:434,r:600,b:473,s:0,n:5356,w:"13."},
				{l:625,t:434,r:794,b:473,s:0,n:5357,w:"Elections"},
				{l:807,t:434,r:876,b:473,s:0,n:5358,w:"and"},
				{l:890,t:434,r:1079,b:473,s:0,n:5359,w:"Variables."},
				{l:335,t:534,r:381,b:574,s:0,n:5360,w:"(a)"},
				{l:479,t:534,r:631,b:574,s:0,n:5361,w:"Security"},
				{l:650,t:534,r:795,b:574,s:0,n:5362,w:"Interest"},
				{l:811,t:534,r:867,b:574,s:0,n:5363,w:"for"},
				{l:885,t:534,r:1155,b:574,s:0,n:5364,w:"&quot;Obligations.&quot;"},
				{l:1187,t:534,r:1254,b:574,s:0,n:5365,w:"The"},
				{l:1271,t:534,r:1352,b:574,s:0,n:5366,w:"term"},
				{l:1368,t:534,r:1629,b:574,s:0,n:5367,w:"&quot;Obligations&quot;"},
				{l:1647,t:534,r:1679,b:574,s:0,n:5368,w:"as"},
				{l:1698,t:534,r:1777,b:574,s:0,n:5369,w:"used"},
				{l:1794,t:534,r:1826,b:574,s:0,n:5370,w:"in"},
				{l:1843,t:534,r:1904,b:574,s:0,n:5371,w:"this"},
				{l:1922,t:534,r:2039,b:574,s:0,n:5372,w:"Annex"},
				{l:2057,t:534,r:2135,b:574,s:0,n:5373,w:"does"},
				{l:2154,t:534,r:2209,b:574,s:0,n:5374,w:"not"},
				{l:336,t:585,r:462,b:625,s:0,n:5375,w:"include"},
				{l:475,t:585,r:535,b:625,s:0,n:5376,w:"any"},
				{l:549,t:585,r:722,b:625,s:0,n:5377,w:"additional"},
				{l:737,t:585,r:930,b:625,s:0,n:5378,w:"obligations"},
				{l:945,t:585,r:1020,b:625,s:0,n:5379,w:"with"},
				{l:1032,t:585,r:1155,b:625,s:0,n:5380,w:"respect"},
				{l:1169,t:585,r:1201,b:625,s:0,n:5381,w:"to"},
				{l:1214,t:585,r:1304,b:625,s:0,n:5382,w:"Party"},
				{l:1317,t:585,r:1346,b:625,s:0,n:5383,w:"A"},
				{l:1360,t:585,r:1423,b:625,s:0,n:5384,w:"and"},
				{l:1436,t:585,r:1526,b:625,s:0,n:5385,w:"Party"},
				{l:1540,t:585,r:1576,b:625,s:0,n:5386,w:"B."},
				{l:336,t:685,r:383,b:725,s:0,n:5387,w:"(b)"},
				{l:480,t:685,r:599,b:725,s:0,n:5388,w:"Credit"},
				{l:612,t:685,r:763,b:725,s:0,n:5389,w:"Support"},
				{l:777,t:685,r:1004,b:725,s:0,n:5390,w:"Obligations."},
				{l:480,t:786,r:517,b:827,s:0,n:5391,w:"(1)"},
				{l:622,t:786,r:779,b:827,s:0,n:5392,w:"Delivery"},
				{l:793,t:786,r:957,b:827,s:0,n:5393,w:"Amount,"},
				{l:971,t:786,r:1102,b:827,s:0,n:5394,w:"Return"},
				{l:1114,t:786,r:1267,b:827,s:0,n:5395,w:"Amount"},
				{l:1280,t:786,r:1349,b:827,s:0,n:5396,w:"and"},
				{l:1363,t:786,r:1483,b:827,s:0,n:5397,w:"Credit"},
				{l:1497,t:786,r:1648,b:827,s:0,n:5398,w:"Support"},
				{l:1662,t:786,r:1824,b:827,s:0,n:5399,w:"Amount."},
				{l:623,t:887,r:680,b:929,s:0,n:5400,w:"(A)"},
				{l:767,t:887,r:947,b:929,s:0,n:5401,w:"&quot;Delivery"},
				{l:961,t:887,r:1133,b:929,s:0,n:5402,w:"Amount&quot;"},
				{l:1146,t:887,r:1203,b:929,s:0,n:5403,w:"has"},
				{l:1216,t:887,r:1268,b:929,s:0,n:5404,w:"the"},
				{l:1281,t:887,r:1431,b:929,s:0,n:5405,w:"meaning"},
				{l:1445,t:887,r:1602,b:929,s:0,n:5406,w:"specified"},
				{l:1615,t:887,r:1645,b:929,s:0,n:5407,w:"in"},
				{l:1660,t:887,r:1835,b:929,s:0,n:5408,w:"Paragraph"},
				{l:1850,t:887,r:1927,b:929,s:0,n:5409,w:"3(a)."},
				{l:624,t:988,r:678,b:1029,s:0,n:5410,w:"(B)"},
				{l:767,t:988,r:924,b:1029,s:0,n:5411,w:"&quot;Return"},
				{l:936,t:988,r:1109,b:1029,s:0,n:5412,w:"Amount&quot;"},
				{l:1122,t:988,r:1178,b:1029,s:0,n:5413,w:"has"},
				{l:1192,t:988,r:1244,b:1029,s:0,n:5414,w:"the"},
				{l:1257,t:988,r:1407,b:1029,s:0,n:5415,w:"meaning"},
				{l:1420,t:988,r:1577,b:1029,s:0,n:5416,w:"specified"},
				{l:1590,t:988,r:1622,b:1029,s:0,n:5417,w:"in"},
				{l:1636,t:988,r:1811,b:1029,s:0,n:5418,w:"Paragraph"},
				{l:1826,t:988,r:1905,b:1029,s:0,n:5419,w:"3(b)."},
				{l:624,t:1087,r:678,b:1128,s:0,n:5420,w:"(C)"},
				{l:767,t:1087,r:911,b:1128,s:0,n:5421,w:"&quot;Credit"},
				{l:931,t:1087,r:1084,b:1128,s:0,n:5422,w:"Support"},
				{l:1105,t:1087,r:1277,b:1128,s:0,n:5423,w:"Amount&quot;"},
				{l:1298,t:1087,r:1354,b:1128,s:0,n:5424,w:"has"},
				{l:1376,t:1087,r:1428,b:1128,s:0,n:5425,w:"the"},
				{l:1450,t:1087,r:1600,b:1128,s:0,n:5426,w:"meaning"},
				{l:1621,t:1087,r:1778,b:1128,s:0,n:5427,w:"specified"},
				{l:1798,t:1087,r:1830,b:1128,s:0,n:5428,w:"in"},
				{l:1851,t:1087,r:2027,b:1128,s:0,n:5429,w:"Paragraph"},
				{l:2050,t:1087,r:2068,b:1128,s:0,n:5430,w:"3"},
				{l:2091,t:1087,r:2128,b:1128,s:0,n:5431,w:"of"},
				{l:2146,t:1087,r:2207,b:1128,s:0,n:5432,w:"this"},
				{l:767,t:1138,r:893,b:1167,s:0,n:5433,w:"Annex."},
				{l:481,t:1236,r:530,b:1278,s:0,n:5434,w:"(11)"},
				{l:623,t:1236,r:766,b:1278,s:0,n:5435,w:"Eligible"},
				{l:792,t:1236,r:989,b:1278,s:0,n:5436,w:"Collateral."},
				{l:1036,t:1236,r:1102,b:1278,s:0,n:5437,w:"The"},
				{l:1126,t:1236,r:1296,b:1278,s:0,n:5438,w:"following"},
				{l:1320,t:1236,r:1413,b:1278,s:0,n:5439,w:"items"},
				{l:1439,t:1236,r:1504,b:1278,s:0,n:5440,w:"will"},
				{l:1530,t:1236,r:1651,b:1278,s:0,n:5441,w:"qualify"},
				{l:1676,t:1236,r:1710,b:1278,s:0,n:5442,w:"as"},
				{l:1736,t:1236,r:1900,b:1278,s:0,n:5443,w:"&quot;Eligible"},
				{l:1926,t:1236,r:2134,b:1278,s:0,n:5444,w:"Collateral&quot;"},
				{l:2160,t:1236,r:2210,b:1278,s:0,n:5445,w:"for"},
				{l:337,t:1288,r:426,b:1329,s:0,n:5446,w:"Party"},
				{l:441,t:1288,r:469,b:1329,s:0,n:5447,w:"A"},
				{l:484,t:1288,r:544,b:1329,s:0,n:5448,w:"and"},
				{l:558,t:1288,r:647,b:1329,s:0,n:5449,w:"Party"},
				{l:660,t:1288,r:685,b:1329,s:0,n:5450,w:"B"},
				{l:702,t:1288,r:868,b:1329,s:0,n:5451,w:"specified:"},
				{l:1679,t:1396,r:1781,b:1436,s:0,n:5453,w:"Party"},
				{l:1841,t:1396,r:1944,b:1436,s:0,n:5454,w:"Party"},
				{l:2035,t:1396,r:2221,b:1436,s:0,n:5455,w:"Valuation"},
				{l:1716,t:1448,r:1745,b:1485,s:0,n:5456,w:"A"},
				{l:1878,t:1448,r:1905,b:1485,s:0,n:5457,w:"B"},
				{l:2024,t:1448,r:2232,b:1485,s:0,n:5458,w:"Percentage"},
				{l:541,t:1622,r:596,b:1662,s:0,n:5460,w:"(B)"},
				{l:663,t:1622,r:855,b:1662,s:1,n:5461,w:"Negotiable"},
				{l:894,t:1622,r:968,b:1662,s:1,n:5462,w:"debt"},
				{l:1006,t:1622,r:1197,b:1662,s:1,n:5463,w:"obligations"},
				{l:1236,t:1622,r:1345,b:1662,s:1,n:5464,w:"issued"},
				{l:1382,t:1622,r:1424,b:1662,s:1,n:5465,w:"by"},
				{l:1462,t:1622,r:1514,b:1662,s:1,n:5466,w:"the"},
				{l:1552,t:1622,r:1627,b:1662,s:1,n:5467,w:"U.S."},
				{l:1716,t:1622,r:1747,b:1662,s:0,n:5468,w:"X"},
				{l:1878,t:1622,r:1909,b:1662,s:0,n:5469,w:"X"},
				{l:2090,t:1622,r:2167,b:1662,s:0,n:5470,w:"99%"},
				{l:663,t:1673,r:817,b:1714,s:1,n:5471,w:"Treasury"},
				{l:836,t:1673,r:1044,b:1714,s:1,n:5472,w:"Department"},
				{l:1062,t:1673,r:1179,b:1714,s:1,n:5473,w:"having"},
				{l:1197,t:1673,r:1215,b:1714,s:1,n:5474,w:"a"},
				{l:1232,t:1673,r:1410,b:1714,s:1,n:5475,w:"remaining"},
				{l:1429,t:1673,r:1575,b:1714,s:1,n:5476,w:"maturity"},
				{l:1595,t:1673,r:1631,b:1714,s:1,n:5477,w:"of"},
				{l:664,t:1724,r:718,b:1763,s:1,n:5478,w:"not"},
				{l:732,t:1724,r:819,b:1763,s:1,n:5479,w:"more"},
				{l:833,t:1724,r:907,b:1763,s:1,n:5480,w:"than"},
				{l:921,t:1724,r:982,b:1763,s:1,n:5481,w:"one"},
				{l:995,t:1724,r:1078,b:1763,s:1,n:5482,w:"year."},
				{l:540,t:1825,r:597,b:1865,s:0,n:5484,w:"(C)"},
				{l:663,t:1825,r:855,b:1865,s:2,n:5485,w:"Negotiable"},
				{l:894,t:1825,r:968,b:1865,s:2,n:5486,w:"debt"},
				{l:1006,t:1825,r:1198,b:1865,s:2,n:5487,w:"obligations"},
				{l:1237,t:1825,r:1346,b:1865,s:2,n:5488,w:"issued"},
				{l:1382,t:1825,r:1424,b:1865,s:2,n:5489,w:"by"},
				{l:1462,t:1825,r:1515,b:1865,s:2,n:5490,w:"the"},
				{l:1552,t:1825,r:1627,b:1865,s:2,n:5491,w:"U.S."},
				{l:1717,t:1825,r:1748,b:1865,s:0,n:5492,w:"X"},
				{l:1879,t:1825,r:1909,b:1865,s:0,n:5493,w:"X"},
				{l:2090,t:1825,r:2168,b:1865,s:0,n:5494,w:"96%"},
				{l:663,t:1876,r:818,b:1918,s:2,n:5495,w:"Treasury"},
				{l:859,t:1876,r:1066,b:1918,s:2,n:5496,w:"Department"},
				{l:1108,t:1876,r:1177,b:1918,s:2,n:5497,w:"(not"},
				{l:1217,t:1876,r:1382,b:1918,s:2,n:5498,w:"including"},
				{l:1423,t:1876,r:1441,b:1918,s:2,n:5499,w:"a"},
				{l:1482,t:1876,r:1630,b:1918,s:2,n:5500,w:"Stripped"},
				{l:664,t:1928,r:818,b:1969,s:2,n:5501,w:"Treasury"},
				{l:842,t:1928,r:1023,b:1969,s:2,n:5502,w:"Security*)"},
				{l:1046,t:1928,r:1163,b:1969,s:2,n:5503,w:"having"},
				{l:1185,t:1928,r:1203,b:1969,s:2,n:5504,w:"a"},
				{l:1225,t:1928,r:1402,b:1969,s:2,n:5505,w:"remaining"},
				{l:1425,t:1928,r:1572,b:1969,s:2,n:5506,w:"maturity"},
				{l:1595,t:1928,r:1632,b:1969,s:2,n:5507,w:"of"},
				{l:664,t:1979,r:752,b:2019,s:2,n:5508,w:"more"},
				{l:765,t:1979,r:839,b:2019,s:2,n:5509,w:"than"},
				{l:853,t:1979,r:915,b:2019,s:2,n:5510,w:"one"},
				{l:929,t:1979,r:1004,b:2019,s:2,n:5511,w:"year"},
				{l:1015,t:1979,r:1070,b:2019,s:2,n:5512,w:"but"},
				{l:1082,t:1979,r:1136,b:2019,s:2,n:5513,w:"not"},
				{l:1149,t:1979,r:1237,b:2019,s:2,n:5514,w:"more"},
				{l:1250,t:1979,r:1324,b:2019,s:2,n:5515,w:"than"},
				{l:1339,t:1979,r:1356,b:2019,s:2,n:5516,w:"5"},
				{l:1371,t:1979,r:1472,b:2019,s:2,n:5517,w:"years."},
				{l:541,t:2078,r:598,b:2118,s:0,n:5519,w:"(D)"},
				{l:664,t:2078,r:856,b:2118,s:3,n:5520,w:"Negotiable"},
				{l:894,t:2078,r:968,b:2118,s:3,n:5521,w:"debt"},
				{l:1006,t:2078,r:1198,b:2118,s:3,n:5522,w:"obligations"},
				{l:1237,t:2078,r:1346,b:2118,s:3,n:5523,w:"issued"},
				{l:1383,t:2078,r:1425,b:2118,s:3,n:5524,w:"by"},
				{l:1463,t:2078,r:1515,b:2118,s:3,n:5525,w:"the"},
				{l:1553,t:2078,r:1628,b:2118,s:3,n:5526,w:"U.S."},
				{l:1717,t:2078,r:1748,b:2118,s:0,n:5527,w:"X"},
				{l:1880,t:2078,r:1910,b:2118,s:0,n:5528,w:"X"},
				{l:2091,t:2078,r:2169,b:2118,s:0,n:5529,w:"95%"},
				{l:664,t:2129,r:818,b:2166,s:3,n:5530,w:"Treasury"},
				{l:859,t:2129,r:1067,b:2166,s:3,n:5531,w:"Department"},
				{l:1109,t:2129,r:1177,b:2166,s:3,n:5532,w:"(not"},
				{l:1218,t:2129,r:1382,b:2166,s:3,n:5533,w:"including"},
				{l:1424,t:2129,r:1442,b:2166,s:3,n:5534,w:"a"},
				{l:1483,t:2129,r:1631,b:2166,s:3,n:5535,w:"Stripped"},
				{l:664,t:2176,r:818,b:2216,s:3,n:5536,w:"Treasury"},
				{l:842,t:2176,r:1024,b:2216,s:3,n:5537,w:"Security*)"},
				{l:1047,t:2176,r:1164,b:2216,s:3,n:5538,w:"having"},
				{l:1186,t:2176,r:1203,b:2216,s:3,n:5539,w:"a"},
				{l:1224,t:2176,r:1403,b:2216,s:3,n:5540,w:"remaining"},
				{l:1425,t:2176,r:1573,b:2216,s:3,n:5541,w:"maturity"},
				{l:1596,t:2176,r:1633,b:2216,s:3,n:5542,w:"of"},
				{l:664,t:2225,r:752,b:2264,s:3,n:5543,w:"more"},
				{l:765,t:2225,r:840,b:2264,s:3,n:5544,w:"than"},
				{l:854,t:2225,r:872,b:2264,s:3,n:5545,w:"5"},
				{l:887,t:2225,r:978,b:2264,s:3,n:5546,w:"years"},
				{l:991,t:2225,r:1046,b:2264,s:3,n:5547,w:"but"},
				{l:1058,t:2225,r:1112,b:2264,s:3,n:5548,w:"not"},
				{l:1125,t:2225,r:1213,b:2264,s:3,n:5549,w:"more"},
				{l:1226,t:2225,r:1300,b:2264,s:3,n:5550,w:"than"},
				{l:1315,t:2225,r:1356,b:2264,s:3,n:5551,w:"30"},
				{l:1369,t:2225,r:1470,b:2264,s:3,n:5552,w:"years."},
				{l:542,t:2324,r:597,b:2365,s:0,n:5554,w:"(E)"},
				{l:665,t:2324,r:779,b:2365,s:4,n:5555,w:"Shares"},
				{l:796,t:2324,r:834,b:2365,s:4,n:5556,w:"of"},
				{l:846,t:2324,r:899,b:2365,s:4,n:5557,w:"the"},
				{l:916,t:2324,r:1024,b:2365,s:4,n:5558,w:"SPDR"},
				{l:1039,t:2324,r:1120,b:2365,s:4,n:5559,w:"S&P"},
				{l:1136,t:2324,r:1200,b:2365,s:4,n:5560,w:"500"},
				{l:1214,t:2324,r:1387,b:2365,s:4,n:5561,w:"Exchange"},
				{l:1402,t:2324,r:1527,b:2365,s:4,n:5562,w:"Traded"},
				{l:1541,t:2324,r:1631,b:2365,s:4,n:5563,w:"Fund"},
				{l:1718,t:2324,r:1749,b:2365,s:0,n:5564,w:"X"},
				{l:2092,t:2324,r:2169,b:2365,s:0,n:5565,w:"80%"},
				{l:665,t:2375,r:807,b:2413,s:4,n:5566,w:"&quot;(ticker:"},
				{l:823,t:2375,r:937,b:2413,s:4,n:5567,w:"SPY)&quot;"},
				{l:544,t:2475,r:596,b:2516,s:0,n:5569,w:"(F)"},
				{l:664,t:2475,r:738,b:2516,s:5,n:5570,w:"Any"},
				{l:760,t:2475,r:851,b:2516,s:5,n:5571,w:"other"},
				{l:872,t:2475,r:1034,b:2516,s:5,n:5572,w:"collateral"},
				{l:1056,t:2475,r:1093,b:2516,s:5,n:5573,w:"of"},
				{l:1113,t:2475,r:1130,b:2516,s:5,n:5574,w:"a"},
				{l:1151,t:2475,r:1225,b:2516,s:5,n:5575,w:"type"},
				{l:1247,t:2475,r:1309,b:2516,s:5,n:5576,w:"and"},
				{l:1331,t:2475,r:1407,b:2516,s:5,n:5577,w:"with"},
				{l:1429,t:2475,r:1447,b:2516,s:5,n:5578,w:"a"},
				{l:1469,t:2475,r:1630,b:2516,s:5,n:5579,w:"valuation"},
				{l:1718,t:2475,r:1749,b:2516,s:0,n:5580,w:"X"},
				{l:1880,t:2475,r:1911,b:2516,s:0,n:5581,w:"X"},
				{l:2087,t:2475,r:2175,b:2516,s:0,n:5582,w:"TBD"},
				{l:665,t:2526,r:781,b:2565,s:5,n:5583,w:"agreed"},
				{l:793,t:2526,r:826,b:2565,s:5,n:5584,w:"to"},
				{l:838,t:2526,r:881,b:2565,s:5,n:5585,w:"by"},
				{l:894,t:2526,r:947,b:2565,s:5,n:5586,w:"the"},
				{l:960,t:2526,r:1075,b:2565,s:5,n:5587,w:"parties"},
				{l:1089,t:2526,r:1150,b:2565,s:5,n:5588,w:"and"},
				{l:1162,t:2526,r:1342,b:2565,s:5,n:5589,w:"confirmed"},
				{l:1355,t:2526,r:1387,b:2565,s:5,n:5590,w:"in"},
				{l:1401,t:2526,r:1536,b:2565,s:5,n:5591,w:"writing."},
				{l:339,t:2697,r:543,b:2738,s:0,n:5592,w:"*&quot;Stripped"},
				{l:571,t:2697,r:741,b:2738,s:0,n:5593,w:"Treasury"},
				{l:769,t:2697,r:947,b:2738,s:0,n:5594,w:"Security'&quot;"},
				{l:975,t:2697,r:1084,b:2738,s:0,n:5595,w:"means"},
				{l:1112,t:2697,r:1130,b:2738,s:0,n:5596,w:"a"},
				{l:1156,t:2697,r:1337,b:2738,s:0,n:5597,w:"negotiable"},
				{l:1365,t:2697,r:1439,b:2738,s:0,n:5598,w:"debt"},
				{l:1467,t:2697,r:1642,b:2738,s:0,n:5599,w:"obligation"},
				{l:1670,t:2697,r:1778,b:2738,s:0,n:5600,w:"issued"},
				{l:1803,t:2697,r:1845,b:2738,s:0,n:5601,w:"by"},
				{l:1873,t:2697,r:1925,b:2738,s:0,n:5602,w:"the"},
				{l:1952,t:2697,r:2027,b:2738,s:0,n:5603,w:"U.S."},
				{l:2056,t:2697,r:2212,b:2738,s:0,n:5604,w:"Treasury"},
				{l:337,t:2746,r:543,b:2786,s:0,n:5605,w:"Department"},
				{l:559,t:2746,r:676,b:2786,s:0,n:5606,w:"having"},
				{l:692,t:2746,r:730,b:2786,s:0,n:5607,w:"an"},
				{l:748,t:2746,r:883,b:2786,s:0,n:5608,w:"original"},
				{l:901,t:2746,r:1048,b:2786,s:0,n:5609,w:"maturity"},
				{l:1065,t:2746,r:1102,b:2786,s:0,n:5610,w:"of"},
				{l:1115,t:2746,r:1203,b:2786,s:0,n:5611,w:"more"},
				{l:1219,t:2746,r:1293,b:2786,s:0,n:5612,w:"than"},
				{l:1310,t:2746,r:1371,b:2786,s:0,n:5613,w:"one"},
				{l:1388,t:2746,r:1464,b:2786,s:0,n:5614,w:"year"},
				{l:1478,t:2746,r:1544,b:2786,s:0,n:5615,w:"that"},
				{l:1559,t:2746,r:1598,b:2786,s:0,n:5616,w:"(i)"},
				{l:1615,t:2746,r:1642,b:2786,s:0,n:5617,w:"is"},
				{l:1659,t:2746,r:1676,b:2786,s:0,n:5618,w:"a"},
				{l:1691,t:2746,r:1900,b:2786,s:0,n:5619,w:"non-interest"},
				{l:1914,t:2746,r:2047,b:2786,s:0,n:5620,w:"bearing"},
				{l:2063,t:2746,r:2211,b:2786,s:0,n:5621,w:"security,"},
				{l:339,t:2795,r:389,b:2837,s:0,n:5622,w:"(ii)"},
				{l:407,t:2795,r:472,b:2837,s:0,n:5623,w:"was"},
				{l:490,t:2795,r:657,b:2837,s:0,n:5624,w:"originally"},
				{l:675,t:2795,r:713,b:2837,s:0,n:5625,w:"an"},
				{l:731,t:2795,r:1007,b:2837,s:0,n:5626,w:"interest-bearing"},
				{l:1024,t:2795,r:1160,b:2837,s:0,n:5627,w:"security"},
				{l:1177,t:2795,r:1262,b:2837,s:0,n:5628,w:"from"},
				{l:1278,t:2795,r:1383,b:2837,s:0,n:5629,w:"which"},
				{l:1400,t:2795,r:1545,b:2837,s:0,n:5630,w:"coupons"},
				{l:1562,t:2795,r:1777,b:2837,s:0,n:5631,w:"representing"},
				{l:1793,t:2795,r:1845,b:2837,s:0,n:5632,w:"the"},
				{l:1862,t:2795,r:1944,b:2837,s:0,n:5633,w:"right"},
				{l:1960,t:2795,r:1994,b:2837,s:0,n:5634,w:"to"},
				{l:2009,t:2795,r:2161,b:2837,s:0,n:5635,w:"payment"},
				{l:2178,t:2795,r:2216,b:2837,s:0,n:5636,w:"of"},
				{l:1260,t:3012,r:1291,b:3040,s:0,n:5637,w:"11"}
		];
	}
	else return [];
	
}