export type TX6EventType = 'input1.slider' | 'input2.slider' | 'input3.slider' | 'input4.slider' | 'input5.slider' | 'input6.slider' | 'input1.eq1' | 'input2.eq1' | 'input3.eq1' | 'input4.eq1' | 'input5.eq1' | 'input6.eq1' | 'input1.eq2' | 'input2.eq2' | 'input3.eq2' | 'input4.eq2' | 'input5.eq2' | 'input6.eq2' | 'input1.eq3' | 'input2.eq3' | 'input3.eq3' | 'input4.eq3' | 'input5.eq3' | 'input6.eq3' | 'input1.button' | 'input2.button' | 'input3.button' | 'input4.button' | 'input5.button' | 'input6.button' | 'select.encoder' | 'select.button' | 'fx1' | 'fx2' | 'shift' | 'aux' | 'cue'

export type TX6EventMap = {
	[key in number]: TX6Event
}

export interface TX6Event {
	event: TX6EventType
	pressed?: boolean
	progress?: number
	direction?: 'left' | 'right'    
}

export type TX6EventParameters = Omit<TX6Event, 'event'>

const events: TX6EventMap = {
	256: {
		event: 'input1.slider',
		progress: 1
	},
	257: {
		event: 'input1.slider',
		progress: 0.9921259842519685
	},
	258: {
		event: 'input1.slider',
		progress: 0.984251968503937
	},
	259: {
		event: 'input1.slider',
		progress: 0.9763779527559056
	},
	260: {
		event: 'input1.slider',
		progress: 0.968503937007874
	},
	261: {
		event: 'input1.slider',
		progress: 0.9606299212598425
	},
	262: {
		event: 'input1.slider',
		progress: 0.952755905511811
	},
	263: {
		event: 'input1.slider',
		progress: 0.9448818897637795
	},
	264: {
		event: 'input1.slider',
		progress: 0.937007874015748
	},
	265: {
		event: 'input1.slider',
		progress: 0.9291338582677166
	},
	266: {
		event: 'input1.slider',
		progress: 0.9212598425196851
	},
	267: {
		event: 'input1.slider',
		progress: 0.9133858267716536
	},
	268: {
		event: 'input1.slider',
		progress: 0.905511811023622
	},
	269: {
		event: 'input1.slider',
		progress: 0.8976377952755905
	},
	270: {
		event: 'input1.slider',
		progress: 0.889763779527559
	},
	271: {
		event: 'input1.slider',
		progress: 0.8818897637795275
	},
	272: {
		event: 'input1.slider',
		progress: 0.8740157480314961
	},
	273: {
		event: 'input1.slider',
		progress: 0.8661417322834646
	},
	274: {
		event: 'input1.slider',
		progress: 0.8582677165354331
	},
	275: {
		event: 'input1.slider',
		progress: 0.8503937007874016
	},
	276: {
		event: 'input1.slider',
		progress: 0.84251968503937
	},
	277: {
		event: 'input1.slider',
		progress: 0.8346456692913385
	},
	278: {
		event: 'input1.slider',
		progress: 0.8267716535433071
	},
	279: {
		event: 'input1.slider',
		progress: 0.8188976377952756
	},
	280: {
		event: 'input1.slider',
		progress: 0.8110236220472441
	},
	281: {
		event: 'input1.slider',
		progress: 0.8031496062992126
	},
	282: {
		event: 'input1.slider',
		progress: 0.7952755905511811
	},
	283: {
		event: 'input1.slider',
		progress: 0.7874015748031497
	},
	284: {
		event: 'input1.slider',
		progress: 0.7795275590551181
	},
	285: {
		event: 'input1.slider',
		progress: 0.7716535433070866
	},
	286: {
		event: 'input1.slider',
		progress: 0.7637795275590551
	},
	287: {
		event: 'input1.slider',
		progress: 0.7559055118110236
	},
	288: {
		event: 'input1.slider',
		progress: 0.7480314960629921
	},
	289: {
		event: 'input1.slider',
		progress: 0.7401574803149606
	},
	290: {
		event: 'input1.slider',
		progress: 0.7322834645669292
	},
	291: {
		event: 'input1.slider',
		progress: 0.7244094488188977
	},
	292: {
		event: 'input1.slider',
		progress: 0.7165354330708661
	},
	293: {
		event: 'input1.slider',
		progress: 0.7086614173228346
	},
	294: {
		event: 'input1.slider',
		progress: 0.7007874015748031
	},
	295: {
		event: 'input1.slider',
		progress: 0.6929133858267716
	},
	296: {
		event: 'input1.slider',
		progress: 0.6850393700787402
	},
	297: {
		event: 'input1.slider',
		progress: 0.6771653543307087
	},
	298: {
		event: 'input1.slider',
		progress: 0.6692913385826772
	},
	299: {
		event: 'input1.slider',
		progress: 0.6614173228346457
	},
	300: {
		event: 'input1.slider',
		progress: 0.6535433070866141
	},
	301: {
		event: 'input1.slider',
		progress: 0.6456692913385826
	},
	302: {
		event: 'input1.slider',
		progress: 0.6377952755905512
	},
	303: {
		event: 'input1.slider',
		progress: 0.6299212598425197
	},
	304: {
		event: 'input1.slider',
		progress: 0.6220472440944882
	},
	305: {
		event: 'input1.slider',
		progress: 0.6141732283464567
	},
	306: {
		event: 'input1.slider',
		progress: 0.6062992125984252
	},
	307: {
		event: 'input1.slider',
		progress: 0.5984251968503937
	},
	308: {
		event: 'input1.slider',
		progress: 0.5905511811023622
	},
	309: {
		event: 'input1.slider',
		progress: 0.5826771653543307
	},
	310: {
		event: 'input1.slider',
		progress: 0.5748031496062992
	},
	311: {
		event: 'input1.slider',
		progress: 0.5669291338582677
	},
	312: {
		event: 'input1.slider',
		progress: 0.5590551181102362
	},
	313: {
		event: 'input1.slider',
		progress: 0.5511811023622047
	},
	314: {
		event: 'input1.slider',
		progress: 0.5433070866141733
	},
	315: {
		event: 'input1.slider',
		progress: 0.5354330708661418
	},
	316: {
		event: 'input1.slider',
		progress: 0.5275590551181102
	},
	317: {
		event: 'input1.slider',
		progress: 0.5196850393700787
	},
	318: {
		event: 'input1.slider',
		progress: 0.5118110236220472
	},
	319: {
		event: 'input1.slider',
		progress: 0.5039370078740157
	},
	320: {
		event: 'input1.slider',
		progress: 0.49606299212598426
	},
	321: {
		event: 'input1.slider',
		progress: 0.4881889763779528
	},
	322: {
		event: 'input1.slider',
		progress: 0.48031496062992124
	},
	323: {
		event: 'input1.slider',
		progress: 0.47244094488188976
	},
	324: {
		event: 'input1.slider',
		progress: 0.4645669291338583
	},
	325: {
		event: 'input1.slider',
		progress: 0.4566929133858268
	},
	326: {
		event: 'input1.slider',
		progress: 0.44881889763779526
	},
	327: {
		event: 'input1.slider',
		progress: 0.4409448818897638
	},
	328: {
		event: 'input1.slider',
		progress: 0.4330708661417323
	},
	329: {
		event: 'input1.slider',
		progress: 0.4251968503937008
	},
	330: {
		event: 'input1.slider',
		progress: 0.41732283464566927
	},
	331: {
		event: 'input1.slider',
		progress: 0.4094488188976378
	},
	332: {
		event: 'input1.slider',
		progress: 0.4015748031496063
	},
	333: {
		event: 'input1.slider',
		progress: 0.3937007874015748
	},
	334: {
		event: 'input1.slider',
		progress: 0.3858267716535433
	},
	335: {
		event: 'input1.slider',
		progress: 0.3779527559055118
	},
	336: {
		event: 'input1.slider',
		progress: 0.3700787401574803
	},
	337: {
		event: 'input1.slider',
		progress: 0.36220472440944884
	},
	338: {
		event: 'input1.slider',
		progress: 0.3543307086614173
	},
	339: {
		event: 'input1.slider',
		progress: 0.3464566929133858
	},
	340: {
		event: 'input1.slider',
		progress: 0.33858267716535434
	},
	341: {
		event: 'input1.slider',
		progress: 0.33070866141732286
	},
	342: {
		event: 'input1.slider',
		progress: 0.3228346456692913
	},
	343: {
		event: 'input1.slider',
		progress: 0.31496062992125984
	},
	344: {
		event: 'input1.slider',
		progress: 0.30708661417322836
	},
	345: {
		event: 'input1.slider',
		progress: 0.2992125984251969
	},
	346: {
		event: 'input1.slider',
		progress: 0.29133858267716534
	},
	347: {
		event: 'input1.slider',
		progress: 0.28346456692913385
	},
	348: {
		event: 'input1.slider',
		progress: 0.2755905511811024
	},
	349: {
		event: 'input1.slider',
		progress: 0.2677165354330709
	},
	350: {
		event: 'input1.slider',
		progress: 0.25984251968503935
	},
	351: {
		event: 'input1.slider',
		progress: 0.25196850393700787
	},
	352: {
		event: 'input1.slider',
		progress: 0.2440944881889764
	},
	353: {
		event: 'input1.slider',
		progress: 0.23622047244094488
	},
	354: {
		event: 'input1.slider',
		progress: 0.2283464566929134
	},
	355: {
		event: 'input1.slider',
		progress: 0.2204724409448819
	},
	356: {
		event: 'input1.slider',
		progress: 0.2125984251968504
	},
	357: {
		event: 'input1.slider',
		progress: 0.2047244094488189
	},
	358: {
		event: 'input1.slider',
		progress: 0.1968503937007874
	},
	359: {
		event: 'input1.slider',
		progress: 0.1889763779527559
	},
	360: {
		event: 'input1.slider',
		progress: 0.18110236220472442
	},
	361: {
		event: 'input1.slider',
		progress: 0.1732283464566929
	},
	362: {
		event: 'input1.slider',
		progress: 0.16535433070866143
	},
	363: {
		event: 'input1.slider',
		progress: 0.15748031496062992
	},
	364: {
		event: 'input1.slider',
		progress: 0.14960629921259844
	},
	365: {
		event: 'input1.slider',
		progress: 0.14173228346456693
	},
	366: {
		event: 'input1.slider',
		progress: 0.13385826771653545
	},
	367: {
		event: 'input1.slider',
		progress: 0.12598425196850394
	},
	368: {
		event: 'input1.slider',
		progress: 0.11811023622047244
	},
	369: {
		event: 'input1.slider',
		progress: 0.11023622047244094
	},
	370: {
		event: 'input1.slider',
		progress: 0.10236220472440945
	},
	371: {
		event: 'input1.slider',
		progress: 0.09448818897637795
	},
	372: {
		event: 'input1.slider',
		progress: 0.08661417322834646
	},
	373: {
		event: 'input1.slider',
		progress: 0.07874015748031496
	},
	374: {
		event: 'input1.slider',
		progress: 0.07086614173228346
	},
	375: {
		event: 'input1.slider',
		progress: 0.06299212598425197
	},
	376: {
		event: 'input1.slider',
		progress: 0.05511811023622047
	},
	377: {
		event: 'input1.slider',
		progress: 0.047244094488188976
	},
	378: {
		event: 'input1.slider',
		progress: 0.03937007874015748
	},
	379: {
		event: 'input1.slider',
		progress: 0.031496062992125984
	},
	380: {
		event: 'input1.slider',
		progress: 0.023622047244094488
	},
	381: {
		event: 'input1.slider',
		progress: 0.015748031496062992
	},
	382: {
		event: 'input1.slider',
		progress: 0.007874015748031496
	},
	383: {
		event: 'input1.slider',
		progress: 0
	},
	512: {
		event: 'input2.slider',
		progress: 1
	},
	513: {
		event: 'input2.slider',
		progress: 0.9921259842519685
	},
	514: {
		event: 'input2.slider',
		progress: 0.984251968503937
	},
	515: {
		event: 'input2.slider',
		progress: 0.9763779527559056
	},
	516: {
		event: 'input2.slider',
		progress: 0.968503937007874
	},
	517: {
		event: 'input2.slider',
		progress: 0.9606299212598425
	},
	518: {
		event: 'input2.slider',
		progress: 0.952755905511811
	},
	519: {
		event: 'input2.slider',
		progress: 0.9448818897637795
	},
	520: {
		event: 'input2.slider',
		progress: 0.937007874015748
	},
	521: {
		event: 'input2.slider',
		progress: 0.9291338582677166
	},
	522: {
		event: 'input2.slider',
		progress: 0.9212598425196851
	},
	523: {
		event: 'input2.slider',
		progress: 0.9133858267716536
	},
	524: {
		event: 'input2.slider',
		progress: 0.905511811023622
	},
	525: {
		event: 'input2.slider',
		progress: 0.8976377952755905
	},
	526: {
		event: 'input2.slider',
		progress: 0.889763779527559
	},
	527: {
		event: 'input2.slider',
		progress: 0.8818897637795275
	},
	528: {
		event: 'input2.slider',
		progress: 0.8740157480314961
	},
	529: {
		event: 'input2.slider',
		progress: 0.8661417322834646
	},
	530: {
		event: 'input2.slider',
		progress: 0.8582677165354331
	},
	531: {
		event: 'input2.slider',
		progress: 0.8503937007874016
	},
	532: {
		event: 'input2.slider',
		progress: 0.84251968503937
	},
	533: {
		event: 'input2.slider',
		progress: 0.8346456692913385
	},
	534: {
		event: 'input2.slider',
		progress: 0.8267716535433071
	},
	535: {
		event: 'input2.slider',
		progress: 0.8188976377952756
	},
	536: {
		event: 'input2.slider',
		progress: 0.8110236220472441
	},
	537: {
		event: 'input2.slider',
		progress: 0.8031496062992126
	},
	538: {
		event: 'input2.slider',
		progress: 0.7952755905511811
	},
	539: {
		event: 'input2.slider',
		progress: 0.7874015748031497
	},
	540: {
		event: 'input2.slider',
		progress: 0.7795275590551181
	},
	541: {
		event: 'input2.slider',
		progress: 0.7716535433070866
	},
	542: {
		event: 'input2.slider',
		progress: 0.7637795275590551
	},
	543: {
		event: 'input2.slider',
		progress: 0.7559055118110236
	},
	544: {
		event: 'input2.slider',
		progress: 0.7480314960629921
	},
	545: {
		event: 'input2.slider',
		progress: 0.7401574803149606
	},
	546: {
		event: 'input2.slider',
		progress: 0.7322834645669292
	},
	547: {
		event: 'input2.slider',
		progress: 0.7244094488188977
	},
	548: {
		event: 'input2.slider',
		progress: 0.7165354330708661
	},
	549: {
		event: 'input2.slider',
		progress: 0.7086614173228346
	},
	550: {
		event: 'input2.slider',
		progress: 0.7007874015748031
	},
	551: {
		event: 'input2.slider',
		progress: 0.6929133858267716
	},
	552: {
		event: 'input2.slider',
		progress: 0.6850393700787402
	},
	553: {
		event: 'input2.slider',
		progress: 0.6771653543307087
	},
	554: {
		event: 'input2.slider',
		progress: 0.6692913385826772
	},
	555: {
		event: 'input2.slider',
		progress: 0.6614173228346457
	},
	556: {
		event: 'input2.slider',
		progress: 0.6535433070866141
	},
	557: {
		event: 'input2.slider',
		progress: 0.6456692913385826
	},
	558: {
		event: 'input2.slider',
		progress: 0.6377952755905512
	},
	559: {
		event: 'input2.slider',
		progress: 0.6299212598425197
	},
	560: {
		event: 'input2.slider',
		progress: 0.6220472440944882
	},
	561: {
		event: 'input2.slider',
		progress: 0.6141732283464567
	},
	562: {
		event: 'input2.slider',
		progress: 0.6062992125984252
	},
	563: {
		event: 'input2.slider',
		progress: 0.5984251968503937
	},
	564: {
		event: 'input2.slider',
		progress: 0.5905511811023622
	},
	565: {
		event: 'input2.slider',
		progress: 0.5826771653543307
	},
	566: {
		event: 'input2.slider',
		progress: 0.5748031496062992
	},
	567: {
		event: 'input2.slider',
		progress: 0.5669291338582677
	},
	568: {
		event: 'input2.slider',
		progress: 0.5590551181102362
	},
	569: {
		event: 'input2.slider',
		progress: 0.5511811023622047
	},
	570: {
		event: 'input2.slider',
		progress: 0.5433070866141733
	},
	571: {
		event: 'input2.slider',
		progress: 0.5354330708661418
	},
	572: {
		event: 'input2.slider',
		progress: 0.5275590551181102
	},
	573: {
		event: 'input2.slider',
		progress: 0.5196850393700787
	},
	574: {
		event: 'input2.slider',
		progress: 0.5118110236220472
	},
	575: {
		event: 'input2.slider',
		progress: 0.5039370078740157
	},
	576: {
		event: 'input2.slider',
		progress: 0.49606299212598426
	},
	577: {
		event: 'input2.slider',
		progress: 0.4881889763779528
	},
	578: {
		event: 'input2.slider',
		progress: 0.48031496062992124
	},
	579: {
		event: 'input2.slider',
		progress: 0.47244094488188976
	},
	580: {
		event: 'input2.slider',
		progress: 0.4645669291338583
	},
	581: {
		event: 'input2.slider',
		progress: 0.4566929133858268
	},
	582: {
		event: 'input2.slider',
		progress: 0.44881889763779526
	},
	583: {
		event: 'input2.slider',
		progress: 0.4409448818897638
	},
	584: {
		event: 'input2.slider',
		progress: 0.4330708661417323
	},
	585: {
		event: 'input2.slider',
		progress: 0.4251968503937008
	},
	586: {
		event: 'input2.slider',
		progress: 0.41732283464566927
	},
	587: {
		event: 'input2.slider',
		progress: 0.4094488188976378
	},
	588: {
		event: 'input2.slider',
		progress: 0.4015748031496063
	},
	589: {
		event: 'input2.slider',
		progress: 0.3937007874015748
	},
	590: {
		event: 'input2.slider',
		progress: 0.3858267716535433
	},
	591: {
		event: 'input2.slider',
		progress: 0.3779527559055118
	},
	592: {
		event: 'input2.slider',
		progress: 0.3700787401574803
	},
	593: {
		event: 'input2.slider',
		progress: 0.36220472440944884
	},
	594: {
		event: 'input2.slider',
		progress: 0.3543307086614173
	},
	595: {
		event: 'input2.slider',
		progress: 0.3464566929133858
	},
	596: {
		event: 'input2.slider',
		progress: 0.33858267716535434
	},
	597: {
		event: 'input2.slider',
		progress: 0.33070866141732286
	},
	598: {
		event: 'input2.slider',
		progress: 0.3228346456692913
	},
	599: {
		event: 'input2.slider',
		progress: 0.31496062992125984
	},
	600: {
		event: 'input2.slider',
		progress: 0.30708661417322836
	},
	601: {
		event: 'input2.slider',
		progress: 0.2992125984251969
	},
	602: {
		event: 'input2.slider',
		progress: 0.29133858267716534
	},
	603: {
		event: 'input2.slider',
		progress: 0.28346456692913385
	},
	604: {
		event: 'input2.slider',
		progress: 0.2755905511811024
	},
	605: {
		event: 'input2.slider',
		progress: 0.2677165354330709
	},
	606: {
		event: 'input2.slider',
		progress: 0.25984251968503935
	},
	607: {
		event: 'input2.slider',
		progress: 0.25196850393700787
	},
	608: {
		event: 'input2.slider',
		progress: 0.2440944881889764
	},
	609: {
		event: 'input2.slider',
		progress: 0.23622047244094488
	},
	610: {
		event: 'input2.slider',
		progress: 0.2283464566929134
	},
	611: {
		event: 'input2.slider',
		progress: 0.2204724409448819
	},
	612: {
		event: 'input2.slider',
		progress: 0.2125984251968504
	},
	613: {
		event: 'input2.slider',
		progress: 0.2047244094488189
	},
	614: {
		event: 'input2.slider',
		progress: 0.1968503937007874
	},
	615: {
		event: 'input2.slider',
		progress: 0.1889763779527559
	},
	616: {
		event: 'input2.slider',
		progress: 0.18110236220472442
	},
	617: {
		event: 'input2.slider',
		progress: 0.1732283464566929
	},
	618: {
		event: 'input2.slider',
		progress: 0.16535433070866143
	},
	619: {
		event: 'input2.slider',
		progress: 0.15748031496062992
	},
	620: {
		event: 'input2.slider',
		progress: 0.14960629921259844
	},
	621: {
		event: 'input2.slider',
		progress: 0.14173228346456693
	},
	622: {
		event: 'input2.slider',
		progress: 0.13385826771653545
	},
	623: {
		event: 'input2.slider',
		progress: 0.12598425196850394
	},
	624: {
		event: 'input2.slider',
		progress: 0.11811023622047244
	},
	625: {
		event: 'input2.slider',
		progress: 0.11023622047244094
	},
	626: {
		event: 'input2.slider',
		progress: 0.10236220472440945
	},
	627: {
		event: 'input2.slider',
		progress: 0.09448818897637795
	},
	628: {
		event: 'input2.slider',
		progress: 0.08661417322834646
	},
	629: {
		event: 'input2.slider',
		progress: 0.07874015748031496
	},
	630: {
		event: 'input2.slider',
		progress: 0.07086614173228346
	},
	631: {
		event: 'input2.slider',
		progress: 0.06299212598425197
	},
	632: {
		event: 'input2.slider',
		progress: 0.05511811023622047
	},
	633: {
		event: 'input2.slider',
		progress: 0.047244094488188976
	},
	634: {
		event: 'input2.slider',
		progress: 0.03937007874015748
	},
	635: {
		event: 'input2.slider',
		progress: 0.031496062992125984
	},
	636: {
		event: 'input2.slider',
		progress: 0.023622047244094488
	},
	637: {
		event: 'input2.slider',
		progress: 0.015748031496062992
	},
	638: {
		event: 'input2.slider',
		progress: 0.007874015748031496
	},
	639: {
		event: 'input2.slider',
		progress: 0
	},
	768: {
		event: 'input3.slider',
		progress: 1
	},
	769: {
		event: 'input3.slider',
		progress: 0.9921259842519685
	},
	770: {
		event: 'input3.slider',
		progress: 0.984251968503937
	},
	771: {
		event: 'input3.slider',
		progress: 0.9763779527559056
	},
	772: {
		event: 'input3.slider',
		progress: 0.968503937007874
	},
	773: {
		event: 'input3.slider',
		progress: 0.9606299212598425
	},
	774: {
		event: 'input3.slider',
		progress: 0.952755905511811
	},
	775: {
		event: 'input3.slider',
		progress: 0.9448818897637795
	},
	776: {
		event: 'input3.slider',
		progress: 0.937007874015748
	},
	777: {
		event: 'input3.slider',
		progress: 0.9291338582677166
	},
	778: {
		event: 'input3.slider',
		progress: 0.9212598425196851
	},
	779: {
		event: 'input3.slider',
		progress: 0.9133858267716536
	},
	780: {
		event: 'input3.slider',
		progress: 0.905511811023622
	},
	781: {
		event: 'input3.slider',
		progress: 0.8976377952755905
	},
	782: {
		event: 'input3.slider',
		progress: 0.889763779527559
	},
	783: {
		event: 'input3.slider',
		progress: 0.8818897637795275
	},
	784: {
		event: 'input3.slider',
		progress: 0.8740157480314961
	},
	785: {
		event: 'input3.slider',
		progress: 0.8661417322834646
	},
	786: {
		event: 'input3.slider',
		progress: 0.8582677165354331
	},
	787: {
		event: 'input3.slider',
		progress: 0.8503937007874016
	},
	788: {
		event: 'input3.slider',
		progress: 0.84251968503937
	},
	789: {
		event: 'input3.slider',
		progress: 0.8346456692913385
	},
	790: {
		event: 'input3.slider',
		progress: 0.8267716535433071
	},
	791: {
		event: 'input3.slider',
		progress: 0.8188976377952756
	},
	792: {
		event: 'input3.slider',
		progress: 0.8110236220472441
	},
	793: {
		event: 'input3.slider',
		progress: 0.8031496062992126
	},
	794: {
		event: 'input3.slider',
		progress: 0.7952755905511811
	},
	795: {
		event: 'input3.slider',
		progress: 0.7874015748031497
	},
	796: {
		event: 'input3.slider',
		progress: 0.7795275590551181
	},
	797: {
		event: 'input3.slider',
		progress: 0.7716535433070866
	},
	798: {
		event: 'input3.slider',
		progress: 0.7637795275590551
	},
	799: {
		event: 'input3.slider',
		progress: 0.7559055118110236
	},
	800: {
		event: 'input3.slider',
		progress: 0.7480314960629921
	},
	801: {
		event: 'input3.slider',
		progress: 0.7401574803149606
	},
	802: {
		event: 'input3.slider',
		progress: 0.7322834645669292
	},
	803: {
		event: 'input3.slider',
		progress: 0.7244094488188977
	},
	804: {
		event: 'input3.slider',
		progress: 0.7165354330708661
	},
	805: {
		event: 'input3.slider',
		progress: 0.7086614173228346
	},
	806: {
		event: 'input3.slider',
		progress: 0.7007874015748031
	},
	807: {
		event: 'input3.slider',
		progress: 0.6929133858267716
	},
	808: {
		event: 'input3.slider',
		progress: 0.6850393700787402
	},
	809: {
		event: 'input3.slider',
		progress: 0.6771653543307087
	},
	810: {
		event: 'input3.slider',
		progress: 0.6692913385826772
	},
	811: {
		event: 'input3.slider',
		progress: 0.6614173228346457
	},
	812: {
		event: 'input3.slider',
		progress: 0.6535433070866141
	},
	813: {
		event: 'input3.slider',
		progress: 0.6456692913385826
	},
	814: {
		event: 'input3.slider',
		progress: 0.6377952755905512
	},
	815: {
		event: 'input3.slider',
		progress: 0.6299212598425197
	},
	816: {
		event: 'input3.slider',
		progress: 0.6220472440944882
	},
	817: {
		event: 'input3.slider',
		progress: 0.6141732283464567
	},
	818: {
		event: 'input3.slider',
		progress: 0.6062992125984252
	},
	819: {
		event: 'input3.slider',
		progress: 0.5984251968503937
	},
	820: {
		event: 'input3.slider',
		progress: 0.5905511811023622
	},
	821: {
		event: 'input3.slider',
		progress: 0.5826771653543307
	},
	822: {
		event: 'input3.slider',
		progress: 0.5748031496062992
	},
	823: {
		event: 'input3.slider',
		progress: 0.5669291338582677
	},
	824: {
		event: 'input3.slider',
		progress: 0.5590551181102362
	},
	825: {
		event: 'input3.slider',
		progress: 0.5511811023622047
	},
	826: {
		event: 'input3.slider',
		progress: 0.5433070866141733
	},
	827: {
		event: 'input3.slider',
		progress: 0.5354330708661418
	},
	828: {
		event: 'input3.slider',
		progress: 0.5275590551181102
	},
	829: {
		event: 'input3.slider',
		progress: 0.5196850393700787
	},
	830: {
		event: 'input3.slider',
		progress: 0.5118110236220472
	},
	831: {
		event: 'input3.slider',
		progress: 0.5039370078740157
	},
	832: {
		event: 'input3.slider',
		progress: 0.49606299212598426
	},
	833: {
		event: 'input3.slider',
		progress: 0.4881889763779528
	},
	834: {
		event: 'input3.slider',
		progress: 0.48031496062992124
	},
	835: {
		event: 'input3.slider',
		progress: 0.47244094488188976
	},
	836: {
		event: 'input3.slider',
		progress: 0.4645669291338583
	},
	837: {
		event: 'input3.slider',
		progress: 0.4566929133858268
	},
	838: {
		event: 'input3.slider',
		progress: 0.44881889763779526
	},
	839: {
		event: 'input3.slider',
		progress: 0.4409448818897638
	},
	840: {
		event: 'input3.slider',
		progress: 0.4330708661417323
	},
	841: {
		event: 'input3.slider',
		progress: 0.4251968503937008
	},
	842: {
		event: 'input3.slider',
		progress: 0.41732283464566927
	},
	843: {
		event: 'input3.slider',
		progress: 0.4094488188976378
	},
	844: {
		event: 'input3.slider',
		progress: 0.4015748031496063
	},
	845: {
		event: 'input3.slider',
		progress: 0.3937007874015748
	},
	846: {
		event: 'input3.slider',
		progress: 0.3858267716535433
	},
	847: {
		event: 'input3.slider',
		progress: 0.3779527559055118
	},
	848: {
		event: 'input3.slider',
		progress: 0.3700787401574803
	},
	849: {
		event: 'input3.slider',
		progress: 0.36220472440944884
	},
	850: {
		event: 'input3.slider',
		progress: 0.3543307086614173
	},
	851: {
		event: 'input3.slider',
		progress: 0.3464566929133858
	},
	852: {
		event: 'input3.slider',
		progress: 0.33858267716535434
	},
	853: {
		event: 'input3.slider',
		progress: 0.33070866141732286
	},
	854: {
		event: 'input3.slider',
		progress: 0.3228346456692913
	},
	855: {
		event: 'input3.slider',
		progress: 0.31496062992125984
	},
	856: {
		event: 'input3.slider',
		progress: 0.30708661417322836
	},
	857: {
		event: 'input3.slider',
		progress: 0.2992125984251969
	},
	858: {
		event: 'input3.slider',
		progress: 0.29133858267716534
	},
	859: {
		event: 'input3.slider',
		progress: 0.28346456692913385
	},
	860: {
		event: 'input3.slider',
		progress: 0.2755905511811024
	},
	861: {
		event: 'input3.slider',
		progress: 0.2677165354330709
	},
	862: {
		event: 'input3.slider',
		progress: 0.25984251968503935
	},
	863: {
		event: 'input3.slider',
		progress: 0.25196850393700787
	},
	864: {
		event: 'input3.slider',
		progress: 0.2440944881889764
	},
	865: {
		event: 'input3.slider',
		progress: 0.23622047244094488
	},
	866: {
		event: 'input3.slider',
		progress: 0.2283464566929134
	},
	867: {
		event: 'input3.slider',
		progress: 0.2204724409448819
	},
	868: {
		event: 'input3.slider',
		progress: 0.2125984251968504
	},
	869: {
		event: 'input3.slider',
		progress: 0.2047244094488189
	},
	870: {
		event: 'input3.slider',
		progress: 0.1968503937007874
	},
	871: {
		event: 'input3.slider',
		progress: 0.1889763779527559
	},
	872: {
		event: 'input3.slider',
		progress: 0.18110236220472442
	},
	873: {
		event: 'input3.slider',
		progress: 0.1732283464566929
	},
	874: {
		event: 'input3.slider',
		progress: 0.16535433070866143
	},
	875: {
		event: 'input3.slider',
		progress: 0.15748031496062992
	},
	876: {
		event: 'input3.slider',
		progress: 0.14960629921259844
	},
	877: {
		event: 'input3.slider',
		progress: 0.14173228346456693
	},
	878: {
		event: 'input3.slider',
		progress: 0.13385826771653545
	},
	879: {
		event: 'input3.slider',
		progress: 0.12598425196850394
	},
	880: {
		event: 'input3.slider',
		progress: 0.11811023622047244
	},
	881: {
		event: 'input3.slider',
		progress: 0.11023622047244094
	},
	882: {
		event: 'input3.slider',
		progress: 0.10236220472440945
	},
	883: {
		event: 'input3.slider',
		progress: 0.09448818897637795
	},
	884: {
		event: 'input3.slider',
		progress: 0.08661417322834646
	},
	885: {
		event: 'input3.slider',
		progress: 0.07874015748031496
	},
	886: {
		event: 'input3.slider',
		progress: 0.07086614173228346
	},
	887: {
		event: 'input3.slider',
		progress: 0.06299212598425197
	},
	888: {
		event: 'input3.slider',
		progress: 0.05511811023622047
	},
	889: {
		event: 'input3.slider',
		progress: 0.047244094488188976
	},
	890: {
		event: 'input3.slider',
		progress: 0.03937007874015748
	},
	891: {
		event: 'input3.slider',
		progress: 0.031496062992125984
	},
	892: {
		event: 'input3.slider',
		progress: 0.023622047244094488
	},
	893: {
		event: 'input3.slider',
		progress: 0.015748031496062992
	},
	894: {
		event: 'input3.slider',
		progress: 0.007874015748031496
	},
	895: {
		event: 'input3.slider',
		progress: 0
	},
	1024: {
		event: 'input4.slider',
		progress: 1
	},
	1025: {
		event: 'input4.slider',
		progress: 0.9921259842519685
	},
	1026: {
		event: 'input4.slider',
		progress: 0.984251968503937
	},
	1027: {
		event: 'input4.slider',
		progress: 0.9763779527559056
	},
	1028: {
		event: 'input4.slider',
		progress: 0.968503937007874
	},
	1029: {
		event: 'input4.slider',
		progress: 0.9606299212598425
	},
	1030: {
		event: 'input4.slider',
		progress: 0.952755905511811
	},
	1031: {
		event: 'input4.slider',
		progress: 0.9448818897637795
	},
	1032: {
		event: 'input4.slider',
		progress: 0.937007874015748
	},
	1033: {
		event: 'input4.slider',
		progress: 0.9291338582677166
	},
	1034: {
		event: 'input4.slider',
		progress: 0.9212598425196851
	},
	1035: {
		event: 'input4.slider',
		progress: 0.9133858267716536
	},
	1036: {
		event: 'input4.slider',
		progress: 0.905511811023622
	},
	1037: {
		event: 'input4.slider',
		progress: 0.8976377952755905
	},
	1038: {
		event: 'input4.slider',
		progress: 0.889763779527559
	},
	1039: {
		event: 'input4.slider',
		progress: 0.8818897637795275
	},
	1040: {
		event: 'input4.slider',
		progress: 0.8740157480314961
	},
	1041: {
		event: 'input4.slider',
		progress: 0.8661417322834646
	},
	1042: {
		event: 'input4.slider',
		progress: 0.8582677165354331
	},
	1043: {
		event: 'input4.slider',
		progress: 0.8503937007874016
	},
	1044: {
		event: 'input4.slider',
		progress: 0.84251968503937
	},
	1045: {
		event: 'input4.slider',
		progress: 0.8346456692913385
	},
	1046: {
		event: 'input4.slider',
		progress: 0.8267716535433071
	},
	1047: {
		event: 'input4.slider',
		progress: 0.8188976377952756
	},
	1048: {
		event: 'input4.slider',
		progress: 0.8110236220472441
	},
	1049: {
		event: 'input4.slider',
		progress: 0.8031496062992126
	},
	1050: {
		event: 'input4.slider',
		progress: 0.7952755905511811
	},
	1051: {
		event: 'input4.slider',
		progress: 0.7874015748031497
	},
	1052: {
		event: 'input4.slider',
		progress: 0.7795275590551181
	},
	1053: {
		event: 'input4.slider',
		progress: 0.7716535433070866
	},
	1054: {
		event: 'input4.slider',
		progress: 0.7637795275590551
	},
	1055: {
		event: 'input4.slider',
		progress: 0.7559055118110236
	},
	1056: {
		event: 'input4.slider',
		progress: 0.7480314960629921
	},
	1057: {
		event: 'input4.slider',
		progress: 0.7401574803149606
	},
	1058: {
		event: 'input4.slider',
		progress: 0.7322834645669292
	},
	1059: {
		event: 'input4.slider',
		progress: 0.7244094488188977
	},
	1060: {
		event: 'input4.slider',
		progress: 0.7165354330708661
	},
	1061: {
		event: 'input4.slider',
		progress: 0.7086614173228346
	},
	1062: {
		event: 'input4.slider',
		progress: 0.7007874015748031
	},
	1063: {
		event: 'input4.slider',
		progress: 0.6929133858267716
	},
	1064: {
		event: 'input4.slider',
		progress: 0.6850393700787402
	},
	1065: {
		event: 'input4.slider',
		progress: 0.6771653543307087
	},
	1066: {
		event: 'input4.slider',
		progress: 0.6692913385826772
	},
	1067: {
		event: 'input4.slider',
		progress: 0.6614173228346457
	},
	1068: {
		event: 'input4.slider',
		progress: 0.6535433070866141
	},
	1069: {
		event: 'input4.slider',
		progress: 0.6456692913385826
	},
	1070: {
		event: 'input4.slider',
		progress: 0.6377952755905512
	},
	1071: {
		event: 'input4.slider',
		progress: 0.6299212598425197
	},
	1072: {
		event: 'input4.slider',
		progress: 0.6220472440944882
	},
	1073: {
		event: 'input4.slider',
		progress: 0.6141732283464567
	},
	1074: {
		event: 'input4.slider',
		progress: 0.6062992125984252
	},
	1075: {
		event: 'input4.slider',
		progress: 0.5984251968503937
	},
	1076: {
		event: 'input4.slider',
		progress: 0.5905511811023622
	},
	1077: {
		event: 'input4.slider',
		progress: 0.5826771653543307
	},
	1078: {
		event: 'input4.slider',
		progress: 0.5748031496062992
	},
	1079: {
		event: 'input4.slider',
		progress: 0.5669291338582677
	},
	1080: {
		event: 'input4.slider',
		progress: 0.5590551181102362
	},
	1081: {
		event: 'input4.slider',
		progress: 0.5511811023622047
	},
	1082: {
		event: 'input4.slider',
		progress: 0.5433070866141733
	},
	1083: {
		event: 'input4.slider',
		progress: 0.5354330708661418
	},
	1084: {
		event: 'input4.slider',
		progress: 0.5275590551181102
	},
	1085: {
		event: 'input4.slider',
		progress: 0.5196850393700787
	},
	1086: {
		event: 'input4.slider',
		progress: 0.5118110236220472
	},
	1087: {
		event: 'input4.slider',
		progress: 0.5039370078740157
	},
	1088: {
		event: 'input4.slider',
		progress: 0.49606299212598426
	},
	1089: {
		event: 'input4.slider',
		progress: 0.4881889763779528
	},
	1090: {
		event: 'input4.slider',
		progress: 0.48031496062992124
	},
	1091: {
		event: 'input4.slider',
		progress: 0.47244094488188976
	},
	1092: {
		event: 'input4.slider',
		progress: 0.4645669291338583
	},
	1093: {
		event: 'input4.slider',
		progress: 0.4566929133858268
	},
	1094: {
		event: 'input4.slider',
		progress: 0.44881889763779526
	},
	1095: {
		event: 'input4.slider',
		progress: 0.4409448818897638
	},
	1096: {
		event: 'input4.slider',
		progress: 0.4330708661417323
	},
	1097: {
		event: 'input4.slider',
		progress: 0.4251968503937008
	},
	1098: {
		event: 'input4.slider',
		progress: 0.41732283464566927
	},
	1099: {
		event: 'input4.slider',
		progress: 0.4094488188976378
	},
	1100: {
		event: 'input4.slider',
		progress: 0.4015748031496063
	},
	1101: {
		event: 'input4.slider',
		progress: 0.3937007874015748
	},
	1102: {
		event: 'input4.slider',
		progress: 0.3858267716535433
	},
	1103: {
		event: 'input4.slider',
		progress: 0.3779527559055118
	},
	1104: {
		event: 'input4.slider',
		progress: 0.3700787401574803
	},
	1105: {
		event: 'input4.slider',
		progress: 0.36220472440944884
	},
	1106: {
		event: 'input4.slider',
		progress: 0.3543307086614173
	},
	1107: {
		event: 'input4.slider',
		progress: 0.3464566929133858
	},
	1108: {
		event: 'input4.slider',
		progress: 0.33858267716535434
	},
	1109: {
		event: 'input4.slider',
		progress: 0.33070866141732286
	},
	1110: {
		event: 'input4.slider',
		progress: 0.3228346456692913
	},
	1111: {
		event: 'input4.slider',
		progress: 0.31496062992125984
	},
	1112: {
		event: 'input4.slider',
		progress: 0.30708661417322836
	},
	1113: {
		event: 'input4.slider',
		progress: 0.2992125984251969
	},
	1114: {
		event: 'input4.slider',
		progress: 0.29133858267716534
	},
	1115: {
		event: 'input4.slider',
		progress: 0.28346456692913385
	},
	1116: {
		event: 'input4.slider',
		progress: 0.2755905511811024
	},
	1117: {
		event: 'input4.slider',
		progress: 0.2677165354330709
	},
	1118: {
		event: 'input4.slider',
		progress: 0.25984251968503935
	},
	1119: {
		event: 'input4.slider',
		progress: 0.25196850393700787
	},
	1120: {
		event: 'input4.slider',
		progress: 0.2440944881889764
	},
	1121: {
		event: 'input4.slider',
		progress: 0.23622047244094488
	},
	1122: {
		event: 'input4.slider',
		progress: 0.2283464566929134
	},
	1123: {
		event: 'input4.slider',
		progress: 0.2204724409448819
	},
	1124: {
		event: 'input4.slider',
		progress: 0.2125984251968504
	},
	1125: {
		event: 'input4.slider',
		progress: 0.2047244094488189
	},
	1126: {
		event: 'input4.slider',
		progress: 0.1968503937007874
	},
	1127: {
		event: 'input4.slider',
		progress: 0.1889763779527559
	},
	1128: {
		event: 'input4.slider',
		progress: 0.18110236220472442
	},
	1129: {
		event: 'input4.slider',
		progress: 0.1732283464566929
	},
	1130: {
		event: 'input4.slider',
		progress: 0.16535433070866143
	},
	1131: {
		event: 'input4.slider',
		progress: 0.15748031496062992
	},
	1132: {
		event: 'input4.slider',
		progress: 0.14960629921259844
	},
	1133: {
		event: 'input4.slider',
		progress: 0.14173228346456693
	},
	1134: {
		event: 'input4.slider',
		progress: 0.13385826771653545
	},
	1135: {
		event: 'input4.slider',
		progress: 0.12598425196850394
	},
	1136: {
		event: 'input4.slider',
		progress: 0.11811023622047244
	},
	1137: {
		event: 'input4.slider',
		progress: 0.11023622047244094
	},
	1138: {
		event: 'input4.slider',
		progress: 0.10236220472440945
	},
	1139: {
		event: 'input4.slider',
		progress: 0.09448818897637795
	},
	1140: {
		event: 'input4.slider',
		progress: 0.08661417322834646
	},
	1141: {
		event: 'input4.slider',
		progress: 0.07874015748031496
	},
	1142: {
		event: 'input4.slider',
		progress: 0.07086614173228346
	},
	1143: {
		event: 'input4.slider',
		progress: 0.06299212598425197
	},
	1144: {
		event: 'input4.slider',
		progress: 0.05511811023622047
	},
	1145: {
		event: 'input4.slider',
		progress: 0.047244094488188976
	},
	1146: {
		event: 'input4.slider',
		progress: 0.03937007874015748
	},
	1147: {
		event: 'input4.slider',
		progress: 0.031496062992125984
	},
	1148: {
		event: 'input4.slider',
		progress: 0.023622047244094488
	},
	1149: {
		event: 'input4.slider',
		progress: 0.015748031496062992
	},
	1150: {
		event: 'input4.slider',
		progress: 0.007874015748031496
	},
	1151: {
		event: 'input4.slider',
		progress: 0
	},
	1280: {
		event: 'input5.slider',
		progress: 1
	},
	1281: {
		event: 'input5.slider',
		progress: 0.9921259842519685
	},
	1282: {
		event: 'input5.slider',
		progress: 0.984251968503937
	},
	1283: {
		event: 'input5.slider',
		progress: 0.9763779527559056
	},
	1284: {
		event: 'input5.slider',
		progress: 0.968503937007874
	},
	1285: {
		event: 'input5.slider',
		progress: 0.9606299212598425
	},
	1286: {
		event: 'input5.slider',
		progress: 0.952755905511811
	},
	1287: {
		event: 'input5.slider',
		progress: 0.9448818897637795
	},
	1288: {
		event: 'input5.slider',
		progress: 0.937007874015748
	},
	1289: {
		event: 'input5.slider',
		progress: 0.9291338582677166
	},
	1290: {
		event: 'input5.slider',
		progress: 0.9212598425196851
	},
	1291: {
		event: 'input5.slider',
		progress: 0.9133858267716536
	},
	1292: {
		event: 'input5.slider',
		progress: 0.905511811023622
	},
	1293: {
		event: 'input5.slider',
		progress: 0.8976377952755905
	},
	1294: {
		event: 'input5.slider',
		progress: 0.889763779527559
	},
	1295: {
		event: 'input5.slider',
		progress: 0.8818897637795275
	},
	1296: {
		event: 'input5.slider',
		progress: 0.8740157480314961
	},
	1297: {
		event: 'input5.slider',
		progress: 0.8661417322834646
	},
	1298: {
		event: 'input5.slider',
		progress: 0.8582677165354331
	},
	1299: {
		event: 'input5.slider',
		progress: 0.8503937007874016
	},
	1300: {
		event: 'input5.slider',
		progress: 0.84251968503937
	},
	1301: {
		event: 'input5.slider',
		progress: 0.8346456692913385
	},
	1302: {
		event: 'input5.slider',
		progress: 0.8267716535433071
	},
	1303: {
		event: 'input5.slider',
		progress: 0.8188976377952756
	},
	1304: {
		event: 'input5.slider',
		progress: 0.8110236220472441
	},
	1305: {
		event: 'input5.slider',
		progress: 0.8031496062992126
	},
	1306: {
		event: 'input5.slider',
		progress: 0.7952755905511811
	},
	1307: {
		event: 'input5.slider',
		progress: 0.7874015748031497
	},
	1308: {
		event: 'input5.slider',
		progress: 0.7795275590551181
	},
	1309: {
		event: 'input5.slider',
		progress: 0.7716535433070866
	},
	1310: {
		event: 'input5.slider',
		progress: 0.7637795275590551
	},
	1311: {
		event: 'input5.slider',
		progress: 0.7559055118110236
	},
	1312: {
		event: 'input5.slider',
		progress: 0.7480314960629921
	},
	1313: {
		event: 'input5.slider',
		progress: 0.7401574803149606
	},
	1314: {
		event: 'input5.slider',
		progress: 0.7322834645669292
	},
	1315: {
		event: 'input5.slider',
		progress: 0.7244094488188977
	},
	1316: {
		event: 'input5.slider',
		progress: 0.7165354330708661
	},
	1317: {
		event: 'input5.slider',
		progress: 0.7086614173228346
	},
	1318: {
		event: 'input5.slider',
		progress: 0.7007874015748031
	},
	1319: {
		event: 'input5.slider',
		progress: 0.6929133858267716
	},
	1320: {
		event: 'input5.slider',
		progress: 0.6850393700787402
	},
	1321: {
		event: 'input5.slider',
		progress: 0.6771653543307087
	},
	1322: {
		event: 'input5.slider',
		progress: 0.6692913385826772
	},
	1323: {
		event: 'input5.slider',
		progress: 0.6614173228346457
	},
	1324: {
		event: 'input5.slider',
		progress: 0.6535433070866141
	},
	1325: {
		event: 'input5.slider',
		progress: 0.6456692913385826
	},
	1326: {
		event: 'input5.slider',
		progress: 0.6377952755905512
	},
	1327: {
		event: 'input5.slider',
		progress: 0.6299212598425197
	},
	1328: {
		event: 'input5.slider',
		progress: 0.6220472440944882
	},
	1329: {
		event: 'input5.slider',
		progress: 0.6141732283464567
	},
	1330: {
		event: 'input5.slider',
		progress: 0.6062992125984252
	},
	1331: {
		event: 'input5.slider',
		progress: 0.5984251968503937
	},
	1332: {
		event: 'input5.slider',
		progress: 0.5905511811023622
	},
	1333: {
		event: 'input5.slider',
		progress: 0.5826771653543307
	},
	1334: {
		event: 'input5.slider',
		progress: 0.5748031496062992
	},
	1335: {
		event: 'input5.slider',
		progress: 0.5669291338582677
	},
	1336: {
		event: 'input5.slider',
		progress: 0.5590551181102362
	},
	1337: {
		event: 'input5.slider',
		progress: 0.5511811023622047
	},
	1338: {
		event: 'input5.slider',
		progress: 0.5433070866141733
	},
	1339: {
		event: 'input5.slider',
		progress: 0.5354330708661418
	},
	1340: {
		event: 'input5.slider',
		progress: 0.5275590551181102
	},
	1341: {
		event: 'input5.slider',
		progress: 0.5196850393700787
	},
	1342: {
		event: 'input5.slider',
		progress: 0.5118110236220472
	},
	1343: {
		event: 'input5.slider',
		progress: 0.5039370078740157
	},
	1344: {
		event: 'input5.slider',
		progress: 0.49606299212598426
	},
	1345: {
		event: 'input5.slider',
		progress: 0.4881889763779528
	},
	1346: {
		event: 'input5.slider',
		progress: 0.48031496062992124
	},
	1347: {
		event: 'input5.slider',
		progress: 0.47244094488188976
	},
	1348: {
		event: 'input5.slider',
		progress: 0.4645669291338583
	},
	1349: {
		event: 'input5.slider',
		progress: 0.4566929133858268
	},
	1350: {
		event: 'input5.slider',
		progress: 0.44881889763779526
	},
	1351: {
		event: 'input5.slider',
		progress: 0.4409448818897638
	},
	1352: {
		event: 'input5.slider',
		progress: 0.4330708661417323
	},
	1353: {
		event: 'input5.slider',
		progress: 0.4251968503937008
	},
	1354: {
		event: 'input5.slider',
		progress: 0.41732283464566927
	},
	1355: {
		event: 'input5.slider',
		progress: 0.4094488188976378
	},
	1356: {
		event: 'input5.slider',
		progress: 0.4015748031496063
	},
	1357: {
		event: 'input5.slider',
		progress: 0.3937007874015748
	},
	1358: {
		event: 'input5.slider',
		progress: 0.3858267716535433
	},
	1359: {
		event: 'input5.slider',
		progress: 0.3779527559055118
	},
	1360: {
		event: 'input5.slider',
		progress: 0.3700787401574803
	},
	1361: {
		event: 'input5.slider',
		progress: 0.36220472440944884
	},
	1362: {
		event: 'input5.slider',
		progress: 0.3543307086614173
	},
	1363: {
		event: 'input5.slider',
		progress: 0.3464566929133858
	},
	1364: {
		event: 'input5.slider',
		progress: 0.33858267716535434
	},
	1365: {
		event: 'input5.slider',
		progress: 0.33070866141732286
	},
	1366: {
		event: 'input5.slider',
		progress: 0.3228346456692913
	},
	1367: {
		event: 'input5.slider',
		progress: 0.31496062992125984
	},
	1368: {
		event: 'input5.slider',
		progress: 0.30708661417322836
	},
	1369: {
		event: 'input5.slider',
		progress: 0.2992125984251969
	},
	1370: {
		event: 'input5.slider',
		progress: 0.29133858267716534
	},
	1371: {
		event: 'input5.slider',
		progress: 0.28346456692913385
	},
	1372: {
		event: 'input5.slider',
		progress: 0.2755905511811024
	},
	1373: {
		event: 'input5.slider',
		progress: 0.2677165354330709
	},
	1374: {
		event: 'input5.slider',
		progress: 0.25984251968503935
	},
	1375: {
		event: 'input5.slider',
		progress: 0.25196850393700787
	},
	1376: {
		event: 'input5.slider',
		progress: 0.2440944881889764
	},
	1377: {
		event: 'input5.slider',
		progress: 0.23622047244094488
	},
	1378: {
		event: 'input5.slider',
		progress: 0.2283464566929134
	},
	1379: {
		event: 'input5.slider',
		progress: 0.2204724409448819
	},
	1380: {
		event: 'input5.slider',
		progress: 0.2125984251968504
	},
	1381: {
		event: 'input5.slider',
		progress: 0.2047244094488189
	},
	1382: {
		event: 'input5.slider',
		progress: 0.1968503937007874
	},
	1383: {
		event: 'input5.slider',
		progress: 0.1889763779527559
	},
	1384: {
		event: 'input5.slider',
		progress: 0.18110236220472442
	},
	1385: {
		event: 'input5.slider',
		progress: 0.1732283464566929
	},
	1386: {
		event: 'input5.slider',
		progress: 0.16535433070866143
	},
	1387: {
		event: 'input5.slider',
		progress: 0.15748031496062992
	},
	1388: {
		event: 'input5.slider',
		progress: 0.14960629921259844
	},
	1389: {
		event: 'input5.slider',
		progress: 0.14173228346456693
	},
	1390: {
		event: 'input5.slider',
		progress: 0.13385826771653545
	},
	1391: {
		event: 'input5.slider',
		progress: 0.12598425196850394
	},
	1392: {
		event: 'input5.slider',
		progress: 0.11811023622047244
	},
	1393: {
		event: 'input5.slider',
		progress: 0.11023622047244094
	},
	1394: {
		event: 'input5.slider',
		progress: 0.10236220472440945
	},
	1395: {
		event: 'input5.slider',
		progress: 0.09448818897637795
	},
	1396: {
		event: 'input5.slider',
		progress: 0.08661417322834646
	},
	1397: {
		event: 'input5.slider',
		progress: 0.07874015748031496
	},
	1398: {
		event: 'input5.slider',
		progress: 0.07086614173228346
	},
	1399: {
		event: 'input5.slider',
		progress: 0.06299212598425197
	},
	1400: {
		event: 'input5.slider',
		progress: 0.05511811023622047
	},
	1401: {
		event: 'input5.slider',
		progress: 0.047244094488188976
	},
	1402: {
		event: 'input5.slider',
		progress: 0.03937007874015748
	},
	1403: {
		event: 'input5.slider',
		progress: 0.031496062992125984
	},
	1404: {
		event: 'input5.slider',
		progress: 0.023622047244094488
	},
	1405: {
		event: 'input5.slider',
		progress: 0.015748031496062992
	},
	1406: {
		event: 'input5.slider',
		progress: 0.007874015748031496
	},
	1407: {
		event: 'input5.slider',
		progress: 0
	},
	1536: {
		event: 'input6.slider',
		progress: 1
	},
	1537: {
		event: 'input6.slider',
		progress: 0.9921259842519685
	},
	1538: {
		event: 'input6.slider',
		progress: 0.984251968503937
	},
	1539: {
		event: 'input6.slider',
		progress: 0.9763779527559056
	},
	1540: {
		event: 'input6.slider',
		progress: 0.968503937007874
	},
	1541: {
		event: 'input6.slider',
		progress: 0.9606299212598425
	},
	1542: {
		event: 'input6.slider',
		progress: 0.952755905511811
	},
	1543: {
		event: 'input6.slider',
		progress: 0.9448818897637795
	},
	1544: {
		event: 'input6.slider',
		progress: 0.937007874015748
	},
	1545: {
		event: 'input6.slider',
		progress: 0.9291338582677166
	},
	1546: {
		event: 'input6.slider',
		progress: 0.9212598425196851
	},
	1547: {
		event: 'input6.slider',
		progress: 0.9133858267716536
	},
	1548: {
		event: 'input6.slider',
		progress: 0.905511811023622
	},
	1549: {
		event: 'input6.slider',
		progress: 0.8976377952755905
	},
	1550: {
		event: 'input6.slider',
		progress: 0.889763779527559
	},
	1551: {
		event: 'input6.slider',
		progress: 0.8818897637795275
	},
	1552: {
		event: 'input6.slider',
		progress: 0.8740157480314961
	},
	1553: {
		event: 'input6.slider',
		progress: 0.8661417322834646
	},
	1554: {
		event: 'input6.slider',
		progress: 0.8582677165354331
	},
	1555: {
		event: 'input6.slider',
		progress: 0.8503937007874016
	},
	1556: {
		event: 'input6.slider',
		progress: 0.84251968503937
	},
	1557: {
		event: 'input6.slider',
		progress: 0.8346456692913385
	},
	1558: {
		event: 'input6.slider',
		progress: 0.8267716535433071
	},
	1559: {
		event: 'input6.slider',
		progress: 0.8188976377952756
	},
	1560: {
		event: 'input6.slider',
		progress: 0.8110236220472441
	},
	1561: {
		event: 'input6.slider',
		progress: 0.8031496062992126
	},
	1562: {
		event: 'input6.slider',
		progress: 0.7952755905511811
	},
	1563: {
		event: 'input6.slider',
		progress: 0.7874015748031497
	},
	1564: {
		event: 'input6.slider',
		progress: 0.7795275590551181
	},
	1565: {
		event: 'input6.slider',
		progress: 0.7716535433070866
	},
	1566: {
		event: 'input6.slider',
		progress: 0.7637795275590551
	},
	1567: {
		event: 'input6.slider',
		progress: 0.7559055118110236
	},
	1568: {
		event: 'input6.slider',
		progress: 0.7480314960629921
	},
	1569: {
		event: 'input6.slider',
		progress: 0.7401574803149606
	},
	1570: {
		event: 'input6.slider',
		progress: 0.7322834645669292
	},
	1571: {
		event: 'input6.slider',
		progress: 0.7244094488188977
	},
	1572: {
		event: 'input6.slider',
		progress: 0.7165354330708661
	},
	1573: {
		event: 'input6.slider',
		progress: 0.7086614173228346
	},
	1574: {
		event: 'input6.slider',
		progress: 0.7007874015748031
	},
	1575: {
		event: 'input6.slider',
		progress: 0.6929133858267716
	},
	1576: {
		event: 'input6.slider',
		progress: 0.6850393700787402
	},
	1577: {
		event: 'input6.slider',
		progress: 0.6771653543307087
	},
	1578: {
		event: 'input6.slider',
		progress: 0.6692913385826772
	},
	1579: {
		event: 'input6.slider',
		progress: 0.6614173228346457
	},
	1580: {
		event: 'input6.slider',
		progress: 0.6535433070866141
	},
	1581: {
		event: 'input6.slider',
		progress: 0.6456692913385826
	},
	1582: {
		event: 'input6.slider',
		progress: 0.6377952755905512
	},
	1583: {
		event: 'input6.slider',
		progress: 0.6299212598425197
	},
	1584: {
		event: 'input6.slider',
		progress: 0.6220472440944882
	},
	1585: {
		event: 'input6.slider',
		progress: 0.6141732283464567
	},
	1586: {
		event: 'input6.slider',
		progress: 0.6062992125984252
	},
	1587: {
		event: 'input6.slider',
		progress: 0.5984251968503937
	},
	1588: {
		event: 'input6.slider',
		progress: 0.5905511811023622
	},
	1589: {
		event: 'input6.slider',
		progress: 0.5826771653543307
	},
	1590: {
		event: 'input6.slider',
		progress: 0.5748031496062992
	},
	1591: {
		event: 'input6.slider',
		progress: 0.5669291338582677
	},
	1592: {
		event: 'input6.slider',
		progress: 0.5590551181102362
	},
	1593: {
		event: 'input6.slider',
		progress: 0.5511811023622047
	},
	1594: {
		event: 'input6.slider',
		progress: 0.5433070866141733
	},
	1595: {
		event: 'input6.slider',
		progress: 0.5354330708661418
	},
	1596: {
		event: 'input6.slider',
		progress: 0.5275590551181102
	},
	1597: {
		event: 'input6.slider',
		progress: 0.5196850393700787
	},
	1598: {
		event: 'input6.slider',
		progress: 0.5118110236220472
	},
	1599: {
		event: 'input6.slider',
		progress: 0.5039370078740157
	},
	1600: {
		event: 'input6.slider',
		progress: 0.49606299212598426
	},
	1601: {
		event: 'input6.slider',
		progress: 0.4881889763779528
	},
	1602: {
		event: 'input6.slider',
		progress: 0.48031496062992124
	},
	1603: {
		event: 'input6.slider',
		progress: 0.47244094488188976
	},
	1604: {
		event: 'input6.slider',
		progress: 0.4645669291338583
	},
	1605: {
		event: 'input6.slider',
		progress: 0.4566929133858268
	},
	1606: {
		event: 'input6.slider',
		progress: 0.44881889763779526
	},
	1607: {
		event: 'input6.slider',
		progress: 0.4409448818897638
	},
	1608: {
		event: 'input6.slider',
		progress: 0.4330708661417323
	},
	1609: {
		event: 'input6.slider',
		progress: 0.4251968503937008
	},
	1610: {
		event: 'input6.slider',
		progress: 0.41732283464566927
	},
	1611: {
		event: 'input6.slider',
		progress: 0.4094488188976378
	},
	1612: {
		event: 'input6.slider',
		progress: 0.4015748031496063
	},
	1613: {
		event: 'input6.slider',
		progress: 0.3937007874015748
	},
	1614: {
		event: 'input6.slider',
		progress: 0.3858267716535433
	},
	1615: {
		event: 'input6.slider',
		progress: 0.3779527559055118
	},
	1616: {
		event: 'input6.slider',
		progress: 0.3700787401574803
	},
	1617: {
		event: 'input6.slider',
		progress: 0.36220472440944884
	},
	1618: {
		event: 'input6.slider',
		progress: 0.3543307086614173
	},
	1619: {
		event: 'input6.slider',
		progress: 0.3464566929133858
	},
	1620: {
		event: 'input6.slider',
		progress: 0.33858267716535434
	},
	1621: {
		event: 'input6.slider',
		progress: 0.33070866141732286
	},
	1622: {
		event: 'input6.slider',
		progress: 0.3228346456692913
	},
	1623: {
		event: 'input6.slider',
		progress: 0.31496062992125984
	},
	1624: {
		event: 'input6.slider',
		progress: 0.30708661417322836
	},
	1625: {
		event: 'input6.slider',
		progress: 0.2992125984251969
	},
	1626: {
		event: 'input6.slider',
		progress: 0.29133858267716534
	},
	1627: {
		event: 'input6.slider',
		progress: 0.28346456692913385
	},
	1628: {
		event: 'input6.slider',
		progress: 0.2755905511811024
	},
	1629: {
		event: 'input6.slider',
		progress: 0.2677165354330709
	},
	1630: {
		event: 'input6.slider',
		progress: 0.25984251968503935
	},
	1631: {
		event: 'input6.slider',
		progress: 0.25196850393700787
	},
	1632: {
		event: 'input6.slider',
		progress: 0.2440944881889764
	},
	1633: {
		event: 'input6.slider',
		progress: 0.23622047244094488
	},
	1634: {
		event: 'input6.slider',
		progress: 0.2283464566929134
	},
	1635: {
		event: 'input6.slider',
		progress: 0.2204724409448819
	},
	1636: {
		event: 'input6.slider',
		progress: 0.2125984251968504
	},
	1637: {
		event: 'input6.slider',
		progress: 0.2047244094488189
	},
	1638: {
		event: 'input6.slider',
		progress: 0.1968503937007874
	},
	1639: {
		event: 'input6.slider',
		progress: 0.1889763779527559
	},
	1640: {
		event: 'input6.slider',
		progress: 0.18110236220472442
	},
	1641: {
		event: 'input6.slider',
		progress: 0.1732283464566929
	},
	1642: {
		event: 'input6.slider',
		progress: 0.16535433070866143
	},
	1643: {
		event: 'input6.slider',
		progress: 0.15748031496062992
	},
	1644: {
		event: 'input6.slider',
		progress: 0.14960629921259844
	},
	1645: {
		event: 'input6.slider',
		progress: 0.14173228346456693
	},
	1646: {
		event: 'input6.slider',
		progress: 0.13385826771653545
	},
	1647: {
		event: 'input6.slider',
		progress: 0.12598425196850394
	},
	1648: {
		event: 'input6.slider',
		progress: 0.11811023622047244
	},
	1649: {
		event: 'input6.slider',
		progress: 0.11023622047244094
	},
	1650: {
		event: 'input6.slider',
		progress: 0.10236220472440945
	},
	1651: {
		event: 'input6.slider',
		progress: 0.09448818897637795
	},
	1652: {
		event: 'input6.slider',
		progress: 0.08661417322834646
	},
	1653: {
		event: 'input6.slider',
		progress: 0.07874015748031496
	},
	1654: {
		event: 'input6.slider',
		progress: 0.07086614173228346
	},
	1655: {
		event: 'input6.slider',
		progress: 0.06299212598425197
	},
	1656: {
		event: 'input6.slider',
		progress: 0.05511811023622047
	},
	1657: {
		event: 'input6.slider',
		progress: 0.047244094488188976
	},
	1658: {
		event: 'input6.slider',
		progress: 0.03937007874015748
	},
	1659: {
		event: 'input6.slider',
		progress: 0.031496062992125984
	},
	1660: {
		event: 'input6.slider',
		progress: 0.023622047244094488
	},
	1661: {
		event: 'input6.slider',
		progress: 0.015748031496062992
	},
	1662: {
		event: 'input6.slider',
		progress: 0.007874015748031496
	},
	1663: {
		event: 'input6.slider',
		progress: 0
	},
	1792: {
		event: 'input1.eq1',
		progress: 0
	},
	1793: {
		event: 'input1.eq1',
		progress: 0.007874015748031496
	},
	1794: {
		event: 'input1.eq1',
		progress: 0.015748031496062992
	},
	1795: {
		event: 'input1.eq1',
		progress: 0.023622047244094488
	},
	1796: {
		event: 'input1.eq1',
		progress: 0.031496062992125984
	},
	1797: {
		event: 'input1.eq1',
		progress: 0.03937007874015748
	},
	1798: {
		event: 'input1.eq1',
		progress: 0.047244094488188976
	},
	1799: {
		event: 'input1.eq1',
		progress: 0.05511811023622047
	},
	1800: {
		event: 'input1.eq1',
		progress: 0.06299212598425197
	},
	1801: {
		event: 'input1.eq1',
		progress: 0.07086614173228346
	},
	1802: {
		event: 'input1.eq1',
		progress: 0.07874015748031496
	},
	1803: {
		event: 'input1.eq1',
		progress: 0.08661417322834646
	},
	1804: {
		event: 'input1.eq1',
		progress: 0.09448818897637795
	},
	1805: {
		event: 'input1.eq1',
		progress: 0.10236220472440945
	},
	1806: {
		event: 'input1.eq1',
		progress: 0.11023622047244094
	},
	1807: {
		event: 'input1.eq1',
		progress: 0.11811023622047244
	},
	1808: {
		event: 'input1.eq1',
		progress: 0.12598425196850394
	},
	1809: {
		event: 'input1.eq1',
		progress: 0.13385826771653545
	},
	1810: {
		event: 'input1.eq1',
		progress: 0.14173228346456693
	},
	1811: {
		event: 'input1.eq1',
		progress: 0.14960629921259844
	},
	1812: {
		event: 'input1.eq1',
		progress: 0.15748031496062992
	},
	1813: {
		event: 'input1.eq1',
		progress: 0.16535433070866143
	},
	1814: {
		event: 'input1.eq1',
		progress: 0.1732283464566929
	},
	1815: {
		event: 'input1.eq1',
		progress: 0.18110236220472442
	},
	1816: {
		event: 'input1.eq1',
		progress: 0.1889763779527559
	},
	1817: {
		event: 'input1.eq1',
		progress: 0.1968503937007874
	},
	1818: {
		event: 'input1.eq1',
		progress: 0.2047244094488189
	},
	1819: {
		event: 'input1.eq1',
		progress: 0.2125984251968504
	},
	1820: {
		event: 'input1.eq1',
		progress: 0.2204724409448819
	},
	1821: {
		event: 'input1.eq1',
		progress: 0.2283464566929134
	},
	1822: {
		event: 'input1.eq1',
		progress: 0.23622047244094488
	},
	1823: {
		event: 'input1.eq1',
		progress: 0.2440944881889764
	},
	1824: {
		event: 'input1.eq1',
		progress: 0.25196850393700787
	},
	1825: {
		event: 'input1.eq1',
		progress: 0.25984251968503935
	},
	1826: {
		event: 'input1.eq1',
		progress: 0.2677165354330709
	},
	1827: {
		event: 'input1.eq1',
		progress: 0.2755905511811024
	},
	1828: {
		event: 'input1.eq1',
		progress: 0.28346456692913385
	},
	1829: {
		event: 'input1.eq1',
		progress: 0.29133858267716534
	},
	1830: {
		event: 'input1.eq1',
		progress: 0.2992125984251969
	},
	1831: {
		event: 'input1.eq1',
		progress: 0.30708661417322836
	},
	1832: {
		event: 'input1.eq1',
		progress: 0.31496062992125984
	},
	1833: {
		event: 'input1.eq1',
		progress: 0.3228346456692913
	},
	1834: {
		event: 'input1.eq1',
		progress: 0.33070866141732286
	},
	1835: {
		event: 'input1.eq1',
		progress: 0.33858267716535434
	},
	1836: {
		event: 'input1.eq1',
		progress: 0.3464566929133858
	},
	1837: {
		event: 'input1.eq1',
		progress: 0.3543307086614173
	},
	1838: {
		event: 'input1.eq1',
		progress: 0.36220472440944884
	},
	1839: {
		event: 'input1.eq1',
		progress: 0.3700787401574803
	},
	1840: {
		event: 'input1.eq1',
		progress: 0.3779527559055118
	},
	1841: {
		event: 'input1.eq1',
		progress: 0.3858267716535433
	},
	1842: {
		event: 'input1.eq1',
		progress: 0.3937007874015748
	},
	1843: {
		event: 'input1.eq1',
		progress: 0.4015748031496063
	},
	1844: {
		event: 'input1.eq1',
		progress: 0.4094488188976378
	},
	1845: {
		event: 'input1.eq1',
		progress: 0.41732283464566927
	},
	1846: {
		event: 'input1.eq1',
		progress: 0.4251968503937008
	},
	1847: {
		event: 'input1.eq1',
		progress: 0.4330708661417323
	},
	1848: {
		event: 'input1.eq1',
		progress: 0.4409448818897638
	},
	1849: {
		event: 'input1.eq1',
		progress: 0.44881889763779526
	},
	1850: {
		event: 'input1.eq1',
		progress: 0.4566929133858268
	},
	1851: {
		event: 'input1.eq1',
		progress: 0.4645669291338583
	},
	1852: {
		event: 'input1.eq1',
		progress: 0.47244094488188976
	},
	1853: {
		event: 'input1.eq1',
		progress: 0.48031496062992124
	},
	1854: {
		event: 'input1.eq1',
		progress: 0.4881889763779528
	},
	1855: {
		event: 'input1.eq1',
		progress: 0.49606299212598426
	},
	1856: {
		event: 'input1.eq1',
		progress: 0.5039370078740157
	},
	1857: {
		event: 'input1.eq1',
		progress: 0.5118110236220472
	},
	1858: {
		event: 'input1.eq1',
		progress: 0.5196850393700787
	},
	1859: {
		event: 'input1.eq1',
		progress: 0.5275590551181102
	},
	1860: {
		event: 'input1.eq1',
		progress: 0.5354330708661418
	},
	1861: {
		event: 'input1.eq1',
		progress: 0.5433070866141733
	},
	1862: {
		event: 'input1.eq1',
		progress: 0.5511811023622047
	},
	1863: {
		event: 'input1.eq1',
		progress: 0.5590551181102362
	},
	1864: {
		event: 'input1.eq1',
		progress: 0.5669291338582677
	},
	1865: {
		event: 'input1.eq1',
		progress: 0.5748031496062992
	},
	1866: {
		event: 'input1.eq1',
		progress: 0.5826771653543307
	},
	1867: {
		event: 'input1.eq1',
		progress: 0.5905511811023622
	},
	1868: {
		event: 'input1.eq1',
		progress: 0.5984251968503937
	},
	1869: {
		event: 'input1.eq1',
		progress: 0.6062992125984252
	},
	1870: {
		event: 'input1.eq1',
		progress: 0.6141732283464567
	},
	1871: {
		event: 'input1.eq1',
		progress: 0.6220472440944882
	},
	1872: {
		event: 'input1.eq1',
		progress: 0.6299212598425197
	},
	1873: {
		event: 'input1.eq1',
		progress: 0.6377952755905512
	},
	1874: {
		event: 'input1.eq1',
		progress: 0.6456692913385826
	},
	1875: {
		event: 'input1.eq1',
		progress: 0.6535433070866141
	},
	1876: {
		event: 'input1.eq1',
		progress: 0.6614173228346457
	},
	1877: {
		event: 'input1.eq1',
		progress: 0.6692913385826772
	},
	1878: {
		event: 'input1.eq1',
		progress: 0.6771653543307087
	},
	1879: {
		event: 'input1.eq1',
		progress: 0.6850393700787402
	},
	1880: {
		event: 'input1.eq1',
		progress: 0.6929133858267716
	},
	1881: {
		event: 'input1.eq1',
		progress: 0.7007874015748031
	},
	1882: {
		event: 'input1.eq1',
		progress: 0.7086614173228346
	},
	1883: {
		event: 'input1.eq1',
		progress: 0.7165354330708661
	},
	1884: {
		event: 'input1.eq1',
		progress: 0.7244094488188977
	},
	1885: {
		event: 'input1.eq1',
		progress: 0.7322834645669292
	},
	1886: {
		event: 'input1.eq1',
		progress: 0.7401574803149606
	},
	1887: {
		event: 'input1.eq1',
		progress: 0.7480314960629921
	},
	1888: {
		event: 'input1.eq1',
		progress: 0.7559055118110236
	},
	1889: {
		event: 'input1.eq1',
		progress: 0.7637795275590551
	},
	1890: {
		event: 'input1.eq1',
		progress: 0.7716535433070866
	},
	1891: {
		event: 'input1.eq1',
		progress: 0.7795275590551181
	},
	1892: {
		event: 'input1.eq1',
		progress: 0.7874015748031497
	},
	1893: {
		event: 'input1.eq1',
		progress: 0.7952755905511811
	},
	1894: {
		event: 'input1.eq1',
		progress: 0.8031496062992126
	},
	1895: {
		event: 'input1.eq1',
		progress: 0.8110236220472441
	},
	1896: {
		event: 'input1.eq1',
		progress: 0.8188976377952756
	},
	1897: {
		event: 'input1.eq1',
		progress: 0.8267716535433071
	},
	1898: {
		event: 'input1.eq1',
		progress: 0.8346456692913385
	},
	1899: {
		event: 'input1.eq1',
		progress: 0.84251968503937
	},
	1900: {
		event: 'input1.eq1',
		progress: 0.8503937007874016
	},
	1901: {
		event: 'input1.eq1',
		progress: 0.8582677165354331
	},
	1902: {
		event: 'input1.eq1',
		progress: 0.8661417322834646
	},
	1903: {
		event: 'input1.eq1',
		progress: 0.8740157480314961
	},
	1904: {
		event: 'input1.eq1',
		progress: 0.8818897637795275
	},
	1905: {
		event: 'input1.eq1',
		progress: 0.889763779527559
	},
	1906: {
		event: 'input1.eq1',
		progress: 0.8976377952755905
	},
	1907: {
		event: 'input1.eq1',
		progress: 0.905511811023622
	},
	1908: {
		event: 'input1.eq1',
		progress: 0.9133858267716536
	},
	1909: {
		event: 'input1.eq1',
		progress: 0.9212598425196851
	},
	1910: {
		event: 'input1.eq1',
		progress: 0.9291338582677166
	},
	1911: {
		event: 'input1.eq1',
		progress: 0.937007874015748
	},
	1912: {
		event: 'input1.eq1',
		progress: 0.9448818897637795
	},
	1913: {
		event: 'input1.eq1',
		progress: 0.952755905511811
	},
	1914: {
		event: 'input1.eq1',
		progress: 0.9606299212598425
	},
	1915: {
		event: 'input1.eq1',
		progress: 0.968503937007874
	},
	1916: {
		event: 'input1.eq1',
		progress: 0.9763779527559056
	},
	1917: {
		event: 'input1.eq1',
		progress: 0.984251968503937
	},
	1918: {
		event: 'input1.eq1',
		progress: 0.9921259842519685
	},
	1919: {
		event: 'input1.eq1',
		progress: 1
	},
	2048: {
		event: 'input2.eq1',
		progress: 0
	},
	2049: {
		event: 'input2.eq1',
		progress: 0.007874015748031496
	},
	2050: {
		event: 'input2.eq1',
		progress: 0.015748031496062992
	},
	2051: {
		event: 'input2.eq1',
		progress: 0.023622047244094488
	},
	2052: {
		event: 'input2.eq1',
		progress: 0.031496062992125984
	},
	2053: {
		event: 'input2.eq1',
		progress: 0.03937007874015748
	},
	2054: {
		event: 'input2.eq1',
		progress: 0.047244094488188976
	},
	2055: {
		event: 'input2.eq1',
		progress: 0.05511811023622047
	},
	2056: {
		event: 'input2.eq1',
		progress: 0.06299212598425197
	},
	2057: {
		event: 'input2.eq1',
		progress: 0.07086614173228346
	},
	2058: {
		event: 'input2.eq1',
		progress: 0.07874015748031496
	},
	2059: {
		event: 'input2.eq1',
		progress: 0.08661417322834646
	},
	2060: {
		event: 'input2.eq1',
		progress: 0.09448818897637795
	},
	2061: {
		event: 'input2.eq1',
		progress: 0.10236220472440945
	},
	2062: {
		event: 'input2.eq1',
		progress: 0.11023622047244094
	},
	2063: {
		event: 'input2.eq1',
		progress: 0.11811023622047244
	},
	2064: {
		event: 'input2.eq1',
		progress: 0.12598425196850394
	},
	2065: {
		event: 'input2.eq1',
		progress: 0.13385826771653545
	},
	2066: {
		event: 'input2.eq1',
		progress: 0.14173228346456693
	},
	2067: {
		event: 'input2.eq1',
		progress: 0.14960629921259844
	},
	2068: {
		event: 'input2.eq1',
		progress: 0.15748031496062992
	},
	2069: {
		event: 'input2.eq1',
		progress: 0.16535433070866143
	},
	2070: {
		event: 'input2.eq1',
		progress: 0.1732283464566929
	},
	2071: {
		event: 'input2.eq1',
		progress: 0.18110236220472442
	},
	2072: {
		event: 'input2.eq1',
		progress: 0.1889763779527559
	},
	2073: {
		event: 'input2.eq1',
		progress: 0.1968503937007874
	},
	2074: {
		event: 'input2.eq1',
		progress: 0.2047244094488189
	},
	2075: {
		event: 'input2.eq1',
		progress: 0.2125984251968504
	},
	2076: {
		event: 'input2.eq1',
		progress: 0.2204724409448819
	},
	2077: {
		event: 'input2.eq1',
		progress: 0.2283464566929134
	},
	2078: {
		event: 'input2.eq1',
		progress: 0.23622047244094488
	},
	2079: {
		event: 'input2.eq1',
		progress: 0.2440944881889764
	},
	2080: {
		event: 'input2.eq1',
		progress: 0.25196850393700787
	},
	2081: {
		event: 'input2.eq1',
		progress: 0.25984251968503935
	},
	2082: {
		event: 'input2.eq1',
		progress: 0.2677165354330709
	},
	2083: {
		event: 'input2.eq1',
		progress: 0.2755905511811024
	},
	2084: {
		event: 'input2.eq1',
		progress: 0.28346456692913385
	},
	2085: {
		event: 'input2.eq1',
		progress: 0.29133858267716534
	},
	2086: {
		event: 'input2.eq1',
		progress: 0.2992125984251969
	},
	2087: {
		event: 'input2.eq1',
		progress: 0.30708661417322836
	},
	2088: {
		event: 'input2.eq1',
		progress: 0.31496062992125984
	},
	2089: {
		event: 'input2.eq1',
		progress: 0.3228346456692913
	},
	2090: {
		event: 'input2.eq1',
		progress: 0.33070866141732286
	},
	2091: {
		event: 'input2.eq1',
		progress: 0.33858267716535434
	},
	2092: {
		event: 'input2.eq1',
		progress: 0.3464566929133858
	},
	2093: {
		event: 'input2.eq1',
		progress: 0.3543307086614173
	},
	2094: {
		event: 'input2.eq1',
		progress: 0.36220472440944884
	},
	2095: {
		event: 'input2.eq1',
		progress: 0.3700787401574803
	},
	2096: {
		event: 'input2.eq1',
		progress: 0.3779527559055118
	},
	2097: {
		event: 'input2.eq1',
		progress: 0.3858267716535433
	},
	2098: {
		event: 'input2.eq1',
		progress: 0.3937007874015748
	},
	2099: {
		event: 'input2.eq1',
		progress: 0.4015748031496063
	},
	2100: {
		event: 'input2.eq1',
		progress: 0.4094488188976378
	},
	2101: {
		event: 'input2.eq1',
		progress: 0.41732283464566927
	},
	2102: {
		event: 'input2.eq1',
		progress: 0.4251968503937008
	},
	2103: {
		event: 'input2.eq1',
		progress: 0.4330708661417323
	},
	2104: {
		event: 'input2.eq1',
		progress: 0.4409448818897638
	},
	2105: {
		event: 'input2.eq1',
		progress: 0.44881889763779526
	},
	2106: {
		event: 'input2.eq1',
		progress: 0.4566929133858268
	},
	2107: {
		event: 'input2.eq1',
		progress: 0.4645669291338583
	},
	2108: {
		event: 'input2.eq1',
		progress: 0.47244094488188976
	},
	2109: {
		event: 'input2.eq1',
		progress: 0.48031496062992124
	},
	2110: {
		event: 'input2.eq1',
		progress: 0.4881889763779528
	},
	2111: {
		event: 'input2.eq1',
		progress: 0.49606299212598426
	},
	2112: {
		event: 'input2.eq1',
		progress: 0.5039370078740157
	},
	2113: {
		event: 'input2.eq1',
		progress: 0.5118110236220472
	},
	2114: {
		event: 'input2.eq1',
		progress: 0.5196850393700787
	},
	2115: {
		event: 'input2.eq1',
		progress: 0.5275590551181102
	},
	2116: {
		event: 'input2.eq1',
		progress: 0.5354330708661418
	},
	2117: {
		event: 'input2.eq1',
		progress: 0.5433070866141733
	},
	2118: {
		event: 'input2.eq1',
		progress: 0.5511811023622047
	},
	2119: {
		event: 'input2.eq1',
		progress: 0.5590551181102362
	},
	2120: {
		event: 'input2.eq1',
		progress: 0.5669291338582677
	},
	2121: {
		event: 'input2.eq1',
		progress: 0.5748031496062992
	},
	2122: {
		event: 'input2.eq1',
		progress: 0.5826771653543307
	},
	2123: {
		event: 'input2.eq1',
		progress: 0.5905511811023622
	},
	2124: {
		event: 'input2.eq1',
		progress: 0.5984251968503937
	},
	2125: {
		event: 'input2.eq1',
		progress: 0.6062992125984252
	},
	2126: {
		event: 'input2.eq1',
		progress: 0.6141732283464567
	},
	2127: {
		event: 'input2.eq1',
		progress: 0.6220472440944882
	},
	2128: {
		event: 'input2.eq1',
		progress: 0.6299212598425197
	},
	2129: {
		event: 'input2.eq1',
		progress: 0.6377952755905512
	},
	2130: {
		event: 'input2.eq1',
		progress: 0.6456692913385826
	},
	2131: {
		event: 'input2.eq1',
		progress: 0.6535433070866141
	},
	2132: {
		event: 'input2.eq1',
		progress: 0.6614173228346457
	},
	2133: {
		event: 'input2.eq1',
		progress: 0.6692913385826772
	},
	2134: {
		event: 'input2.eq1',
		progress: 0.6771653543307087
	},
	2135: {
		event: 'input2.eq1',
		progress: 0.6850393700787402
	},
	2136: {
		event: 'input2.eq1',
		progress: 0.6929133858267716
	},
	2137: {
		event: 'input2.eq1',
		progress: 0.7007874015748031
	},
	2138: {
		event: 'input2.eq1',
		progress: 0.7086614173228346
	},
	2139: {
		event: 'input2.eq1',
		progress: 0.7165354330708661
	},
	2140: {
		event: 'input2.eq1',
		progress: 0.7244094488188977
	},
	2141: {
		event: 'input2.eq1',
		progress: 0.7322834645669292
	},
	2142: {
		event: 'input2.eq1',
		progress: 0.7401574803149606
	},
	2143: {
		event: 'input2.eq1',
		progress: 0.7480314960629921
	},
	2144: {
		event: 'input2.eq1',
		progress: 0.7559055118110236
	},
	2145: {
		event: 'input2.eq1',
		progress: 0.7637795275590551
	},
	2146: {
		event: 'input2.eq1',
		progress: 0.7716535433070866
	},
	2147: {
		event: 'input2.eq1',
		progress: 0.7795275590551181
	},
	2148: {
		event: 'input2.eq1',
		progress: 0.7874015748031497
	},
	2149: {
		event: 'input2.eq1',
		progress: 0.7952755905511811
	},
	2150: {
		event: 'input2.eq1',
		progress: 0.8031496062992126
	},
	2151: {
		event: 'input2.eq1',
		progress: 0.8110236220472441
	},
	2152: {
		event: 'input2.eq1',
		progress: 0.8188976377952756
	},
	2153: {
		event: 'input2.eq1',
		progress: 0.8267716535433071
	},
	2154: {
		event: 'input2.eq1',
		progress: 0.8346456692913385
	},
	2155: {
		event: 'input2.eq1',
		progress: 0.84251968503937
	},
	2156: {
		event: 'input2.eq1',
		progress: 0.8503937007874016
	},
	2157: {
		event: 'input2.eq1',
		progress: 0.8582677165354331
	},
	2158: {
		event: 'input2.eq1',
		progress: 0.8661417322834646
	},
	2159: {
		event: 'input2.eq1',
		progress: 0.8740157480314961
	},
	2160: {
		event: 'input2.eq1',
		progress: 0.8818897637795275
	},
	2161: {
		event: 'input2.eq1',
		progress: 0.889763779527559
	},
	2162: {
		event: 'input2.eq1',
		progress: 0.8976377952755905
	},
	2163: {
		event: 'input2.eq1',
		progress: 0.905511811023622
	},
	2164: {
		event: 'input2.eq1',
		progress: 0.9133858267716536
	},
	2165: {
		event: 'input2.eq1',
		progress: 0.9212598425196851
	},
	2166: {
		event: 'input2.eq1',
		progress: 0.9291338582677166
	},
	2167: {
		event: 'input2.eq1',
		progress: 0.937007874015748
	},
	2168: {
		event: 'input2.eq1',
		progress: 0.9448818897637795
	},
	2169: {
		event: 'input2.eq1',
		progress: 0.952755905511811
	},
	2170: {
		event: 'input2.eq1',
		progress: 0.9606299212598425
	},
	2171: {
		event: 'input2.eq1',
		progress: 0.968503937007874
	},
	2172: {
		event: 'input2.eq1',
		progress: 0.9763779527559056
	},
	2173: {
		event: 'input2.eq1',
		progress: 0.984251968503937
	},
	2174: {
		event: 'input2.eq1',
		progress: 0.9921259842519685
	},
	2175: {
		event: 'input2.eq1',
		progress: 1
	},
	2304: {
		event: 'input3.eq1',
		progress: 0
	},
	2305: {
		event: 'input3.eq1',
		progress: 0.007874015748031496
	},
	2306: {
		event: 'input3.eq1',
		progress: 0.015748031496062992
	},
	2307: {
		event: 'input3.eq1',
		progress: 0.023622047244094488
	},
	2308: {
		event: 'input3.eq1',
		progress: 0.031496062992125984
	},
	2309: {
		event: 'input3.eq1',
		progress: 0.03937007874015748
	},
	2310: {
		event: 'input3.eq1',
		progress: 0.047244094488188976
	},
	2311: {
		event: 'input3.eq1',
		progress: 0.05511811023622047
	},
	2312: {
		event: 'input3.eq1',
		progress: 0.06299212598425197
	},
	2313: {
		event: 'input3.eq1',
		progress: 0.07086614173228346
	},
	2314: {
		event: 'input3.eq1',
		progress: 0.07874015748031496
	},
	2315: {
		event: 'input3.eq1',
		progress: 0.08661417322834646
	},
	2316: {
		event: 'input3.eq1',
		progress: 0.09448818897637795
	},
	2317: {
		event: 'input3.eq1',
		progress: 0.10236220472440945
	},
	2318: {
		event: 'input3.eq1',
		progress: 0.11023622047244094
	},
	2319: {
		event: 'input3.eq1',
		progress: 0.11811023622047244
	},
	2320: {
		event: 'input3.eq1',
		progress: 0.12598425196850394
	},
	2321: {
		event: 'input3.eq1',
		progress: 0.13385826771653545
	},
	2322: {
		event: 'input3.eq1',
		progress: 0.14173228346456693
	},
	2323: {
		event: 'input3.eq1',
		progress: 0.14960629921259844
	},
	2324: {
		event: 'input3.eq1',
		progress: 0.15748031496062992
	},
	2325: {
		event: 'input3.eq1',
		progress: 0.16535433070866143
	},
	2326: {
		event: 'input3.eq1',
		progress: 0.1732283464566929
	},
	2327: {
		event: 'input3.eq1',
		progress: 0.18110236220472442
	},
	2328: {
		event: 'input3.eq1',
		progress: 0.1889763779527559
	},
	2329: {
		event: 'input3.eq1',
		progress: 0.1968503937007874
	},
	2330: {
		event: 'input3.eq1',
		progress: 0.2047244094488189
	},
	2331: {
		event: 'input3.eq1',
		progress: 0.2125984251968504
	},
	2332: {
		event: 'input3.eq1',
		progress: 0.2204724409448819
	},
	2333: {
		event: 'input3.eq1',
		progress: 0.2283464566929134
	},
	2334: {
		event: 'input3.eq1',
		progress: 0.23622047244094488
	},
	2335: {
		event: 'input3.eq1',
		progress: 0.2440944881889764
	},
	2336: {
		event: 'input3.eq1',
		progress: 0.25196850393700787
	},
	2337: {
		event: 'input3.eq1',
		progress: 0.25984251968503935
	},
	2338: {
		event: 'input3.eq1',
		progress: 0.2677165354330709
	},
	2339: {
		event: 'input3.eq1',
		progress: 0.2755905511811024
	},
	2340: {
		event: 'input3.eq1',
		progress: 0.28346456692913385
	},
	2341: {
		event: 'input3.eq1',
		progress: 0.29133858267716534
	},
	2342: {
		event: 'input3.eq1',
		progress: 0.2992125984251969
	},
	2343: {
		event: 'input3.eq1',
		progress: 0.30708661417322836
	},
	2344: {
		event: 'input3.eq1',
		progress: 0.31496062992125984
	},
	2345: {
		event: 'input3.eq1',
		progress: 0.3228346456692913
	},
	2346: {
		event: 'input3.eq1',
		progress: 0.33070866141732286
	},
	2347: {
		event: 'input3.eq1',
		progress: 0.33858267716535434
	},
	2348: {
		event: 'input3.eq1',
		progress: 0.3464566929133858
	},
	2349: {
		event: 'input3.eq1',
		progress: 0.3543307086614173
	},
	2350: {
		event: 'input3.eq1',
		progress: 0.36220472440944884
	},
	2351: {
		event: 'input3.eq1',
		progress: 0.3700787401574803
	},
	2352: {
		event: 'input3.eq1',
		progress: 0.3779527559055118
	},
	2353: {
		event: 'input3.eq1',
		progress: 0.3858267716535433
	},
	2354: {
		event: 'input3.eq1',
		progress: 0.3937007874015748
	},
	2355: {
		event: 'input3.eq1',
		progress: 0.4015748031496063
	},
	2356: {
		event: 'input3.eq1',
		progress: 0.4094488188976378
	},
	2357: {
		event: 'input3.eq1',
		progress: 0.41732283464566927
	},
	2358: {
		event: 'input3.eq1',
		progress: 0.4251968503937008
	},
	2359: {
		event: 'input3.eq1',
		progress: 0.4330708661417323
	},
	2360: {
		event: 'input3.eq1',
		progress: 0.4409448818897638
	},
	2361: {
		event: 'input3.eq1',
		progress: 0.44881889763779526
	},
	2362: {
		event: 'input3.eq1',
		progress: 0.4566929133858268
	},
	2363: {
		event: 'input3.eq1',
		progress: 0.4645669291338583
	},
	2364: {
		event: 'input3.eq1',
		progress: 0.47244094488188976
	},
	2365: {
		event: 'input3.eq1',
		progress: 0.48031496062992124
	},
	2366: {
		event: 'input3.eq1',
		progress: 0.4881889763779528
	},
	2367: {
		event: 'input3.eq1',
		progress: 0.49606299212598426
	},
	2368: {
		event: 'input3.eq1',
		progress: 0.5039370078740157
	},
	2369: {
		event: 'input3.eq1',
		progress: 0.5118110236220472
	},
	2370: {
		event: 'input3.eq1',
		progress: 0.5196850393700787
	},
	2371: {
		event: 'input3.eq1',
		progress: 0.5275590551181102
	},
	2372: {
		event: 'input3.eq1',
		progress: 0.5354330708661418
	},
	2373: {
		event: 'input3.eq1',
		progress: 0.5433070866141733
	},
	2374: {
		event: 'input3.eq1',
		progress: 0.5511811023622047
	},
	2375: {
		event: 'input3.eq1',
		progress: 0.5590551181102362
	},
	2376: {
		event: 'input3.eq1',
		progress: 0.5669291338582677
	},
	2377: {
		event: 'input3.eq1',
		progress: 0.5748031496062992
	},
	2378: {
		event: 'input3.eq1',
		progress: 0.5826771653543307
	},
	2379: {
		event: 'input3.eq1',
		progress: 0.5905511811023622
	},
	2380: {
		event: 'input3.eq1',
		progress: 0.5984251968503937
	},
	2381: {
		event: 'input3.eq1',
		progress: 0.6062992125984252
	},
	2382: {
		event: 'input3.eq1',
		progress: 0.6141732283464567
	},
	2383: {
		event: 'input3.eq1',
		progress: 0.6220472440944882
	},
	2384: {
		event: 'input3.eq1',
		progress: 0.6299212598425197
	},
	2385: {
		event: 'input3.eq1',
		progress: 0.6377952755905512
	},
	2386: {
		event: 'input3.eq1',
		progress: 0.6456692913385826
	},
	2387: {
		event: 'input3.eq1',
		progress: 0.6535433070866141
	},
	2388: {
		event: 'input3.eq1',
		progress: 0.6614173228346457
	},
	2389: {
		event: 'input3.eq1',
		progress: 0.6692913385826772
	},
	2390: {
		event: 'input3.eq1',
		progress: 0.6771653543307087
	},
	2391: {
		event: 'input3.eq1',
		progress: 0.6850393700787402
	},
	2392: {
		event: 'input3.eq1',
		progress: 0.6929133858267716
	},
	2393: {
		event: 'input3.eq1',
		progress: 0.7007874015748031
	},
	2394: {
		event: 'input3.eq1',
		progress: 0.7086614173228346
	},
	2395: {
		event: 'input3.eq1',
		progress: 0.7165354330708661
	},
	2396: {
		event: 'input3.eq1',
		progress: 0.7244094488188977
	},
	2397: {
		event: 'input3.eq1',
		progress: 0.7322834645669292
	},
	2398: {
		event: 'input3.eq1',
		progress: 0.7401574803149606
	},
	2399: {
		event: 'input3.eq1',
		progress: 0.7480314960629921
	},
	2400: {
		event: 'input3.eq1',
		progress: 0.7559055118110236
	},
	2401: {
		event: 'input3.eq1',
		progress: 0.7637795275590551
	},
	2402: {
		event: 'input3.eq1',
		progress: 0.7716535433070866
	},
	2403: {
		event: 'input3.eq1',
		progress: 0.7795275590551181
	},
	2404: {
		event: 'input3.eq1',
		progress: 0.7874015748031497
	},
	2405: {
		event: 'input3.eq1',
		progress: 0.7952755905511811
	},
	2406: {
		event: 'input3.eq1',
		progress: 0.8031496062992126
	},
	2407: {
		event: 'input3.eq1',
		progress: 0.8110236220472441
	},
	2408: {
		event: 'input3.eq1',
		progress: 0.8188976377952756
	},
	2409: {
		event: 'input3.eq1',
		progress: 0.8267716535433071
	},
	2410: {
		event: 'input3.eq1',
		progress: 0.8346456692913385
	},
	2411: {
		event: 'input3.eq1',
		progress: 0.84251968503937
	},
	2412: {
		event: 'input3.eq1',
		progress: 0.8503937007874016
	},
	2413: {
		event: 'input3.eq1',
		progress: 0.8582677165354331
	},
	2414: {
		event: 'input3.eq1',
		progress: 0.8661417322834646
	},
	2415: {
		event: 'input3.eq1',
		progress: 0.8740157480314961
	},
	2416: {
		event: 'input3.eq1',
		progress: 0.8818897637795275
	},
	2417: {
		event: 'input3.eq1',
		progress: 0.889763779527559
	},
	2418: {
		event: 'input3.eq1',
		progress: 0.8976377952755905
	},
	2419: {
		event: 'input3.eq1',
		progress: 0.905511811023622
	},
	2420: {
		event: 'input3.eq1',
		progress: 0.9133858267716536
	},
	2421: {
		event: 'input3.eq1',
		progress: 0.9212598425196851
	},
	2422: {
		event: 'input3.eq1',
		progress: 0.9291338582677166
	},
	2423: {
		event: 'input3.eq1',
		progress: 0.937007874015748
	},
	2424: {
		event: 'input3.eq1',
		progress: 0.9448818897637795
	},
	2425: {
		event: 'input3.eq1',
		progress: 0.952755905511811
	},
	2426: {
		event: 'input3.eq1',
		progress: 0.9606299212598425
	},
	2427: {
		event: 'input3.eq1',
		progress: 0.968503937007874
	},
	2428: {
		event: 'input3.eq1',
		progress: 0.9763779527559056
	},
	2429: {
		event: 'input3.eq1',
		progress: 0.984251968503937
	},
	2430: {
		event: 'input3.eq1',
		progress: 0.9921259842519685
	},
	2431: {
		event: 'input3.eq1',
		progress: 1
	},
	2560: {
		event: 'input4.eq1',
		progress: 0
	},
	2561: {
		event: 'input4.eq1',
		progress: 0.007874015748031496
	},
	2562: {
		event: 'input4.eq1',
		progress: 0.015748031496062992
	},
	2563: {
		event: 'input4.eq1',
		progress: 0.023622047244094488
	},
	2564: {
		event: 'input4.eq1',
		progress: 0.031496062992125984
	},
	2565: {
		event: 'input4.eq1',
		progress: 0.03937007874015748
	},
	2566: {
		event: 'input4.eq1',
		progress: 0.047244094488188976
	},
	2567: {
		event: 'input4.eq1',
		progress: 0.05511811023622047
	},
	2568: {
		event: 'input4.eq1',
		progress: 0.06299212598425197
	},
	2569: {
		event: 'input4.eq1',
		progress: 0.07086614173228346
	},
	2570: {
		event: 'input4.eq1',
		progress: 0.07874015748031496
	},
	2571: {
		event: 'input4.eq1',
		progress: 0.08661417322834646
	},
	2572: {
		event: 'input4.eq1',
		progress: 0.09448818897637795
	},
	2573: {
		event: 'input4.eq1',
		progress: 0.10236220472440945
	},
	2574: {
		event: 'input4.eq1',
		progress: 0.11023622047244094
	},
	2575: {
		event: 'input4.eq1',
		progress: 0.11811023622047244
	},
	2576: {
		event: 'input4.eq1',
		progress: 0.12598425196850394
	},
	2577: {
		event: 'input4.eq1',
		progress: 0.13385826771653545
	},
	2578: {
		event: 'input4.eq1',
		progress: 0.14173228346456693
	},
	2579: {
		event: 'input4.eq1',
		progress: 0.14960629921259844
	},
	2580: {
		event: 'input4.eq1',
		progress: 0.15748031496062992
	},
	2581: {
		event: 'input4.eq1',
		progress: 0.16535433070866143
	},
	2582: {
		event: 'input4.eq1',
		progress: 0.1732283464566929
	},
	2583: {
		event: 'input4.eq1',
		progress: 0.18110236220472442
	},
	2584: {
		event: 'input4.eq1',
		progress: 0.1889763779527559
	},
	2585: {
		event: 'input4.eq1',
		progress: 0.1968503937007874
	},
	2586: {
		event: 'input4.eq1',
		progress: 0.2047244094488189
	},
	2587: {
		event: 'input4.eq1',
		progress: 0.2125984251968504
	},
	2588: {
		event: 'input4.eq1',
		progress: 0.2204724409448819
	},
	2589: {
		event: 'input4.eq1',
		progress: 0.2283464566929134
	},
	2590: {
		event: 'input4.eq1',
		progress: 0.23622047244094488
	},
	2591: {
		event: 'input4.eq1',
		progress: 0.2440944881889764
	},
	2592: {
		event: 'input4.eq1',
		progress: 0.25196850393700787
	},
	2593: {
		event: 'input4.eq1',
		progress: 0.25984251968503935
	},
	2594: {
		event: 'input4.eq1',
		progress: 0.2677165354330709
	},
	2595: {
		event: 'input4.eq1',
		progress: 0.2755905511811024
	},
	2596: {
		event: 'input4.eq1',
		progress: 0.28346456692913385
	},
	2597: {
		event: 'input4.eq1',
		progress: 0.29133858267716534
	},
	2598: {
		event: 'input4.eq1',
		progress: 0.2992125984251969
	},
	2599: {
		event: 'input4.eq1',
		progress: 0.30708661417322836
	},
	2600: {
		event: 'input4.eq1',
		progress: 0.31496062992125984
	},
	2601: {
		event: 'input4.eq1',
		progress: 0.3228346456692913
	},
	2602: {
		event: 'input4.eq1',
		progress: 0.33070866141732286
	},
	2603: {
		event: 'input4.eq1',
		progress: 0.33858267716535434
	},
	2604: {
		event: 'input4.eq1',
		progress: 0.3464566929133858
	},
	2605: {
		event: 'input4.eq1',
		progress: 0.3543307086614173
	},
	2606: {
		event: 'input4.eq1',
		progress: 0.36220472440944884
	},
	2607: {
		event: 'input4.eq1',
		progress: 0.3700787401574803
	},
	2608: {
		event: 'input4.eq1',
		progress: 0.3779527559055118
	},
	2609: {
		event: 'input4.eq1',
		progress: 0.3858267716535433
	},
	2610: {
		event: 'input4.eq1',
		progress: 0.3937007874015748
	},
	2611: {
		event: 'input4.eq1',
		progress: 0.4015748031496063
	},
	2612: {
		event: 'input4.eq1',
		progress: 0.4094488188976378
	},
	2613: {
		event: 'input4.eq1',
		progress: 0.41732283464566927
	},
	2614: {
		event: 'input4.eq1',
		progress: 0.4251968503937008
	},
	2615: {
		event: 'input4.eq1',
		progress: 0.4330708661417323
	},
	2616: {
		event: 'input4.eq1',
		progress: 0.4409448818897638
	},
	2617: {
		event: 'input4.eq1',
		progress: 0.44881889763779526
	},
	2618: {
		event: 'input4.eq1',
		progress: 0.4566929133858268
	},
	2619: {
		event: 'input4.eq1',
		progress: 0.4645669291338583
	},
	2620: {
		event: 'input4.eq1',
		progress: 0.47244094488188976
	},
	2621: {
		event: 'input4.eq1',
		progress: 0.48031496062992124
	},
	2622: {
		event: 'input4.eq1',
		progress: 0.4881889763779528
	},
	2623: {
		event: 'input4.eq1',
		progress: 0.49606299212598426
	},
	2624: {
		event: 'input4.eq1',
		progress: 0.5039370078740157
	},
	2625: {
		event: 'input4.eq1',
		progress: 0.5118110236220472
	},
	2626: {
		event: 'input4.eq1',
		progress: 0.5196850393700787
	},
	2627: {
		event: 'input4.eq1',
		progress: 0.5275590551181102
	},
	2628: {
		event: 'input4.eq1',
		progress: 0.5354330708661418
	},
	2629: {
		event: 'input4.eq1',
		progress: 0.5433070866141733
	},
	2630: {
		event: 'input4.eq1',
		progress: 0.5511811023622047
	},
	2631: {
		event: 'input4.eq1',
		progress: 0.5590551181102362
	},
	2632: {
		event: 'input4.eq1',
		progress: 0.5669291338582677
	},
	2633: {
		event: 'input4.eq1',
		progress: 0.5748031496062992
	},
	2634: {
		event: 'input4.eq1',
		progress: 0.5826771653543307
	},
	2635: {
		event: 'input4.eq1',
		progress: 0.5905511811023622
	},
	2636: {
		event: 'input4.eq1',
		progress: 0.5984251968503937
	},
	2637: {
		event: 'input4.eq1',
		progress: 0.6062992125984252
	},
	2638: {
		event: 'input4.eq1',
		progress: 0.6141732283464567
	},
	2639: {
		event: 'input4.eq1',
		progress: 0.6220472440944882
	},
	2640: {
		event: 'input4.eq1',
		progress: 0.6299212598425197
	},
	2641: {
		event: 'input4.eq1',
		progress: 0.6377952755905512
	},
	2642: {
		event: 'input4.eq1',
		progress: 0.6456692913385826
	},
	2643: {
		event: 'input4.eq1',
		progress: 0.6535433070866141
	},
	2644: {
		event: 'input4.eq1',
		progress: 0.6614173228346457
	},
	2645: {
		event: 'input4.eq1',
		progress: 0.6692913385826772
	},
	2646: {
		event: 'input4.eq1',
		progress: 0.6771653543307087
	},
	2647: {
		event: 'input4.eq1',
		progress: 0.6850393700787402
	},
	2648: {
		event: 'input4.eq1',
		progress: 0.6929133858267716
	},
	2649: {
		event: 'input4.eq1',
		progress: 0.7007874015748031
	},
	2650: {
		event: 'input4.eq1',
		progress: 0.7086614173228346
	},
	2651: {
		event: 'input4.eq1',
		progress: 0.7165354330708661
	},
	2652: {
		event: 'input4.eq1',
		progress: 0.7244094488188977
	},
	2653: {
		event: 'input4.eq1',
		progress: 0.7322834645669292
	},
	2654: {
		event: 'input4.eq1',
		progress: 0.7401574803149606
	},
	2655: {
		event: 'input4.eq1',
		progress: 0.7480314960629921
	},
	2656: {
		event: 'input4.eq1',
		progress: 0.7559055118110236
	},
	2657: {
		event: 'input4.eq1',
		progress: 0.7637795275590551
	},
	2658: {
		event: 'input4.eq1',
		progress: 0.7716535433070866
	},
	2659: {
		event: 'input4.eq1',
		progress: 0.7795275590551181
	},
	2660: {
		event: 'input4.eq1',
		progress: 0.7874015748031497
	},
	2661: {
		event: 'input4.eq1',
		progress: 0.7952755905511811
	},
	2662: {
		event: 'input4.eq1',
		progress: 0.8031496062992126
	},
	2663: {
		event: 'input4.eq1',
		progress: 0.8110236220472441
	},
	2664: {
		event: 'input4.eq1',
		progress: 0.8188976377952756
	},
	2665: {
		event: 'input4.eq1',
		progress: 0.8267716535433071
	},
	2666: {
		event: 'input4.eq1',
		progress: 0.8346456692913385
	},
	2667: {
		event: 'input4.eq1',
		progress: 0.84251968503937
	},
	2668: {
		event: 'input4.eq1',
		progress: 0.8503937007874016
	},
	2669: {
		event: 'input4.eq1',
		progress: 0.8582677165354331
	},
	2670: {
		event: 'input4.eq1',
		progress: 0.8661417322834646
	},
	2671: {
		event: 'input4.eq1',
		progress: 0.8740157480314961
	},
	2672: {
		event: 'input4.eq1',
		progress: 0.8818897637795275
	},
	2673: {
		event: 'input4.eq1',
		progress: 0.889763779527559
	},
	2674: {
		event: 'input4.eq1',
		progress: 0.8976377952755905
	},
	2675: {
		event: 'input4.eq1',
		progress: 0.905511811023622
	},
	2676: {
		event: 'input4.eq1',
		progress: 0.9133858267716536
	},
	2677: {
		event: 'input4.eq1',
		progress: 0.9212598425196851
	},
	2678: {
		event: 'input4.eq1',
		progress: 0.9291338582677166
	},
	2679: {
		event: 'input4.eq1',
		progress: 0.937007874015748
	},
	2680: {
		event: 'input4.eq1',
		progress: 0.9448818897637795
	},
	2681: {
		event: 'input4.eq1',
		progress: 0.952755905511811
	},
	2682: {
		event: 'input4.eq1',
		progress: 0.9606299212598425
	},
	2683: {
		event: 'input4.eq1',
		progress: 0.968503937007874
	},
	2684: {
		event: 'input4.eq1',
		progress: 0.9763779527559056
	},
	2685: {
		event: 'input4.eq1',
		progress: 0.984251968503937
	},
	2686: {
		event: 'input4.eq1',
		progress: 0.9921259842519685
	},
	2687: {
		event: 'input4.eq1',
		progress: 1
	},
	2816: {
		event: 'input5.eq1',
		progress: 0
	},
	2817: {
		event: 'input5.eq1',
		progress: 0.007874015748031496
	},
	2818: {
		event: 'input5.eq1',
		progress: 0.015748031496062992
	},
	2819: {
		event: 'input5.eq1',
		progress: 0.023622047244094488
	},
	2820: {
		event: 'input5.eq1',
		progress: 0.031496062992125984
	},
	2821: {
		event: 'input5.eq1',
		progress: 0.03937007874015748
	},
	2822: {
		event: 'input5.eq1',
		progress: 0.047244094488188976
	},
	2823: {
		event: 'input5.eq1',
		progress: 0.05511811023622047
	},
	2824: {
		event: 'input5.eq1',
		progress: 0.06299212598425197
	},
	2825: {
		event: 'input5.eq1',
		progress: 0.07086614173228346
	},
	2826: {
		event: 'input5.eq1',
		progress: 0.07874015748031496
	},
	2827: {
		event: 'input5.eq1',
		progress: 0.08661417322834646
	},
	2828: {
		event: 'input5.eq1',
		progress: 0.09448818897637795
	},
	2829: {
		event: 'input5.eq1',
		progress: 0.10236220472440945
	},
	2830: {
		event: 'input5.eq1',
		progress: 0.11023622047244094
	},
	2831: {
		event: 'input5.eq1',
		progress: 0.11811023622047244
	},
	2832: {
		event: 'input5.eq1',
		progress: 0.12598425196850394
	},
	2833: {
		event: 'input5.eq1',
		progress: 0.13385826771653545
	},
	2834: {
		event: 'input5.eq1',
		progress: 0.14173228346456693
	},
	2835: {
		event: 'input5.eq1',
		progress: 0.14960629921259844
	},
	2836: {
		event: 'input5.eq1',
		progress: 0.15748031496062992
	},
	2837: {
		event: 'input5.eq1',
		progress: 0.16535433070866143
	},
	2838: {
		event: 'input5.eq1',
		progress: 0.1732283464566929
	},
	2839: {
		event: 'input5.eq1',
		progress: 0.18110236220472442
	},
	2840: {
		event: 'input5.eq1',
		progress: 0.1889763779527559
	},
	2841: {
		event: 'input5.eq1',
		progress: 0.1968503937007874
	},
	2842: {
		event: 'input5.eq1',
		progress: 0.2047244094488189
	},
	2843: {
		event: 'input5.eq1',
		progress: 0.2125984251968504
	},
	2844: {
		event: 'input5.eq1',
		progress: 0.2204724409448819
	},
	2845: {
		event: 'input5.eq1',
		progress: 0.2283464566929134
	},
	2846: {
		event: 'input5.eq1',
		progress: 0.23622047244094488
	},
	2847: {
		event: 'input5.eq1',
		progress: 0.2440944881889764
	},
	2848: {
		event: 'input5.eq1',
		progress: 0.25196850393700787
	},
	2849: {
		event: 'input5.eq1',
		progress: 0.25984251968503935
	},
	2850: {
		event: 'input5.eq1',
		progress: 0.2677165354330709
	},
	2851: {
		event: 'input5.eq1',
		progress: 0.2755905511811024
	},
	2852: {
		event: 'input5.eq1',
		progress: 0.28346456692913385
	},
	2853: {
		event: 'input5.eq1',
		progress: 0.29133858267716534
	},
	2854: {
		event: 'input5.eq1',
		progress: 0.2992125984251969
	},
	2855: {
		event: 'input5.eq1',
		progress: 0.30708661417322836
	},
	2856: {
		event: 'input5.eq1',
		progress: 0.31496062992125984
	},
	2857: {
		event: 'input5.eq1',
		progress: 0.3228346456692913
	},
	2858: {
		event: 'input5.eq1',
		progress: 0.33070866141732286
	},
	2859: {
		event: 'input5.eq1',
		progress: 0.33858267716535434
	},
	2860: {
		event: 'input5.eq1',
		progress: 0.3464566929133858
	},
	2861: {
		event: 'input5.eq1',
		progress: 0.3543307086614173
	},
	2862: {
		event: 'input5.eq1',
		progress: 0.36220472440944884
	},
	2863: {
		event: 'input5.eq1',
		progress: 0.3700787401574803
	},
	2864: {
		event: 'input5.eq1',
		progress: 0.3779527559055118
	},
	2865: {
		event: 'input5.eq1',
		progress: 0.3858267716535433
	},
	2866: {
		event: 'input5.eq1',
		progress: 0.3937007874015748
	},
	2867: {
		event: 'input5.eq1',
		progress: 0.4015748031496063
	},
	2868: {
		event: 'input5.eq1',
		progress: 0.4094488188976378
	},
	2869: {
		event: 'input5.eq1',
		progress: 0.41732283464566927
	},
	2870: {
		event: 'input5.eq1',
		progress: 0.4251968503937008
	},
	2871: {
		event: 'input5.eq1',
		progress: 0.4330708661417323
	},
	2872: {
		event: 'input5.eq1',
		progress: 0.4409448818897638
	},
	2873: {
		event: 'input5.eq1',
		progress: 0.44881889763779526
	},
	2874: {
		event: 'input5.eq1',
		progress: 0.4566929133858268
	},
	2875: {
		event: 'input5.eq1',
		progress: 0.4645669291338583
	},
	2876: {
		event: 'input5.eq1',
		progress: 0.47244094488188976
	},
	2877: {
		event: 'input5.eq1',
		progress: 0.48031496062992124
	},
	2878: {
		event: 'input5.eq1',
		progress: 0.4881889763779528
	},
	2879: {
		event: 'input5.eq1',
		progress: 0.49606299212598426
	},
	2880: {
		event: 'input5.eq1',
		progress: 0.5039370078740157
	},
	2881: {
		event: 'input5.eq1',
		progress: 0.5118110236220472
	},
	2882: {
		event: 'input5.eq1',
		progress: 0.5196850393700787
	},
	2883: {
		event: 'input5.eq1',
		progress: 0.5275590551181102
	},
	2884: {
		event: 'input5.eq1',
		progress: 0.5354330708661418
	},
	2885: {
		event: 'input5.eq1',
		progress: 0.5433070866141733
	},
	2886: {
		event: 'input5.eq1',
		progress: 0.5511811023622047
	},
	2887: {
		event: 'input5.eq1',
		progress: 0.5590551181102362
	},
	2888: {
		event: 'input5.eq1',
		progress: 0.5669291338582677
	},
	2889: {
		event: 'input5.eq1',
		progress: 0.5748031496062992
	},
	2890: {
		event: 'input5.eq1',
		progress: 0.5826771653543307
	},
	2891: {
		event: 'input5.eq1',
		progress: 0.5905511811023622
	},
	2892: {
		event: 'input5.eq1',
		progress: 0.5984251968503937
	},
	2893: {
		event: 'input5.eq1',
		progress: 0.6062992125984252
	},
	2894: {
		event: 'input5.eq1',
		progress: 0.6141732283464567
	},
	2895: {
		event: 'input5.eq1',
		progress: 0.6220472440944882
	},
	2896: {
		event: 'input5.eq1',
		progress: 0.6299212598425197
	},
	2897: {
		event: 'input5.eq1',
		progress: 0.6377952755905512
	},
	2898: {
		event: 'input5.eq1',
		progress: 0.6456692913385826
	},
	2899: {
		event: 'input5.eq1',
		progress: 0.6535433070866141
	},
	2900: {
		event: 'input5.eq1',
		progress: 0.6614173228346457
	},
	2901: {
		event: 'input5.eq1',
		progress: 0.6692913385826772
	},
	2902: {
		event: 'input5.eq1',
		progress: 0.6771653543307087
	},
	2903: {
		event: 'input5.eq1',
		progress: 0.6850393700787402
	},
	2904: {
		event: 'input5.eq1',
		progress: 0.6929133858267716
	},
	2905: {
		event: 'input5.eq1',
		progress: 0.7007874015748031
	},
	2906: {
		event: 'input5.eq1',
		progress: 0.7086614173228346
	},
	2907: {
		event: 'input5.eq1',
		progress: 0.7165354330708661
	},
	2908: {
		event: 'input5.eq1',
		progress: 0.7244094488188977
	},
	2909: {
		event: 'input5.eq1',
		progress: 0.7322834645669292
	},
	2910: {
		event: 'input5.eq1',
		progress: 0.7401574803149606
	},
	2911: {
		event: 'input5.eq1',
		progress: 0.7480314960629921
	},
	2912: {
		event: 'input5.eq1',
		progress: 0.7559055118110236
	},
	2913: {
		event: 'input5.eq1',
		progress: 0.7637795275590551
	},
	2914: {
		event: 'input5.eq1',
		progress: 0.7716535433070866
	},
	2915: {
		event: 'input5.eq1',
		progress: 0.7795275590551181
	},
	2916: {
		event: 'input5.eq1',
		progress: 0.7874015748031497
	},
	2917: {
		event: 'input5.eq1',
		progress: 0.7952755905511811
	},
	2918: {
		event: 'input5.eq1',
		progress: 0.8031496062992126
	},
	2919: {
		event: 'input5.eq1',
		progress: 0.8110236220472441
	},
	2920: {
		event: 'input5.eq1',
		progress: 0.8188976377952756
	},
	2921: {
		event: 'input5.eq1',
		progress: 0.8267716535433071
	},
	2922: {
		event: 'input5.eq1',
		progress: 0.8346456692913385
	},
	2923: {
		event: 'input5.eq1',
		progress: 0.84251968503937
	},
	2924: {
		event: 'input5.eq1',
		progress: 0.8503937007874016
	},
	2925: {
		event: 'input5.eq1',
		progress: 0.8582677165354331
	},
	2926: {
		event: 'input5.eq1',
		progress: 0.8661417322834646
	},
	2927: {
		event: 'input5.eq1',
		progress: 0.8740157480314961
	},
	2928: {
		event: 'input5.eq1',
		progress: 0.8818897637795275
	},
	2929: {
		event: 'input5.eq1',
		progress: 0.889763779527559
	},
	2930: {
		event: 'input5.eq1',
		progress: 0.8976377952755905
	},
	2931: {
		event: 'input5.eq1',
		progress: 0.905511811023622
	},
	2932: {
		event: 'input5.eq1',
		progress: 0.9133858267716536
	},
	2933: {
		event: 'input5.eq1',
		progress: 0.9212598425196851
	},
	2934: {
		event: 'input5.eq1',
		progress: 0.9291338582677166
	},
	2935: {
		event: 'input5.eq1',
		progress: 0.937007874015748
	},
	2936: {
		event: 'input5.eq1',
		progress: 0.9448818897637795
	},
	2937: {
		event: 'input5.eq1',
		progress: 0.952755905511811
	},
	2938: {
		event: 'input5.eq1',
		progress: 0.9606299212598425
	},
	2939: {
		event: 'input5.eq1',
		progress: 0.968503937007874
	},
	2940: {
		event: 'input5.eq1',
		progress: 0.9763779527559056
	},
	2941: {
		event: 'input5.eq1',
		progress: 0.984251968503937
	},
	2942: {
		event: 'input5.eq1',
		progress: 0.9921259842519685
	},
	2943: {
		event: 'input5.eq1',
		progress: 1
	},
	3072: {
		event: 'input6.eq1',
		progress: 0
	},
	3073: {
		event: 'input6.eq1',
		progress: 0.007874015748031496
	},
	3074: {
		event: 'input6.eq1',
		progress: 0.015748031496062992
	},
	3075: {
		event: 'input6.eq1',
		progress: 0.023622047244094488
	},
	3076: {
		event: 'input6.eq1',
		progress: 0.031496062992125984
	},
	3077: {
		event: 'input6.eq1',
		progress: 0.03937007874015748
	},
	3078: {
		event: 'input6.eq1',
		progress: 0.047244094488188976
	},
	3079: {
		event: 'input6.eq1',
		progress: 0.05511811023622047
	},
	3080: {
		event: 'input6.eq1',
		progress: 0.06299212598425197
	},
	3081: {
		event: 'input6.eq1',
		progress: 0.07086614173228346
	},
	3082: {
		event: 'input6.eq1',
		progress: 0.07874015748031496
	},
	3083: {
		event: 'input6.eq1',
		progress: 0.08661417322834646
	},
	3084: {
		event: 'input6.eq1',
		progress: 0.09448818897637795
	},
	3085: {
		event: 'input6.eq1',
		progress: 0.10236220472440945
	},
	3086: {
		event: 'input6.eq1',
		progress: 0.11023622047244094
	},
	3087: {
		event: 'input6.eq1',
		progress: 0.11811023622047244
	},
	3088: {
		event: 'input6.eq1',
		progress: 0.12598425196850394
	},
	3089: {
		event: 'input6.eq1',
		progress: 0.13385826771653545
	},
	3090: {
		event: 'input6.eq1',
		progress: 0.14173228346456693
	},
	3091: {
		event: 'input6.eq1',
		progress: 0.14960629921259844
	},
	3092: {
		event: 'input6.eq1',
		progress: 0.15748031496062992
	},
	3093: {
		event: 'input6.eq1',
		progress: 0.16535433070866143
	},
	3094: {
		event: 'input6.eq1',
		progress: 0.1732283464566929
	},
	3095: {
		event: 'input6.eq1',
		progress: 0.18110236220472442
	},
	3096: {
		event: 'input6.eq1',
		progress: 0.1889763779527559
	},
	3097: {
		event: 'input6.eq1',
		progress: 0.1968503937007874
	},
	3098: {
		event: 'input6.eq1',
		progress: 0.2047244094488189
	},
	3099: {
		event: 'input6.eq1',
		progress: 0.2125984251968504
	},
	3100: {
		event: 'input6.eq1',
		progress: 0.2204724409448819
	},
	3101: {
		event: 'input6.eq1',
		progress: 0.2283464566929134
	},
	3102: {
		event: 'input6.eq1',
		progress: 0.23622047244094488
	},
	3103: {
		event: 'input6.eq1',
		progress: 0.2440944881889764
	},
	3104: {
		event: 'input6.eq1',
		progress: 0.25196850393700787
	},
	3105: {
		event: 'input6.eq1',
		progress: 0.25984251968503935
	},
	3106: {
		event: 'input6.eq1',
		progress: 0.2677165354330709
	},
	3107: {
		event: 'input6.eq1',
		progress: 0.2755905511811024
	},
	3108: {
		event: 'input6.eq1',
		progress: 0.28346456692913385
	},
	3109: {
		event: 'input6.eq1',
		progress: 0.29133858267716534
	},
	3110: {
		event: 'input6.eq1',
		progress: 0.2992125984251969
	},
	3111: {
		event: 'input6.eq1',
		progress: 0.30708661417322836
	},
	3112: {
		event: 'input6.eq1',
		progress: 0.31496062992125984
	},
	3113: {
		event: 'input6.eq1',
		progress: 0.3228346456692913
	},
	3114: {
		event: 'input6.eq1',
		progress: 0.33070866141732286
	},
	3115: {
		event: 'input6.eq1',
		progress: 0.33858267716535434
	},
	3116: {
		event: 'input6.eq1',
		progress: 0.3464566929133858
	},
	3117: {
		event: 'input6.eq1',
		progress: 0.3543307086614173
	},
	3118: {
		event: 'input6.eq1',
		progress: 0.36220472440944884
	},
	3119: {
		event: 'input6.eq1',
		progress: 0.3700787401574803
	},
	3120: {
		event: 'input6.eq1',
		progress: 0.3779527559055118
	},
	3121: {
		event: 'input6.eq1',
		progress: 0.3858267716535433
	},
	3122: {
		event: 'input6.eq1',
		progress: 0.3937007874015748
	},
	3123: {
		event: 'input6.eq1',
		progress: 0.4015748031496063
	},
	3124: {
		event: 'input6.eq1',
		progress: 0.4094488188976378
	},
	3125: {
		event: 'input6.eq1',
		progress: 0.41732283464566927
	},
	3126: {
		event: 'input6.eq1',
		progress: 0.4251968503937008
	},
	3127: {
		event: 'input6.eq1',
		progress: 0.4330708661417323
	},
	3128: {
		event: 'input6.eq1',
		progress: 0.4409448818897638
	},
	3129: {
		event: 'input6.eq1',
		progress: 0.44881889763779526
	},
	3130: {
		event: 'input6.eq1',
		progress: 0.4566929133858268
	},
	3131: {
		event: 'input6.eq1',
		progress: 0.4645669291338583
	},
	3132: {
		event: 'input6.eq1',
		progress: 0.47244094488188976
	},
	3133: {
		event: 'input6.eq1',
		progress: 0.48031496062992124
	},
	3134: {
		event: 'input6.eq1',
		progress: 0.4881889763779528
	},
	3135: {
		event: 'input6.eq1',
		progress: 0.49606299212598426
	},
	3136: {
		event: 'input6.eq1',
		progress: 0.5039370078740157
	},
	3137: {
		event: 'input6.eq1',
		progress: 0.5118110236220472
	},
	3138: {
		event: 'input6.eq1',
		progress: 0.5196850393700787
	},
	3139: {
		event: 'input6.eq1',
		progress: 0.5275590551181102
	},
	3140: {
		event: 'input6.eq1',
		progress: 0.5354330708661418
	},
	3141: {
		event: 'input6.eq1',
		progress: 0.5433070866141733
	},
	3142: {
		event: 'input6.eq1',
		progress: 0.5511811023622047
	},
	3143: {
		event: 'input6.eq1',
		progress: 0.5590551181102362
	},
	3144: {
		event: 'input6.eq1',
		progress: 0.5669291338582677
	},
	3145: {
		event: 'input6.eq1',
		progress: 0.5748031496062992
	},
	3146: {
		event: 'input6.eq1',
		progress: 0.5826771653543307
	},
	3147: {
		event: 'input6.eq1',
		progress: 0.5905511811023622
	},
	3148: {
		event: 'input6.eq1',
		progress: 0.5984251968503937
	},
	3149: {
		event: 'input6.eq1',
		progress: 0.6062992125984252
	},
	3150: {
		event: 'input6.eq1',
		progress: 0.6141732283464567
	},
	3151: {
		event: 'input6.eq1',
		progress: 0.6220472440944882
	},
	3152: {
		event: 'input6.eq1',
		progress: 0.6299212598425197
	},
	3153: {
		event: 'input6.eq1',
		progress: 0.6377952755905512
	},
	3154: {
		event: 'input6.eq1',
		progress: 0.6456692913385826
	},
	3155: {
		event: 'input6.eq1',
		progress: 0.6535433070866141
	},
	3156: {
		event: 'input6.eq1',
		progress: 0.6614173228346457
	},
	3157: {
		event: 'input6.eq1',
		progress: 0.6692913385826772
	},
	3158: {
		event: 'input6.eq1',
		progress: 0.6771653543307087
	},
	3159: {
		event: 'input6.eq1',
		progress: 0.6850393700787402
	},
	3160: {
		event: 'input6.eq1',
		progress: 0.6929133858267716
	},
	3161: {
		event: 'input6.eq1',
		progress: 0.7007874015748031
	},
	3162: {
		event: 'input6.eq1',
		progress: 0.7086614173228346
	},
	3163: {
		event: 'input6.eq1',
		progress: 0.7165354330708661
	},
	3164: {
		event: 'input6.eq1',
		progress: 0.7244094488188977
	},
	3165: {
		event: 'input6.eq1',
		progress: 0.7322834645669292
	},
	3166: {
		event: 'input6.eq1',
		progress: 0.7401574803149606
	},
	3167: {
		event: 'input6.eq1',
		progress: 0.7480314960629921
	},
	3168: {
		event: 'input6.eq1',
		progress: 0.7559055118110236
	},
	3169: {
		event: 'input6.eq1',
		progress: 0.7637795275590551
	},
	3170: {
		event: 'input6.eq1',
		progress: 0.7716535433070866
	},
	3171: {
		event: 'input6.eq1',
		progress: 0.7795275590551181
	},
	3172: {
		event: 'input6.eq1',
		progress: 0.7874015748031497
	},
	3173: {
		event: 'input6.eq1',
		progress: 0.7952755905511811
	},
	3174: {
		event: 'input6.eq1',
		progress: 0.8031496062992126
	},
	3175: {
		event: 'input6.eq1',
		progress: 0.8110236220472441
	},
	3176: {
		event: 'input6.eq1',
		progress: 0.8188976377952756
	},
	3177: {
		event: 'input6.eq1',
		progress: 0.8267716535433071
	},
	3178: {
		event: 'input6.eq1',
		progress: 0.8346456692913385
	},
	3179: {
		event: 'input6.eq1',
		progress: 0.84251968503937
	},
	3180: {
		event: 'input6.eq1',
		progress: 0.8503937007874016
	},
	3181: {
		event: 'input6.eq1',
		progress: 0.8582677165354331
	},
	3182: {
		event: 'input6.eq1',
		progress: 0.8661417322834646
	},
	3183: {
		event: 'input6.eq1',
		progress: 0.8740157480314961
	},
	3184: {
		event: 'input6.eq1',
		progress: 0.8818897637795275
	},
	3185: {
		event: 'input6.eq1',
		progress: 0.889763779527559
	},
	3186: {
		event: 'input6.eq1',
		progress: 0.8976377952755905
	},
	3187: {
		event: 'input6.eq1',
		progress: 0.905511811023622
	},
	3188: {
		event: 'input6.eq1',
		progress: 0.9133858267716536
	},
	3189: {
		event: 'input6.eq1',
		progress: 0.9212598425196851
	},
	3190: {
		event: 'input6.eq1',
		progress: 0.9291338582677166
	},
	3191: {
		event: 'input6.eq1',
		progress: 0.937007874015748
	},
	3192: {
		event: 'input6.eq1',
		progress: 0.9448818897637795
	},
	3193: {
		event: 'input6.eq1',
		progress: 0.952755905511811
	},
	3194: {
		event: 'input6.eq1',
		progress: 0.9606299212598425
	},
	3195: {
		event: 'input6.eq1',
		progress: 0.968503937007874
	},
	3196: {
		event: 'input6.eq1',
		progress: 0.9763779527559056
	},
	3197: {
		event: 'input6.eq1',
		progress: 0.984251968503937
	},
	3198: {
		event: 'input6.eq1',
		progress: 0.9921259842519685
	},
	3199: {
		event: 'input6.eq1',
		progress: 1
	},
	3328: {
		event: 'input1.eq2',
		progress: 0
	},
	3329: {
		event: 'input1.eq2',
		progress: 0.007874015748031496
	},
	3330: {
		event: 'input1.eq2',
		progress: 0.015748031496062992
	},
	3331: {
		event: 'input1.eq2',
		progress: 0.023622047244094488
	},
	3332: {
		event: 'input1.eq2',
		progress: 0.031496062992125984
	},
	3333: {
		event: 'input1.eq2',
		progress: 0.03937007874015748
	},
	3334: {
		event: 'input1.eq2',
		progress: 0.047244094488188976
	},
	3335: {
		event: 'input1.eq2',
		progress: 0.05511811023622047
	},
	3336: {
		event: 'input1.eq2',
		progress: 0.06299212598425197
	},
	3337: {
		event: 'input1.eq2',
		progress: 0.07086614173228346
	},
	3338: {
		event: 'input1.eq2',
		progress: 0.07874015748031496
	},
	3339: {
		event: 'input1.eq2',
		progress: 0.08661417322834646
	},
	3340: {
		event: 'input1.eq2',
		progress: 0.09448818897637795
	},
	3341: {
		event: 'input1.eq2',
		progress: 0.10236220472440945
	},
	3342: {
		event: 'input1.eq2',
		progress: 0.11023622047244094
	},
	3343: {
		event: 'input1.eq2',
		progress: 0.11811023622047244
	},
	3344: {
		event: 'input1.eq2',
		progress: 0.12598425196850394
	},
	3345: {
		event: 'input1.eq2',
		progress: 0.13385826771653545
	},
	3346: {
		event: 'input1.eq2',
		progress: 0.14173228346456693
	},
	3347: {
		event: 'input1.eq2',
		progress: 0.14960629921259844
	},
	3348: {
		event: 'input1.eq2',
		progress: 0.15748031496062992
	},
	3349: {
		event: 'input1.eq2',
		progress: 0.16535433070866143
	},
	3350: {
		event: 'input1.eq2',
		progress: 0.1732283464566929
	},
	3351: {
		event: 'input1.eq2',
		progress: 0.18110236220472442
	},
	3352: {
		event: 'input1.eq2',
		progress: 0.1889763779527559
	},
	3353: {
		event: 'input1.eq2',
		progress: 0.1968503937007874
	},
	3354: {
		event: 'input1.eq2',
		progress: 0.2047244094488189
	},
	3355: {
		event: 'input1.eq2',
		progress: 0.2125984251968504
	},
	3356: {
		event: 'input1.eq2',
		progress: 0.2204724409448819
	},
	3357: {
		event: 'input1.eq2',
		progress: 0.2283464566929134
	},
	3358: {
		event: 'input1.eq2',
		progress: 0.23622047244094488
	},
	3359: {
		event: 'input1.eq2',
		progress: 0.2440944881889764
	},
	3360: {
		event: 'input1.eq2',
		progress: 0.25196850393700787
	},
	3361: {
		event: 'input1.eq2',
		progress: 0.25984251968503935
	},
	3362: {
		event: 'input1.eq2',
		progress: 0.2677165354330709
	},
	3363: {
		event: 'input1.eq2',
		progress: 0.2755905511811024
	},
	3364: {
		event: 'input1.eq2',
		progress: 0.28346456692913385
	},
	3365: {
		event: 'input1.eq2',
		progress: 0.29133858267716534
	},
	3366: {
		event: 'input1.eq2',
		progress: 0.2992125984251969
	},
	3367: {
		event: 'input1.eq2',
		progress: 0.30708661417322836
	},
	3368: {
		event: 'input1.eq2',
		progress: 0.31496062992125984
	},
	3369: {
		event: 'input1.eq2',
		progress: 0.3228346456692913
	},
	3370: {
		event: 'input1.eq2',
		progress: 0.33070866141732286
	},
	3371: {
		event: 'input1.eq2',
		progress: 0.33858267716535434
	},
	3372: {
		event: 'input1.eq2',
		progress: 0.3464566929133858
	},
	3373: {
		event: 'input1.eq2',
		progress: 0.3543307086614173
	},
	3374: {
		event: 'input1.eq2',
		progress: 0.36220472440944884
	},
	3375: {
		event: 'input1.eq2',
		progress: 0.3700787401574803
	},
	3376: {
		event: 'input1.eq2',
		progress: 0.3779527559055118
	},
	3377: {
		event: 'input1.eq2',
		progress: 0.3858267716535433
	},
	3378: {
		event: 'input1.eq2',
		progress: 0.3937007874015748
	},
	3379: {
		event: 'input1.eq2',
		progress: 0.4015748031496063
	},
	3380: {
		event: 'input1.eq2',
		progress: 0.4094488188976378
	},
	3381: {
		event: 'input1.eq2',
		progress: 0.41732283464566927
	},
	3382: {
		event: 'input1.eq2',
		progress: 0.4251968503937008
	},
	3383: {
		event: 'input1.eq2',
		progress: 0.4330708661417323
	},
	3384: {
		event: 'input1.eq2',
		progress: 0.4409448818897638
	},
	3385: {
		event: 'input1.eq2',
		progress: 0.44881889763779526
	},
	3386: {
		event: 'input1.eq2',
		progress: 0.4566929133858268
	},
	3387: {
		event: 'input1.eq2',
		progress: 0.4645669291338583
	},
	3388: {
		event: 'input1.eq2',
		progress: 0.47244094488188976
	},
	3389: {
		event: 'input1.eq2',
		progress: 0.48031496062992124
	},
	3390: {
		event: 'input1.eq2',
		progress: 0.4881889763779528
	},
	3391: {
		event: 'input1.eq2',
		progress: 0.49606299212598426
	},
	3392: {
		event: 'input1.eq2',
		progress: 0.5039370078740157
	},
	3393: {
		event: 'input1.eq2',
		progress: 0.5118110236220472
	},
	3394: {
		event: 'input1.eq2',
		progress: 0.5196850393700787
	},
	3395: {
		event: 'input1.eq2',
		progress: 0.5275590551181102
	},
	3396: {
		event: 'input1.eq2',
		progress: 0.5354330708661418
	},
	3397: {
		event: 'input1.eq2',
		progress: 0.5433070866141733
	},
	3398: {
		event: 'input1.eq2',
		progress: 0.5511811023622047
	},
	3399: {
		event: 'input1.eq2',
		progress: 0.5590551181102362
	},
	3400: {
		event: 'input1.eq2',
		progress: 0.5669291338582677
	},
	3401: {
		event: 'input1.eq2',
		progress: 0.5748031496062992
	},
	3402: {
		event: 'input1.eq2',
		progress: 0.5826771653543307
	},
	3403: {
		event: 'input1.eq2',
		progress: 0.5905511811023622
	},
	3404: {
		event: 'input1.eq2',
		progress: 0.5984251968503937
	},
	3405: {
		event: 'input1.eq2',
		progress: 0.6062992125984252
	},
	3406: {
		event: 'input1.eq2',
		progress: 0.6141732283464567
	},
	3407: {
		event: 'input1.eq2',
		progress: 0.6220472440944882
	},
	3408: {
		event: 'input1.eq2',
		progress: 0.6299212598425197
	},
	3409: {
		event: 'input1.eq2',
		progress: 0.6377952755905512
	},
	3410: {
		event: 'input1.eq2',
		progress: 0.6456692913385826
	},
	3411: {
		event: 'input1.eq2',
		progress: 0.6535433070866141
	},
	3412: {
		event: 'input1.eq2',
		progress: 0.6614173228346457
	},
	3413: {
		event: 'input1.eq2',
		progress: 0.6692913385826772
	},
	3414: {
		event: 'input1.eq2',
		progress: 0.6771653543307087
	},
	3415: {
		event: 'input1.eq2',
		progress: 0.6850393700787402
	},
	3416: {
		event: 'input1.eq2',
		progress: 0.6929133858267716
	},
	3417: {
		event: 'input1.eq2',
		progress: 0.7007874015748031
	},
	3418: {
		event: 'input1.eq2',
		progress: 0.7086614173228346
	},
	3419: {
		event: 'input1.eq2',
		progress: 0.7165354330708661
	},
	3420: {
		event: 'input1.eq2',
		progress: 0.7244094488188977
	},
	3421: {
		event: 'input1.eq2',
		progress: 0.7322834645669292
	},
	3422: {
		event: 'input1.eq2',
		progress: 0.7401574803149606
	},
	3423: {
		event: 'input1.eq2',
		progress: 0.7480314960629921
	},
	3424: {
		event: 'input1.eq2',
		progress: 0.7559055118110236
	},
	3425: {
		event: 'input1.eq2',
		progress: 0.7637795275590551
	},
	3426: {
		event: 'input1.eq2',
		progress: 0.7716535433070866
	},
	3427: {
		event: 'input1.eq2',
		progress: 0.7795275590551181
	},
	3428: {
		event: 'input1.eq2',
		progress: 0.7874015748031497
	},
	3429: {
		event: 'input1.eq2',
		progress: 0.7952755905511811
	},
	3430: {
		event: 'input1.eq2',
		progress: 0.8031496062992126
	},
	3431: {
		event: 'input1.eq2',
		progress: 0.8110236220472441
	},
	3432: {
		event: 'input1.eq2',
		progress: 0.8188976377952756
	},
	3433: {
		event: 'input1.eq2',
		progress: 0.8267716535433071
	},
	3434: {
		event: 'input1.eq2',
		progress: 0.8346456692913385
	},
	3435: {
		event: 'input1.eq2',
		progress: 0.84251968503937
	},
	3436: {
		event: 'input1.eq2',
		progress: 0.8503937007874016
	},
	3437: {
		event: 'input1.eq2',
		progress: 0.8582677165354331
	},
	3438: {
		event: 'input1.eq2',
		progress: 0.8661417322834646
	},
	3439: {
		event: 'input1.eq2',
		progress: 0.8740157480314961
	},
	3440: {
		event: 'input1.eq2',
		progress: 0.8818897637795275
	},
	3441: {
		event: 'input1.eq2',
		progress: 0.889763779527559
	},
	3442: {
		event: 'input1.eq2',
		progress: 0.8976377952755905
	},
	3443: {
		event: 'input1.eq2',
		progress: 0.905511811023622
	},
	3444: {
		event: 'input1.eq2',
		progress: 0.9133858267716536
	},
	3445: {
		event: 'input1.eq2',
		progress: 0.9212598425196851
	},
	3446: {
		event: 'input1.eq2',
		progress: 0.9291338582677166
	},
	3447: {
		event: 'input1.eq2',
		progress: 0.937007874015748
	},
	3448: {
		event: 'input1.eq2',
		progress: 0.9448818897637795
	},
	3449: {
		event: 'input1.eq2',
		progress: 0.952755905511811
	},
	3450: {
		event: 'input1.eq2',
		progress: 0.9606299212598425
	},
	3451: {
		event: 'input1.eq2',
		progress: 0.968503937007874
	},
	3452: {
		event: 'input1.eq2',
		progress: 0.9763779527559056
	},
	3453: {
		event: 'input1.eq2',
		progress: 0.984251968503937
	},
	3454: {
		event: 'input1.eq2',
		progress: 0.9921259842519685
	},
	3455: {
		event: 'input1.eq2',
		progress: 1
	},
	3584: {
		event: 'input2.eq2',
		progress: 0
	},
	3585: {
		event: 'input2.eq2',
		progress: 0.007874015748031496
	},
	3586: {
		event: 'input2.eq2',
		progress: 0.015748031496062992
	},
	3587: {
		event: 'input2.eq2',
		progress: 0.023622047244094488
	},
	3588: {
		event: 'input2.eq2',
		progress: 0.031496062992125984
	},
	3589: {
		event: 'input2.eq2',
		progress: 0.03937007874015748
	},
	3590: {
		event: 'input2.eq2',
		progress: 0.047244094488188976
	},
	3591: {
		event: 'input2.eq2',
		progress: 0.05511811023622047
	},
	3592: {
		event: 'input2.eq2',
		progress: 0.06299212598425197
	},
	3593: {
		event: 'input2.eq2',
		progress: 0.07086614173228346
	},
	3594: {
		event: 'input2.eq2',
		progress: 0.07874015748031496
	},
	3595: {
		event: 'input2.eq2',
		progress: 0.08661417322834646
	},
	3596: {
		event: 'input2.eq2',
		progress: 0.09448818897637795
	},
	3597: {
		event: 'input2.eq2',
		progress: 0.10236220472440945
	},
	3598: {
		event: 'input2.eq2',
		progress: 0.11023622047244094
	},
	3599: {
		event: 'input2.eq2',
		progress: 0.11811023622047244
	},
	3600: {
		event: 'input2.eq2',
		progress: 0.12598425196850394
	},
	3601: {
		event: 'input2.eq2',
		progress: 0.13385826771653545
	},
	3602: {
		event: 'input2.eq2',
		progress: 0.14173228346456693
	},
	3603: {
		event: 'input2.eq2',
		progress: 0.14960629921259844
	},
	3604: {
		event: 'input2.eq2',
		progress: 0.15748031496062992
	},
	3605: {
		event: 'input2.eq2',
		progress: 0.16535433070866143
	},
	3606: {
		event: 'input2.eq2',
		progress: 0.1732283464566929
	},
	3607: {
		event: 'input2.eq2',
		progress: 0.18110236220472442
	},
	3608: {
		event: 'input2.eq2',
		progress: 0.1889763779527559
	},
	3609: {
		event: 'input2.eq2',
		progress: 0.1968503937007874
	},
	3610: {
		event: 'input2.eq2',
		progress: 0.2047244094488189
	},
	3611: {
		event: 'input2.eq2',
		progress: 0.2125984251968504
	},
	3612: {
		event: 'input2.eq2',
		progress: 0.2204724409448819
	},
	3613: {
		event: 'input2.eq2',
		progress: 0.2283464566929134
	},
	3614: {
		event: 'input2.eq2',
		progress: 0.23622047244094488
	},
	3615: {
		event: 'input2.eq2',
		progress: 0.2440944881889764
	},
	3616: {
		event: 'input2.eq2',
		progress: 0.25196850393700787
	},
	3617: {
		event: 'input2.eq2',
		progress: 0.25984251968503935
	},
	3618: {
		event: 'input2.eq2',
		progress: 0.2677165354330709
	},
	3619: {
		event: 'input2.eq2',
		progress: 0.2755905511811024
	},
	3620: {
		event: 'input2.eq2',
		progress: 0.28346456692913385
	},
	3621: {
		event: 'input2.eq2',
		progress: 0.29133858267716534
	},
	3622: {
		event: 'input2.eq2',
		progress: 0.2992125984251969
	},
	3623: {
		event: 'input2.eq2',
		progress: 0.30708661417322836
	},
	3624: {
		event: 'input2.eq2',
		progress: 0.31496062992125984
	},
	3625: {
		event: 'input2.eq2',
		progress: 0.3228346456692913
	},
	3626: {
		event: 'input2.eq2',
		progress: 0.33070866141732286
	},
	3627: {
		event: 'input2.eq2',
		progress: 0.33858267716535434
	},
	3628: {
		event: 'input2.eq2',
		progress: 0.3464566929133858
	},
	3629: {
		event: 'input2.eq2',
		progress: 0.3543307086614173
	},
	3630: {
		event: 'input2.eq2',
		progress: 0.36220472440944884
	},
	3631: {
		event: 'input2.eq2',
		progress: 0.3700787401574803
	},
	3632: {
		event: 'input2.eq2',
		progress: 0.3779527559055118
	},
	3633: {
		event: 'input2.eq2',
		progress: 0.3858267716535433
	},
	3634: {
		event: 'input2.eq2',
		progress: 0.3937007874015748
	},
	3635: {
		event: 'input2.eq2',
		progress: 0.4015748031496063
	},
	3636: {
		event: 'input2.eq2',
		progress: 0.4094488188976378
	},
	3637: {
		event: 'input2.eq2',
		progress: 0.41732283464566927
	},
	3638: {
		event: 'input2.eq2',
		progress: 0.4251968503937008
	},
	3639: {
		event: 'input2.eq2',
		progress: 0.4330708661417323
	},
	3640: {
		event: 'input2.eq2',
		progress: 0.4409448818897638
	},
	3641: {
		event: 'input2.eq2',
		progress: 0.44881889763779526
	},
	3642: {
		event: 'input2.eq2',
		progress: 0.4566929133858268
	},
	3643: {
		event: 'input2.eq2',
		progress: 0.4645669291338583
	},
	3644: {
		event: 'input2.eq2',
		progress: 0.47244094488188976
	},
	3645: {
		event: 'input2.eq2',
		progress: 0.48031496062992124
	},
	3646: {
		event: 'input2.eq2',
		progress: 0.4881889763779528
	},
	3647: {
		event: 'input2.eq2',
		progress: 0.49606299212598426
	},
	3648: {
		event: 'input2.eq2',
		progress: 0.5039370078740157
	},
	3649: {
		event: 'input2.eq2',
		progress: 0.5118110236220472
	},
	3650: {
		event: 'input2.eq2',
		progress: 0.5196850393700787
	},
	3651: {
		event: 'input2.eq2',
		progress: 0.5275590551181102
	},
	3652: {
		event: 'input2.eq2',
		progress: 0.5354330708661418
	},
	3653: {
		event: 'input2.eq2',
		progress: 0.5433070866141733
	},
	3654: {
		event: 'input2.eq2',
		progress: 0.5511811023622047
	},
	3655: {
		event: 'input2.eq2',
		progress: 0.5590551181102362
	},
	3656: {
		event: 'input2.eq2',
		progress: 0.5669291338582677
	},
	3657: {
		event: 'input2.eq2',
		progress: 0.5748031496062992
	},
	3658: {
		event: 'input2.eq2',
		progress: 0.5826771653543307
	},
	3659: {
		event: 'input2.eq2',
		progress: 0.5905511811023622
	},
	3660: {
		event: 'input2.eq2',
		progress: 0.5984251968503937
	},
	3661: {
		event: 'input2.eq2',
		progress: 0.6062992125984252
	},
	3662: {
		event: 'input2.eq2',
		progress: 0.6141732283464567
	},
	3663: {
		event: 'input2.eq2',
		progress: 0.6220472440944882
	},
	3664: {
		event: 'input2.eq2',
		progress: 0.6299212598425197
	},
	3665: {
		event: 'input2.eq2',
		progress: 0.6377952755905512
	},
	3666: {
		event: 'input2.eq2',
		progress: 0.6456692913385826
	},
	3667: {
		event: 'input2.eq2',
		progress: 0.6535433070866141
	},
	3668: {
		event: 'input2.eq2',
		progress: 0.6614173228346457
	},
	3669: {
		event: 'input2.eq2',
		progress: 0.6692913385826772
	},
	3670: {
		event: 'input2.eq2',
		progress: 0.6771653543307087
	},
	3671: {
		event: 'input2.eq2',
		progress: 0.6850393700787402
	},
	3672: {
		event: 'input2.eq2',
		progress: 0.6929133858267716
	},
	3673: {
		event: 'input2.eq2',
		progress: 0.7007874015748031
	},
	3674: {
		event: 'input2.eq2',
		progress: 0.7086614173228346
	},
	3675: {
		event: 'input2.eq2',
		progress: 0.7165354330708661
	},
	3676: {
		event: 'input2.eq2',
		progress: 0.7244094488188977
	},
	3677: {
		event: 'input2.eq2',
		progress: 0.7322834645669292
	},
	3678: {
		event: 'input2.eq2',
		progress: 0.7401574803149606
	},
	3679: {
		event: 'input2.eq2',
		progress: 0.7480314960629921
	},
	3680: {
		event: 'input2.eq2',
		progress: 0.7559055118110236
	},
	3681: {
		event: 'input2.eq2',
		progress: 0.7637795275590551
	},
	3682: {
		event: 'input2.eq2',
		progress: 0.7716535433070866
	},
	3683: {
		event: 'input2.eq2',
		progress: 0.7795275590551181
	},
	3684: {
		event: 'input2.eq2',
		progress: 0.7874015748031497
	},
	3685: {
		event: 'input2.eq2',
		progress: 0.7952755905511811
	},
	3686: {
		event: 'input2.eq2',
		progress: 0.8031496062992126
	},
	3687: {
		event: 'input2.eq2',
		progress: 0.8110236220472441
	},
	3688: {
		event: 'input2.eq2',
		progress: 0.8188976377952756
	},
	3689: {
		event: 'input2.eq2',
		progress: 0.8267716535433071
	},
	3690: {
		event: 'input2.eq2',
		progress: 0.8346456692913385
	},
	3691: {
		event: 'input2.eq2',
		progress: 0.84251968503937
	},
	3692: {
		event: 'input2.eq2',
		progress: 0.8503937007874016
	},
	3693: {
		event: 'input2.eq2',
		progress: 0.8582677165354331
	},
	3694: {
		event: 'input2.eq2',
		progress: 0.8661417322834646
	},
	3695: {
		event: 'input2.eq2',
		progress: 0.8740157480314961
	},
	3696: {
		event: 'input2.eq2',
		progress: 0.8818897637795275
	},
	3697: {
		event: 'input2.eq2',
		progress: 0.889763779527559
	},
	3698: {
		event: 'input2.eq2',
		progress: 0.8976377952755905
	},
	3699: {
		event: 'input2.eq2',
		progress: 0.905511811023622
	},
	3700: {
		event: 'input2.eq2',
		progress: 0.9133858267716536
	},
	3701: {
		event: 'input2.eq2',
		progress: 0.9212598425196851
	},
	3702: {
		event: 'input2.eq2',
		progress: 0.9291338582677166
	},
	3703: {
		event: 'input2.eq2',
		progress: 0.937007874015748
	},
	3704: {
		event: 'input2.eq2',
		progress: 0.9448818897637795
	},
	3705: {
		event: 'input2.eq2',
		progress: 0.952755905511811
	},
	3706: {
		event: 'input2.eq2',
		progress: 0.9606299212598425
	},
	3707: {
		event: 'input2.eq2',
		progress: 0.968503937007874
	},
	3708: {
		event: 'input2.eq2',
		progress: 0.9763779527559056
	},
	3709: {
		event: 'input2.eq2',
		progress: 0.984251968503937
	},
	3710: {
		event: 'input2.eq2',
		progress: 0.9921259842519685
	},
	3711: {
		event: 'input2.eq2',
		progress: 1
	},
	3840: {
		event: 'input3.eq2',
		progress: 0
	},
	3841: {
		event: 'input3.eq2',
		progress: 0.007874015748031496
	},
	3842: {
		event: 'input3.eq2',
		progress: 0.015748031496062992
	},
	3843: {
		event: 'input3.eq2',
		progress: 0.023622047244094488
	},
	3844: {
		event: 'input3.eq2',
		progress: 0.031496062992125984
	},
	3845: {
		event: 'input3.eq2',
		progress: 0.03937007874015748
	},
	3846: {
		event: 'input3.eq2',
		progress: 0.047244094488188976
	},
	3847: {
		event: 'input3.eq2',
		progress: 0.05511811023622047
	},
	3848: {
		event: 'input3.eq2',
		progress: 0.06299212598425197
	},
	3849: {
		event: 'input3.eq2',
		progress: 0.07086614173228346
	},
	3850: {
		event: 'input3.eq2',
		progress: 0.07874015748031496
	},
	3851: {
		event: 'input3.eq2',
		progress: 0.08661417322834646
	},
	3852: {
		event: 'input3.eq2',
		progress: 0.09448818897637795
	},
	3853: {
		event: 'input3.eq2',
		progress: 0.10236220472440945
	},
	3854: {
		event: 'input3.eq2',
		progress: 0.11023622047244094
	},
	3855: {
		event: 'input3.eq2',
		progress: 0.11811023622047244
	},
	3856: {
		event: 'input3.eq2',
		progress: 0.12598425196850394
	},
	3857: {
		event: 'input3.eq2',
		progress: 0.13385826771653545
	},
	3858: {
		event: 'input3.eq2',
		progress: 0.14173228346456693
	},
	3859: {
		event: 'input3.eq2',
		progress: 0.14960629921259844
	},
	3860: {
		event: 'input3.eq2',
		progress: 0.15748031496062992
	},
	3861: {
		event: 'input3.eq2',
		progress: 0.16535433070866143
	},
	3862: {
		event: 'input3.eq2',
		progress: 0.1732283464566929
	},
	3863: {
		event: 'input3.eq2',
		progress: 0.18110236220472442
	},
	3864: {
		event: 'input3.eq2',
		progress: 0.1889763779527559
	},
	3865: {
		event: 'input3.eq2',
		progress: 0.1968503937007874
	},
	3866: {
		event: 'input3.eq2',
		progress: 0.2047244094488189
	},
	3867: {
		event: 'input3.eq2',
		progress: 0.2125984251968504
	},
	3868: {
		event: 'input3.eq2',
		progress: 0.2204724409448819
	},
	3869: {
		event: 'input3.eq2',
		progress: 0.2283464566929134
	},
	3870: {
		event: 'input3.eq2',
		progress: 0.23622047244094488
	},
	3871: {
		event: 'input3.eq2',
		progress: 0.2440944881889764
	},
	3872: {
		event: 'input3.eq2',
		progress: 0.25196850393700787
	},
	3873: {
		event: 'input3.eq2',
		progress: 0.25984251968503935
	},
	3874: {
		event: 'input3.eq2',
		progress: 0.2677165354330709
	},
	3875: {
		event: 'input3.eq2',
		progress: 0.2755905511811024
	},
	3876: {
		event: 'input3.eq2',
		progress: 0.28346456692913385
	},
	3877: {
		event: 'input3.eq2',
		progress: 0.29133858267716534
	},
	3878: {
		event: 'input3.eq2',
		progress: 0.2992125984251969
	},
	3879: {
		event: 'input3.eq2',
		progress: 0.30708661417322836
	},
	3880: {
		event: 'input3.eq2',
		progress: 0.31496062992125984
	},
	3881: {
		event: 'input3.eq2',
		progress: 0.3228346456692913
	},
	3882: {
		event: 'input3.eq2',
		progress: 0.33070866141732286
	},
	3883: {
		event: 'input3.eq2',
		progress: 0.33858267716535434
	},
	3884: {
		event: 'input3.eq2',
		progress: 0.3464566929133858
	},
	3885: {
		event: 'input3.eq2',
		progress: 0.3543307086614173
	},
	3886: {
		event: 'input3.eq2',
		progress: 0.36220472440944884
	},
	3887: {
		event: 'input3.eq2',
		progress: 0.3700787401574803
	},
	3888: {
		event: 'input3.eq2',
		progress: 0.3779527559055118
	},
	3889: {
		event: 'input3.eq2',
		progress: 0.3858267716535433
	},
	3890: {
		event: 'input3.eq2',
		progress: 0.3937007874015748
	},
	3891: {
		event: 'input3.eq2',
		progress: 0.4015748031496063
	},
	3892: {
		event: 'input3.eq2',
		progress: 0.4094488188976378
	},
	3893: {
		event: 'input3.eq2',
		progress: 0.41732283464566927
	},
	3894: {
		event: 'input3.eq2',
		progress: 0.4251968503937008
	},
	3895: {
		event: 'input3.eq2',
		progress: 0.4330708661417323
	},
	3896: {
		event: 'input3.eq2',
		progress: 0.4409448818897638
	},
	3897: {
		event: 'input3.eq2',
		progress: 0.44881889763779526
	},
	3898: {
		event: 'input3.eq2',
		progress: 0.4566929133858268
	},
	3899: {
		event: 'input3.eq2',
		progress: 0.4645669291338583
	},
	3900: {
		event: 'input3.eq2',
		progress: 0.47244094488188976
	},
	3901: {
		event: 'input3.eq2',
		progress: 0.48031496062992124
	},
	3902: {
		event: 'input3.eq2',
		progress: 0.4881889763779528
	},
	3903: {
		event: 'input3.eq2',
		progress: 0.49606299212598426
	},
	3904: {
		event: 'input3.eq2',
		progress: 0.5039370078740157
	},
	3905: {
		event: 'input3.eq2',
		progress: 0.5118110236220472
	},
	3906: {
		event: 'input3.eq2',
		progress: 0.5196850393700787
	},
	3907: {
		event: 'input3.eq2',
		progress: 0.5275590551181102
	},
	3908: {
		event: 'input3.eq2',
		progress: 0.5354330708661418
	},
	3909: {
		event: 'input3.eq2',
		progress: 0.5433070866141733
	},
	3910: {
		event: 'input3.eq2',
		progress: 0.5511811023622047
	},
	3911: {
		event: 'input3.eq2',
		progress: 0.5590551181102362
	},
	3912: {
		event: 'input3.eq2',
		progress: 0.5669291338582677
	},
	3913: {
		event: 'input3.eq2',
		progress: 0.5748031496062992
	},
	3914: {
		event: 'input3.eq2',
		progress: 0.5826771653543307
	},
	3915: {
		event: 'input3.eq2',
		progress: 0.5905511811023622
	},
	3916: {
		event: 'input3.eq2',
		progress: 0.5984251968503937
	},
	3917: {
		event: 'input3.eq2',
		progress: 0.6062992125984252
	},
	3918: {
		event: 'input3.eq2',
		progress: 0.6141732283464567
	},
	3919: {
		event: 'input3.eq2',
		progress: 0.6220472440944882
	},
	3920: {
		event: 'input3.eq2',
		progress: 0.6299212598425197
	},
	3921: {
		event: 'input3.eq2',
		progress: 0.6377952755905512
	},
	3922: {
		event: 'input3.eq2',
		progress: 0.6456692913385826
	},
	3923: {
		event: 'input3.eq2',
		progress: 0.6535433070866141
	},
	3924: {
		event: 'input3.eq2',
		progress: 0.6614173228346457
	},
	3925: {
		event: 'input3.eq2',
		progress: 0.6692913385826772
	},
	3926: {
		event: 'input3.eq2',
		progress: 0.6771653543307087
	},
	3927: {
		event: 'input3.eq2',
		progress: 0.6850393700787402
	},
	3928: {
		event: 'input3.eq2',
		progress: 0.6929133858267716
	},
	3929: {
		event: 'input3.eq2',
		progress: 0.7007874015748031
	},
	3930: {
		event: 'input3.eq2',
		progress: 0.7086614173228346
	},
	3931: {
		event: 'input3.eq2',
		progress: 0.7165354330708661
	},
	3932: {
		event: 'input3.eq2',
		progress: 0.7244094488188977
	},
	3933: {
		event: 'input3.eq2',
		progress: 0.7322834645669292
	},
	3934: {
		event: 'input3.eq2',
		progress: 0.7401574803149606
	},
	3935: {
		event: 'input3.eq2',
		progress: 0.7480314960629921
	},
	3936: {
		event: 'input3.eq2',
		progress: 0.7559055118110236
	},
	3937: {
		event: 'input3.eq2',
		progress: 0.7637795275590551
	},
	3938: {
		event: 'input3.eq2',
		progress: 0.7716535433070866
	},
	3939: {
		event: 'input3.eq2',
		progress: 0.7795275590551181
	},
	3940: {
		event: 'input3.eq2',
		progress: 0.7874015748031497
	},
	3941: {
		event: 'input3.eq2',
		progress: 0.7952755905511811
	},
	3942: {
		event: 'input3.eq2',
		progress: 0.8031496062992126
	},
	3943: {
		event: 'input3.eq2',
		progress: 0.8110236220472441
	},
	3944: {
		event: 'input3.eq2',
		progress: 0.8188976377952756
	},
	3945: {
		event: 'input3.eq2',
		progress: 0.8267716535433071
	},
	3946: {
		event: 'input3.eq2',
		progress: 0.8346456692913385
	},
	3947: {
		event: 'input3.eq2',
		progress: 0.84251968503937
	},
	3948: {
		event: 'input3.eq2',
		progress: 0.8503937007874016
	},
	3949: {
		event: 'input3.eq2',
		progress: 0.8582677165354331
	},
	3950: {
		event: 'input3.eq2',
		progress: 0.8661417322834646
	},
	3951: {
		event: 'input3.eq2',
		progress: 0.8740157480314961
	},
	3952: {
		event: 'input3.eq2',
		progress: 0.8818897637795275
	},
	3953: {
		event: 'input3.eq2',
		progress: 0.889763779527559
	},
	3954: {
		event: 'input3.eq2',
		progress: 0.8976377952755905
	},
	3955: {
		event: 'input3.eq2',
		progress: 0.905511811023622
	},
	3956: {
		event: 'input3.eq2',
		progress: 0.9133858267716536
	},
	3957: {
		event: 'input3.eq2',
		progress: 0.9212598425196851
	},
	3958: {
		event: 'input3.eq2',
		progress: 0.9291338582677166
	},
	3959: {
		event: 'input3.eq2',
		progress: 0.937007874015748
	},
	3960: {
		event: 'input3.eq2',
		progress: 0.9448818897637795
	},
	3961: {
		event: 'input3.eq2',
		progress: 0.952755905511811
	},
	3962: {
		event: 'input3.eq2',
		progress: 0.9606299212598425
	},
	3963: {
		event: 'input3.eq2',
		progress: 0.968503937007874
	},
	3964: {
		event: 'input3.eq2',
		progress: 0.9763779527559056
	},
	3965: {
		event: 'input3.eq2',
		progress: 0.984251968503937
	},
	3966: {
		event: 'input3.eq2',
		progress: 0.9921259842519685
	},
	3967: {
		event: 'input3.eq2',
		progress: 1
	},
	4096: {
		event: 'input4.eq2',
		progress: 0
	},
	4097: {
		event: 'input4.eq2',
		progress: 0.007874015748031496
	},
	4098: {
		event: 'input4.eq2',
		progress: 0.015748031496062992
	},
	4099: {
		event: 'input4.eq2',
		progress: 0.023622047244094488
	},
	4100: {
		event: 'input4.eq2',
		progress: 0.031496062992125984
	},
	4101: {
		event: 'input4.eq2',
		progress: 0.03937007874015748
	},
	4102: {
		event: 'input4.eq2',
		progress: 0.047244094488188976
	},
	4103: {
		event: 'input4.eq2',
		progress: 0.05511811023622047
	},
	4104: {
		event: 'input4.eq2',
		progress: 0.06299212598425197
	},
	4105: {
		event: 'input4.eq2',
		progress: 0.07086614173228346
	},
	4106: {
		event: 'input4.eq2',
		progress: 0.07874015748031496
	},
	4107: {
		event: 'input4.eq2',
		progress: 0.08661417322834646
	},
	4108: {
		event: 'input4.eq2',
		progress: 0.09448818897637795
	},
	4109: {
		event: 'input4.eq2',
		progress: 0.10236220472440945
	},
	4110: {
		event: 'input4.eq2',
		progress: 0.11023622047244094
	},
	4111: {
		event: 'input4.eq2',
		progress: 0.11811023622047244
	},
	4112: {
		event: 'input4.eq2',
		progress: 0.12598425196850394
	},
	4113: {
		event: 'input4.eq2',
		progress: 0.13385826771653545
	},
	4114: {
		event: 'input4.eq2',
		progress: 0.14173228346456693
	},
	4115: {
		event: 'input4.eq2',
		progress: 0.14960629921259844
	},
	4116: {
		event: 'input4.eq2',
		progress: 0.15748031496062992
	},
	4117: {
		event: 'input4.eq2',
		progress: 0.16535433070866143
	},
	4118: {
		event: 'input4.eq2',
		progress: 0.1732283464566929
	},
	4119: {
		event: 'input4.eq2',
		progress: 0.18110236220472442
	},
	4120: {
		event: 'input4.eq2',
		progress: 0.1889763779527559
	},
	4121: {
		event: 'input4.eq2',
		progress: 0.1968503937007874
	},
	4122: {
		event: 'input4.eq2',
		progress: 0.2047244094488189
	},
	4123: {
		event: 'input4.eq2',
		progress: 0.2125984251968504
	},
	4124: {
		event: 'input4.eq2',
		progress: 0.2204724409448819
	},
	4125: {
		event: 'input4.eq2',
		progress: 0.2283464566929134
	},
	4126: {
		event: 'input4.eq2',
		progress: 0.23622047244094488
	},
	4127: {
		event: 'input4.eq2',
		progress: 0.2440944881889764
	},
	4128: {
		event: 'input4.eq2',
		progress: 0.25196850393700787
	},
	4129: {
		event: 'input4.eq2',
		progress: 0.25984251968503935
	},
	4130: {
		event: 'input4.eq2',
		progress: 0.2677165354330709
	},
	4131: {
		event: 'input4.eq2',
		progress: 0.2755905511811024
	},
	4132: {
		event: 'input4.eq2',
		progress: 0.28346456692913385
	},
	4133: {
		event: 'input4.eq2',
		progress: 0.29133858267716534
	},
	4134: {
		event: 'input4.eq2',
		progress: 0.2992125984251969
	},
	4135: {
		event: 'input4.eq2',
		progress: 0.30708661417322836
	},
	4136: {
		event: 'input4.eq2',
		progress: 0.31496062992125984
	},
	4137: {
		event: 'input4.eq2',
		progress: 0.3228346456692913
	},
	4138: {
		event: 'input4.eq2',
		progress: 0.33070866141732286
	},
	4139: {
		event: 'input4.eq2',
		progress: 0.33858267716535434
	},
	4140: {
		event: 'input4.eq2',
		progress: 0.3464566929133858
	},
	4141: {
		event: 'input4.eq2',
		progress: 0.3543307086614173
	},
	4142: {
		event: 'input4.eq2',
		progress: 0.36220472440944884
	},
	4143: {
		event: 'input4.eq2',
		progress: 0.3700787401574803
	},
	4144: {
		event: 'input4.eq2',
		progress: 0.3779527559055118
	},
	4145: {
		event: 'input4.eq2',
		progress: 0.3858267716535433
	},
	4146: {
		event: 'input4.eq2',
		progress: 0.3937007874015748
	},
	4147: {
		event: 'input4.eq2',
		progress: 0.4015748031496063
	},
	4148: {
		event: 'input4.eq2',
		progress: 0.4094488188976378
	},
	4149: {
		event: 'input4.eq2',
		progress: 0.41732283464566927
	},
	4150: {
		event: 'input4.eq2',
		progress: 0.4251968503937008
	},
	4151: {
		event: 'input4.eq2',
		progress: 0.4330708661417323
	},
	4152: {
		event: 'input4.eq2',
		progress: 0.4409448818897638
	},
	4153: {
		event: 'input4.eq2',
		progress: 0.44881889763779526
	},
	4154: {
		event: 'input4.eq2',
		progress: 0.4566929133858268
	},
	4155: {
		event: 'input4.eq2',
		progress: 0.4645669291338583
	},
	4156: {
		event: 'input4.eq2',
		progress: 0.47244094488188976
	},
	4157: {
		event: 'input4.eq2',
		progress: 0.48031496062992124
	},
	4158: {
		event: 'input4.eq2',
		progress: 0.4881889763779528
	},
	4159: {
		event: 'input4.eq2',
		progress: 0.49606299212598426
	},
	4160: {
		event: 'input4.eq2',
		progress: 0.5039370078740157
	},
	4161: {
		event: 'input4.eq2',
		progress: 0.5118110236220472
	},
	4162: {
		event: 'input4.eq2',
		progress: 0.5196850393700787
	},
	4163: {
		event: 'input4.eq2',
		progress: 0.5275590551181102
	},
	4164: {
		event: 'input4.eq2',
		progress: 0.5354330708661418
	},
	4165: {
		event: 'input4.eq2',
		progress: 0.5433070866141733
	},
	4166: {
		event: 'input4.eq2',
		progress: 0.5511811023622047
	},
	4167: {
		event: 'input4.eq2',
		progress: 0.5590551181102362
	},
	4168: {
		event: 'input4.eq2',
		progress: 0.5669291338582677
	},
	4169: {
		event: 'input4.eq2',
		progress: 0.5748031496062992
	},
	4170: {
		event: 'input4.eq2',
		progress: 0.5826771653543307
	},
	4171: {
		event: 'input4.eq2',
		progress: 0.5905511811023622
	},
	4172: {
		event: 'input4.eq2',
		progress: 0.5984251968503937
	},
	4173: {
		event: 'input4.eq2',
		progress: 0.6062992125984252
	},
	4174: {
		event: 'input4.eq2',
		progress: 0.6141732283464567
	},
	4175: {
		event: 'input4.eq2',
		progress: 0.6220472440944882
	},
	4176: {
		event: 'input4.eq2',
		progress: 0.6299212598425197
	},
	4177: {
		event: 'input4.eq2',
		progress: 0.6377952755905512
	},
	4178: {
		event: 'input4.eq2',
		progress: 0.6456692913385826
	},
	4179: {
		event: 'input4.eq2',
		progress: 0.6535433070866141
	},
	4180: {
		event: 'input4.eq2',
		progress: 0.6614173228346457
	},
	4181: {
		event: 'input4.eq2',
		progress: 0.6692913385826772
	},
	4182: {
		event: 'input4.eq2',
		progress: 0.6771653543307087
	},
	4183: {
		event: 'input4.eq2',
		progress: 0.6850393700787402
	},
	4184: {
		event: 'input4.eq2',
		progress: 0.6929133858267716
	},
	4185: {
		event: 'input4.eq2',
		progress: 0.7007874015748031
	},
	4186: {
		event: 'input4.eq2',
		progress: 0.7086614173228346
	},
	4187: {
		event: 'input4.eq2',
		progress: 0.7165354330708661
	},
	4188: {
		event: 'input4.eq2',
		progress: 0.7244094488188977
	},
	4189: {
		event: 'input4.eq2',
		progress: 0.7322834645669292
	},
	4190: {
		event: 'input4.eq2',
		progress: 0.7401574803149606
	},
	4191: {
		event: 'input4.eq2',
		progress: 0.7480314960629921
	},
	4192: {
		event: 'input4.eq2',
		progress: 0.7559055118110236
	},
	4193: {
		event: 'input4.eq2',
		progress: 0.7637795275590551
	},
	4194: {
		event: 'input4.eq2',
		progress: 0.7716535433070866
	},
	4195: {
		event: 'input4.eq2',
		progress: 0.7795275590551181
	},
	4196: {
		event: 'input4.eq2',
		progress: 0.7874015748031497
	},
	4197: {
		event: 'input4.eq2',
		progress: 0.7952755905511811
	},
	4198: {
		event: 'input4.eq2',
		progress: 0.8031496062992126
	},
	4199: {
		event: 'input4.eq2',
		progress: 0.8110236220472441
	},
	4200: {
		event: 'input4.eq2',
		progress: 0.8188976377952756
	},
	4201: {
		event: 'input4.eq2',
		progress: 0.8267716535433071
	},
	4202: {
		event: 'input4.eq2',
		progress: 0.8346456692913385
	},
	4203: {
		event: 'input4.eq2',
		progress: 0.84251968503937
	},
	4204: {
		event: 'input4.eq2',
		progress: 0.8503937007874016
	},
	4205: {
		event: 'input4.eq2',
		progress: 0.8582677165354331
	},
	4206: {
		event: 'input4.eq2',
		progress: 0.8661417322834646
	},
	4207: {
		event: 'input4.eq2',
		progress: 0.8740157480314961
	},
	4208: {
		event: 'input4.eq2',
		progress: 0.8818897637795275
	},
	4209: {
		event: 'input4.eq2',
		progress: 0.889763779527559
	},
	4210: {
		event: 'input4.eq2',
		progress: 0.8976377952755905
	},
	4211: {
		event: 'input4.eq2',
		progress: 0.905511811023622
	},
	4212: {
		event: 'input4.eq2',
		progress: 0.9133858267716536
	},
	4213: {
		event: 'input4.eq2',
		progress: 0.9212598425196851
	},
	4214: {
		event: 'input4.eq2',
		progress: 0.9291338582677166
	},
	4215: {
		event: 'input4.eq2',
		progress: 0.937007874015748
	},
	4216: {
		event: 'input4.eq2',
		progress: 0.9448818897637795
	},
	4217: {
		event: 'input4.eq2',
		progress: 0.952755905511811
	},
	4218: {
		event: 'input4.eq2',
		progress: 0.9606299212598425
	},
	4219: {
		event: 'input4.eq2',
		progress: 0.968503937007874
	},
	4220: {
		event: 'input4.eq2',
		progress: 0.9763779527559056
	},
	4221: {
		event: 'input4.eq2',
		progress: 0.984251968503937
	},
	4222: {
		event: 'input4.eq2',
		progress: 0.9921259842519685
	},
	4223: {
		event: 'input4.eq2',
		progress: 1
	},
	4352: {
		event: 'input5.eq2',
		progress: 0
	},
	4353: {
		event: 'input5.eq2',
		progress: 0.007874015748031496
	},
	4354: {
		event: 'input5.eq2',
		progress: 0.015748031496062992
	},
	4355: {
		event: 'input5.eq2',
		progress: 0.023622047244094488
	},
	4356: {
		event: 'input5.eq2',
		progress: 0.031496062992125984
	},
	4357: {
		event: 'input5.eq2',
		progress: 0.03937007874015748
	},
	4358: {
		event: 'input5.eq2',
		progress: 0.047244094488188976
	},
	4359: {
		event: 'input5.eq2',
		progress: 0.05511811023622047
	},
	4360: {
		event: 'input5.eq2',
		progress: 0.06299212598425197
	},
	4361: {
		event: 'input5.eq2',
		progress: 0.07086614173228346
	},
	4362: {
		event: 'input5.eq2',
		progress: 0.07874015748031496
	},
	4363: {
		event: 'input5.eq2',
		progress: 0.08661417322834646
	},
	4364: {
		event: 'input5.eq2',
		progress: 0.09448818897637795
	},
	4365: {
		event: 'input5.eq2',
		progress: 0.10236220472440945
	},
	4366: {
		event: 'input5.eq2',
		progress: 0.11023622047244094
	},
	4367: {
		event: 'input5.eq2',
		progress: 0.11811023622047244
	},
	4368: {
		event: 'input5.eq2',
		progress: 0.12598425196850394
	},
	4369: {
		event: 'input5.eq2',
		progress: 0.13385826771653545
	},
	4370: {
		event: 'input5.eq2',
		progress: 0.14173228346456693
	},
	4371: {
		event: 'input5.eq2',
		progress: 0.14960629921259844
	},
	4372: {
		event: 'input5.eq2',
		progress: 0.15748031496062992
	},
	4373: {
		event: 'input5.eq2',
		progress: 0.16535433070866143
	},
	4374: {
		event: 'input5.eq2',
		progress: 0.1732283464566929
	},
	4375: {
		event: 'input5.eq2',
		progress: 0.18110236220472442
	},
	4376: {
		event: 'input5.eq2',
		progress: 0.1889763779527559
	},
	4377: {
		event: 'input5.eq2',
		progress: 0.1968503937007874
	},
	4378: {
		event: 'input5.eq2',
		progress: 0.2047244094488189
	},
	4379: {
		event: 'input5.eq2',
		progress: 0.2125984251968504
	},
	4380: {
		event: 'input5.eq2',
		progress: 0.2204724409448819
	},
	4381: {
		event: 'input5.eq2',
		progress: 0.2283464566929134
	},
	4382: {
		event: 'input5.eq2',
		progress: 0.23622047244094488
	},
	4383: {
		event: 'input5.eq2',
		progress: 0.2440944881889764
	},
	4384: {
		event: 'input5.eq2',
		progress: 0.25196850393700787
	},
	4385: {
		event: 'input5.eq2',
		progress: 0.25984251968503935
	},
	4386: {
		event: 'input5.eq2',
		progress: 0.2677165354330709
	},
	4387: {
		event: 'input5.eq2',
		progress: 0.2755905511811024
	},
	4388: {
		event: 'input5.eq2',
		progress: 0.28346456692913385
	},
	4389: {
		event: 'input5.eq2',
		progress: 0.29133858267716534
	},
	4390: {
		event: 'input5.eq2',
		progress: 0.2992125984251969
	},
	4391: {
		event: 'input5.eq2',
		progress: 0.30708661417322836
	},
	4392: {
		event: 'input5.eq2',
		progress: 0.31496062992125984
	},
	4393: {
		event: 'input5.eq2',
		progress: 0.3228346456692913
	},
	4394: {
		event: 'input5.eq2',
		progress: 0.33070866141732286
	},
	4395: {
		event: 'input5.eq2',
		progress: 0.33858267716535434
	},
	4396: {
		event: 'input5.eq2',
		progress: 0.3464566929133858
	},
	4397: {
		event: 'input5.eq2',
		progress: 0.3543307086614173
	},
	4398: {
		event: 'input5.eq2',
		progress: 0.36220472440944884
	},
	4399: {
		event: 'input5.eq2',
		progress: 0.3700787401574803
	},
	4400: {
		event: 'input5.eq2',
		progress: 0.3779527559055118
	},
	4401: {
		event: 'input5.eq2',
		progress: 0.3858267716535433
	},
	4402: {
		event: 'input5.eq2',
		progress: 0.3937007874015748
	},
	4403: {
		event: 'input5.eq2',
		progress: 0.4015748031496063
	},
	4404: {
		event: 'input5.eq2',
		progress: 0.4094488188976378
	},
	4405: {
		event: 'input5.eq2',
		progress: 0.41732283464566927
	},
	4406: {
		event: 'input5.eq2',
		progress: 0.4251968503937008
	},
	4407: {
		event: 'input5.eq2',
		progress: 0.4330708661417323
	},
	4408: {
		event: 'input5.eq2',
		progress: 0.4409448818897638
	},
	4409: {
		event: 'input5.eq2',
		progress: 0.44881889763779526
	},
	4410: {
		event: 'input5.eq2',
		progress: 0.4566929133858268
	},
	4411: {
		event: 'input5.eq2',
		progress: 0.4645669291338583
	},
	4412: {
		event: 'input5.eq2',
		progress: 0.47244094488188976
	},
	4413: {
		event: 'input5.eq2',
		progress: 0.48031496062992124
	},
	4414: {
		event: 'input5.eq2',
		progress: 0.4881889763779528
	},
	4415: {
		event: 'input5.eq2',
		progress: 0.49606299212598426
	},
	4416: {
		event: 'input5.eq2',
		progress: 0.5039370078740157
	},
	4417: {
		event: 'input5.eq2',
		progress: 0.5118110236220472
	},
	4418: {
		event: 'input5.eq2',
		progress: 0.5196850393700787
	},
	4419: {
		event: 'input5.eq2',
		progress: 0.5275590551181102
	},
	4420: {
		event: 'input5.eq2',
		progress: 0.5354330708661418
	},
	4421: {
		event: 'input5.eq2',
		progress: 0.5433070866141733
	},
	4422: {
		event: 'input5.eq2',
		progress: 0.5511811023622047
	},
	4423: {
		event: 'input5.eq2',
		progress: 0.5590551181102362
	},
	4424: {
		event: 'input5.eq2',
		progress: 0.5669291338582677
	},
	4425: {
		event: 'input5.eq2',
		progress: 0.5748031496062992
	},
	4426: {
		event: 'input5.eq2',
		progress: 0.5826771653543307
	},
	4427: {
		event: 'input5.eq2',
		progress: 0.5905511811023622
	},
	4428: {
		event: 'input5.eq2',
		progress: 0.5984251968503937
	},
	4429: {
		event: 'input5.eq2',
		progress: 0.6062992125984252
	},
	4430: {
		event: 'input5.eq2',
		progress: 0.6141732283464567
	},
	4431: {
		event: 'input5.eq2',
		progress: 0.6220472440944882
	},
	4432: {
		event: 'input5.eq2',
		progress: 0.6299212598425197
	},
	4433: {
		event: 'input5.eq2',
		progress: 0.6377952755905512
	},
	4434: {
		event: 'input5.eq2',
		progress: 0.6456692913385826
	},
	4435: {
		event: 'input5.eq2',
		progress: 0.6535433070866141
	},
	4436: {
		event: 'input5.eq2',
		progress: 0.6614173228346457
	},
	4437: {
		event: 'input5.eq2',
		progress: 0.6692913385826772
	},
	4438: {
		event: 'input5.eq2',
		progress: 0.6771653543307087
	},
	4439: {
		event: 'input5.eq2',
		progress: 0.6850393700787402
	},
	4440: {
		event: 'input5.eq2',
		progress: 0.6929133858267716
	},
	4441: {
		event: 'input5.eq2',
		progress: 0.7007874015748031
	},
	4442: {
		event: 'input5.eq2',
		progress: 0.7086614173228346
	},
	4443: {
		event: 'input5.eq2',
		progress: 0.7165354330708661
	},
	4444: {
		event: 'input5.eq2',
		progress: 0.7244094488188977
	},
	4445: {
		event: 'input5.eq2',
		progress: 0.7322834645669292
	},
	4446: {
		event: 'input5.eq2',
		progress: 0.7401574803149606
	},
	4447: {
		event: 'input5.eq2',
		progress: 0.7480314960629921
	},
	4448: {
		event: 'input5.eq2',
		progress: 0.7559055118110236
	},
	4449: {
		event: 'input5.eq2',
		progress: 0.7637795275590551
	},
	4450: {
		event: 'input5.eq2',
		progress: 0.7716535433070866
	},
	4451: {
		event: 'input5.eq2',
		progress: 0.7795275590551181
	},
	4452: {
		event: 'input5.eq2',
		progress: 0.7874015748031497
	},
	4453: {
		event: 'input5.eq2',
		progress: 0.7952755905511811
	},
	4454: {
		event: 'input5.eq2',
		progress: 0.8031496062992126
	},
	4455: {
		event: 'input5.eq2',
		progress: 0.8110236220472441
	},
	4456: {
		event: 'input5.eq2',
		progress: 0.8188976377952756
	},
	4457: {
		event: 'input5.eq2',
		progress: 0.8267716535433071
	},
	4458: {
		event: 'input5.eq2',
		progress: 0.8346456692913385
	},
	4459: {
		event: 'input5.eq2',
		progress: 0.84251968503937
	},
	4460: {
		event: 'input5.eq2',
		progress: 0.8503937007874016
	},
	4461: {
		event: 'input5.eq2',
		progress: 0.8582677165354331
	},
	4462: {
		event: 'input5.eq2',
		progress: 0.8661417322834646
	},
	4463: {
		event: 'input5.eq2',
		progress: 0.8740157480314961
	},
	4464: {
		event: 'input5.eq2',
		progress: 0.8818897637795275
	},
	4465: {
		event: 'input5.eq2',
		progress: 0.889763779527559
	},
	4466: {
		event: 'input5.eq2',
		progress: 0.8976377952755905
	},
	4467: {
		event: 'input5.eq2',
		progress: 0.905511811023622
	},
	4468: {
		event: 'input5.eq2',
		progress: 0.9133858267716536
	},
	4469: {
		event: 'input5.eq2',
		progress: 0.9212598425196851
	},
	4470: {
		event: 'input5.eq2',
		progress: 0.9291338582677166
	},
	4471: {
		event: 'input5.eq2',
		progress: 0.937007874015748
	},
	4472: {
		event: 'input5.eq2',
		progress: 0.9448818897637795
	},
	4473: {
		event: 'input5.eq2',
		progress: 0.952755905511811
	},
	4474: {
		event: 'input5.eq2',
		progress: 0.9606299212598425
	},
	4475: {
		event: 'input5.eq2',
		progress: 0.968503937007874
	},
	4476: {
		event: 'input5.eq2',
		progress: 0.9763779527559056
	},
	4477: {
		event: 'input5.eq2',
		progress: 0.984251968503937
	},
	4478: {
		event: 'input5.eq2',
		progress: 0.9921259842519685
	},
	4479: {
		event: 'input5.eq2',
		progress: 1
	},
	4608: {
		event: 'input6.eq2',
		progress: 0
	},
	4609: {
		event: 'input6.eq2',
		progress: 0.007874015748031496
	},
	4610: {
		event: 'input6.eq2',
		progress: 0.015748031496062992
	},
	4611: {
		event: 'input6.eq2',
		progress: 0.023622047244094488
	},
	4612: {
		event: 'input6.eq2',
		progress: 0.031496062992125984
	},
	4613: {
		event: 'input6.eq2',
		progress: 0.03937007874015748
	},
	4614: {
		event: 'input6.eq2',
		progress: 0.047244094488188976
	},
	4615: {
		event: 'input6.eq2',
		progress: 0.05511811023622047
	},
	4616: {
		event: 'input6.eq2',
		progress: 0.06299212598425197
	},
	4617: {
		event: 'input6.eq2',
		progress: 0.07086614173228346
	},
	4618: {
		event: 'input6.eq2',
		progress: 0.07874015748031496
	},
	4619: {
		event: 'input6.eq2',
		progress: 0.08661417322834646
	},
	4620: {
		event: 'input6.eq2',
		progress: 0.09448818897637795
	},
	4621: {
		event: 'input6.eq2',
		progress: 0.10236220472440945
	},
	4622: {
		event: 'input6.eq2',
		progress: 0.11023622047244094
	},
	4623: {
		event: 'input6.eq2',
		progress: 0.11811023622047244
	},
	4624: {
		event: 'input6.eq2',
		progress: 0.12598425196850394
	},
	4625: {
		event: 'input6.eq2',
		progress: 0.13385826771653545
	},
	4626: {
		event: 'input6.eq2',
		progress: 0.14173228346456693
	},
	4627: {
		event: 'input6.eq2',
		progress: 0.14960629921259844
	},
	4628: {
		event: 'input6.eq2',
		progress: 0.15748031496062992
	},
	4629: {
		event: 'input6.eq2',
		progress: 0.16535433070866143
	},
	4630: {
		event: 'input6.eq2',
		progress: 0.1732283464566929
	},
	4631: {
		event: 'input6.eq2',
		progress: 0.18110236220472442
	},
	4632: {
		event: 'input6.eq2',
		progress: 0.1889763779527559
	},
	4633: {
		event: 'input6.eq2',
		progress: 0.1968503937007874
	},
	4634: {
		event: 'input6.eq2',
		progress: 0.2047244094488189
	},
	4635: {
		event: 'input6.eq2',
		progress: 0.2125984251968504
	},
	4636: {
		event: 'input6.eq2',
		progress: 0.2204724409448819
	},
	4637: {
		event: 'input6.eq2',
		progress: 0.2283464566929134
	},
	4638: {
		event: 'input6.eq2',
		progress: 0.23622047244094488
	},
	4639: {
		event: 'input6.eq2',
		progress: 0.2440944881889764
	},
	4640: {
		event: 'input6.eq2',
		progress: 0.25196850393700787
	},
	4641: {
		event: 'input6.eq2',
		progress: 0.25984251968503935
	},
	4642: {
		event: 'input6.eq2',
		progress: 0.2677165354330709
	},
	4643: {
		event: 'input6.eq2',
		progress: 0.2755905511811024
	},
	4644: {
		event: 'input6.eq2',
		progress: 0.28346456692913385
	},
	4645: {
		event: 'input6.eq2',
		progress: 0.29133858267716534
	},
	4646: {
		event: 'input6.eq2',
		progress: 0.2992125984251969
	},
	4647: {
		event: 'input6.eq2',
		progress: 0.30708661417322836
	},
	4648: {
		event: 'input6.eq2',
		progress: 0.31496062992125984
	},
	4649: {
		event: 'input6.eq2',
		progress: 0.3228346456692913
	},
	4650: {
		event: 'input6.eq2',
		progress: 0.33070866141732286
	},
	4651: {
		event: 'input6.eq2',
		progress: 0.33858267716535434
	},
	4652: {
		event: 'input6.eq2',
		progress: 0.3464566929133858
	},
	4653: {
		event: 'input6.eq2',
		progress: 0.3543307086614173
	},
	4654: {
		event: 'input6.eq2',
		progress: 0.36220472440944884
	},
	4655: {
		event: 'input6.eq2',
		progress: 0.3700787401574803
	},
	4656: {
		event: 'input6.eq2',
		progress: 0.3779527559055118
	},
	4657: {
		event: 'input6.eq2',
		progress: 0.3858267716535433
	},
	4658: {
		event: 'input6.eq2',
		progress: 0.3937007874015748
	},
	4659: {
		event: 'input6.eq2',
		progress: 0.4015748031496063
	},
	4660: {
		event: 'input6.eq2',
		progress: 0.4094488188976378
	},
	4661: {
		event: 'input6.eq2',
		progress: 0.41732283464566927
	},
	4662: {
		event: 'input6.eq2',
		progress: 0.4251968503937008
	},
	4663: {
		event: 'input6.eq2',
		progress: 0.4330708661417323
	},
	4664: {
		event: 'input6.eq2',
		progress: 0.4409448818897638
	},
	4665: {
		event: 'input6.eq2',
		progress: 0.44881889763779526
	},
	4666: {
		event: 'input6.eq2',
		progress: 0.4566929133858268
	},
	4667: {
		event: 'input6.eq2',
		progress: 0.4645669291338583
	},
	4668: {
		event: 'input6.eq2',
		progress: 0.47244094488188976
	},
	4669: {
		event: 'input6.eq2',
		progress: 0.48031496062992124
	},
	4670: {
		event: 'input6.eq2',
		progress: 0.4881889763779528
	},
	4671: {
		event: 'input6.eq2',
		progress: 0.49606299212598426
	},
	4672: {
		event: 'input6.eq2',
		progress: 0.5039370078740157
	},
	4673: {
		event: 'input6.eq2',
		progress: 0.5118110236220472
	},
	4674: {
		event: 'input6.eq2',
		progress: 0.5196850393700787
	},
	4675: {
		event: 'input6.eq2',
		progress: 0.5275590551181102
	},
	4676: {
		event: 'input6.eq2',
		progress: 0.5354330708661418
	},
	4677: {
		event: 'input6.eq2',
		progress: 0.5433070866141733
	},
	4678: {
		event: 'input6.eq2',
		progress: 0.5511811023622047
	},
	4679: {
		event: 'input6.eq2',
		progress: 0.5590551181102362
	},
	4680: {
		event: 'input6.eq2',
		progress: 0.5669291338582677
	},
	4681: {
		event: 'input6.eq2',
		progress: 0.5748031496062992
	},
	4682: {
		event: 'input6.eq2',
		progress: 0.5826771653543307
	},
	4683: {
		event: 'input6.eq2',
		progress: 0.5905511811023622
	},
	4684: {
		event: 'input6.eq2',
		progress: 0.5984251968503937
	},
	4685: {
		event: 'input6.eq2',
		progress: 0.6062992125984252
	},
	4686: {
		event: 'input6.eq2',
		progress: 0.6141732283464567
	},
	4687: {
		event: 'input6.eq2',
		progress: 0.6220472440944882
	},
	4688: {
		event: 'input6.eq2',
		progress: 0.6299212598425197
	},
	4689: {
		event: 'input6.eq2',
		progress: 0.6377952755905512
	},
	4690: {
		event: 'input6.eq2',
		progress: 0.6456692913385826
	},
	4691: {
		event: 'input6.eq2',
		progress: 0.6535433070866141
	},
	4692: {
		event: 'input6.eq2',
		progress: 0.6614173228346457
	},
	4693: {
		event: 'input6.eq2',
		progress: 0.6692913385826772
	},
	4694: {
		event: 'input6.eq2',
		progress: 0.6771653543307087
	},
	4695: {
		event: 'input6.eq2',
		progress: 0.6850393700787402
	},
	4696: {
		event: 'input6.eq2',
		progress: 0.6929133858267716
	},
	4697: {
		event: 'input6.eq2',
		progress: 0.7007874015748031
	},
	4698: {
		event: 'input6.eq2',
		progress: 0.7086614173228346
	},
	4699: {
		event: 'input6.eq2',
		progress: 0.7165354330708661
	},
	4700: {
		event: 'input6.eq2',
		progress: 0.7244094488188977
	},
	4701: {
		event: 'input6.eq2',
		progress: 0.7322834645669292
	},
	4702: {
		event: 'input6.eq2',
		progress: 0.7401574803149606
	},
	4703: {
		event: 'input6.eq2',
		progress: 0.7480314960629921
	},
	4704: {
		event: 'input6.eq2',
		progress: 0.7559055118110236
	},
	4705: {
		event: 'input6.eq2',
		progress: 0.7637795275590551
	},
	4706: {
		event: 'input6.eq2',
		progress: 0.7716535433070866
	},
	4707: {
		event: 'input6.eq2',
		progress: 0.7795275590551181
	},
	4708: {
		event: 'input6.eq2',
		progress: 0.7874015748031497
	},
	4709: {
		event: 'input6.eq2',
		progress: 0.7952755905511811
	},
	4710: {
		event: 'input6.eq2',
		progress: 0.8031496062992126
	},
	4711: {
		event: 'input6.eq2',
		progress: 0.8110236220472441
	},
	4712: {
		event: 'input6.eq2',
		progress: 0.8188976377952756
	},
	4713: {
		event: 'input6.eq2',
		progress: 0.8267716535433071
	},
	4714: {
		event: 'input6.eq2',
		progress: 0.8346456692913385
	},
	4715: {
		event: 'input6.eq2',
		progress: 0.84251968503937
	},
	4716: {
		event: 'input6.eq2',
		progress: 0.8503937007874016
	},
	4717: {
		event: 'input6.eq2',
		progress: 0.8582677165354331
	},
	4718: {
		event: 'input6.eq2',
		progress: 0.8661417322834646
	},
	4719: {
		event: 'input6.eq2',
		progress: 0.8740157480314961
	},
	4720: {
		event: 'input6.eq2',
		progress: 0.8818897637795275
	},
	4721: {
		event: 'input6.eq2',
		progress: 0.889763779527559
	},
	4722: {
		event: 'input6.eq2',
		progress: 0.8976377952755905
	},
	4723: {
		event: 'input6.eq2',
		progress: 0.905511811023622
	},
	4724: {
		event: 'input6.eq2',
		progress: 0.9133858267716536
	},
	4725: {
		event: 'input6.eq2',
		progress: 0.9212598425196851
	},
	4726: {
		event: 'input6.eq2',
		progress: 0.9291338582677166
	},
	4727: {
		event: 'input6.eq2',
		progress: 0.937007874015748
	},
	4728: {
		event: 'input6.eq2',
		progress: 0.9448818897637795
	},
	4729: {
		event: 'input6.eq2',
		progress: 0.952755905511811
	},
	4730: {
		event: 'input6.eq2',
		progress: 0.9606299212598425
	},
	4731: {
		event: 'input6.eq2',
		progress: 0.968503937007874
	},
	4732: {
		event: 'input6.eq2',
		progress: 0.9763779527559056
	},
	4733: {
		event: 'input6.eq2',
		progress: 0.984251968503937
	},
	4734: {
		event: 'input6.eq2',
		progress: 0.9921259842519685
	},
	4735: {
		event: 'input6.eq2',
		progress: 1
	},
	4864: {
		event: 'input1.eq3',
		progress: 0
	},
	4865: {
		event: 'input1.eq3',
		progress: 0.007874015748031496
	},
	4866: {
		event: 'input1.eq3',
		progress: 0.015748031496062992
	},
	4867: {
		event: 'input1.eq3',
		progress: 0.023622047244094488
	},
	4868: {
		event: 'input1.eq3',
		progress: 0.031496062992125984
	},
	4869: {
		event: 'input1.eq3',
		progress: 0.03937007874015748
	},
	4870: {
		event: 'input1.eq3',
		progress: 0.047244094488188976
	},
	4871: {
		event: 'input1.eq3',
		progress: 0.05511811023622047
	},
	4872: {
		event: 'input1.eq3',
		progress: 0.06299212598425197
	},
	4873: {
		event: 'input1.eq3',
		progress: 0.07086614173228346
	},
	4874: {
		event: 'input1.eq3',
		progress: 0.07874015748031496
	},
	4875: {
		event: 'input1.eq3',
		progress: 0.08661417322834646
	},
	4876: {
		event: 'input1.eq3',
		progress: 0.09448818897637795
	},
	4877: {
		event: 'input1.eq3',
		progress: 0.10236220472440945
	},
	4878: {
		event: 'input1.eq3',
		progress: 0.11023622047244094
	},
	4879: {
		event: 'input1.eq3',
		progress: 0.11811023622047244
	},
	4880: {
		event: 'input1.eq3',
		progress: 0.12598425196850394
	},
	4881: {
		event: 'input1.eq3',
		progress: 0.13385826771653545
	},
	4882: {
		event: 'input1.eq3',
		progress: 0.14173228346456693
	},
	4883: {
		event: 'input1.eq3',
		progress: 0.14960629921259844
	},
	4884: {
		event: 'input1.eq3',
		progress: 0.15748031496062992
	},
	4885: {
		event: 'input1.eq3',
		progress: 0.16535433070866143
	},
	4886: {
		event: 'input1.eq3',
		progress: 0.1732283464566929
	},
	4887: {
		event: 'input1.eq3',
		progress: 0.18110236220472442
	},
	4888: {
		event: 'input1.eq3',
		progress: 0.1889763779527559
	},
	4889: {
		event: 'input1.eq3',
		progress: 0.1968503937007874
	},
	4890: {
		event: 'input1.eq3',
		progress: 0.2047244094488189
	},
	4891: {
		event: 'input1.eq3',
		progress: 0.2125984251968504
	},
	4892: {
		event: 'input1.eq3',
		progress: 0.2204724409448819
	},
	4893: {
		event: 'input1.eq3',
		progress: 0.2283464566929134
	},
	4894: {
		event: 'input1.eq3',
		progress: 0.23622047244094488
	},
	4895: {
		event: 'input1.eq3',
		progress: 0.2440944881889764
	},
	4896: {
		event: 'input1.eq3',
		progress: 0.25196850393700787
	},
	4897: {
		event: 'input1.eq3',
		progress: 0.25984251968503935
	},
	4898: {
		event: 'input1.eq3',
		progress: 0.2677165354330709
	},
	4899: {
		event: 'input1.eq3',
		progress: 0.2755905511811024
	},
	4900: {
		event: 'input1.eq3',
		progress: 0.28346456692913385
	},
	4901: {
		event: 'input1.eq3',
		progress: 0.29133858267716534
	},
	4902: {
		event: 'input1.eq3',
		progress: 0.2992125984251969
	},
	4903: {
		event: 'input1.eq3',
		progress: 0.30708661417322836
	},
	4904: {
		event: 'input1.eq3',
		progress: 0.31496062992125984
	},
	4905: {
		event: 'input1.eq3',
		progress: 0.3228346456692913
	},
	4906: {
		event: 'input1.eq3',
		progress: 0.33070866141732286
	},
	4907: {
		event: 'input1.eq3',
		progress: 0.33858267716535434
	},
	4908: {
		event: 'input1.eq3',
		progress: 0.3464566929133858
	},
	4909: {
		event: 'input1.eq3',
		progress: 0.3543307086614173
	},
	4910: {
		event: 'input1.eq3',
		progress: 0.36220472440944884
	},
	4911: {
		event: 'input1.eq3',
		progress: 0.3700787401574803
	},
	4912: {
		event: 'input1.eq3',
		progress: 0.3779527559055118
	},
	4913: {
		event: 'input1.eq3',
		progress: 0.3858267716535433
	},
	4914: {
		event: 'input1.eq3',
		progress: 0.3937007874015748
	},
	4915: {
		event: 'input1.eq3',
		progress: 0.4015748031496063
	},
	4916: {
		event: 'input1.eq3',
		progress: 0.4094488188976378
	},
	4917: {
		event: 'input1.eq3',
		progress: 0.41732283464566927
	},
	4918: {
		event: 'input1.eq3',
		progress: 0.4251968503937008
	},
	4919: {
		event: 'input1.eq3',
		progress: 0.4330708661417323
	},
	4920: {
		event: 'input1.eq3',
		progress: 0.4409448818897638
	},
	4921: {
		event: 'input1.eq3',
		progress: 0.44881889763779526
	},
	4922: {
		event: 'input1.eq3',
		progress: 0.4566929133858268
	},
	4923: {
		event: 'input1.eq3',
		progress: 0.4645669291338583
	},
	4924: {
		event: 'input1.eq3',
		progress: 0.47244094488188976
	},
	4925: {
		event: 'input1.eq3',
		progress: 0.48031496062992124
	},
	4926: {
		event: 'input1.eq3',
		progress: 0.4881889763779528
	},
	4927: {
		event: 'input1.eq3',
		progress: 0.49606299212598426
	},
	4928: {
		event: 'input1.eq3',
		progress: 0.5039370078740157
	},
	4929: {
		event: 'input1.eq3',
		progress: 0.5118110236220472
	},
	4930: {
		event: 'input1.eq3',
		progress: 0.5196850393700787
	},
	4931: {
		event: 'input1.eq3',
		progress: 0.5275590551181102
	},
	4932: {
		event: 'input1.eq3',
		progress: 0.5354330708661418
	},
	4933: {
		event: 'input1.eq3',
		progress: 0.5433070866141733
	},
	4934: {
		event: 'input1.eq3',
		progress: 0.5511811023622047
	},
	4935: {
		event: 'input1.eq3',
		progress: 0.5590551181102362
	},
	4936: {
		event: 'input1.eq3',
		progress: 0.5669291338582677
	},
	4937: {
		event: 'input1.eq3',
		progress: 0.5748031496062992
	},
	4938: {
		event: 'input1.eq3',
		progress: 0.5826771653543307
	},
	4939: {
		event: 'input1.eq3',
		progress: 0.5905511811023622
	},
	4940: {
		event: 'input1.eq3',
		progress: 0.5984251968503937
	},
	4941: {
		event: 'input1.eq3',
		progress: 0.6062992125984252
	},
	4942: {
		event: 'input1.eq3',
		progress: 0.6141732283464567
	},
	4943: {
		event: 'input1.eq3',
		progress: 0.6220472440944882
	},
	4944: {
		event: 'input1.eq3',
		progress: 0.6299212598425197
	},
	4945: {
		event: 'input1.eq3',
		progress: 0.6377952755905512
	},
	4946: {
		event: 'input1.eq3',
		progress: 0.6456692913385826
	},
	4947: {
		event: 'input1.eq3',
		progress: 0.6535433070866141
	},
	4948: {
		event: 'input1.eq3',
		progress: 0.6614173228346457
	},
	4949: {
		event: 'input1.eq3',
		progress: 0.6692913385826772
	},
	4950: {
		event: 'input1.eq3',
		progress: 0.6771653543307087
	},
	4951: {
		event: 'input1.eq3',
		progress: 0.6850393700787402
	},
	4952: {
		event: 'input1.eq3',
		progress: 0.6929133858267716
	},
	4953: {
		event: 'input1.eq3',
		progress: 0.7007874015748031
	},
	4954: {
		event: 'input1.eq3',
		progress: 0.7086614173228346
	},
	4955: {
		event: 'input1.eq3',
		progress: 0.7165354330708661
	},
	4956: {
		event: 'input1.eq3',
		progress: 0.7244094488188977
	},
	4957: {
		event: 'input1.eq3',
		progress: 0.7322834645669292
	},
	4958: {
		event: 'input1.eq3',
		progress: 0.7401574803149606
	},
	4959: {
		event: 'input1.eq3',
		progress: 0.7480314960629921
	},
	4960: {
		event: 'input1.eq3',
		progress: 0.7559055118110236
	},
	4961: {
		event: 'input1.eq3',
		progress: 0.7637795275590551
	},
	4962: {
		event: 'input1.eq3',
		progress: 0.7716535433070866
	},
	4963: {
		event: 'input1.eq3',
		progress: 0.7795275590551181
	},
	4964: {
		event: 'input1.eq3',
		progress: 0.7874015748031497
	},
	4965: {
		event: 'input1.eq3',
		progress: 0.7952755905511811
	},
	4966: {
		event: 'input1.eq3',
		progress: 0.8031496062992126
	},
	4967: {
		event: 'input1.eq3',
		progress: 0.8110236220472441
	},
	4968: {
		event: 'input1.eq3',
		progress: 0.8188976377952756
	},
	4969: {
		event: 'input1.eq3',
		progress: 0.8267716535433071
	},
	4970: {
		event: 'input1.eq3',
		progress: 0.8346456692913385
	},
	4971: {
		event: 'input1.eq3',
		progress: 0.84251968503937
	},
	4972: {
		event: 'input1.eq3',
		progress: 0.8503937007874016
	},
	4973: {
		event: 'input1.eq3',
		progress: 0.8582677165354331
	},
	4974: {
		event: 'input1.eq3',
		progress: 0.8661417322834646
	},
	4975: {
		event: 'input1.eq3',
		progress: 0.8740157480314961
	},
	4976: {
		event: 'input1.eq3',
		progress: 0.8818897637795275
	},
	4977: {
		event: 'input1.eq3',
		progress: 0.889763779527559
	},
	4978: {
		event: 'input1.eq3',
		progress: 0.8976377952755905
	},
	4979: {
		event: 'input1.eq3',
		progress: 0.905511811023622
	},
	4980: {
		event: 'input1.eq3',
		progress: 0.9133858267716536
	},
	4981: {
		event: 'input1.eq3',
		progress: 0.9212598425196851
	},
	4982: {
		event: 'input1.eq3',
		progress: 0.9291338582677166
	},
	4983: {
		event: 'input1.eq3',
		progress: 0.937007874015748
	},
	4984: {
		event: 'input1.eq3',
		progress: 0.9448818897637795
	},
	4985: {
		event: 'input1.eq3',
		progress: 0.952755905511811
	},
	4986: {
		event: 'input1.eq3',
		progress: 0.9606299212598425
	},
	4987: {
		event: 'input1.eq3',
		progress: 0.968503937007874
	},
	4988: {
		event: 'input1.eq3',
		progress: 0.9763779527559056
	},
	4989: {
		event: 'input1.eq3',
		progress: 0.984251968503937
	},
	4990: {
		event: 'input1.eq3',
		progress: 0.9921259842519685
	},
	4991: {
		event: 'input1.eq3',
		progress: 1
	},
	5120: {
		event: 'input2.eq3',
		progress: 0
	},
	5121: {
		event: 'input2.eq3',
		progress: 0.007874015748031496
	},
	5122: {
		event: 'input2.eq3',
		progress: 0.015748031496062992
	},
	5123: {
		event: 'input2.eq3',
		progress: 0.023622047244094488
	},
	5124: {
		event: 'input2.eq3',
		progress: 0.031496062992125984
	},
	5125: {
		event: 'input2.eq3',
		progress: 0.03937007874015748
	},
	5126: {
		event: 'input2.eq3',
		progress: 0.047244094488188976
	},
	5127: {
		event: 'input2.eq3',
		progress: 0.05511811023622047
	},
	5128: {
		event: 'input2.eq3',
		progress: 0.06299212598425197
	},
	5129: {
		event: 'input2.eq3',
		progress: 0.07086614173228346
	},
	5130: {
		event: 'input2.eq3',
		progress: 0.07874015748031496
	},
	5131: {
		event: 'input2.eq3',
		progress: 0.08661417322834646
	},
	5132: {
		event: 'input2.eq3',
		progress: 0.09448818897637795
	},
	5133: {
		event: 'input2.eq3',
		progress: 0.10236220472440945
	},
	5134: {
		event: 'input2.eq3',
		progress: 0.11023622047244094
	},
	5135: {
		event: 'input2.eq3',
		progress: 0.11811023622047244
	},
	5136: {
		event: 'input2.eq3',
		progress: 0.12598425196850394
	},
	5137: {
		event: 'input2.eq3',
		progress: 0.13385826771653545
	},
	5138: {
		event: 'input2.eq3',
		progress: 0.14173228346456693
	},
	5139: {
		event: 'input2.eq3',
		progress: 0.14960629921259844
	},
	5140: {
		event: 'input2.eq3',
		progress: 0.15748031496062992
	},
	5141: {
		event: 'input2.eq3',
		progress: 0.16535433070866143
	},
	5142: {
		event: 'input2.eq3',
		progress: 0.1732283464566929
	},
	5143: {
		event: 'input2.eq3',
		progress: 0.18110236220472442
	},
	5144: {
		event: 'input2.eq3',
		progress: 0.1889763779527559
	},
	5145: {
		event: 'input2.eq3',
		progress: 0.1968503937007874
	},
	5146: {
		event: 'input2.eq3',
		progress: 0.2047244094488189
	},
	5147: {
		event: 'input2.eq3',
		progress: 0.2125984251968504
	},
	5148: {
		event: 'input2.eq3',
		progress: 0.2204724409448819
	},
	5149: {
		event: 'input2.eq3',
		progress: 0.2283464566929134
	},
	5150: {
		event: 'input2.eq3',
		progress: 0.23622047244094488
	},
	5151: {
		event: 'input2.eq3',
		progress: 0.2440944881889764
	},
	5152: {
		event: 'input2.eq3',
		progress: 0.25196850393700787
	},
	5153: {
		event: 'input2.eq3',
		progress: 0.25984251968503935
	},
	5154: {
		event: 'input2.eq3',
		progress: 0.2677165354330709
	},
	5155: {
		event: 'input2.eq3',
		progress: 0.2755905511811024
	},
	5156: {
		event: 'input2.eq3',
		progress: 0.28346456692913385
	},
	5157: {
		event: 'input2.eq3',
		progress: 0.29133858267716534
	},
	5158: {
		event: 'input2.eq3',
		progress: 0.2992125984251969
	},
	5159: {
		event: 'input2.eq3',
		progress: 0.30708661417322836
	},
	5160: {
		event: 'input2.eq3',
		progress: 0.31496062992125984
	},
	5161: {
		event: 'input2.eq3',
		progress: 0.3228346456692913
	},
	5162: {
		event: 'input2.eq3',
		progress: 0.33070866141732286
	},
	5163: {
		event: 'input2.eq3',
		progress: 0.33858267716535434
	},
	5164: {
		event: 'input2.eq3',
		progress: 0.3464566929133858
	},
	5165: {
		event: 'input2.eq3',
		progress: 0.3543307086614173
	},
	5166: {
		event: 'input2.eq3',
		progress: 0.36220472440944884
	},
	5167: {
		event: 'input2.eq3',
		progress: 0.3700787401574803
	},
	5168: {
		event: 'input2.eq3',
		progress: 0.3779527559055118
	},
	5169: {
		event: 'input2.eq3',
		progress: 0.3858267716535433
	},
	5170: {
		event: 'input2.eq3',
		progress: 0.3937007874015748
	},
	5171: {
		event: 'input2.eq3',
		progress: 0.4015748031496063
	},
	5172: {
		event: 'input2.eq3',
		progress: 0.4094488188976378
	},
	5173: {
		event: 'input2.eq3',
		progress: 0.41732283464566927
	},
	5174: {
		event: 'input2.eq3',
		progress: 0.4251968503937008
	},
	5175: {
		event: 'input2.eq3',
		progress: 0.4330708661417323
	},
	5176: {
		event: 'input2.eq3',
		progress: 0.4409448818897638
	},
	5177: {
		event: 'input2.eq3',
		progress: 0.44881889763779526
	},
	5178: {
		event: 'input2.eq3',
		progress: 0.4566929133858268
	},
	5179: {
		event: 'input2.eq3',
		progress: 0.4645669291338583
	},
	5180: {
		event: 'input2.eq3',
		progress: 0.47244094488188976
	},
	5181: {
		event: 'input2.eq3',
		progress: 0.48031496062992124
	},
	5182: {
		event: 'input2.eq3',
		progress: 0.4881889763779528
	},
	5183: {
		event: 'input2.eq3',
		progress: 0.49606299212598426
	},
	5184: {
		event: 'input2.eq3',
		progress: 0.5039370078740157
	},
	5185: {
		event: 'input2.eq3',
		progress: 0.5118110236220472
	},
	5186: {
		event: 'input2.eq3',
		progress: 0.5196850393700787
	},
	5187: {
		event: 'input2.eq3',
		progress: 0.5275590551181102
	},
	5188: {
		event: 'input2.eq3',
		progress: 0.5354330708661418
	},
	5189: {
		event: 'input2.eq3',
		progress: 0.5433070866141733
	},
	5190: {
		event: 'input2.eq3',
		progress: 0.5511811023622047
	},
	5191: {
		event: 'input2.eq3',
		progress: 0.5590551181102362
	},
	5192: {
		event: 'input2.eq3',
		progress: 0.5669291338582677
	},
	5193: {
		event: 'input2.eq3',
		progress: 0.5748031496062992
	},
	5194: {
		event: 'input2.eq3',
		progress: 0.5826771653543307
	},
	5195: {
		event: 'input2.eq3',
		progress: 0.5905511811023622
	},
	5196: {
		event: 'input2.eq3',
		progress: 0.5984251968503937
	},
	5197: {
		event: 'input2.eq3',
		progress: 0.6062992125984252
	},
	5198: {
		event: 'input2.eq3',
		progress: 0.6141732283464567
	},
	5199: {
		event: 'input2.eq3',
		progress: 0.6220472440944882
	},
	5200: {
		event: 'input2.eq3',
		progress: 0.6299212598425197
	},
	5201: {
		event: 'input2.eq3',
		progress: 0.6377952755905512
	},
	5202: {
		event: 'input2.eq3',
		progress: 0.6456692913385826
	},
	5203: {
		event: 'input2.eq3',
		progress: 0.6535433070866141
	},
	5204: {
		event: 'input2.eq3',
		progress: 0.6614173228346457
	},
	5205: {
		event: 'input2.eq3',
		progress: 0.6692913385826772
	},
	5206: {
		event: 'input2.eq3',
		progress: 0.6771653543307087
	},
	5207: {
		event: 'input2.eq3',
		progress: 0.6850393700787402
	},
	5208: {
		event: 'input2.eq3',
		progress: 0.6929133858267716
	},
	5209: {
		event: 'input2.eq3',
		progress: 0.7007874015748031
	},
	5210: {
		event: 'input2.eq3',
		progress: 0.7086614173228346
	},
	5211: {
		event: 'input2.eq3',
		progress: 0.7165354330708661
	},
	5212: {
		event: 'input2.eq3',
		progress: 0.7244094488188977
	},
	5213: {
		event: 'input2.eq3',
		progress: 0.7322834645669292
	},
	5214: {
		event: 'input2.eq3',
		progress: 0.7401574803149606
	},
	5215: {
		event: 'input2.eq3',
		progress: 0.7480314960629921
	},
	5216: {
		event: 'input2.eq3',
		progress: 0.7559055118110236
	},
	5217: {
		event: 'input2.eq3',
		progress: 0.7637795275590551
	},
	5218: {
		event: 'input2.eq3',
		progress: 0.7716535433070866
	},
	5219: {
		event: 'input2.eq3',
		progress: 0.7795275590551181
	},
	5220: {
		event: 'input2.eq3',
		progress: 0.7874015748031497
	},
	5221: {
		event: 'input2.eq3',
		progress: 0.7952755905511811
	},
	5222: {
		event: 'input2.eq3',
		progress: 0.8031496062992126
	},
	5223: {
		event: 'input2.eq3',
		progress: 0.8110236220472441
	},
	5224: {
		event: 'input2.eq3',
		progress: 0.8188976377952756
	},
	5225: {
		event: 'input2.eq3',
		progress: 0.8267716535433071
	},
	5226: {
		event: 'input2.eq3',
		progress: 0.8346456692913385
	},
	5227: {
		event: 'input2.eq3',
		progress: 0.84251968503937
	},
	5228: {
		event: 'input2.eq3',
		progress: 0.8503937007874016
	},
	5229: {
		event: 'input2.eq3',
		progress: 0.8582677165354331
	},
	5230: {
		event: 'input2.eq3',
		progress: 0.8661417322834646
	},
	5231: {
		event: 'input2.eq3',
		progress: 0.8740157480314961
	},
	5232: {
		event: 'input2.eq3',
		progress: 0.8818897637795275
	},
	5233: {
		event: 'input2.eq3',
		progress: 0.889763779527559
	},
	5234: {
		event: 'input2.eq3',
		progress: 0.8976377952755905
	},
	5235: {
		event: 'input2.eq3',
		progress: 0.905511811023622
	},
	5236: {
		event: 'input2.eq3',
		progress: 0.9133858267716536
	},
	5237: {
		event: 'input2.eq3',
		progress: 0.9212598425196851
	},
	5238: {
		event: 'input2.eq3',
		progress: 0.9291338582677166
	},
	5239: {
		event: 'input2.eq3',
		progress: 0.937007874015748
	},
	5240: {
		event: 'input2.eq3',
		progress: 0.9448818897637795
	},
	5241: {
		event: 'input2.eq3',
		progress: 0.952755905511811
	},
	5242: {
		event: 'input2.eq3',
		progress: 0.9606299212598425
	},
	5243: {
		event: 'input2.eq3',
		progress: 0.968503937007874
	},
	5244: {
		event: 'input2.eq3',
		progress: 0.9763779527559056
	},
	5245: {
		event: 'input2.eq3',
		progress: 0.984251968503937
	},
	5246: {
		event: 'input2.eq3',
		progress: 0.9921259842519685
	},
	5247: {
		event: 'input2.eq3',
		progress: 1
	},
	5376: {
		event: 'input3.eq3',
		progress: 0
	},
	5377: {
		event: 'input3.eq3',
		progress: 0.007874015748031496
	},
	5378: {
		event: 'input3.eq3',
		progress: 0.015748031496062992
	},
	5379: {
		event: 'input3.eq3',
		progress: 0.023622047244094488
	},
	5380: {
		event: 'input3.eq3',
		progress: 0.031496062992125984
	},
	5381: {
		event: 'input3.eq3',
		progress: 0.03937007874015748
	},
	5382: {
		event: 'input3.eq3',
		progress: 0.047244094488188976
	},
	5383: {
		event: 'input3.eq3',
		progress: 0.05511811023622047
	},
	5384: {
		event: 'input3.eq3',
		progress: 0.06299212598425197
	},
	5385: {
		event: 'input3.eq3',
		progress: 0.07086614173228346
	},
	5386: {
		event: 'input3.eq3',
		progress: 0.07874015748031496
	},
	5387: {
		event: 'input3.eq3',
		progress: 0.08661417322834646
	},
	5388: {
		event: 'input3.eq3',
		progress: 0.09448818897637795
	},
	5389: {
		event: 'input3.eq3',
		progress: 0.10236220472440945
	},
	5390: {
		event: 'input3.eq3',
		progress: 0.11023622047244094
	},
	5391: {
		event: 'input3.eq3',
		progress: 0.11811023622047244
	},
	5392: {
		event: 'input3.eq3',
		progress: 0.12598425196850394
	},
	5393: {
		event: 'input3.eq3',
		progress: 0.13385826771653545
	},
	5394: {
		event: 'input3.eq3',
		progress: 0.14173228346456693
	},
	5395: {
		event: 'input3.eq3',
		progress: 0.14960629921259844
	},
	5396: {
		event: 'input3.eq3',
		progress: 0.15748031496062992
	},
	5397: {
		event: 'input3.eq3',
		progress: 0.16535433070866143
	},
	5398: {
		event: 'input3.eq3',
		progress: 0.1732283464566929
	},
	5399: {
		event: 'input3.eq3',
		progress: 0.18110236220472442
	},
	5400: {
		event: 'input3.eq3',
		progress: 0.1889763779527559
	},
	5401: {
		event: 'input3.eq3',
		progress: 0.1968503937007874
	},
	5402: {
		event: 'input3.eq3',
		progress: 0.2047244094488189
	},
	5403: {
		event: 'input3.eq3',
		progress: 0.2125984251968504
	},
	5404: {
		event: 'input3.eq3',
		progress: 0.2204724409448819
	},
	5405: {
		event: 'input3.eq3',
		progress: 0.2283464566929134
	},
	5406: {
		event: 'input3.eq3',
		progress: 0.23622047244094488
	},
	5407: {
		event: 'input3.eq3',
		progress: 0.2440944881889764
	},
	5408: {
		event: 'input3.eq3',
		progress: 0.25196850393700787
	},
	5409: {
		event: 'input3.eq3',
		progress: 0.25984251968503935
	},
	5410: {
		event: 'input3.eq3',
		progress: 0.2677165354330709
	},
	5411: {
		event: 'input3.eq3',
		progress: 0.2755905511811024
	},
	5412: {
		event: 'input3.eq3',
		progress: 0.28346456692913385
	},
	5413: {
		event: 'input3.eq3',
		progress: 0.29133858267716534
	},
	5414: {
		event: 'input3.eq3',
		progress: 0.2992125984251969
	},
	5415: {
		event: 'input3.eq3',
		progress: 0.30708661417322836
	},
	5416: {
		event: 'input3.eq3',
		progress: 0.31496062992125984
	},
	5417: {
		event: 'input3.eq3',
		progress: 0.3228346456692913
	},
	5418: {
		event: 'input3.eq3',
		progress: 0.33070866141732286
	},
	5419: {
		event: 'input3.eq3',
		progress: 0.33858267716535434
	},
	5420: {
		event: 'input3.eq3',
		progress: 0.3464566929133858
	},
	5421: {
		event: 'input3.eq3',
		progress: 0.3543307086614173
	},
	5422: {
		event: 'input3.eq3',
		progress: 0.36220472440944884
	},
	5423: {
		event: 'input3.eq3',
		progress: 0.3700787401574803
	},
	5424: {
		event: 'input3.eq3',
		progress: 0.3779527559055118
	},
	5425: {
		event: 'input3.eq3',
		progress: 0.3858267716535433
	},
	5426: {
		event: 'input3.eq3',
		progress: 0.3937007874015748
	},
	5427: {
		event: 'input3.eq3',
		progress: 0.4015748031496063
	},
	5428: {
		event: 'input3.eq3',
		progress: 0.4094488188976378
	},
	5429: {
		event: 'input3.eq3',
		progress: 0.41732283464566927
	},
	5430: {
		event: 'input3.eq3',
		progress: 0.4251968503937008
	},
	5431: {
		event: 'input3.eq3',
		progress: 0.4330708661417323
	},
	5432: {
		event: 'input3.eq3',
		progress: 0.4409448818897638
	},
	5433: {
		event: 'input3.eq3',
		progress: 0.44881889763779526
	},
	5434: {
		event: 'input3.eq3',
		progress: 0.4566929133858268
	},
	5435: {
		event: 'input3.eq3',
		progress: 0.4645669291338583
	},
	5436: {
		event: 'input3.eq3',
		progress: 0.47244094488188976
	},
	5437: {
		event: 'input3.eq3',
		progress: 0.48031496062992124
	},
	5438: {
		event: 'input3.eq3',
		progress: 0.4881889763779528
	},
	5439: {
		event: 'input3.eq3',
		progress: 0.49606299212598426
	},
	5440: {
		event: 'input3.eq3',
		progress: 0.5039370078740157
	},
	5441: {
		event: 'input3.eq3',
		progress: 0.5118110236220472
	},
	5442: {
		event: 'input3.eq3',
		progress: 0.5196850393700787
	},
	5443: {
		event: 'input3.eq3',
		progress: 0.5275590551181102
	},
	5444: {
		event: 'input3.eq3',
		progress: 0.5354330708661418
	},
	5445: {
		event: 'input3.eq3',
		progress: 0.5433070866141733
	},
	5446: {
		event: 'input3.eq3',
		progress: 0.5511811023622047
	},
	5447: {
		event: 'input3.eq3',
		progress: 0.5590551181102362
	},
	5448: {
		event: 'input3.eq3',
		progress: 0.5669291338582677
	},
	5449: {
		event: 'input3.eq3',
		progress: 0.5748031496062992
	},
	5450: {
		event: 'input3.eq3',
		progress: 0.5826771653543307
	},
	5451: {
		event: 'input3.eq3',
		progress: 0.5905511811023622
	},
	5452: {
		event: 'input3.eq3',
		progress: 0.5984251968503937
	},
	5453: {
		event: 'input3.eq3',
		progress: 0.6062992125984252
	},
	5454: {
		event: 'input3.eq3',
		progress: 0.6141732283464567
	},
	5455: {
		event: 'input3.eq3',
		progress: 0.6220472440944882
	},
	5456: {
		event: 'input3.eq3',
		progress: 0.6299212598425197
	},
	5457: {
		event: 'input3.eq3',
		progress: 0.6377952755905512
	},
	5458: {
		event: 'input3.eq3',
		progress: 0.6456692913385826
	},
	5459: {
		event: 'input3.eq3',
		progress: 0.6535433070866141
	},
	5460: {
		event: 'input3.eq3',
		progress: 0.6614173228346457
	},
	5461: {
		event: 'input3.eq3',
		progress: 0.6692913385826772
	},
	5462: {
		event: 'input3.eq3',
		progress: 0.6771653543307087
	},
	5463: {
		event: 'input3.eq3',
		progress: 0.6850393700787402
	},
	5464: {
		event: 'input3.eq3',
		progress: 0.6929133858267716
	},
	5465: {
		event: 'input3.eq3',
		progress: 0.7007874015748031
	},
	5466: {
		event: 'input3.eq3',
		progress: 0.7086614173228346
	},
	5467: {
		event: 'input3.eq3',
		progress: 0.7165354330708661
	},
	5468: {
		event: 'input3.eq3',
		progress: 0.7244094488188977
	},
	5469: {
		event: 'input3.eq3',
		progress: 0.7322834645669292
	},
	5470: {
		event: 'input3.eq3',
		progress: 0.7401574803149606
	},
	5471: {
		event: 'input3.eq3',
		progress: 0.7480314960629921
	},
	5472: {
		event: 'input3.eq3',
		progress: 0.7559055118110236
	},
	5473: {
		event: 'input3.eq3',
		progress: 0.7637795275590551
	},
	5474: {
		event: 'input3.eq3',
		progress: 0.7716535433070866
	},
	5475: {
		event: 'input3.eq3',
		progress: 0.7795275590551181
	},
	5476: {
		event: 'input3.eq3',
		progress: 0.7874015748031497
	},
	5477: {
		event: 'input3.eq3',
		progress: 0.7952755905511811
	},
	5478: {
		event: 'input3.eq3',
		progress: 0.8031496062992126
	},
	5479: {
		event: 'input3.eq3',
		progress: 0.8110236220472441
	},
	5480: {
		event: 'input3.eq3',
		progress: 0.8188976377952756
	},
	5481: {
		event: 'input3.eq3',
		progress: 0.8267716535433071
	},
	5482: {
		event: 'input3.eq3',
		progress: 0.8346456692913385
	},
	5483: {
		event: 'input3.eq3',
		progress: 0.84251968503937
	},
	5484: {
		event: 'input3.eq3',
		progress: 0.8503937007874016
	},
	5485: {
		event: 'input3.eq3',
		progress: 0.8582677165354331
	},
	5486: {
		event: 'input3.eq3',
		progress: 0.8661417322834646
	},
	5487: {
		event: 'input3.eq3',
		progress: 0.8740157480314961
	},
	5488: {
		event: 'input3.eq3',
		progress: 0.8818897637795275
	},
	5489: {
		event: 'input3.eq3',
		progress: 0.889763779527559
	},
	5490: {
		event: 'input3.eq3',
		progress: 0.8976377952755905
	},
	5491: {
		event: 'input3.eq3',
		progress: 0.905511811023622
	},
	5492: {
		event: 'input3.eq3',
		progress: 0.9133858267716536
	},
	5493: {
		event: 'input3.eq3',
		progress: 0.9212598425196851
	},
	5494: {
		event: 'input3.eq3',
		progress: 0.9291338582677166
	},
	5495: {
		event: 'input3.eq3',
		progress: 0.937007874015748
	},
	5496: {
		event: 'input3.eq3',
		progress: 0.9448818897637795
	},
	5497: {
		event: 'input3.eq3',
		progress: 0.952755905511811
	},
	5498: {
		event: 'input3.eq3',
		progress: 0.9606299212598425
	},
	5499: {
		event: 'input3.eq3',
		progress: 0.968503937007874
	},
	5500: {
		event: 'input3.eq3',
		progress: 0.9763779527559056
	},
	5501: {
		event: 'input3.eq3',
		progress: 0.984251968503937
	},
	5502: {
		event: 'input3.eq3',
		progress: 0.9921259842519685
	},
	5503: {
		event: 'input3.eq3',
		progress: 1
	},
	5632: {
		event: 'input4.eq3',
		progress: 0
	},
	5633: {
		event: 'input4.eq3',
		progress: 0.007874015748031496
	},
	5634: {
		event: 'input4.eq3',
		progress: 0.015748031496062992
	},
	5635: {
		event: 'input4.eq3',
		progress: 0.023622047244094488
	},
	5636: {
		event: 'input4.eq3',
		progress: 0.031496062992125984
	},
	5637: {
		event: 'input4.eq3',
		progress: 0.03937007874015748
	},
	5638: {
		event: 'input4.eq3',
		progress: 0.047244094488188976
	},
	5639: {
		event: 'input4.eq3',
		progress: 0.05511811023622047
	},
	5640: {
		event: 'input4.eq3',
		progress: 0.06299212598425197
	},
	5641: {
		event: 'input4.eq3',
		progress: 0.07086614173228346
	},
	5642: {
		event: 'input4.eq3',
		progress: 0.07874015748031496
	},
	5643: {
		event: 'input4.eq3',
		progress: 0.08661417322834646
	},
	5644: {
		event: 'input4.eq3',
		progress: 0.09448818897637795
	},
	5645: {
		event: 'input4.eq3',
		progress: 0.10236220472440945
	},
	5646: {
		event: 'input4.eq3',
		progress: 0.11023622047244094
	},
	5647: {
		event: 'input4.eq3',
		progress: 0.11811023622047244
	},
	5648: {
		event: 'input4.eq3',
		progress: 0.12598425196850394
	},
	5649: {
		event: 'input4.eq3',
		progress: 0.13385826771653545
	},
	5650: {
		event: 'input4.eq3',
		progress: 0.14173228346456693
	},
	5651: {
		event: 'input4.eq3',
		progress: 0.14960629921259844
	},
	5652: {
		event: 'input4.eq3',
		progress: 0.15748031496062992
	},
	5653: {
		event: 'input4.eq3',
		progress: 0.16535433070866143
	},
	5654: {
		event: 'input4.eq3',
		progress: 0.1732283464566929
	},
	5655: {
		event: 'input4.eq3',
		progress: 0.18110236220472442
	},
	5656: {
		event: 'input4.eq3',
		progress: 0.1889763779527559
	},
	5657: {
		event: 'input4.eq3',
		progress: 0.1968503937007874
	},
	5658: {
		event: 'input4.eq3',
		progress: 0.2047244094488189
	},
	5659: {
		event: 'input4.eq3',
		progress: 0.2125984251968504
	},
	5660: {
		event: 'input4.eq3',
		progress: 0.2204724409448819
	},
	5661: {
		event: 'input4.eq3',
		progress: 0.2283464566929134
	},
	5662: {
		event: 'input4.eq3',
		progress: 0.23622047244094488
	},
	5663: {
		event: 'input4.eq3',
		progress: 0.2440944881889764
	},
	5664: {
		event: 'input4.eq3',
		progress: 0.25196850393700787
	},
	5665: {
		event: 'input4.eq3',
		progress: 0.25984251968503935
	},
	5666: {
		event: 'input4.eq3',
		progress: 0.2677165354330709
	},
	5667: {
		event: 'input4.eq3',
		progress: 0.2755905511811024
	},
	5668: {
		event: 'input4.eq3',
		progress: 0.28346456692913385
	},
	5669: {
		event: 'input4.eq3',
		progress: 0.29133858267716534
	},
	5670: {
		event: 'input4.eq3',
		progress: 0.2992125984251969
	},
	5671: {
		event: 'input4.eq3',
		progress: 0.30708661417322836
	},
	5672: {
		event: 'input4.eq3',
		progress: 0.31496062992125984
	},
	5673: {
		event: 'input4.eq3',
		progress: 0.3228346456692913
	},
	5674: {
		event: 'input4.eq3',
		progress: 0.33070866141732286
	},
	5675: {
		event: 'input4.eq3',
		progress: 0.33858267716535434
	},
	5676: {
		event: 'input4.eq3',
		progress: 0.3464566929133858
	},
	5677: {
		event: 'input4.eq3',
		progress: 0.3543307086614173
	},
	5678: {
		event: 'input4.eq3',
		progress: 0.36220472440944884
	},
	5679: {
		event: 'input4.eq3',
		progress: 0.3700787401574803
	},
	5680: {
		event: 'input4.eq3',
		progress: 0.3779527559055118
	},
	5681: {
		event: 'input4.eq3',
		progress: 0.3858267716535433
	},
	5682: {
		event: 'input4.eq3',
		progress: 0.3937007874015748
	},
	5683: {
		event: 'input4.eq3',
		progress: 0.4015748031496063
	},
	5684: {
		event: 'input4.eq3',
		progress: 0.4094488188976378
	},
	5685: {
		event: 'input4.eq3',
		progress: 0.41732283464566927
	},
	5686: {
		event: 'input4.eq3',
		progress: 0.4251968503937008
	},
	5687: {
		event: 'input4.eq3',
		progress: 0.4330708661417323
	},
	5688: {
		event: 'input4.eq3',
		progress: 0.4409448818897638
	},
	5689: {
		event: 'input4.eq3',
		progress: 0.44881889763779526
	},
	5690: {
		event: 'input4.eq3',
		progress: 0.4566929133858268
	},
	5691: {
		event: 'input4.eq3',
		progress: 0.4645669291338583
	},
	5692: {
		event: 'input4.eq3',
		progress: 0.47244094488188976
	},
	5693: {
		event: 'input4.eq3',
		progress: 0.48031496062992124
	},
	5694: {
		event: 'input4.eq3',
		progress: 0.4881889763779528
	},
	5695: {
		event: 'input4.eq3',
		progress: 0.49606299212598426
	},
	5696: {
		event: 'input4.eq3',
		progress: 0.5039370078740157
	},
	5697: {
		event: 'input4.eq3',
		progress: 0.5118110236220472
	},
	5698: {
		event: 'input4.eq3',
		progress: 0.5196850393700787
	},
	5699: {
		event: 'input4.eq3',
		progress: 0.5275590551181102
	},
	5700: {
		event: 'input4.eq3',
		progress: 0.5354330708661418
	},
	5701: {
		event: 'input4.eq3',
		progress: 0.5433070866141733
	},
	5702: {
		event: 'input4.eq3',
		progress: 0.5511811023622047
	},
	5703: {
		event: 'input4.eq3',
		progress: 0.5590551181102362
	},
	5704: {
		event: 'input4.eq3',
		progress: 0.5669291338582677
	},
	5705: {
		event: 'input4.eq3',
		progress: 0.5748031496062992
	},
	5706: {
		event: 'input4.eq3',
		progress: 0.5826771653543307
	},
	5707: {
		event: 'input4.eq3',
		progress: 0.5905511811023622
	},
	5708: {
		event: 'input4.eq3',
		progress: 0.5984251968503937
	},
	5709: {
		event: 'input4.eq3',
		progress: 0.6062992125984252
	},
	5710: {
		event: 'input4.eq3',
		progress: 0.6141732283464567
	},
	5711: {
		event: 'input4.eq3',
		progress: 0.6220472440944882
	},
	5712: {
		event: 'input4.eq3',
		progress: 0.6299212598425197
	},
	5713: {
		event: 'input4.eq3',
		progress: 0.6377952755905512
	},
	5714: {
		event: 'input4.eq3',
		progress: 0.6456692913385826
	},
	5715: {
		event: 'input4.eq3',
		progress: 0.6535433070866141
	},
	5716: {
		event: 'input4.eq3',
		progress: 0.6614173228346457
	},
	5717: {
		event: 'input4.eq3',
		progress: 0.6692913385826772
	},
	5718: {
		event: 'input4.eq3',
		progress: 0.6771653543307087
	},
	5719: {
		event: 'input4.eq3',
		progress: 0.6850393700787402
	},
	5720: {
		event: 'input4.eq3',
		progress: 0.6929133858267716
	},
	5721: {
		event: 'input4.eq3',
		progress: 0.7007874015748031
	},
	5722: {
		event: 'input4.eq3',
		progress: 0.7086614173228346
	},
	5723: {
		event: 'input4.eq3',
		progress: 0.7165354330708661
	},
	5724: {
		event: 'input4.eq3',
		progress: 0.7244094488188977
	},
	5725: {
		event: 'input4.eq3',
		progress: 0.7322834645669292
	},
	5726: {
		event: 'input4.eq3',
		progress: 0.7401574803149606
	},
	5727: {
		event: 'input4.eq3',
		progress: 0.7480314960629921
	},
	5728: {
		event: 'input4.eq3',
		progress: 0.7559055118110236
	},
	5729: {
		event: 'input4.eq3',
		progress: 0.7637795275590551
	},
	5730: {
		event: 'input4.eq3',
		progress: 0.7716535433070866
	},
	5731: {
		event: 'input4.eq3',
		progress: 0.7795275590551181
	},
	5732: {
		event: 'input4.eq3',
		progress: 0.7874015748031497
	},
	5733: {
		event: 'input4.eq3',
		progress: 0.7952755905511811
	},
	5734: {
		event: 'input4.eq3',
		progress: 0.8031496062992126
	},
	5735: {
		event: 'input4.eq3',
		progress: 0.8110236220472441
	},
	5736: {
		event: 'input4.eq3',
		progress: 0.8188976377952756
	},
	5737: {
		event: 'input4.eq3',
		progress: 0.8267716535433071
	},
	5738: {
		event: 'input4.eq3',
		progress: 0.8346456692913385
	},
	5739: {
		event: 'input4.eq3',
		progress: 0.84251968503937
	},
	5740: {
		event: 'input4.eq3',
		progress: 0.8503937007874016
	},
	5741: {
		event: 'input4.eq3',
		progress: 0.8582677165354331
	},
	5742: {
		event: 'input4.eq3',
		progress: 0.8661417322834646
	},
	5743: {
		event: 'input4.eq3',
		progress: 0.8740157480314961
	},
	5744: {
		event: 'input4.eq3',
		progress: 0.8818897637795275
	},
	5745: {
		event: 'input4.eq3',
		progress: 0.889763779527559
	},
	5746: {
		event: 'input4.eq3',
		progress: 0.8976377952755905
	},
	5747: {
		event: 'input4.eq3',
		progress: 0.905511811023622
	},
	5748: {
		event: 'input4.eq3',
		progress: 0.9133858267716536
	},
	5749: {
		event: 'input4.eq3',
		progress: 0.9212598425196851
	},
	5750: {
		event: 'input4.eq3',
		progress: 0.9291338582677166
	},
	5751: {
		event: 'input4.eq3',
		progress: 0.937007874015748
	},
	5752: {
		event: 'input4.eq3',
		progress: 0.9448818897637795
	},
	5753: {
		event: 'input4.eq3',
		progress: 0.952755905511811
	},
	5754: {
		event: 'input4.eq3',
		progress: 0.9606299212598425
	},
	5755: {
		event: 'input4.eq3',
		progress: 0.968503937007874
	},
	5756: {
		event: 'input4.eq3',
		progress: 0.9763779527559056
	},
	5757: {
		event: 'input4.eq3',
		progress: 0.984251968503937
	},
	5758: {
		event: 'input4.eq3',
		progress: 0.9921259842519685
	},
	5759: {
		event: 'input4.eq3',
		progress: 1
	},
	5888: {
		event: 'input5.eq3',
		progress: 0
	},
	5889: {
		event: 'input5.eq3',
		progress: 0.007874015748031496
	},
	5890: {
		event: 'input5.eq3',
		progress: 0.015748031496062992
	},
	5891: {
		event: 'input5.eq3',
		progress: 0.023622047244094488
	},
	5892: {
		event: 'input5.eq3',
		progress: 0.031496062992125984
	},
	5893: {
		event: 'input5.eq3',
		progress: 0.03937007874015748
	},
	5894: {
		event: 'input5.eq3',
		progress: 0.047244094488188976
	},
	5895: {
		event: 'input5.eq3',
		progress: 0.05511811023622047
	},
	5896: {
		event: 'input5.eq3',
		progress: 0.06299212598425197
	},
	5897: {
		event: 'input5.eq3',
		progress: 0.07086614173228346
	},
	5898: {
		event: 'input5.eq3',
		progress: 0.07874015748031496
	},
	5899: {
		event: 'input5.eq3',
		progress: 0.08661417322834646
	},
	5900: {
		event: 'input5.eq3',
		progress: 0.09448818897637795
	},
	5901: {
		event: 'input5.eq3',
		progress: 0.10236220472440945
	},
	5902: {
		event: 'input5.eq3',
		progress: 0.11023622047244094
	},
	5903: {
		event: 'input5.eq3',
		progress: 0.11811023622047244
	},
	5904: {
		event: 'input5.eq3',
		progress: 0.12598425196850394
	},
	5905: {
		event: 'input5.eq3',
		progress: 0.13385826771653545
	},
	5906: {
		event: 'input5.eq3',
		progress: 0.14173228346456693
	},
	5907: {
		event: 'input5.eq3',
		progress: 0.14960629921259844
	},
	5908: {
		event: 'input5.eq3',
		progress: 0.15748031496062992
	},
	5909: {
		event: 'input5.eq3',
		progress: 0.16535433070866143
	},
	5910: {
		event: 'input5.eq3',
		progress: 0.1732283464566929
	},
	5911: {
		event: 'input5.eq3',
		progress: 0.18110236220472442
	},
	5912: {
		event: 'input5.eq3',
		progress: 0.1889763779527559
	},
	5913: {
		event: 'input5.eq3',
		progress: 0.1968503937007874
	},
	5914: {
		event: 'input5.eq3',
		progress: 0.2047244094488189
	},
	5915: {
		event: 'input5.eq3',
		progress: 0.2125984251968504
	},
	5916: {
		event: 'input5.eq3',
		progress: 0.2204724409448819
	},
	5917: {
		event: 'input5.eq3',
		progress: 0.2283464566929134
	},
	5918: {
		event: 'input5.eq3',
		progress: 0.23622047244094488
	},
	5919: {
		event: 'input5.eq3',
		progress: 0.2440944881889764
	},
	5920: {
		event: 'input5.eq3',
		progress: 0.25196850393700787
	},
	5921: {
		event: 'input5.eq3',
		progress: 0.25984251968503935
	},
	5922: {
		event: 'input5.eq3',
		progress: 0.2677165354330709
	},
	5923: {
		event: 'input5.eq3',
		progress: 0.2755905511811024
	},
	5924: {
		event: 'input5.eq3',
		progress: 0.28346456692913385
	},
	5925: {
		event: 'input5.eq3',
		progress: 0.29133858267716534
	},
	5926: {
		event: 'input5.eq3',
		progress: 0.2992125984251969
	},
	5927: {
		event: 'input5.eq3',
		progress: 0.30708661417322836
	},
	5928: {
		event: 'input5.eq3',
		progress: 0.31496062992125984
	},
	5929: {
		event: 'input5.eq3',
		progress: 0.3228346456692913
	},
	5930: {
		event: 'input5.eq3',
		progress: 0.33070866141732286
	},
	5931: {
		event: 'input5.eq3',
		progress: 0.33858267716535434
	},
	5932: {
		event: 'input5.eq3',
		progress: 0.3464566929133858
	},
	5933: {
		event: 'input5.eq3',
		progress: 0.3543307086614173
	},
	5934: {
		event: 'input5.eq3',
		progress: 0.36220472440944884
	},
	5935: {
		event: 'input5.eq3',
		progress: 0.3700787401574803
	},
	5936: {
		event: 'input5.eq3',
		progress: 0.3779527559055118
	},
	5937: {
		event: 'input5.eq3',
		progress: 0.3858267716535433
	},
	5938: {
		event: 'input5.eq3',
		progress: 0.3937007874015748
	},
	5939: {
		event: 'input5.eq3',
		progress: 0.4015748031496063
	},
	5940: {
		event: 'input5.eq3',
		progress: 0.4094488188976378
	},
	5941: {
		event: 'input5.eq3',
		progress: 0.41732283464566927
	},
	5942: {
		event: 'input5.eq3',
		progress: 0.4251968503937008
	},
	5943: {
		event: 'input5.eq3',
		progress: 0.4330708661417323
	},
	5944: {
		event: 'input5.eq3',
		progress: 0.4409448818897638
	},
	5945: {
		event: 'input5.eq3',
		progress: 0.44881889763779526
	},
	5946: {
		event: 'input5.eq3',
		progress: 0.4566929133858268
	},
	5947: {
		event: 'input5.eq3',
		progress: 0.4645669291338583
	},
	5948: {
		event: 'input5.eq3',
		progress: 0.47244094488188976
	},
	5949: {
		event: 'input5.eq3',
		progress: 0.48031496062992124
	},
	5950: {
		event: 'input5.eq3',
		progress: 0.4881889763779528
	},
	5951: {
		event: 'input5.eq3',
		progress: 0.49606299212598426
	},
	5952: {
		event: 'input5.eq3',
		progress: 0.5039370078740157
	},
	5953: {
		event: 'input5.eq3',
		progress: 0.5118110236220472
	},
	5954: {
		event: 'input5.eq3',
		progress: 0.5196850393700787
	},
	5955: {
		event: 'input5.eq3',
		progress: 0.5275590551181102
	},
	5956: {
		event: 'input5.eq3',
		progress: 0.5354330708661418
	},
	5957: {
		event: 'input5.eq3',
		progress: 0.5433070866141733
	},
	5958: {
		event: 'input5.eq3',
		progress: 0.5511811023622047
	},
	5959: {
		event: 'input5.eq3',
		progress: 0.5590551181102362
	},
	5960: {
		event: 'input5.eq3',
		progress: 0.5669291338582677
	},
	5961: {
		event: 'input5.eq3',
		progress: 0.5748031496062992
	},
	5962: {
		event: 'input5.eq3',
		progress: 0.5826771653543307
	},
	5963: {
		event: 'input5.eq3',
		progress: 0.5905511811023622
	},
	5964: {
		event: 'input5.eq3',
		progress: 0.5984251968503937
	},
	5965: {
		event: 'input5.eq3',
		progress: 0.6062992125984252
	},
	5966: {
		event: 'input5.eq3',
		progress: 0.6141732283464567
	},
	5967: {
		event: 'input5.eq3',
		progress: 0.6220472440944882
	},
	5968: {
		event: 'input5.eq3',
		progress: 0.6299212598425197
	},
	5969: {
		event: 'input5.eq3',
		progress: 0.6377952755905512
	},
	5970: {
		event: 'input5.eq3',
		progress: 0.6456692913385826
	},
	5971: {
		event: 'input5.eq3',
		progress: 0.6535433070866141
	},
	5972: {
		event: 'input5.eq3',
		progress: 0.6614173228346457
	},
	5973: {
		event: 'input5.eq3',
		progress: 0.6692913385826772
	},
	5974: {
		event: 'input5.eq3',
		progress: 0.6771653543307087
	},
	5975: {
		event: 'input5.eq3',
		progress: 0.6850393700787402
	},
	5976: {
		event: 'input5.eq3',
		progress: 0.6929133858267716
	},
	5977: {
		event: 'input5.eq3',
		progress: 0.7007874015748031
	},
	5978: {
		event: 'input5.eq3',
		progress: 0.7086614173228346
	},
	5979: {
		event: 'input5.eq3',
		progress: 0.7165354330708661
	},
	5980: {
		event: 'input5.eq3',
		progress: 0.7244094488188977
	},
	5981: {
		event: 'input5.eq3',
		progress: 0.7322834645669292
	},
	5982: {
		event: 'input5.eq3',
		progress: 0.7401574803149606
	},
	5983: {
		event: 'input5.eq3',
		progress: 0.7480314960629921
	},
	5984: {
		event: 'input5.eq3',
		progress: 0.7559055118110236
	},
	5985: {
		event: 'input5.eq3',
		progress: 0.7637795275590551
	},
	5986: {
		event: 'input5.eq3',
		progress: 0.7716535433070866
	},
	5987: {
		event: 'input5.eq3',
		progress: 0.7795275590551181
	},
	5988: {
		event: 'input5.eq3',
		progress: 0.7874015748031497
	},
	5989: {
		event: 'input5.eq3',
		progress: 0.7952755905511811
	},
	5990: {
		event: 'input5.eq3',
		progress: 0.8031496062992126
	},
	5991: {
		event: 'input5.eq3',
		progress: 0.8110236220472441
	},
	5992: {
		event: 'input5.eq3',
		progress: 0.8188976377952756
	},
	5993: {
		event: 'input5.eq3',
		progress: 0.8267716535433071
	},
	5994: {
		event: 'input5.eq3',
		progress: 0.8346456692913385
	},
	5995: {
		event: 'input5.eq3',
		progress: 0.84251968503937
	},
	5996: {
		event: 'input5.eq3',
		progress: 0.8503937007874016
	},
	5997: {
		event: 'input5.eq3',
		progress: 0.8582677165354331
	},
	5998: {
		event: 'input5.eq3',
		progress: 0.8661417322834646
	},
	5999: {
		event: 'input5.eq3',
		progress: 0.8740157480314961
	},
	6000: {
		event: 'input5.eq3',
		progress: 0.8818897637795275
	},
	6001: {
		event: 'input5.eq3',
		progress: 0.889763779527559
	},
	6002: {
		event: 'input5.eq3',
		progress: 0.8976377952755905
	},
	6003: {
		event: 'input5.eq3',
		progress: 0.905511811023622
	},
	6004: {
		event: 'input5.eq3',
		progress: 0.9133858267716536
	},
	6005: {
		event: 'input5.eq3',
		progress: 0.9212598425196851
	},
	6006: {
		event: 'input5.eq3',
		progress: 0.9291338582677166
	},
	6007: {
		event: 'input5.eq3',
		progress: 0.937007874015748
	},
	6008: {
		event: 'input5.eq3',
		progress: 0.9448818897637795
	},
	6009: {
		event: 'input5.eq3',
		progress: 0.952755905511811
	},
	6010: {
		event: 'input5.eq3',
		progress: 0.9606299212598425
	},
	6011: {
		event: 'input5.eq3',
		progress: 0.968503937007874
	},
	6012: {
		event: 'input5.eq3',
		progress: 0.9763779527559056
	},
	6013: {
		event: 'input5.eq3',
		progress: 0.984251968503937
	},
	6014: {
		event: 'input5.eq3',
		progress: 0.9921259842519685
	},
	6015: {
		event: 'input5.eq3',
		progress: 1
	},
	6144: {
		event: 'input6.eq3',
		progress: 0
	},
	6145: {
		event: 'input6.eq3',
		progress: 0.007874015748031496
	},
	6146: {
		event: 'input6.eq3',
		progress: 0.015748031496062992
	},
	6147: {
		event: 'input6.eq3',
		progress: 0.023622047244094488
	},
	6148: {
		event: 'input6.eq3',
		progress: 0.031496062992125984
	},
	6149: {
		event: 'input6.eq3',
		progress: 0.03937007874015748
	},
	6150: {
		event: 'input6.eq3',
		progress: 0.047244094488188976
	},
	6151: {
		event: 'input6.eq3',
		progress: 0.05511811023622047
	},
	6152: {
		event: 'input6.eq3',
		progress: 0.06299212598425197
	},
	6153: {
		event: 'input6.eq3',
		progress: 0.07086614173228346
	},
	6154: {
		event: 'input6.eq3',
		progress: 0.07874015748031496
	},
	6155: {
		event: 'input6.eq3',
		progress: 0.08661417322834646
	},
	6156: {
		event: 'input6.eq3',
		progress: 0.09448818897637795
	},
	6157: {
		event: 'input6.eq3',
		progress: 0.10236220472440945
	},
	6158: {
		event: 'input6.eq3',
		progress: 0.11023622047244094
	},
	6159: {
		event: 'input6.eq3',
		progress: 0.11811023622047244
	},
	6160: {
		event: 'input6.eq3',
		progress: 0.12598425196850394
	},
	6161: {
		event: 'input6.eq3',
		progress: 0.13385826771653545
	},
	6162: {
		event: 'input6.eq3',
		progress: 0.14173228346456693
	},
	6163: {
		event: 'input6.eq3',
		progress: 0.14960629921259844
	},
	6164: {
		event: 'input6.eq3',
		progress: 0.15748031496062992
	},
	6165: {
		event: 'input6.eq3',
		progress: 0.16535433070866143
	},
	6166: {
		event: 'input6.eq3',
		progress: 0.1732283464566929
	},
	6167: {
		event: 'input6.eq3',
		progress: 0.18110236220472442
	},
	6168: {
		event: 'input6.eq3',
		progress: 0.1889763779527559
	},
	6169: {
		event: 'input6.eq3',
		progress: 0.1968503937007874
	},
	6170: {
		event: 'input6.eq3',
		progress: 0.2047244094488189
	},
	6171: {
		event: 'input6.eq3',
		progress: 0.2125984251968504
	},
	6172: {
		event: 'input6.eq3',
		progress: 0.2204724409448819
	},
	6173: {
		event: 'input6.eq3',
		progress: 0.2283464566929134
	},
	6174: {
		event: 'input6.eq3',
		progress: 0.23622047244094488
	},
	6175: {
		event: 'input6.eq3',
		progress: 0.2440944881889764
	},
	6176: {
		event: 'input6.eq3',
		progress: 0.25196850393700787
	},
	6177: {
		event: 'input6.eq3',
		progress: 0.25984251968503935
	},
	6178: {
		event: 'input6.eq3',
		progress: 0.2677165354330709
	},
	6179: {
		event: 'input6.eq3',
		progress: 0.2755905511811024
	},
	6180: {
		event: 'input6.eq3',
		progress: 0.28346456692913385
	},
	6181: {
		event: 'input6.eq3',
		progress: 0.29133858267716534
	},
	6182: {
		event: 'input6.eq3',
		progress: 0.2992125984251969
	},
	6183: {
		event: 'input6.eq3',
		progress: 0.30708661417322836
	},
	6184: {
		event: 'input6.eq3',
		progress: 0.31496062992125984
	},
	6185: {
		event: 'input6.eq3',
		progress: 0.3228346456692913
	},
	6186: {
		event: 'input6.eq3',
		progress: 0.33070866141732286
	},
	6187: {
		event: 'input6.eq3',
		progress: 0.33858267716535434
	},
	6188: {
		event: 'input6.eq3',
		progress: 0.3464566929133858
	},
	6189: {
		event: 'input6.eq3',
		progress: 0.3543307086614173
	},
	6190: {
		event: 'input6.eq3',
		progress: 0.36220472440944884
	},
	6191: {
		event: 'input6.eq3',
		progress: 0.3700787401574803
	},
	6192: {
		event: 'input6.eq3',
		progress: 0.3779527559055118
	},
	6193: {
		event: 'input6.eq3',
		progress: 0.3858267716535433
	},
	6194: {
		event: 'input6.eq3',
		progress: 0.3937007874015748
	},
	6195: {
		event: 'input6.eq3',
		progress: 0.4015748031496063
	},
	6196: {
		event: 'input6.eq3',
		progress: 0.4094488188976378
	},
	6197: {
		event: 'input6.eq3',
		progress: 0.41732283464566927
	},
	6198: {
		event: 'input6.eq3',
		progress: 0.4251968503937008
	},
	6199: {
		event: 'input6.eq3',
		progress: 0.4330708661417323
	},
	6200: {
		event: 'input6.eq3',
		progress: 0.4409448818897638
	},
	6201: {
		event: 'input6.eq3',
		progress: 0.44881889763779526
	},
	6202: {
		event: 'input6.eq3',
		progress: 0.4566929133858268
	},
	6203: {
		event: 'input6.eq3',
		progress: 0.4645669291338583
	},
	6204: {
		event: 'input6.eq3',
		progress: 0.47244094488188976
	},
	6205: {
		event: 'input6.eq3',
		progress: 0.48031496062992124
	},
	6206: {
		event: 'input6.eq3',
		progress: 0.4881889763779528
	},
	6207: {
		event: 'input6.eq3',
		progress: 0.49606299212598426
	},
	6208: {
		event: 'input6.eq3',
		progress: 0.5039370078740157
	},
	6209: {
		event: 'input6.eq3',
		progress: 0.5118110236220472
	},
	6210: {
		event: 'input6.eq3',
		progress: 0.5196850393700787
	},
	6211: {
		event: 'input6.eq3',
		progress: 0.5275590551181102
	},
	6212: {
		event: 'input6.eq3',
		progress: 0.5354330708661418
	},
	6213: {
		event: 'input6.eq3',
		progress: 0.5433070866141733
	},
	6214: {
		event: 'input6.eq3',
		progress: 0.5511811023622047
	},
	6215: {
		event: 'input6.eq3',
		progress: 0.5590551181102362
	},
	6216: {
		event: 'input6.eq3',
		progress: 0.5669291338582677
	},
	6217: {
		event: 'input6.eq3',
		progress: 0.5748031496062992
	},
	6218: {
		event: 'input6.eq3',
		progress: 0.5826771653543307
	},
	6219: {
		event: 'input6.eq3',
		progress: 0.5905511811023622
	},
	6220: {
		event: 'input6.eq3',
		progress: 0.5984251968503937
	},
	6221: {
		event: 'input6.eq3',
		progress: 0.6062992125984252
	},
	6222: {
		event: 'input6.eq3',
		progress: 0.6141732283464567
	},
	6223: {
		event: 'input6.eq3',
		progress: 0.6220472440944882
	},
	6224: {
		event: 'input6.eq3',
		progress: 0.6299212598425197
	},
	6225: {
		event: 'input6.eq3',
		progress: 0.6377952755905512
	},
	6226: {
		event: 'input6.eq3',
		progress: 0.6456692913385826
	},
	6227: {
		event: 'input6.eq3',
		progress: 0.6535433070866141
	},
	6228: {
		event: 'input6.eq3',
		progress: 0.6614173228346457
	},
	6229: {
		event: 'input6.eq3',
		progress: 0.6692913385826772
	},
	6230: {
		event: 'input6.eq3',
		progress: 0.6771653543307087
	},
	6231: {
		event: 'input6.eq3',
		progress: 0.6850393700787402
	},
	6232: {
		event: 'input6.eq3',
		progress: 0.6929133858267716
	},
	6233: {
		event: 'input6.eq3',
		progress: 0.7007874015748031
	},
	6234: {
		event: 'input6.eq3',
		progress: 0.7086614173228346
	},
	6235: {
		event: 'input6.eq3',
		progress: 0.7165354330708661
	},
	6236: {
		event: 'input6.eq3',
		progress: 0.7244094488188977
	},
	6237: {
		event: 'input6.eq3',
		progress: 0.7322834645669292
	},
	6238: {
		event: 'input6.eq3',
		progress: 0.7401574803149606
	},
	6239: {
		event: 'input6.eq3',
		progress: 0.7480314960629921
	},
	6240: {
		event: 'input6.eq3',
		progress: 0.7559055118110236
	},
	6241: {
		event: 'input6.eq3',
		progress: 0.7637795275590551
	},
	6242: {
		event: 'input6.eq3',
		progress: 0.7716535433070866
	},
	6243: {
		event: 'input6.eq3',
		progress: 0.7795275590551181
	},
	6244: {
		event: 'input6.eq3',
		progress: 0.7874015748031497
	},
	6245: {
		event: 'input6.eq3',
		progress: 0.7952755905511811
	},
	6246: {
		event: 'input6.eq3',
		progress: 0.8031496062992126
	},
	6247: {
		event: 'input6.eq3',
		progress: 0.8110236220472441
	},
	6248: {
		event: 'input6.eq3',
		progress: 0.8188976377952756
	},
	6249: {
		event: 'input6.eq3',
		progress: 0.8267716535433071
	},
	6250: {
		event: 'input6.eq3',
		progress: 0.8346456692913385
	},
	6251: {
		event: 'input6.eq3',
		progress: 0.84251968503937
	},
	6252: {
		event: 'input6.eq3',
		progress: 0.8503937007874016
	},
	6253: {
		event: 'input6.eq3',
		progress: 0.8582677165354331
	},
	6254: {
		event: 'input6.eq3',
		progress: 0.8661417322834646
	},
	6255: {
		event: 'input6.eq3',
		progress: 0.8740157480314961
	},
	6256: {
		event: 'input6.eq3',
		progress: 0.8818897637795275
	},
	6257: {
		event: 'input6.eq3',
		progress: 0.889763779527559
	},
	6258: {
		event: 'input6.eq3',
		progress: 0.8976377952755905
	},
	6259: {
		event: 'input6.eq3',
		progress: 0.905511811023622
	},
	6260: {
		event: 'input6.eq3',
		progress: 0.9133858267716536
	},
	6261: {
		event: 'input6.eq3',
		progress: 0.9212598425196851
	},
	6262: {
		event: 'input6.eq3',
		progress: 0.9291338582677166
	},
	6263: {
		event: 'input6.eq3',
		progress: 0.937007874015748
	},
	6264: {
		event: 'input6.eq3',
		progress: 0.9448818897637795
	},
	6265: {
		event: 'input6.eq3',
		progress: 0.952755905511811
	},
	6266: {
		event: 'input6.eq3',
		progress: 0.9606299212598425
	},
	6267: {
		event: 'input6.eq3',
		progress: 0.968503937007874
	},
	6268: {
		event: 'input6.eq3',
		progress: 0.9763779527559056
	},
	6269: {
		event: 'input6.eq3',
		progress: 0.984251968503937
	},
	6270: {
		event: 'input6.eq3',
		progress: 0.9921259842519685
	},
	6271: {
		event: 'input6.eq3',
		progress: 1
	},
	6400: {
		event: 'input1.button',
		pressed: false
	},
	6527: {
		event: 'input1.button',
		pressed: true
	},
	6656: {
		event: 'input2.button',
		pressed: false
	},
	6783: {
		event: 'input2.button',
		pressed: true
	},
	6912: {
		event: 'input3.button',
		pressed: false
	},
	7039: {
		event: 'input3.button',
		pressed: true
	},
	7168: {
		event: 'input4.button',
		pressed: false
	},
	7295: {
		event: 'input4.button',
		pressed: true
	},
	7424: {
		event: 'input5.button',
		pressed: false
	},
	7551: {
		event: 'input5.button',
		pressed: true
	},
	7680: {
		event: 'input6.button',
		pressed: false
	},
	7807: {
		event: 'input6.button',
		pressed: true
	},
	7937: {
		event: 'select.encoder',
		direction: 'right'
	},
	8063: {
		event: 'select.encoder',
		direction: 'left'
	},
	8192: {
		event: 'select.button',
		pressed: false
	},
	8319: {
		event: 'select.button',
		pressed: true
	},
	8448: {
		event: 'fx1',
		pressed: false
	},
	8575: {
		event: 'fx1',
		pressed: true
	},
	8704: {
		event: 'fx2',
		pressed: false
	},
	8831: {
		event: 'fx2',
		pressed: true
	},
	8960: {
		event: 'shift',
		pressed: false
	},
	9087: {
		event: 'shift',
		pressed: true
	},
	9216: {
		event: 'aux',
		pressed: false
	},
	9343: {
		event: 'aux',
		pressed: true
	},
	9472: {
		event: 'cue',
		pressed: false
	},
	9599: {
		event: 'cue',
		pressed: true
	}
}

export default events
