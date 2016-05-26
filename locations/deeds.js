var deeds;

deeds = [
  {
    name: 'New Town',
    tag: 'new-town',
    mayor: 'Dominikk',
    type: 'large',
    x: 906,
    y: 760,
    features: ['trader', 'merchant', 'market', 'harbour', 'resources', 'recruiting']
  }, {
    name: 'Little Patch of Heaven',
    tag: 'little-patch-of-heaven',
    mayor: 'Jaede',
    type: 'solo',
    x: 1115,
    y: 770
  }, {
    name: 'Alexondrea',
    tag: 'alexondrea',
    type: 'large',
    mayor: 'Traveler',
    x: 1076,
    y: 786,
    features: ['resources']
  }, {
    name: 'Longview',
    tag: 'longview',
    x: 556,
    y: 1318,
    mayor: 'Borgal',
    type: 'solo'
  }, {
    name: 'Awarthriel\'s Grove',
    tag: 'awarthriels-grove',
    type: 'solo',
    mayor: 'DruidNature',
    x: 2458,
    y: 3322
  }, {
    name: 'Symphonies End',
    tag: 'symphonies-end',
    type: 'small',
    mayor: 'Melketh',
    x: 1046,
    y: 790,
    features: ['recruiting', 'mailbox']
  }, {
    name: 'Chris\' Home',
    tag: 'chris-home',
    type: 'solo',
    mayor: 'Chris',
    x: 730,
    y: 2348
  }, {
    name: 'Highwater',
    tag: 'highwater',
    type: 'large',
    mayor: 'Kezei',
    x: 2641,
    y: 3500,
    features: ['trader', 'merchant', 'market', 'inn', 'harbour', 'mailbox', 'recruiting']
  }, {
    name: 'Deathlands',
    tag: 'deathlands',
    type: 'solo',
    mayor: 'Death',
    x: 1059,
    y: 704
  }, {
    name: 'Castleton',
    tag: 'castleton',
    mayor: 'Rikko',
    x: 1220,
    y: 1006
  }, {
    name: 'Izmir',
    tag: 'izmir',
    type: 'small',
    mayor: 'jackoritos',
    x: 526,
    y: 1378,
    features: ['harbour', 'recruiting']
  }, {
    name: 'Phules Paradise',
    tag: 'phules-paradise',
    mayor: 'Andistyr',
    x: 1448,
    y: 350,
    features: ['inn', 'mailbox'],
    type: 'small'
  }, {
    name: 'Hokrasut',
    tag: 'hokrasut',
    type: 'small',
    mayor: 'Zardoka',
    x: 3155,
    y: 3533,
    features: ['harbour', 'resources']
  }, {
    name: 'Lake Side',
    tag: 'lake-side',
    type: 'solo',
    mayor: 'Damine',
    x: 868,
    y: 772,
    features: ['harbour']
  }, {
    name: 'New Town Docks',
    tag: 'new-town-docks',
    mayor: 'Engineer',
    x: 940,
    y: 838
  }, {
    name: 'Dunkelwald',
    tag: 'dunkelwald',
    type: 'small',
    mayor: 'Ennofiliusdiaboli',
    x: 2976,
    y: 480,
    features: ['recruiting']
  }, {
    name: 'Coastal Watch',
    tag: 'coastal-watch',
    type: 'solo',
    mayor: 'Exor',
    x: 414,
    y: 430
  }, {
    name: 'Dragon\'s Breath Castle',
    tag: 'dragons-breath-castle',
    type: 'solo',
    mayor: 'Devily',
    x: 3226,
    y: 3260,
    features: ['harbour']
  }, {
    name: 'Oak Shores',
    tag: 'oak-shores',
    type: 'small',
    mayor: 'Macros',
    x: 1070,
    y: 1164
  }, {
    name: 'Maniac Mansion',
    tag: 'maniac-mansion',
    type: 'small',
    mayor: 'Quixa',
    x: 922,
    y: 660
  }, {
    name: 'Rock Face',
    tag: 'rock-face',
    type: 'solo',
    mayor: 'Zentil',
    x: 935,
    y: 1280
  }, {
    name: 'Silver Lake',
    tag: 'silver-lake',
    type: 'solo',
    mayor: 'Alayena',
    x: 1548,
    y: 2974
  }, {
    name: 'Mikes Point',
    tag: 'mikes-point',
    type: 'solo',
    mayor: 'Mike',
    x: 3602,
    y: 786
  }, {
    name: 'Midway Landing',
    tag: 'midway-landing',
    type: 'small',
    mayor: 'Linx',
    x: 662,
    y: 2170
  }, {
    name: 'Gades',
    tag: 'gades',
    type: 'solo',
    mayor: 'Encode',
    x: 1128,
    y: 1112,
    features: ['harbour', 'mailbox']
  }, {
    name: 'Quip\'s Demise',
    tag: 'quips-demise',
    mayor: 'Quip',
    x: 1100,
    y: 374
  }, {
    name: 'Bear Mountain',
    tag: 'bear-mountain',
    mayor: 'Inara',
    type: 'small',
    x: 1312,
    y: 1154,
    features: ['recruiting']
  }, {
    name: 'Lunaman\'s Shack',
    tag: 'lunamans-shack',
    mayor: 'Lunaman',
    type: 'solo',
    x: 875,
    y: 2636
  }, {
    name: 'Bay-town',
    tag: 'bay-town',
    mayor: 'Hampe',
    type: 'solo',
    x: 1196,
    y: 925
  }, {
    name: 'Astur',
    tag: 'astur',
    mayor: 'Charlypodo',
    type: 'solo',
    x: 1088,
    y: 1120,
    features: ['harbour']
  }, {
    name: 'Riverside',
    tag: 'riverside',
    mayor: 'Sklo',
    type: 'large',
    x: 2923,
    y: 3303,
    features: ['harbour']
  }, {
    name: 'Griffin\'s Nest Harbour',
    tag: 'griffins-nest-harbour',
    mayor: 'Phoenix',
    type: 'small',
    x: 3228,
    y: 2798,
    features: ['harbour', 'recruiting']
  }, {
    name: 'Reagville',
    tag: 'reagville',
    mayor: 'Reagor',
    type: 'solo',
    x: 484,
    y: 541
  }, {
    name: 'Ashenfort',
    tag: 'ashenfort',
    mayor: 'Meado',
    type: 'solo',
    x: 1072,
    y: 1820,
    features: ['recruiting']
  }, {
    name: 'Valhalla',
    tag: 'valhalla',
    mayor: 'Thor',
    type: 'solo',
    x: 711,
    y: 762
  }, {
    name: 'Zhentil keep',
    tag: 'zhentil-keep',
    mayor: 'validate',
    type: 'solo',
    x: 2839,
    y: 508
  }, {
    name: 'The Pitstop',
    tag: 'pitstop',
    mayor: 'Azalia',
    type: 'solo',
    x: 1398,
    y: 885
  }, {
    name: 'Bg Town',
    tag: 'bg-town',
    mayor: 'Gugibg',
    type: 'solo',
    x: 1206,
    y: 1070
  }, {
    name: 'Fallmead',
    tag: 'fallmead',
    x: 2933,
    y: 390,
    mayor: 'Yesirn',
    type: 'small'
  }, {
    name: 'Productivity',
    tag: 'productivity',
    x: 846,
    y: 642,
    mayor: 'Gatwick',
    type: 'solo'
  }, {
    name: 'Lonelywood',
    tag: 'lonelywood',
    mayor: 'Leiph',
    type: 'solo',
    x: 2260,
    y: 815,
    features: ['recruiting']
  }, {
    name: 'Grendellvar',
    tag: 'grendellvar',
    x: 1764,
    y: 2025,
    mayor: 'Manbear',
    type: 'solo'
  }, {
    name: 'Regional Customs',
    tag: 'regional-customs',
    x: 970,
    y: 734,
    mayor: 'Arion',
    type: 'small'
  }, {
    name: 'Arn\'s place',
    tag: 'arns-place',
    mayor: 'ArnDeGot',
    type: 'solo',
    x: 790,
    y: 1365
  }, {
    name: 'Seaside Settlement',
    tag: 'seaside-settlement',
    mayor: 'Atrias',
    x: 617,
    y: 944,
    features: ['recruiting'],
    type: 'solo'
  }, {
    name: 'Liberty',
    tag: 'liberty',
    x: 540,
    y: 767,
    mayor: 'Metrix',
    type: 'small',
    features: ['recruiting']
  }, {
    name: 'Unknown Xenon Sector',
    tag: 'unknown-xenon-sector',
    x: 3061,
    y: 1447,
    mayor: 'Xenon',
    type: 'solo'
  }, {
    name: 'Birchton',
    tag: 'birchton',
    mayor: 'Plasson',
    type: 'solo',
    x: 3754,
    y: 2612
  }, {
    name: 'Alexondrea Port',
    tag: 'alexondrea-port',
    x: 1105,
    y: 871,
    mayor: 'Traveler',
    features: ['merchant', 'market', 'harbour']
  }, {
    name: 'Silversky',
    tag: 'silversky',
    x: 3045,
    y: 1782,
    mayor: 'Katitude',
    type: 'solo'
  }, {
    name: 'Kentosani',
    tag: 'kentosani',
    x: 440,
    y: 3080,
    mayor: 'Liam',
    type: 'solo'
  }, {
    name: 'Blackmere Basin',
    tag: 'blackmere-basin',
    x: 796,
    y: 1581,
    owner: 'Ratzo & Yelruh',
    type: 'small'
  }, {
    name: 'Homewood',
    tag: 'homewood',
    x: 525,
    y: 633,
    mayor: 'Cadeef',
    type: 'solo'
  }, {
    name: 'Dwemeria',
    tag: 'dwemeria',
    x: 916,
    y: 2522,
    mayor: 'DwemerManiac',
    type: 'small',
    features: ['harbour']
  }, {
    name: 'Zephyr',
    tag: 'zephyr',
    x: 2719,
    y: 3674,
    mayor: 'Reese',
    type: 'solo'
  }, {
    name: 'Dragon\'s Lair',
    tag: 'dragons-lair',
    x: 2088,
    y: 3134,
    mayor: 'IQtheDragon',
    type: 'small',
    features: ['recruiting']
  }, {
    name: 'Rise Of The Pink Ponys',
    tag: 'rise-of-the-pink-ponys',
    x: 721,
    y: 1047,
    mayor: 'Yogibearjew',
    type: 'small'
  }, {
    name: 'Compton Beachamp',
    tag: 'compton-beachamp',
    x: 1061,
    y: 348,
    mayor: 'Akali',
    type: 'small'
  }, {
    name: 'Safe Haven',
    tag: 'safe-haven',
    x: 1104,
    y: 834,
    mayor: 'PrincessZena',
    features: ['recruiting'],
    type: 'solo'
  }, {
    name: 'Dark Leaf',
    tag: 'dark-leaf',
    x: 1152,
    y: 784,
    mayor: 'Kinnarts',
    type: 'solo'
  }, {
    name: 'Machinatrium',
    tag: 'machinatrium',
    x: 3180,
    y: 392,
    mayor: 'DeuxExMachina',
    type: 'solo'
  }, {
    name: 'Dragon\'s Pool',
    tag: 'dragons-pool',
    x: 2088,
    y: 3294,
    mayor: 'Dragoniq',
    type: 'small'
  }, {
    name: 'Sylvan',
    tag: 'sylvan',
    x: 988,
    y: 825,
    mayor: 'Ziemo',
    type: 'solo'
  }, {
    name: 'Bloodbath and Beyond',
    tag: 'bloodbath-and-beyond',
    x: 1934,
    y: 1304,
    mayor: 'Kadore',
    type: 'solo'
  }, {
    name: 'Loyal Ace',
    tag: 'loyal-ace',
    x: 1970,
    y: 3356,
    mayor: 'Yela',
    type: 'small'
  }, {
    name: 'Azure',
    tag: 'azure',
    x: 1356,
    y: 446,
    mayor: 'Isdur',
    type: 'solo'
  }, {
    name: 'Griffin Mountain',
    tag: 'griffin-mountain',
    x: 3095,
    y: 2737,
    mayor: 'Guffil',
    type: 'solo'
  }, {
    name: 'Dlowville',
    tag: 'dlowville',
    x: 1023,
    y: 1223,
    mayor: 'Dlow',
    type: 'solo'
  }, {
    name: 'Indalo Farm',
    tag: 'indalo-farm',
    x: 1175,
    y: 873,
    mayor: 'Indalo',
    type: 'solo'
  }, {
    name: 'Florida',
    tag: 'florida',
    x: 850,
    y: 292,
    mayor: 'Tedrick',
    features: ['harbour', 'recruiting'],
    type: 'solo'
  }, {
    name: 'Barrowland',
    tag: 'barrowland',
    x: 2316,
    y: 2998,
    mayor: 'Kroaker',
    type: 'solo'
  }, {
    name: 'Port North',
    tag: 'port-north',
    x: 2278,
    y: 592,
    mayor: 'Bluegreen',
    features: ['harbour'],
    type: 'small'
  }, {
    name: 'Catnip Cove',
    tag: 'catnip-cove',
    x: 3508,
    y: 1421,
    mayor: 'Mizova',
    features: ['harbour', 'mailbox', 'market', 'inn'],
    type: 'large'
  }, {
    name: 'Easthaven Trade Harbour',
    tag: 'easthaven-trade-harbour',
    x: 3540,
    y: 3362,
    mayor: 'Noskull',
    features: ['market', 'harbour', 'inn'],
    type: 'solo'
  }, {
    name: 'Magnolia Mines',
    tag: 'magnolia-mines',
    x: 808,
    y: 3018,
    mayor: 'Deltagirl',
    type: 'solo'
  }, {
    name: 'Hell\'s Pass',
    tag: 'fos-forest-trade-post',
    x: 1118,
    y: 808,
    mayor: 'Manton',
    features: ['trader', 'market', 'mailbox', 'recruiting'],
    type: 'small'
  }, {
    name: 'Poseidons Anchorage',
    tag: 'poseidons-anchorage',
    x: 1692,
    y: 383,
    mayor: 'Weatherwax',
    features: ['harbour'],
    type: 'solo'
  }, {
    name: 'Serpent Bay Port',
    tag: 'serpent-bay-port',
    x: 816,
    y: 2684,
    mayor: 'Freelance',
    type: 'small'
  }, {
    name: 'Seal Cove',
    tag: 'seal-cove',
    x: 1474,
    y: 1603,
    mayor: 'Wulfsige',
    type: 'solo'
  }, {
    name: 'Monotropa',
    tag: 'monotropa',
    x: 880,
    y: 701,
    mayor: 'Kilem',
    type: 'small'
  }, {
    name: 'Lost Woods',
    tag: 'lost-woods',
    x: 892,
    y: 1332,
    mayor: 'Yeva, Emili',
    type: 'solo'
  }, {
    name: 'Pine Lake',
    tag: 'pine-lake',
    x: 2556,
    y: 2280,
    mayor: 'Harzim',
    type: 'solo'
  }, {
    name: 'Littlehub',
    tag: 'littlehub',
    x: 805,
    y: 1308,
    mayor: 'Thalos',
    features: ['harbour', 'recruiting'],
    type: 'solo'
  }, {
    name: 'Archimedes Hall',
    tag: 'archimedes-hall',
    x: 2496,
    y: 810,
    mayor: 'Archimedes',
    type: 'solo'
  }, {
    name: 'Enigma',
    tag: 'enigma',
    x: 742,
    y: 276,
    mayor: 'Zortanis',
    features: ['recruiting'],
    type: 'solo'
  }, {
    name: 'West Point',
    tag: 'west-point',
    x: 540,
    y: 1100,
    mayor: 'Sarren',
    features: ['harbour', 'inn'],
    type: 'solo'
  }, {
    name: 'The Anvil of Ice',
    tag: 'anvil-of-ice',
    x: 1472,
    y: 2293,
    mayor: 'Melketh',
    type: 'solo'
  }, {
    name: 'Well of Souls',
    tag: 'well-of-souls',
    x: 2715,
    y: 682,
    mayor: 'Zealord',
    features: ['harbour', 'recruiting'],
    type: 'small'
  }, {
    name: 'Pirate Bay',
    tag: 'pirate-bay',
    x: 2548,
    y: 778,
    mayor: 'CookieMuncher & Cryke',
    features: ['trader', 'market', 'harbour', 'inn'],
    type: 'large'
  }, {
    name: 'Celosia',
    tag: 'celosia',
    x: 1991,
    y: 639,
    mayor: 'Nuinethir',
    features: ['mailbox'],
    type: 'small'
  }, {
    name: 'SkyRift',
    tag: 'skyrift',
    x: 3620,
    y: 1649,
    mayor: 'Ptahil',
    type: 'solo'
  }, {
    name: 'Northshore Docks',
    tag: 'northshore-docks',
    x: 1410,
    y: 355,
    mayor: 'Borieck',
    features: ['harbour'],
    type: 'solo'
  }, {
    name: 'Knocktopher',
    tag: 'knocktopher',
    x: 1948,
    y: 730,
    mayor: 'Ravenquoth',
    type: 'solo'
  }, {
    name: 'Inextremx',
    tag: 'inextremx',
    x: 1206,
    y: 846,
    mayor: 'Inextremx',
    type: 'solo'
  }, {
    name: 'Farms of Dwemeria',
    tag: 'farms-of-dwemeria',
    x: 995,
    y: 2509,
    mayor: 'JustBob',
    type: 'solo'
  }, {
    name: 'Samia Bay',
    tag: 'samia-bay',
    x: 528,
    y: 609,
    mayor: 'Tranderas',
    type: 'solo'
  }, {
    name: 'Port Hudson',
    tag: 'port-hudson',
    x: 442,
    y: 3190,
    mayor: 'Tyrannus',
    features: ['harbour', 'recruiting'],
    type: 'solo'
  }, {
    name: 'Highgarden',
    tag: 'highgarden',
    x: 1075,
    y: 1658,
    mayor: 'Moxie',
    type: 'small'
  }, {
    name: 'Wardruna Cove',
    tag: 'wardruna-cove',
    x: 778,
    y: 2738,
    mayor: 'Cyrus',
    features: ['trader'],
    type: 'small'
  }, {
    name: 'Silgus',
    tag: 'silgus',
    x: 849,
    y: 598,
    mayor: 'Syleth',
    type: 'solo'
  }, {
    name: 'LoveFear-Docks',
    tag: 'lovefear-docks',
    x: 524,
    y: 2331,
    mayor: 'Lovelace',
    features: ['harbour', 'market', 'mailbox'],
    type: 'solo'
  }, {
    name: 'Dark Leaf Harbor',
    tag: 'dark-leaf-harbor',
    x: 1203,
    y: 952,
    mayor: 'Innik',
    type: 'solo'
  }, {
    name: 'Aevum',
    tag: 'aevum',
    x: 1362,
    y: 1100,
    mayor: 'Mutz',
    features: ['recruiting'],
    type: 'small'
  }, {
    name: 'Arvika',
    tag: 'arvika',
    x: 582,
    y: 514,
    mayor: 'Zeafaw',
    features: ['recruiting'],
    type: 'small'
  }, {
    name: 'Moon Tree',
    tag: 'moon-tree',
    x: 3665,
    y: 2393,
    mayor: 'Sazaraki',
    type: 'solo'
  }, {
    name: 'Link\'s Spot',
    tag: 'links-spot',
    x: 1865,
    y: 3852,
    mayor: 'Link',
    type: 'small'
  }, {
    name: 'Aquashire',
    tag: 'aquashire',
    x: 376,
    y: 2454,
    mayor: 'LordOfRus',
    features: ['harbour', 'recruiting'],
    type: 'solo'
  }, {
    name: 'Point of No Return',
    tag: 'point-of-no-return',
    x: 540,
    y: 1913,
    mayor: 'Rigger',
    type: 'solo'
  }, {
    name: 'Loch Niss',
    tag: 'loch-niss',
    x: 3056,
    y: 3694,
    mayor: 'Nissy',
    type: 'solo'
  }, {
    name: 'Jolly Roger Bay',
    tag: 'jolly-roger-bay',
    x: 818,
    y: 1188,
    mayor: 'Tranderas',
    type: 'solo'
  }, {
    name: 'Blaine',
    tag: 'blaine',
    x: 529,
    y: 647,
    mayor: 'ChrisDolmeth',
    features: ['recruiting'],
    type: 'small'
  }, {
    name: 'Firefly',
    tag: 'firefly',
    x: 1094,
    y: 616,
    mayor: 'Tiega',
    type: 'solo'
  }, {
    name: 'Castle Glittercrown',
    tag: 'castle-glittercrown',
    x: 348,
    y: 312,
    mayor: 'Capi',
    features: ['harbour', 'recruiting'],
    type: 'small'
  }, {
    name: 'Tulum',
    tag: 'tulum',
    x: 330,
    y: 1840,
    mayor: 'Diablos',
    features: ['harbour', 'mailbox'],
    type: 'solo'
  }, {
    name: 'Pine Grove',
    tag: 'pine-grove',
    x: 1045,
    y: 676,
    mayor: 'Pyelitis',
    type: 'small'
  }, {
    name: 'Ransville',
    tag: 'ransville',
    x: 2098,
    y: 962,
    mayor: 'Randall \& WaterMonster',
    type: 'small'
  }, {
    name: 'Tholen Farmstead',
    tag: 'tholen-farmstead',
    x: 1026,
    y: 750,
    mayor: 'Cunemous',
    features: ['merchant', 'inn', 'recruiting'],
    type: 'small'
  }, {
    name: 'Hillside',
    tag: 'hillside',
    x: 1930,
    y: 2905,
    mayor: 'Orvig',
    type: 'solo'
  }, {
    name: 'Minowick',
    tag: 'minowick',
    x: 3461,
    y: 1226,
    mayor: 'Turelis',
    type: 'solo'
  }, {
    name: 'Memphis\' Mountain Home',
    tag: 'memphis-mountain-home',
    x: 1079,
    y: 2113,
    mayor: 'Memphis',
    type: 'solo'
  }, {
    name: 'End of The Line Trading Partners',
    tag: 'end-of-the-line-trading-partners',
    x: 2480,
    y: 3478,
    mayor: 'Maratdesade',
    features: ['recruiting'],
    type: 'small'
  }, {
    name: 'Verdent Hill',
    tag: 'verdent-hill',
    x: 1316,
    y: 807,
    mayor: 'Emass',
    type: 'solo'
  }, {
    name: 'Littlehub',
    tag: 'littlehub',
    x: 805,
    y: 1308,
    mayor: 'Thalos',
    features: ['harbour', 'inn', 'mailbox', 'recruiting'],
    type: 'small'
  }, {
    name: 'Southern Acres',
    tag: 'southern-acres',
    x: 846,
    y: 693,
    mayor: 'Airconman',
    features: ['recruiting'],
    type: 'solo'
  }, {
    name: 'Camletoe',
    tag: 'camletoe',
    x: 2061,
    y: 1361,
    mayor: 'Xloey',
    features: ['mailbox', 'trader', 'recruiting'],
    type: 'small'
  }, {
    name: 'Goiania',
    tag: 'goiania',
    x: 470,
    y: 2017,
    mayor: 'Trustvainer',
    type: 'solo'
  }, {
    name: 'New Banana Land',
    tag: 'new-banana-land',
    x: 1625,
    y: 3737,
    mayor: 'Nana',
    type: 'solo'
  }, {
    name: 'Moonwood',
    tag: 'moonwood',
    x: 1590,
    y: 3708,
    mayor: 'Draedo',
    features: ['recruiting'],
    type: 'solo'
  }, {
    name: 'Raven Watch',
    tag: 'raven-watch',
    x: 3152,
    y: 1546,
    mayor: 'Velan',
    features: ['mailbox'],
    type: 'solo'
  }, {
    name: 'Belgica',
    tag: 'belgica',
    x: 1164,
    y: 385,
    mayor: 'Djjorno54',
    features: ['trader', 'recruiting'],
    type: 'small'
  }, {
    name: 'Brunnr Burrow',
    tag: 'brunnr-burrow',
    x: 795,
    y: 623,
    mayor: 'Brunnr',
    type: 'solo'
  }, {
    name: 'Heimdal\'s Hut',
    tag: 'heimdals-hut',
    x: 857,
    y: 1361,
    mayor: 'Heimdal',
    type: 'solo'
  }, {
    name: 'Narnia',
    tag: 'narnia',
    x: 1099,
    y: 897,
    mayor: 'Artenn',
    features: [''],
    type: 'solo'
  }, {
    name: 'Lakeridge',
    tag: 'lakeridge',
    x: 630,
    y: 1680,
    mayor: 'Kamaka',
    type: 'solo'
  }, {
    name: 'To Mato Plant',
    tag: 'to-mato-plant',
    x: 901,
    y: 584,
    mayor: 'Mato',
    features: ['recruiting'],
    type: 'small'
  }, {
    name: 'Spring\'s Reserve',
    tag: 'springs-reserve',
    x: 1071,
    y: 677,
    mayor: 'ShangXIq',
    type: 'solo'
  }, {
    name: 'New Moon Harbour',
    tag: 'new-moon-harbour',
    x: 1010,
    y: 1777,
    mayor: 'Lasin',
    type: 'small'
  }, {
    name: 'Viking Haven',
    tag: 'viking-haven',
    x: 1157,
    y: 910,
    mayor: 'Tjalfe',
    type: 'small'
  }, {
    name: 'Cargonia',
    tag: 'cargonia',
    x: 641,
    y: 2279,
    mayor: 'Noll',
    type: 'solo'
  }, {
    name: 'Fyresong Rest',
    tag: 'fyresong-rest',
    x: 1984,
    y: 474,
    mayor: 'Airica (aka Nuinethir)',
    features: ['harbour', 'inn', 'mailbox'],
    type: 'small'
  }, {
    name: 'Shadow Den',
    tag: 'shadow-den',
    x: 847,
    y: 2385,
    mayor: 'Rogasmo',
    type: 'solo'
  }, {
    name: 'Tiny Toon',
    tag: 'tiny-toon',
    x: 3234,
    y: 2069,
    mayor: 'Jalexber',
    type: 'solo'
  }, {
    name: 'Luxious Cloitus',
    tag: 'luxious-cloitus',
    x: 2283,
    y: 1403,
    mayor: 'Farmer',
    type: 'solo'
  }, {
    name: 'Paradise',
    tag: 'paradise',
    x: 1052,
    y: 3843,
    mayor: 'Sassy',
    type: 'solo'
  }, {
    name: 'Moriathun',
    tag: 'moriathun',
    x: 3158,
    y: 2068,
    mayor: 'Easy',
    type: 'solo'
  }, {
    name: 'Tevinter',
    tag: 'tevinter',
    x: 2841,
    y: 1754,
    mayor: 'Lokce',
    type: 'solo'
  }, {
    name: 'Shadows Rest',
    tag: 'shadows-rest',
    x: 866,
    y: 3772,
    mayor: 'Oriss',
    type: 'solo'
  }, {
    name: 'Ranger\'s Cottage',
    tag: 'rangers-cottage',
    x: 1278,
    y: 986,
    mayor: 'Lyandar',
    features: [''],
    type: 'solo'
  }, {
    name: 'Citadel of the Order of Khaos',
    tag: 'citadel-of-the-order-of-khaos',
    x: 2242,
    y: 1311,
    mayor: 'Korvalia',
    features: [''],
    type: 'small'
  }, {
    name: 'Port Phobic',
    tag: 'port-phobic',
    x: 449,
    y: 2373,
    mayor: 'Phobicice',
    features: [''],
    type: 'small'
  }, {
    name: 'Frostfire',
    tag: 'frostfire',
    x: 2838,
    y: 1666,
    mayor: 'Rhianna',
    features: [''],
    type: 'solo'
  }, {
    name: 'Port Dirt Poor',
    tag: 'port-dirt-poor',
    x: 365,
    y: 3386,
    mayor: 'Sorensen',
    features: ['harbour'],
    type: 'solo'
  }, {
    name: 'Karthwasten',
    tag: 'karthwasten',
    x: 787,
    y: 517,
    mayor: 'Karthannar',
    features: ['mailbox'],
    type: 'solo'
  }, {
    name: 'CzapleNowe',
    tag: 'czaplenowe',
    x: 735,
    y: 1251,
    mayor: 'Czemiel',
    features: [''],
    type: 'solo'
  }, {
    name: 'Valaria',
    tag: 'valaria',
    x: 1655,
    y: 856,
    mayor: 'Edson',
    features: ['recruiting'],
    type: 'small'
  }, {
    name: 'Little Norway',
    tag: 'little-norway',
    x: 468,
    y: 1169,
    mayor: 'Kaasa',
    features: [''],
    type: 'small'
  }, {
    name: 'Crystalzcastel',
    tag: 'crystalzcastel',
    x: 3051,
    y: 1843,
    mayor: 'Solee',
    features: ['recruiting'],
    type: 'solo'
  }, {
    name: 'Phrog On The Lake',
    tag: 'phrog-on-the-lake',
    x: 2009,
    y: 1376,
    mayor: 'Phrog',
    features: [''],
    type: 'solo'
  }, {
    name: 'Lost Pines',
    tag: 'lost-pines',
    x: 1006,
    y: 659,
    mayor: 'BrokSonic',
    features: [''],
    type: 'solo'
  }, {
    name: 'Providence',
    tag: 'providence',
    x: 2744,
    y: 758,
    mayor: 'Ridgeback',
    features: [''],
    type: 'solo'
  }, {
    name: 'Silverlake',
    tag: 'silverlake',
    x: 433,
    y: 2469,
    mayor: 'Opene',
    features: ['recruiting'],
    type: 'small'
  }, {
    name: 'Wolfmere',
    tag: 'wolfmere',
    x: 2555,
    y: 859,
    mayor: 'Nxtreme',
    features: [''],
    type: 'solo'
  }, {
    name: 'Whymsyshire',
    tag: 'whymsyshire',
    x: 1904,
    y: 1348,
    mayor: 'Pinkamena',
    features: ['recruiting'],
    type: 'solo'
  }, {
    name: 'Valhalla Station',
    tag: 'valhalla-station',
    x: 995,
    y: 2509,
    mayor: 'Darbie',
    features: [''],
    type: 'small'
  }, {
    name: 'Raven Rock',
    tag: 'raven-rock',
    x: 3347,
    y: 3825,
    mayor: 'ShadowWarrior',
    features: [''],
    type: 'small'
  }, {
    name: 'Bilgemoor',
    tag: 'bilgemoor',
    x: 1638,
    y: 912,
    mayor: 'Fumbleduck',
    features: ['harbour', 'inn', 'mailbox'],
    type: 'small'
  }, {
    name: 'Mencheres',
    tag: 'mencheres',
    x: 1312,
    y: 963,
    mayor: 'Stygianfury',
    features: [''],
    type: 'solo'
  }, {
    name: 'Pirate Bay\'s Faubourg',
    tag: 'pirate-bays-faubourg',
    x: 2535,
    y: 751,
    mayor: 'Myot',
    features: ['harbour'],
    type: 'solo'
  }, {
    name: 'Blackwatch Lake',
    tag: 'blackwatch-lake',
    x: 1814,
    y: 1004,
    mayor: 'Cadderly',
    features: [''],
    type: 'solo'
  }, {
    name: 'Smurfland',
    tag: 'smurfland',
    x: 1766,
    y: 932,
    mayor: 'Tigar',
    features: [''],
    type: 'small'
  }, {
    name: 'DeValois Shipyard',
    tag: 'devalois-shipyard',
    x: 1730,
    y: 422,
    mayor: 'DeValois',
    features: [''],
    type: 'solo'
  }, {
    name: 'Merwede',
    tag: 'merwede',
    x: 3622,
    y: 1400,
    mayor: 'Falco',
    features: ['harbour'],
    type: 'solo'
  }, {
    name: 'Wolfmere',
    tag: 'wolfmere',
    x: 2555,
    y: 859,
    mayor: 'Nxtreme',
    features: [''],
    type: 'solo'
  }, {
    name: 'Severo Vostochnaya Metalworks',
    tag: 'severo-vostochnaya-metalworks',
    x: 3252,
    y: 824,
    mayor: 'Dzhra',
    features: [''],
    type: 'small'
  }, {
    name: 'Severo Vostochnaya',
    tag: 'severo-vostochnaya',
    x: 3587,
    y: 354,
    mayor: 'Hannibal',
    features: [''],
    type: 'solo'
  }, {
    name: 'Ravenedge',
    tag: 'Ravenedge',
    x: 1751,
    y: 394,
    mayor: 'Jekmar',
    features: ['harbour'],
    type: 'solo'
  }, {
    name: 'Lakebridge',
    tag: 'lakebridge',
    x: 1682,
    y: 969,
    mayor: 'StraightSIX',
    features: ['recruting'],
    type: 'solo'
  }, {
    name: 'Steelwall',
    tag: 'steelwall',
    x: 1749,
    y: 493,
    mayor: 'Duncann',
    features: [''],
    type: 'solo'
  }, {
    name: 'Clay Coast Harbor',
    tag: 'clay-coast-harbor',
    x: 629,
    y: 2306,
    mayor: 'Madjester',
    features: ['harbour', 'mailbox'],
    type: 'solo'
  }, {
    name: 'Vale of the Silent',
    tag: 'vale-of-the-silent',
    x: 2795,
    y: 553,
    mayor: 'Axinex',
    features: [''],
    type: 'solo'
  }, {
    name: 'Mount Everlong',
    tag: 'mount-everlong',
    x: 2908,
    y: 1914,
    mayor: 'Azeuras',
    features: ['recruiting'],
    type: 'solo'
  }, {
    name: 'Springton',
    tag: 'springton',
    x: 3674,
    y: 1323,
    mayor: 'GamerGuyJoe',
    features: [''],
    type: 'solo'
  }, {
    name: 'Piotroszkowo',
    tag: 'piotroszkowo',
    x: 3856,
    y: 2018,
    mayor: 'Petronus',
    features: ['recruiting'],
    type: 'solo'
  }, {
    name: 'Pomorze',
    tag: 'pomorze',
    x: 3679,
    y: 1681,
    mayor: 'Czemiel',
    features: [''],
    type: 'solo'
  }, {
    name: 'Fort Tiffany',
    tag: 'fort-tiffany',
    x: 1230,
    y: 2986,
    mayor: 'Sprong',
    features: [''],
    type: 'solo'
  }, {
    name: 'Myrdal',
    tag: 'myrdal',
    x: 1736,
    y: 1068,
    mayor: 'Thormyrdal',
    features: [''],
    type: 'solo'
  }, {
    name: 'Falkreath Farm',
    tag: 'falkreath-farm',
    x: 1686,
    y: 784,
    mayor: 'Ekatski',
    features: [''],
    type: 'solo'
  }, {
    name: 'Kelsey\'s Retreat',
    tag: 'kelseys-retreat',
    x: 1055,
    y: 3795,
    mayor: 'Kelsey',
    features: [''],
    type: 'solo'
  }, {
    name: 'Majula',
    tag: 'majula',
    x: 724,
    y: 566,
    mayor: 'Bungatron',
    features: ['trader'],
    type: 'solo'
  }, {
    name: 'Lindenwood Manor',
    tag: 'lindenwood-manor',
    x: 2979,
    y: 3048,
    mayor: 'Turgvaali',
    features: [''],
    type: 'solo'
  }, {
    name: 'La Croixan Isle',
    tag: 'la-croixan-isle',
    x: 3687,
    y: 477,
    mayor: 'Poragon',
    features: ['harbour'],
    type: 'solo'
  }, {
    name: 'Emon',
    tag: 'emon',
    x: 1706,
    y: 855,
    mayor: 'Zamster',
    features: [''],
    type: 'small'
  }, {
    name: 'Maple Enclave',
    tag: 'maple-enclave',
    x: 2391,
    y: 2008,
    mayor: 'Yunga',
    features: [''],
    type: 'solo'
  }, {
    name: 'Pleasant Valley',
    tag: 'pleasant-valley',
    x: 960,
    y: 630,
    mayor: 'Raxxar',
    features: [''],
    type: 'solo'
  }, {
    name: 'Ravenhome',
    tag: 'Ravenhome',
    x: 381,
    y: 1902,
    mayor: 'Ravenloft',
    features: ['harbour'],
    type: 'small'
  }, {
    name: 'The Quagmire',
    tag: 'the-quagmire',
    x: 507,
    y: 674,
    mayor: 'Giggity',
    features: [''],
    type: 'solo'
  }, {
    name: 'Avallone',
    tag: 'Avallone',
    x: 1390,
    y: 1750,
    mayor: 'Lumi',
    features: [''],
    type: 'large'
  }, {
    name: 'Blacksheep Island',
    tag: 'blacksheep-island',
    x: 888,
    y: 942,
    mayor: 'Mizova & Krazow',
    features: ['harbour', 'mailbox', 'trader', 'market', 'recruiting'],
    type: 'small'
  }, {
    name: 'Bay of Blades',
    tag: 'bay-of-blades',
    x: 2911,
    y: 353,
    mayor: 'Backsnap',
    features: [''],
    type: 'solo'
  }, {
    name: 'Hunters Rest',
    tag: 'hunters-rest',
    x: 3515,
    y: 1699,
    mayor: 'Mallam',
    features: ['recruiting'],
    type: 'small'
  }, {
    name: 'Morrowind',
    tag: 'Morrowind',
    x: 1196,
    y: 403,
    mayor: 'BabbaGanush',
    features: ['harbour', 'mailbox', 'recruiting'],
    type: 'solo'
  }, {
    name: 'Gallup',
    tag: 'Gallup',
    x: 797,
    y: 546,
    mayor: 'Skyropio',
    features: ['mailbox'],
    type: 'small'
  }, {
    name: 'Waitsburg',
    tag: 'Waitsburg',
    x: 1209,
    y: 803,
    mayor: 'Cennydd',
    features: [''],
    type: 'solo'
  }, {
    name: 'Carpeshire',
    tag: 'Carpeshire',
    x: 990,
    y: 1647,
    mayor: 'Alex',
    features: ['trader', 'mailbox', 'harbour', 'inn', 'market', 'recruiting'],
    type: 'solo'
  }, {
    name: 'Pickering Lodge',
    tag: 'pickering-lodge',
    x: 2695,
    y: 943,
    mayor: 'Pickering',
    features: [''],
    type: 'solo'
  }, {
    name: 'Pirkadat',
    tag: 'Pirkadat',
    x: 2610,
    y: 907,
    mayor: 'Hajnal',
    features: [''],
    type: 'solo'
  }, {
    name: 'The Black Tower',
    tag: 'the-black-tower',
    x: 3742,
    y: 2763,
    mayor: 'TomServo',
    features: ['harbour', 'mailbox'],
    type: 'small'
  }, {
    name: 'Hopes corner',
    tag: 'hopes-corner',
    x: 2100,
    y: 3343,
    mayor: 'Malic',
    features: [''],
    type: 'solo'
  }, {
    name: 'Smallville',
    tag: 'Smallville',
    x: 1328,
    y: 567,
    mayor: 'Bija',
    features: [''],
    type: 'solo'
  }, {
    name: 'Blue Ribbon',
    tag: 'blue-ribbon',
    x: 1631,
    y: 760,
    mayor: 'Etna',
    features: [''],
    type: 'small'
  }, {
    name: 'Mountainhome Conglomerate',
    tag: 'mountainhome-conglomerate',
    x: 2280,
    y: 1493,
    mayor: 'Reptile',
    features: [''],
    type: 'small'
  }, {
    name: 'Nouvelle France',
    tag: 'nouvelle-france',
    x: 1915,
    y: 3434,
    mayor: 'Xloff',
    features: [''],
    type: 'small'
  }, {
    name: 'West Point Manor',
    tag: 'west-point-manor',
    x: 3611,
    y: 2996,
    mayor: 'Bennetto',
    features: ['recruiting'],
    type: 'small'
  }, {
    name: 'Ceonia',
    tag: 'Ceonia',
    x: 850,
    y: 2441,
    mayor: 'Synga',
    features: [''],
    type: 'solo'
  }, {
    name: 'Lakeview',
    tag: 'Lakeview',
    x: 1590,
    y: 3190,
    mayor: 'Bravyn',
    features: ['recruiting'],
    type: 'small'
  }, {
    name: 'On Golden Pond',
    tag: 'on-golden-pond',
    x: 1624,
    y: 800,
    mayor: 'Fumble',
    features: [''],
    type: 'solo'
  }, {
    name: 'Viking Ridge',
    tag: 'viking-ridge',
    x: 1467,
    y: 1266,
    mayor: 'Anders',
    features: [''],
    type: 'small'
  }, {
    name: 'Baldurs Gate',
    tag: 'baldurs-gate',
    x: 874,
    y: 1774,
    mayor: 'Ragnor',
    features: ['recruiting'],
    type: 'small'
  }, {
    name: 'Sankt Egidien Harbor',
    tag: 'sankt-egidien-harbor',
    x: 3277,
    y: 2980,
    mayor: 'iScraM',
    features: ['harbour'],
    type: 'small'
  }, {
    name: 'Shortys Retreat',
    tag: 'shortys-retreat',
    x: 1303,
    y: 684,
    mayor: 'Shorty',
    features: [''],
    type: 'small'
  }, {
    name: 'Szegvar',
    tag: 'Szegvar',
    x: 1126,
    y: 481,
    mayor: 'Venatus',
    features: [''],
    type: 'solo'
  }, {
    name: 'New Amsterdam',
    tag: 'new-amsterdam',
    x: 1603,
    y: 1548,
    mayor: 'Utopolis & Aringil',
    features: [''],
    type: 'small'
  }, {
    name: 'White Deer Inn',
    tag: 'white-deer-inn',
    x: 2573,
    y: 1356,
    mayor: 'Sethus',
    features: [''],
    type: 'solo'
  }, {
    name: 'The Grove',
    tag: 'the-grove',
    x: 1390,
    y: 752,
    mayor: 'Parsnips',
    features: ['recruiting'],
    type: 'solo'
  }, {
    name: 'Ranch',
    tag: 'Ranch',
    x: 1688,
    y: 1915,
    mayor: 'Mariosso',
    features: [''],
    type: 'solo'
  }, {
    name: 'Antalya',
    tag: 'Antalya',
    x: 419,
    y: 2013,
    mayor: 'Huseyin',
    features: [''],
    type: 'solo'
  }, {
    name: 'Chestnut Lake',
    tag: 'chestnut-lake',
    x: 1504,
    y: 1818,
    mayor: 'Murph',
    features: [''],
    type: 'solo'
  }, {
    name: 'Friedheim',
    tag: 'Friedheim',
    x: 1868,
    y: 3239,
    mayor: 'Friedbert',
    features: [''],
    type: 'solo'
  }, {
    name: 'Gachitopia',
    tag: 'Gachitopia',
    x: 2750,
    y: 840,
    mayor: 'Diztro',
    features: [''],
    type: 'small'
  }, {
    name: 'Tinkerbells resort',
    tag: 'tinkerbells-resort',
    x: 1770,
    y: 949,
    mayor: 'Tinkerbell',
    features: [''],
    type: 'solo'
  }, {
    name: 'Crimson Corporations',
    tag: 'crimson-corporations',
    x: 456,
    y: 1940,
    mayor: 'Sarkubocael',
    features: ['trader', 'harbour', 'inn'],
    type: 'solo'
  }, {
    name: 'Barna',
    tag: 'Barna',
    x: 742,
    y: 276,
    mayor: 'Golluns',
    features: [''],
    type: 'solo'
  }, {
    name: 'Bay of Sweds',
    tag: 'bay-of-sweds',
    x: 1825,
    y: 421,
    mayor: 'Juniormad',
    features: ['harbour', 'recruiting'],
    type: 'small'
  }, {
    name: 'Aurora Village',
    tag: 'aurora-village',
    x: 564,
    y: 1805,
    mayor: 'Kilian',
    features: ['harbour'],
    type: 'solo'
  }, {
    name: 'Everton',
    tag: 'Everton',
    x: 3624,
    y: 2948,
    mayor: 'Sinmage',
    features: [''],
    type: 'small'
  }, {
    name: 'Kangaroo isle',
    tag: 'Kangaroo-isle',
    x: 1432,
    y: 3823,
    mayor: 'Risko',
    features: [''],
    type: 'small'
  }, {
    name: 'Wesmere',
    tag: 'Wesmere',
    x: 550,
    y: 248,
    mayor: 'Kalenz',
    features: [''],
    type: 'solo'
  }, {
    name: 'Shadowyn',
    tag: 'Shadowyn',
    x: 1352,
    y: 930,
    mayor: 'Frisk',
    features: [''],
    type: 'solo'
  }, {
    name: 'Pendragon Wallow',
    tag: 'pendragon-wallow',
    x: 3705,
    y: 870,
    mayor: 'Badpapasmurf',
    features: [''],
    type: 'solo'
  }, {
    name: 'New Fulwic',
    tag: 'new-fulwic',
    x: 424,
    y: 2011,
    mayor: 'Hoxard',
    features: [''],
    type: 'solo'
  }, {
    name: 'Corvid Isle',
    tag: 'corvid-isle',
    x: 3259,
    y: 1716,
    mayor: 'Komodo',
    features: [''],
    type: 'solo'
  }, {
    name: 'Gilead',
    tag: 'Gilead',
    x: 3042,
    y: 301,
    mayor: 'Will Thalagat',
    features: [''],
    type: 'solo'
  }, {
    name: 'Maritimus',
    tag: 'Maritimus',
    x: 492,
    y: 293,
    mayor: 'Hotte',
    features: ['recruiting', 'harbour', 'merchant'],
    type: 'solo'
  }, {
    name: 'Flintwood',
    tag: 'Flintwood',
    x: 348,
    y: 1512,
    mayor: 'Flint',
    features: [''],
    type: 'solo'
  }, {
    name: 'Port Luna',
    tag: 'port-luna',
    x: 780,
    y: 1118,
    mayor: 'Seelery',
    features: [''],
    type: 'solo'
  }, {
    name: 'Chestnut Grove',
    tag: 'chestnut-grove',
    x: 1538,
    y: 3786,
    mayor: 'Clare',
    features: [''],
    type: 'solo'
  }, {
    name: 'Waterdeep',
    tag: 'Waterdeep',
    x: 582,
    y: 514,
    mayor: 'Hammie',
    features: [''],
    type: 'small'
  }, {
    name: 'Mor Dragen',
    tag: 'Mor Dragen',
    x: 1803,
    y: 2744,
    mayor: 'Stormhander',
    features: ['recruiting'],
    type: 'small'
  }, {
    name: 'Hope',
    tag: 'Hope',
    x: 689,
    y: 643,
    mayor: 'Sabastion',
    features: [''],
    type: 'solo'
  }, {
    name: 'Citadel dOraguille',
    tag: 'citadel-doraguille',
    x: 1246,
    y: 1844,
    mayor: 'Kain',
    features: [''],
    type: 'solo'
  }, {
    name: 'Eletha',
    tag: 'Eletha',
    x: 812,
    y: 1471,
    mayor: 'Wolfey',
    features: ['recruiting'],
    type: 'solo'
  }, {
    name: 'Summertyne Park',
    tag: 'summertyne-park',
    x: 2670,
    y: 941,
    mayor: 'Summertyne',
    features: [''],
    type: 'solo'
  }, {
    name: 'Fairbanks',
    tag: 'Fairbanks',
    x: 668,
    y: 257,
    mayor: 'Wadena',
    features: [''],
    type: 'solo'
  }, {
    name: 'Green Hill Gardens',
    tag: 'green-hill-gardens',
    x: 1209,
    y: 720,
    mayor: 'Devily',
    features: ['trader', 'mailbox'],
    type: 'large'
  }, {
    name: 'Cedar Point',
    tag: 'Cedar-point',
    x: 3517,
    y: 1723,
    mayor: 'Collada',
    features: ['mailbox'],
    type: 'solo'
  }, {
    name: 'Zheddmar',
    tag: 'Zheddmar',
    x: 1260,
    y: 1902,
    mayor: 'Wreck',
    features: [''],
    type: 'solo'
  }, {
    name: 'Strangeland',
    tag: 'Strangeland',
    x: 1245,
    y: 1929,
    mayor: 'Ivanthestrange',
    features: [''],
    type: 'solo'
  }, {
    name: 'Oink Oink',
    tag: 'oink-oink',
    x: 2181,
    y: 995,
    mayor: 'Ginger',
    features: [''],
    type: 'small'
  }, {
    name: 'Skara Brae',
    tag: 'skara-brae',
    x: 830,
    y: 1604,
    mayor: 'Valdora',
    features: ['inn', 'mailbox'],
    type: 'solo'
  }, {
    name: 'Miner\'s Respite',
    tag: 'miners-respite',
    x: 3254,
    y: 2270,
    mayor: 'Kyllian',
    features: ['recruiting'],
    type: 'solo'
  }, {
    name: 'Fishing post',
    tag: 'fishing-post',
    x: 386,
    y: 369,
    mayor: 'Gladiatora',
    features: ['recruiting'],
    type: 'solo'
  }, {
    name: 'Gravelton',
    tag: 'Gravelton',
    x: 504,
    y: 442,
    mayor: 'Splarmus',
    features: [''],
    type: 'solo'
  }, {
    name: 'Honor Hold',
    tag: 'honor-hold',
    x: 2489,
    y: 1133,
    mayor: 'Tekada',
    features: [''],
    type: 'small'
  }, {
    name: 'The Dark Ones',
    tag: 'the-dark-ones',
    x: 3422,
    y: 304,
    mayor: 'Hordefanatic',
    features: [''],
    type: 'small'
  }, {
    name: 'Port Well',
    tag: 'port-well',
    x: 810,
    y: 698,
    mayor: 'Gollun',
    features: ['harbour'],
    type: 'small'
  }, {
    name: 'Sybaris',
    tag: 'Sybaris',
    x: 2884,
    y: 3130,
    mayor: 'Moumix',
    features: [''],
    type: 'small'
  }, {
    name: 'Sybaris Stables',
    tag: 'Sybaris-Stables',
    x: 2813,
    y: 3102,
    mayor: 'Stargrace',
    features: [''],
    type: 'small'
  },{
    name: 'Andyland',
    tag: 'Andyland',
    x: 1244,
    y: 1958,
    mayor: 'Bluebunny',
    features: [''],
    type: 'solo'
  },{
    name: 'Andyland',
    tag: 'Andyland',
    x: 1244,
    y: 1958,
    mayor: 'Bluebunny',
    features: [''],
    type: 'solo'
  }, {
    name: 'Claustrophobia Wisakurum',
    tag: 'claustrophobia-wisakurum',
    x: 1247,
    y: 957,
    mayor: 'Wisaku',
    features: [''],
    type: 'solo'
  }, {
    name: 'Drandor',
    tag: 'Drandor',
    x: 2398,
    y: 3661,
    mayor: 'Drackoroth',
    features: ['harbour', 'mailbox', 'recruiting'],
    type: 'small'
  }, {
    name: 'Laeglond',
    tag: 'Laeglond',
    x: 3230,
    y: 1426,
    mayor: 'Alageth',
    features: [''],
    type: 'solo'
  }, {
    name: 'Safeholm',
    tag: 'Safeholm',
    x: 3788,
    y: 1806,
    mayor: 'McWidowmaker',
    features: [''],
    type: 'small'
  }, {
    name: 'Minas Auratious',
    tag: 'minas-auratious',
    x: 377,
    y: 1404,
    mayor: 'Aratone',
    features: ['harbour', 'recruiting'],
    type: 'small'
  }, {
    name: 'Finger Island',
    tag: 'Finger Island',
    x: 3026,
    y: 3594,
    mayor: 'Bonze',
    features: ['harbour', 'market', 'mailbox', 'recruiting'],
    type: 'solo'
  }, {
    name: 'Nexus Pirates',
    tag: 'nexus-pirates',
    x: 3596,
    y: 3537,
    mayor: 'Dariusstrongarm',
    features: [''],
    type: 'small'
  }, {
    name: 'Sin City',
    tag: 'Sin City',
    x: 1751,
    y: 735,
    mayor: 'Marcallus',
    features: [''],
    type: 'solo'
  }, {
    name: 'Serendipity',
    tag: 'Serendipity',
    x: 2758,
    y: 3393,
    mayor: 'Neofit',
    features: [''],
    type: 'solo'
  }, {
    name: 'Helheim',
    tag: 'Helheim',
    x: 2027,
    y: 1039,
    mayor: 'Maxella',
    features: [''],
    type: 'small'
  }, {
    name: 'Jellystone Park',
    tag: 'jellystone-park',
    x: 1729,
    y: 1000,
    mayor: 'Grapape',
    features: [''],
    type: 'solo'
  }, {
    name: 'Asgard',
    tag: 'Asgard',
    x: 586,
    y: 638,
    mayor: 'Jucken',
    features: [''],
    type: 'solo'
  }, {
    name: 'Shadowkeep',
    tag: 'Shadowkeep',
    x: 646,
    y: 760,
    mayor: 'Noskull',
    features: ['trader', 'merchant', 'harbour', 'market', 'mailbox', 'inn'],
    type: 'small'
  }, {
    name: 'Grand Lakes',
    tag: 'grand-lakes',
    x: 383,
    y: 565,
    mayor: 'Tipsy',
    features: ['trader', 'market'],
    type: 'small'
  }, {
    name: 'Halls of Magranon',
    tag: 'halls-of-magranon',
    x: 2381,
    y: 2355,
    mayor: 'Samsonn',
    features: ['trader', 'merchant', 'inn'],
    type: 'large'
  }, {
    name: 'Direthorn',
    tag: 'Direthorn',
    x: 1826,
    y: 973,
    mayor: 'Lyden',
    features: ['trader', 'market', 'recruiting', 'mailbox'],
    type: 'small'
  }, {
    name: 'Darkenstone',
    tag: 'Darkenstone',
    x: 2783,
    y: 1433,
    mayor: 'Maxx',
    features: [''],
    type: 'small'
  }, {
    name: 'Birchvale',
    tag: 'Birchvale',
    x: 2131,
    y: 739,
    mayor: 'Kinslock',
    features: [''],
    type: 'solo'
  }, {
    name: 'Danelaw',
    tag: 'Danelaw',
    x: 806,
    y: 270,
    mayor: 'Halfdan',
    features: ['harbour', 'viking land'],
    type: 'solo'
  }, {
    name: 'Tumunzahar',
    tag: 'Tumunzahar',
    x: 1265,
    y: 1125,
    mayor: 'Liability',
    features: [''],
    type: 'small'
  }, {
    name: 'Crystal Noctis',
    tag: 'crystal-noctis',
    x: 3399,
    y: 1390,
    mayor: 'Nightcross',
    features: [''],
    type: 'solo'
  }, {
    name: 'Malcolm\'s Durge',
    tag: 'malcolm\'s-durge',
    x: 3082,
    y: 1357,
    mayor: 'Malcolm',
    features: ['harbour'],
    type: 'solo'
  }, {
    name: 'Haerlem Woods',
    tag: 'haerlem-woods',
    x: 914,
    y: 522,
    mayor: 'Yoyo',
    features: [''],
    type: 'solo'
  }, {
    name: 'Lake Market',
    tag: 'lake-market',
    x: 1410,
    y: 1760,
    mayor: 'Lady Lake',
    features: ['trader', 'market', 'inn', 'mailbox'],
    type: 'small'
  }, {
    name: 'Algade',
    tag: 'Algade',
    x: 387,
    y: 1559,
    mayor: 'Tsustyle',
    features: [''],
    type: 'solo'
  }, {
    name: 'Halderat',
    tag: 'Halderat',
    x: 1571,
    y: 1788,
    mayor: 'Coady',
    features: ['harbour'],
    type: 'solo'
  }, {
    name: 'Darujhistan',
    tag: 'Darujhistan',
    x: 1151,
    y: 3830,
    mayor: 'Whiskyjack',
    features: [''],
    type: 'solo'
  }, {
    name: 'Hedon',
    tag: 'Hedon',
    x: 713,
    y: 2782,
    mayor: 'OLloyd',
    features: [''],
    type: 'solo'
  }, {
    name: 'Antalya Beach',
    tag: 'antalya-beach',
    x: 944,
    y: 338,
    mayor: 'mehmet',
    features: ['trader', 'merchant', 'harbour', 'market', 'mailbox', 'recruiting'],
    type: 'large'
  }, {
    name: 'Puerto Abeto',
    tag: 'puerto-abeto',
    x: 3241,
    y: 1837,
    mayor: 'Esroh',
    features: ['mailbox'],
    type: 'solo'
  }, {
    name: 'Sanctum',
    tag: 'Sanctum',
    x: 1457,
    y: 729,
    mayor: 'Cilerium',
    features: [''],
    type: 'solo'
  }, {
    name: 'Black Templars',
    tag: 'black-templars',
    x: 1524,
    y: 444,
    mayor: 'Zeafaw',
    features: ['recruiting'],
    type: 'solo'
  }, {
    name: 'Home',
    tag: 'Home',
    x: 1496,
    y: 1792,
    mayor: 'Svartaifal',
    features: [''],
    type: 'solo'
  }, {
    name: 'The Marish',
    tag: 'the-marish',
    x: 1246,
    y: 425,
    mayor: 'Burnet',
    features: [''],
    type: 'solo'
  }, {
    name: 'Havoccity',
    tag: 'Havoccity',
    x: 1490,
    y: 1843,
    mayor: 'Havoc',
    features: [''],
    type: 'solo'
  }, {
    name: 'Dragonville',
    tag: 'Dragonville',
    x: 1543,
    y: 1868,
    mayor: 'dragonx',
    features: [''],
    type: 'solo'
  }, {
    name: 'Sehrimnir',
    tag: 'Sehrimnir',
    x: 586,
    y: 665,
    mayor: 'Fenrisulven',
    features: [''],
    type: 'solo'
  }, {
    name: 'Waters Edge',
    tag: 'waters-edge',
    x: 1459,
    y: 3783,
    mayor: 'Paraclete',
    features: [''],
    type: 'solo'
  }, {
    name: 'Crimson Point',
    tag: 'crimson-point',
    x: 2024,
    y: 1236,
    mayor: 'JacobCrimson',
    features: ['harbour', 'inn', 'recruiting'],
    type: 'small'
  }, {
    name: 'Public docks north',
    tag: 'public-docks-north',
    x: 1164,
    y: 385,
    mayor: 'mjmalt',
    features: ['harbour', 'mailbox'],
    type: 'small'
  }, {
    name: 'Lokin',
    tag: 'Lokin',
    x: 2095,
    y: 1540,
    mayor: 'Keran',
    features: [''],
    type: 'solo'
  }, {
    name: 'Coyote Bluff',
    tag: 'coyote-bluff',
    x: 1008,
    y: 1886,
    mayor: 'Herawyn',
    features: [''],
    type: 'solo'
  }, {
    name: 'Effulgent Grove',
    tag: 'effulgent-grove',
    x: 3227,
    y: 448,
    mayor: 'Halcyon',
    features: [''],
    type: 'solo'
  }
];
