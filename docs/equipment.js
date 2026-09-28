(() => {
'use strict';
const C=[];
const add=(o)=>C.push(o);
const tr=(id,name,segment,hp,price,fuel,years,newAvailable=false)=>add({id,name,type:'tractor',segment,hp,price,fuelLph:fuel,years,newAvailable});
const cb=(id,name,segment,hp,price,fuel,years,newAvailable=false)=>add({id,name,type:'combine',segment,hp,price,fuelLph:fuel,years,newAvailable});
const imp=(id,name,segment,category,requiredHp,width,speed,price,years,newAvailable=false,eff=.78,crops=null)=>add({id,name,type:'implement',segment,category,requiredHp,width,speed,price,years,newAvailable,eff,crops});
const hd=(id,name,segment,category,width,speed,price,years,newAvailable=false,crops=null)=>add({id,name,type:'header',segment,category,width,speed,price,years,newAvailable,eff:.74,crops});
const truck=(id,name,segment,capacityT,bodyM3,speed,price,fuel,years,newAvailable=false)=>add({id,name,type:'truck',segment,capacityT,bodyM3,roadSpeed:speed,price,fuelLph:fuel,years,newAvailable});
const trailer=(id,name,segment,capacityT,bodyM3,requiredHp,speed,price,years,newAvailable=false)=>add({id,name,type:'trailer',segment,capacityT,bodyM3,requiredHp,roadSpeed:speed,price,years,newAvailable});
const cart=(id,name,segment,capacityT,bodyM3,requiredHp,speed,unloadTpm,price,years,newAvailable=false)=>add({id,name,type:'graincart',segment,capacityT,bodyM3,requiredHp,roadSpeed:speed,unloadTpm,price,years,newAvailable});
// Тракторы — 40 реальных моделей, характеристики и цены адаптированы для игрового баланса.
[
['mtz80','МТЗ-80','domestic_used',80,700000,13,[1974,1995]],['mtz82','МТЗ-82','domestic_used',81,850000,14,[1974,2000]],['yumz6','ЮМЗ-6','domestic_used',60,430000,11,[1970,2001]],['t40','ЛТЗ Т-40','domestic_used',50,380000,9,[1961,1995]],['t150k','ХТЗ Т-150К','domestic_used',165,1250000,28,[1971,2010]],['t150track','ХТЗ Т-150 гусеничный','domestic_used',150,1150000,27,[1971,2007]],['dt75','ДТ-75','domestic_used',90,620000,15,[1963,2009]],['k700','Кировец К-700','domestic_used',220,1650000,32.5,[1962,1975]],['k701','Кировец К-701','domestic_used',300,2300000,48,[1975,2002]],['k744r1','Кировец К-744Р1','domestic_used',300,4200000,45,[2000,2014]],['mtz1221old','Беларус 1221 (ранний)','domestic_used',130,1900000,24,[1994,2010]],['htz17221','ХТЗ-17221','domestic_used',175,2100000,30,[1997,2015]],
['bel821','Беларус 82.1','domestic_new',81,2661000,12,[2022,2026],true],['bel9523','Беларус 952.3','domestic_new',95,3250000,15,[2022,2026],true],['bel10253','Беларус 1025.3','domestic_new',105,4061000,17,[2022,2026],true],['bel12213','Беларус 1221.3','domestic_new',136,5168000,22,[2022,2026],true],['bel1523','Беларус 1523','domestic_new',155,6167000,25,[2022,2026],true],['bel20223','Беларус 2022.3','domestic_new',212,7495000,34,[2022,2026],true],['bel3022','Беларус 3022','domestic_new',303,10300000,45,[2022,2026],true],['bel3522','Беларус 3522','domestic_new',355,21100000,51,[2022,2026],true],['k5250','Кировец К-5 250','domestic_new',250,9740000,39,[2023,2026],true],['k5300','Кировец К-5 300','domestic_new',300,14800000,45,[2023,2026],true],['k7m350','Кировец К-7М 350','domestic_new',350,13750000,50,[2023,2026],true],['k7m420','Кировец К-7М 420','domestic_new',420,14800000,58,[2023,2026],true],['agromash_ruslan','АГРОМАШ Руслан','domestic_new',340,15053000,46,[2024,2026],true],
['jd6920','John Deere 6920','foreign_used',150,4200000,20,[2001,2007]],['jd6930','John Deere 6930','foreign_used',155,5200000,21,[2006,2012]],['jd7430','John Deere 7430','foreign_used',180,6800000,25,[2007,2011]],['jd7830','John Deere 7830','foreign_used',205,7600000,29,[2007,2011]],['jd7930','John Deere 7930','foreign_used',220,8300000,31,[2007,2011]],['jd8230','John Deere 8230','foreign_used',245,9000000,34,[2006,2009]],['jd8330','John Deere 8330','foreign_used',280,10400000,39,[2006,2009]],['jd8430','John Deere 8430','foreign_used',305,11800000,43,[2006,2009]],['casepuma210','Case IH Puma 210','foreign_used',210,8200000,29,[2008,2016]],['casemagnum340','Case IH Magnum 340','foreign_used',340,14200000,46,[2011,2018]],['nht7060','New Holland T7060','foreign_used',213,7900000,30,[2007,2011]],['nht8_390','New Holland T8.390','foreign_used',340,14800000,47,[2012,2018]],['claasaxion850','CLAAS AXION 850','foreign_used',250,11200000,35,[2008,2018]],
['jd6r215','John Deere 6R 215','foreign_new',259,24500000,31,[2023,2026],true],['jd7r330','John Deere 7R 330','foreign_new',373,36500000,45,[2023,2026],true],['jd8r410','John Deere 8R 410','foreign_new',443,49500000,56,[2023,2026],true],['claasaxion960','CLAAS AXION 960','foreign_new',445,47000000,55,[2023,2026],true],['casemagnum400','Case IH Magnum 400','foreign_new',435,48500000,55,[2023,2026],true]
].forEach(x=>tr(...x));


// 0.11.9.67 — малый тракторный класс 50–80 л.с.
// Паспортная мощность основана на линейках производителей; цены/расход адаптированы под экономику игры.
[
 ['bel622','Беларус 622','domestic_new',62,2350000,9.5,[2022,2026],true],
 ['yto_x704_new','YTO X704','foreign_new',70,3150000,10.5,[2022,2026],true],
 ['lovol_tb604','LOVOL TB604','foreign_new',60,2950000,9.5,[2022,2026],true],
 ['jd5075e','John Deere 5075E','foreign_new',75,6850000,10.5,[2022,2026],true],
 ['case_farmall75a','Case IH Farmall 75A','foreign_new',74,6100000,10.5,[2022,2026],true],
 ['nh_t475s','New Holland T4.75S','foreign_new',75,5950000,10.5,[2022,2026],true],
 ['claas_elios210','CLAAS ELIOS 210','foreign_new',75,7200000,10.5,[2022,2026],true],
 ['fendt_207v','Fendt 207 Vario','foreign_new',72,9800000,10.0,[2022,2026],true],
 ['mf4707','Massey Ferguson 4707','foreign_new',75,6200000,10.5,[2022,2026],true],
 ['valtra_a75','Valtra A75','foreign_new',75,6550000,10.5,[2022,2026],true],
 ['df_5080d','DEUTZ-FAHR 5080D Keyline','foreign_new',76,6400000,10.5,[2022,2026],true],
 ['steyr_4075','STEYR 4075 Kompakt','foreign_new',75,6700000,10.5,[2022,2026],true],
 ['mcc_x4080','McCormick X4.080','foreign_new',75,6100000,10.5,[2022,2026],true],
 ['landini_4080','Landini 4-080','foreign_new',75,5950000,10.5,[2022,2026],true]
].forEach(x=>tr(...x));

// 0.11.9.67 — heavy-endgame tractor ladder. hp uses published maximum engine power,
// consistent with the existing Steiger 715 representation.
[
 ['jd_9rx640_new','John Deere 9RX 640','foreign_new',691,64800000,82,[2023,2026],true],
 ['nh_t9700_new','New Holland T9.700','foreign_new',699,61200000,84,[2024,2026],true],
 ['fendt_1167mt_new','Fendt 1167 Vario MT','foreign_new',680,66500000,80,[2024,2026],true]
].forEach(x=>tr(...x));


// 0.11.9.68 — Catalog Depth 2.0: current mid-power tractor families.
// Power values use current manufacturer maximum/boost output where the family publishes it;
// prices and fuel rates are game-balanced against the existing 0.11.9.67 ladder.
[
 {id:'jd_6m140_new',name:'John Deere 6M 140',type:'tractor',segment:'foreign_new',hp:154,price:16800000,fuelLph:23,years:[2025,2026],newAvailable:true,series:'6M',generation:'2026'},
 {id:'jd_6m185_new',name:'John Deere 6M 185',type:'tractor',segment:'foreign_new',hp:204,price:21800000,fuelLph:28,years:[2025,2026],newAvailable:true,series:'6M',generation:'2026'},
 {id:'case_vestrum130_new',name:'Case IH Vestrum 130',type:'tractor',segment:'foreign_new',hp:140,price:15800000,fuelLph:21,years:[2024,2026],newAvailable:true,series:'Vestrum',generation:'current'},
 {id:'case_puma200_new',name:'Case IH Puma 200',type:'tractor',segment:'foreign_new',hp:245,price:25200000,fuelLph:32,years:[2024,2026],newAvailable:true,series:'Puma',generation:'current'},
 {id:'nh_t5140_new',name:'New Holland T5.140 Dynamic Command',type:'tractor',segment:'foreign_new',hp:140,price:14900000,fuelLph:21,years:[2024,2026],newAvailable:true,series:'T5',generation:'current'},
 {id:'nh_t6180_new',name:'New Holland T6.180 Dynamic Command',type:'tractor',segment:'foreign_new',hp:158,price:18400000,fuelLph:24,years:[2024,2026],newAvailable:true,series:'T6',generation:'current'},
 {id:'nh_t7210_swb_new',name:'New Holland T7.210 SWB',type:'tractor',segment:'foreign_new',hp:211,price:22900000,fuelLph:29,years:[2025,2026],newAvailable:true,series:'T7 SWB',generation:'2025'},
 {id:'fendt_314_gen5_new',name:'Fendt 314 Vario Gen5',type:'tractor',segment:'foreign_new',hp:152,price:19800000,fuelLph:21,years:[2025,2026],newAvailable:true,series:'300 Vario',generation:'Gen5'},
 {id:'fendt_620_new',name:'Fendt 620 Vario',type:'tractor',segment:'foreign_new',hp:224,price:28600000,fuelLph:29,years:[2024,2026],newAvailable:true,series:'600 Vario',generation:'current'},
 {id:'mf_5s145_new',name:'Massey Ferguson 5S.145',type:'tractor',segment:'foreign_new',hp:145,price:15200000,fuelLph:21,years:[2024,2026],newAvailable:true,series:'5S',generation:'current'},
 {id:'mf_7s210_new',name:'Massey Ferguson 7S.210',type:'tractor',segment:'foreign_new',hp:210,price:23600000,fuelLph:29,years:[2024,2026],newAvailable:true,series:'7S',generation:'current'},
 {id:'df_5125_new',name:'DEUTZ-FAHR 5125',type:'tractor',segment:'foreign_new',hp:126,price:12600000,fuelLph:19,years:[2025,2026],newAvailable:true,series:'Series 5 Keyline',generation:'2026'},
 {id:'df_6180ttv_new',name:'DEUTZ-FAHR 6180 TTV',type:'tractor',segment:'foreign_new',hp:180,price:20500000,fuelLph:26,years:[2024,2026],newAvailable:true,series:'Series 6',generation:'current'},
 {id:'valtra_g135_new',name:'Valtra G135',type:'tractor',segment:'foreign_new',hp:145,price:15900000,fuelLph:21,years:[2024,2026],newAvailable:true,series:'G',generation:'5th'},
 {id:'valtra_n175_new',name:'Valtra N175',type:'tractor',segment:'foreign_new',hp:201,price:22400000,fuelLph:28,years:[2024,2026],newAvailable:true,series:'N',generation:'5th'},
 {id:'claas_arion470_new',name:'CLAAS ARION 470',type:'tractor',segment:'foreign_new',hp:155,price:17400000,fuelLph:23,years:[2024,2026],newAvailable:true,series:'ARION 400',generation:'current'},
 {id:'claas_arion570_new',name:'CLAAS ARION 570 CMATIC',type:'tractor',segment:'foreign_new',hp:180,price:21800000,fuelLph:26,years:[2025,2026],newAvailable:true,series:'ARION 500',generation:'2025'}
].forEach(add);


// 0.11.9.74 — close the remaining 80–119 hp new-tractor gap with one representative current model per major brand.
// Published engine power is preserved; prices/fuel are balanced against the existing utility/mid-range ladder.
[
 {id:'jd_5100m_new',name:'John Deere 5100M',type:'tractor',segment:'foreign_new',hp:101,price:10800000,fuelLph:15.5,years:[2024,2026],newAvailable:true,series:'5M',generation:'current'},
 {id:'case_farmall110a_new',name:'Case IH Farmall 110A',type:'tractor',segment:'foreign_new',hp:110,price:10400000,fuelLph:16.0,years:[2024,2026],newAvailable:true,series:'Farmall Utility A',generation:'current'},
 {id:'nh_t5110s_new',name:'New Holland T5.110S',type:'tractor',segment:'foreign_new',hp:110,price:10100000,fuelLph:16.0,years:[2024,2026],newAvailable:true,series:'T5 S',generation:'current'},
 {id:'fendt_310_gen5_new',name:'Fendt 310 Vario Gen5',type:'tractor',segment:'foreign_new',hp:113,price:15400000,fuelLph:15.0,years:[2025,2026],newAvailable:true,series:'300 Vario',generation:'Gen5'},
 {id:'mf_5m105_new',name:'Massey Ferguson 5M.105',type:'tractor',segment:'foreign_new',hp:105,price:10600000,fuelLph:15.5,years:[2025,2026],newAvailable:true,series:'5M',generation:'current'},
 {id:'df_5100d_keyline_new',name:'DEUTZ-FAHR 5100D Keyline',type:'tractor',segment:'foreign_new',hp:102,price:9900000,fuelLph:15.0,years:[2024,2026],newAvailable:true,series:'5D Keyline',generation:'current'},
 {id:'valtra_g105_new',name:'Valtra G105',type:'tractor',segment:'foreign_new',hp:110,price:11900000,fuelLph:16.0,years:[2024,2026],newAvailable:true,series:'G',generation:'5th'},
 {id:'claas_arion420_new',name:'CLAAS ARION 420',type:'tractor',segment:'foreign_new',hp:100,price:11800000,fuelLph:15.5,years:[2024,2026],newAvailable:true,series:'ARION 400',generation:'current'}
].forEach(add);

// 0.11.9.74 — additional small/mid-power alternatives. These add choice without derating large implements.
[
 {id:'nru05_used',name:'НРУ-0,5 (Б/У)',type:'implement',segment:'domestic_used',category:'fertilizer',requiredHp:40,width:10.0,speed:10,price:110000,years:[1980,2005],newAvailable:false,eff:.69},
 {id:'supn6_used_legacy',name:'СУПН-6 (Б/У)',type:'implement',segment:'domestic_used',category:'sow_row',requiredHp:80,width:4.2,speed:8,price:410000,years:[1985,2015],newAvailable:false,eff:.70,crops:['sunflower','corn','soy']}
].forEach(add);

// 0.11.9.74 — domestic used grain-cart bridge. Same family role as new PBN carts, but sized/priced for mid-progression farms.
add({id:'pbn16_early_used',name:'ПБН-16 (ранний, Б/У)',type:'graincart',segment:'domestic_used',capacityT:16,bodyM3:21,requiredHp:140,roadSpeed:25,unloadTpm:3.0,price:1850000,years:[2010,2019],newAvailable:false,series:'ПБН-16',generation:'early'});

// 0.11.9.74 — current premium alternatives for the 50–79 hp ecosystem.
// Minimum power is manufacturer-published where available (Korund/FOX); the plough/planter requirement is game-balanced conservatively from size/weight.
[
 {id:'kverneland_150b3_new',name:'Kverneland 150 B 3-furrow',type:'implement',segment:'foreign_new',category:'plow',requiredHp:75,width:1.35,speed:7,price:2450000,years:[2024,2026],newAvailable:true,eff:.86},
 {id:'lemken_korund8300_new',name:'LEMKEN Korund 8/300',type:'implement',segment:'foreign_new',category:'cultivate',requiredHp:65,width:3.0,speed:12,price:3650000,years:[2024,2026],newAvailable:true,eff:.88},
 {id:'pottinger_fox3000d_new',name:'PÖTTINGER FOX 3000 D',type:'implement',segment:'foreign_new',category:'disk',requiredHp:75,width:3.0,speed:12,price:3950000,years:[2024,2026],newAvailable:true,eff:.88},
 {id:'gaspardo_mtr4_new',name:'Gaspardo MTR 4R',type:'implement',segment:'foreign_new',category:'sow_row',requiredHp:70,width:3.0,speed:10,price:4650000,years:[2024,2026],newAvailable:true,eff:.89,crops:['sunflower','corn','soy']}
].forEach(add);

// 0.11.9.68 — small/mid-power implement choice depth. These are alternatives, not derated large tools.
[

 {id:'pln335m_new',name:'ПЛН-3-35М',type:'implement',segment:'domestic_new',category:'plow',requiredHp:80,width:1.05,speed:7,price:330000,years:[2022,2026],newAvailable:true,eff:.79},
 {id:'kps4m_new',name:'КПС-4М',type:'implement',segment:'domestic_new',category:'cultivate',requiredHp:80,width:4.0,speed:9,price:460000,years:[2022,2026],newAvailable:true,eff:.80},
 {id:'sz36m_new',name:'СЗ-3,6М',type:'implement',segment:'domestic_new',category:'sow_grain',requiredHp:80,width:3.6,speed:9,price:1250000,years:[2022,2026],newAvailable:true,eff:.80,seedHopperL:720,fertilizerHopperL:400},
 {id:'supn4m_new',name:'СУПН-4М',type:'implement',segment:'domestic_new',category:'sow_row',requiredHp:55,width:2.8,speed:8,price:690000,years:[2022,2026],newAvailable:true,eff:.78,crops:['sunflower','corn','soy']},
 {id:'pln435m_new',name:'ПЛН-4-35М',type:'implement',segment:'domestic_new',category:'plow',requiredHp:100,width:1.4,speed:7,price:460000,years:[2022,2026],newAvailable:true,eff:.80},
 {id:'kps6m_new',name:'КПС-6М',type:'implement',segment:'domestic_new',category:'cultivate',requiredHp:110,width:6.0,speed:10,price:720000,years:[2022,2026],newAvailable:true,eff:.81}
].forEach(add);

// 0.11.9.68 — current combine generations that add distinct progression roles.
[
 {id:'claas_evion450_new',name:'CLAAS EVION 450',type:'combine',segment:'foreign_new',hp:258,price:31800000,fuelLph:41,years:[2023,2026],newAvailable:true,series:'EVION',generation:'current'},
 {id:'rsm_t500_new',name:'Ростсельмаш T500',type:'combine',segment:'domestic_new',hp:360,price:27800000,fuelLph:52,years:[2024,2026],newAvailable:true,series:'T500',generation:'current'},
 {id:'rsm_vector450track_new',name:'Ростсельмаш VECTOR 450 Track',type:'combine',segment:'domestic_new',hp:255,price:19800000,fuelLph:39,years:[2024,2026],newAvailable:true,series:'VECTOR 450',generation:'Track'},
 {id:'jd_x9_1100_new',name:'John Deere X9 1100',type:'combine',segment:'foreign_new',hp:690,price:74800000,fuelLph:78,years:[2024,2026],newAvailable:true,series:'X9',generation:'current'}
].forEach(add);

// 0.11.9.68 — used-market grain-cart bridge for farms that are not ready for a new cart.
[
 {id:'kinze840_used',name:'Kinze 840',type:'graincart',segment:'foreign_used',capacityT:22.5,bodyM3:29.6,requiredHp:150,roadSpeed:25,unloadTpm:6.5,price:2400000,years:[1995,2004],newAvailable:false,series:'840',generation:'legacy'},
 {id:'kinze640_used',name:'Kinze 640',type:'graincart',segment:'foreign_used',capacityT:17.0,bodyM3:22.5,requiredHp:120,roadSpeed:25,unloadTpm:5.5,price:1750000,years:[1990,2002],newAvailable:false,series:'640',generation:'legacy'}
].forEach(add);

// Series/generation metadata for representative existing current families. Stable IDs remain unchanged.
const SERIES_META_011974={
 jd5075e:['5E','current'],jd6r215:['6R','current'],jd7r330:['7R','current'],jd8r410:['8R','current'],jd_9rx640_new:['9RX','current'],
 case_farmall75a:['Farmall','current'],case_puma260:['Puma','current'],casemagnum400:['Magnum','current'],case_steiger715:['Steiger','current'],
 nh_t475s:['T4','current'],nh_t7340:['T7','current'],nh_t8435:['T8','current'],nh_t9700_new:['T9','current'],
 fendt_207v:['200 Vario','current'],fendt728:['700 Vario','Gen7'],fendt942:['900 Vario','current'],fendt_1167mt_new:['1100 Vario MT','current'],
 mf4707:['4700M','current'],mf_8s265:['8S','current'],mf_9s370:['9S','current'],
 df_5080d:['Series 5D','current'],df_6230ttv:['Series 6','current'],df_8280ttv:['Series 8','current'],df_9340ttv:['Series 9','current'],
 valtra_a75:['A','current'],valtra_t175:['T','5th'],valtra_t215:['T','5th'],valtra_t255:['T','5th'],valtra_q305:['Q','current'],
 claas_elios210:['ELIOS','current'],claas_arion6190:['ARION 600','current'],claasaxion960:['AXION 900','current'],claas_xerion12650:['XERION 12','current'],
 jds7_800:['S7','current'],claastrion750:['TRION','current'],claas_lexion8600:['LEXION','current'],nhcr8_90:['CR','current'],case_af11:['AF','current']
};
for(const [id,[series,generation]] of Object.entries(SERIES_META_011974)){const m=C.find(x=>x.id===id);if(m){m.series=series;m.generation=generation;}}

// 0.11.8.59: варианты двигателей тракторов. Модель трактора остаётся одной,
// а двигатель хранится на конкретном экземпляре техники. swapCost/swapHours —
// игровая стоимость и трудоёмкость установки «под ключ» с адаптацией.
const ENGINE_VARIANTS={
 bel821:[
  {id:'bel821_d243_1442',name:'ММЗ Д-243-1442',hp:81,fuelLph:12.5,stock:true,swapCost:360000,swapHours:22,kind:'factory',dealerLabel:'ММЗ Д-243 / Д-243S2 · 81 л.с.'},
  {id:'bel821_d243s2_1575',name:'ММЗ Д-243S2-1575 · стартер AZJ3385, генератор Г9721',hp:81,fuelLph:12.5,swapCost:360000,swapHours:22,kind:'factory',dealerSelectable:false},
  {id:'bel821_d243s2_1581',name:'ММЗ Д-243S2-1581 · ТНВД 4УТНИ, насос НШ-10М, генератор Г9721',hp:81,fuelLph:12.5,swapCost:360000,swapHours:22,kind:'factory',dealerSelectable:false},
  {id:'bel821_d243s2_1659',name:'ММЗ Д-243S2-1659 · ТНВД 4УТНИ, насос НШ-10Ж, генератор Г9714',hp:81,fuelLph:12.5,swapCost:360000,swapHours:22,kind:'factory',dealerSelectable:false}],
 mtz80:[
  {id:'d240_80',name:'ММЗ Д-240',hp:80,fuelLph:13,stock:true,swapCost:260000,swapHours:20,kind:'factory'},
  {id:'d243_81',name:'ММЗ Д-243',hp:81,fuelLph:12.5,swapCost:360000,swapHours:22,kind:'retrofit'},
  {id:'d245_95',name:'ММЗ Д-245 турбо',hp:95,fuelLph:15.5,swapCost:620000,swapHours:34,kind:'retrofit'}],
 mtz82:[
  {id:'d243_81',name:'ММЗ Д-243',hp:81,fuelLph:14,stock:true,swapCost:360000,swapHours:22,kind:'factory'},
  {id:'d245_95',name:'ММЗ Д-245 турбо',hp:95,fuelLph:15.5,swapCost:620000,swapHours:34,kind:'retrofit'}],
 yumz6:[
  {id:'d65_60',name:'Д-65',hp:60,fuelLph:11,stock:true,swapCost:220000,swapHours:20,kind:'factory'},
  {id:'d240_80',name:'ММЗ Д-240',hp:80,fuelLph:13,swapCost:480000,swapHours:30,kind:'retrofit'},
  {id:'d243_81',name:'ММЗ Д-243',hp:81,fuelLph:12.5,swapCost:540000,swapHours:32,kind:'retrofit'}],
 t150k:[
  {id:'smd62_165',name:'СМД-62',hp:165,fuelLph:28,stock:true,swapCost:520000,swapHours:34,kind:'factory'},
  {id:'yamz236m2_180',name:'ЯМЗ-236М2',hp:180,fuelLph:30,swapCost:760000,swapHours:42,kind:'retrofit'},
  {id:'d2604_210',name:'ММЗ Д-260.4',hp:210,fuelLph:33,swapCost:1050000,swapHours:52,kind:'retrofit'},
  {id:'yamz238_240',name:'ЯМЗ-238',hp:240,fuelLph:37,swapCost:1220000,swapHours:60,kind:'retrofit'},
  {id:'d262_250',name:'ММЗ Д-262.2S2',hp:250,fuelLph:39,swapCost:1450000,swapHours:64,kind:'retrofit'}],
 t150track:[
  {id:'smd60_150',name:'СМД-60',hp:150,fuelLph:27,stock:true,swapCost:500000,swapHours:38,kind:'factory'},
  {id:'yamz236d3_180',name:'ЯМЗ-236Д3',hp:180,fuelLph:30,swapCost:780000,swapHours:46,kind:'retrofit'}],
 dt75:[
  {id:'smd14_75',name:'СМД-14',hp:75,fuelLph:13.5,swapCost:280000,swapHours:26,kind:'factory'},
  {id:'a41_90',name:'А-41',hp:90,fuelLph:15,stock:true,swapCost:360000,swapHours:28,kind:'factory'},
  {id:'smd18n_95',name:'СМД-18Н',hp:95,fuelLph:15.8,swapCost:410000,swapHours:30,kind:'factory'},
  {id:'d44021_95',name:'Д-440-21',hp:95,fuelLph:15.3,swapCost:470000,swapHours:32,kind:'factory'},
  {id:'rm120_100',name:'РМ-120',hp:100,fuelLph:16.2,swapCost:520000,swapHours:34,kind:'factory'}],
 agromash_ruslan:[
  {id:'cummins_qsm11_340',name:'Cummins QSM11',hp:340,fuelLph:46,stock:true,swapCost:3100000,swapHours:58,dealerDelta:0,dealerExtraDays:0,kind:'factory'}],
 k700:[
  {id:'yamz238nb_220',name:'ЯМЗ-238НБ',hp:220,fuelLph:32.5,fuelRange:[30,35],stock:true,swapCost:620000,swapHours:44,kind:'factory'},
  {id:'yamz238nd3_235',name:'ЯМЗ-238НД3',hp:235,fuelLph:34.5,fuelRange:[32,37],swapCost:760000,swapHours:48,kind:'retrofit'},
  {id:'yamz238nd5_300',name:'ЯМЗ-238НД5',hp:300,fuelLph:43.5,fuelRange:[40,47],swapCost:1080000,swapHours:58,kind:'retrofit'},
  {id:'yamz238nd8_300',name:'ЯМЗ-238НД8',hp:300,fuelLph:42.5,fuelRange:[39,46],swapCost:1160000,swapHours:60,kind:'retrofit'},
  {id:'yamz240bm2_300',name:'ЯМЗ-240БМ2',hp:300,fuelLph:46,fuelRange:[42,50],swapCost:1320000,swapHours:68,kind:'retrofit'},
  {id:'tmz8481_350',name:'ТМЗ-8481.10',hp:350,fuelLph:49,fuelRange:[45,53],swapCost:1680000,swapHours:72,kind:'retrofit'},
  {id:'yamz7511_400',name:'ЯМЗ-7511.10',hp:400,fuelLph:54,fuelRange:[50,58],swapCost:1980000,swapHours:78,kind:'retrofit'},
  {id:'weichai_wp10_400',name:'Weichai WP10',hp:400,fuelLph:51,fuelRange:[47,55],swapCost:2350000,swapHours:86,kind:'custom'},
  {id:'tmz8481_420',name:'ТМЗ-8481.10-04',hp:420,fuelLph:57.5,fuelRange:[53,62],swapCost:2250000,swapHours:82,kind:'retrofit'},
  {id:'daf430',name:'DAF 430',hp:430,fuelLph:54,fuelRange:[50,58],swapCost:2550000,swapHours:92,kind:'custom'},
  {id:'daf440',name:'DAF 440',hp:440,fuelLph:56,fuelRange:[52,60],swapCost:2680000,swapHours:94,kind:'custom'},
  {id:'weichai_wp12_460',name:'Weichai WP12',hp:460,fuelLph:57.5,fuelRange:[53,62],swapCost:2920000,swapHours:96,kind:'custom'},
  {id:'renault_magnum_500',name:'Renault Magnum',hp:500,fuelLph:63,fuelRange:[58,68],swapCost:3450000,swapHours:110,kind:'custom'}],
 k701:[
  {id:'yamz240bm2_300',name:'ЯМЗ-240БМ2-4',hp:300,fuelLph:48,stock:true,swapCost:1320000,swapHours:58,kind:'factory'},
  {id:'yamz238nd5_300',name:'ЯМЗ-238НД5',hp:300,fuelLph:43.5,swapCost:1080000,swapHours:52,kind:'retrofit'},
  {id:'yamz7511_400',name:'ЯМЗ-7511.10',hp:400,fuelLph:54,swapCost:1980000,swapHours:72,kind:'retrofit'}],
 k744r1:[
  {id:'yamz238nd5_300',name:'ЯМЗ-238НД5',hp:300,fuelLph:45,stock:true,swapCost:1080000,swapHours:46,kind:'factory'},
  {id:'tmz8481_350',name:'ТМЗ-8481.10',hp:350,fuelLph:50,swapCost:1680000,swapHours:58,kind:'retrofit'},
  {id:'yamz7511_400',name:'ЯМЗ-7511.10',hp:400,fuelLph:54,swapCost:1980000,swapHours:62,kind:'retrofit'},
  {id:'tmz8481_420',name:'ТМЗ-8481.10-04',hp:420,fuelLph:58,swapCost:2250000,swapHours:68,kind:'retrofit'}],
 mtz1221old:[
  {id:'d2602_130',name:'ММЗ Д-260.2',hp:130,fuelLph:24,stock:true,swapCost:850000,swapHours:36,kind:'factory'},
  {id:'d2602s2_136',name:'ММЗ Д-260.2S2',hp:136,fuelLph:24.5,swapCost:980000,swapHours:40,kind:'factory'}],
 htz17221:[
  {id:'yamz236d3_175',name:'ЯМЗ-236Д-3',hp:175,fuelLph:30,stock:true,swapCost:760000,swapHours:42,kind:'factory'},
  {id:'d2604_210',name:'ММЗ Д-260.4',hp:210,fuelLph:33,swapCost:1050000,swapHours:52,kind:'factory'},
  {id:'yamz238_240',name:'ЯМЗ-238КМ2-3',hp:240,fuelLph:37,swapCost:1220000,swapHours:58,kind:'factory'},
  {id:'d262_250',name:'ММЗ Д-262.2S2',hp:250,fuelLph:39,swapCost:1450000,swapHours:64,kind:'retrofit'}],
 k7m350:[
  {id:'tmz8481_350',name:'ТМЗ-8481.10',hp:350,fuelLph:50,stock:true,swapCost:2450000,swapHours:54,dealerDelta:0,dealerExtraDays:0,kind:'factory'},
  {id:'yamz65855_350',name:'ЯМЗ-65855',hp:350,fuelLph:49,swapCost:2520000,swapHours:54,dealerDelta:180000,dealerExtraDays:3,kind:'factory'}],
 k7m420:[
  {id:'tmz8481_420',name:'ТМЗ-8481.10-04',hp:420,fuelLph:58,stock:true,swapCost:2850000,swapHours:58,dealerDelta:0,dealerExtraDays:0,kind:'factory'},
  {id:'yamz658504_420',name:'ЯМЗ-6585-04',hp:420,fuelLph:57,swapCost:2920000,swapHours:58,dealerDelta:220000,dealerExtraDays:3,kind:'factory'}]
};

// 0.11.8.60: заводские силовые исполнения современных иностранных платформ.
// Это не фантазийный swap двигателя: один modelId представляет силовую платформу,
// а конкретный экземпляр хранит power-grade. Для Б/У рынка grade выбирается детерминированно.
const POWERTRAIN_VARIANTS={
 jd6920:[
  {id:'jd6820_135',name:'John Deere PowerTech · 6820 spec',gradeName:'John Deere 6820',hp:135,fuelLph:18.5,swapCost:720000,swapHours:28,dealerDelta:-450000,kind:'power_grade'},
  {id:'jd6920_150',name:'John Deere PowerTech · 6920 spec',gradeName:'John Deere 6920',hp:150,fuelLph:20,stock:true,swapCost:880000,swapHours:30,dealerDelta:0,kind:'power_grade'}],
 jd6930:[
  {id:'jd6830_140',name:'John Deere PowerTech Plus · 6830 spec',gradeName:'John Deere 6830',hp:140,fuelLph:19.5,swapCost:820000,swapHours:30,dealerDelta:-520000,kind:'power_grade'},
  {id:'jd6930_155',name:'John Deere PowerTech Plus · 6930 spec',gradeName:'John Deere 6930',hp:155,fuelLph:21,stock:true,swapCost:960000,swapHours:32,dealerDelta:0,kind:'power_grade'}],
 jd7430:[
  {id:'jd7430_180',name:'John Deere PowerTech Plus · 7430 spec',gradeName:'John Deere 7430',hp:180,fuelLph:25,stock:true,swapCost:1150000,swapHours:34,dealerDelta:0,kind:'power_grade'},
  {id:'jd7530_205',name:'John Deere PowerTech Plus · 7530 spec',gradeName:'John Deere 7530',hp:205,fuelLph:28.5,swapCost:1450000,swapHours:38,dealerDelta:900000,kind:'power_grade'}],
 jd7830:[
  {id:'jd7730_190',name:'John Deere PowerTech Plus · 7730 spec',gradeName:'John Deere 7730',hp:190,fuelLph:27,swapCost:1250000,swapHours:34,dealerDelta:-620000,kind:'power_grade'},
  {id:'jd7830_205',name:'John Deere PowerTech Plus · 7830 spec',gradeName:'John Deere 7830',hp:205,fuelLph:29,stock:true,swapCost:1450000,swapHours:36,dealerDelta:0,kind:'power_grade'},
  {id:'jd7930_220',name:'John Deere PowerTech Plus · 7930 spec',gradeName:'John Deere 7930',hp:220,fuelLph:31,swapCost:1680000,swapHours:40,dealerDelta:780000,kind:'power_grade'}],
 jd7930:[
  {id:'jd7830_205',name:'John Deere PowerTech Plus · 7830 spec',gradeName:'John Deere 7830',hp:205,fuelLph:29,swapCost:1450000,swapHours:36,dealerDelta:-680000,kind:'power_grade'},
  {id:'jd7930_220',name:'John Deere PowerTech Plus · 7930 spec',gradeName:'John Deere 7930',hp:220,fuelLph:31,stock:true,swapCost:1680000,swapHours:40,dealerDelta:0,kind:'power_grade'}],
 jd8230:[
  {id:'jd8230_245',name:'John Deere PowerTech Plus 9.0 · 8230 spec',gradeName:'John Deere 8230',hp:245,fuelLph:34,stock:true,swapCost:1750000,swapHours:40,dealerDelta:0,kind:'power_grade'},
  {id:'jd8330_280',name:'John Deere PowerTech Plus 9.0 · 8330 spec',gradeName:'John Deere 8330',hp:280,fuelLph:39,swapCost:2150000,swapHours:46,dealerDelta:1250000,kind:'power_grade'},
  {id:'jd8430_305',name:'John Deere PowerTech Plus 9.0 · 8430 spec',gradeName:'John Deere 8430',hp:305,fuelLph:43,swapCost:2480000,swapHours:50,dealerDelta:2100000,kind:'power_grade'}],
 jd8330:[
  {id:'jd8230_245',name:'John Deere PowerTech Plus 9.0 · 8230 spec',gradeName:'John Deere 8230',hp:245,fuelLph:34,swapCost:1750000,swapHours:40,dealerDelta:-1150000,kind:'power_grade'},
  {id:'jd8330_280',name:'John Deere PowerTech Plus 9.0 · 8330 spec',gradeName:'John Deere 8330',hp:280,fuelLph:39,stock:true,swapCost:2150000,swapHours:46,dealerDelta:0,kind:'power_grade'},
  {id:'jd8430_305',name:'John Deere PowerTech Plus 9.0 · 8430 spec',gradeName:'John Deere 8430',hp:305,fuelLph:43,swapCost:2480000,swapHours:50,dealerDelta:900000,kind:'power_grade'}],
 jd8430:[
  {id:'jd8230_245',name:'John Deere PowerTech Plus 9.0 · 8230 spec',gradeName:'John Deere 8230',hp:245,fuelLph:34,swapCost:1750000,swapHours:40,dealerDelta:-1900000,kind:'power_grade'},
  {id:'jd8330_280',name:'John Deere PowerTech Plus 9.0 · 8330 spec',gradeName:'John Deere 8330',hp:280,fuelLph:39,swapCost:2150000,swapHours:46,dealerDelta:-800000,kind:'power_grade'},
  {id:'jd8430_305',name:'John Deere PowerTech Plus 9.0 · 8430 spec',gradeName:'John Deere 8430',hp:305,fuelLph:43,stock:true,swapCost:2480000,swapHours:50,dealerDelta:0,kind:'power_grade'}],
 casepuma210:[
  {id:'puma185_185',name:'FPT NEF 6.7 · Puma 185 spec',gradeName:'Case IH Puma 185',hp:185,fuelLph:26,swapCost:1250000,swapHours:34,dealerDelta:-760000,kind:'power_grade'},
  {id:'puma200_200',name:'FPT NEF 6.7 · Puma 200 spec',gradeName:'Case IH Puma 200',hp:200,fuelLph:28,swapCost:1430000,swapHours:36,dealerDelta:-320000,kind:'power_grade'},
  {id:'puma210_210',name:'FPT NEF 6.7 · Puma 210 spec',gradeName:'Case IH Puma 210',hp:210,fuelLph:29,stock:true,swapCost:1550000,swapHours:38,dealerDelta:0,kind:'power_grade'}],
 casemagnum340:[
  {id:'magnum310_310',name:'FPT Cursor 9 · Magnum 310 spec',gradeName:'Case IH Magnum 310',hp:310,fuelLph:42,swapCost:2150000,swapHours:46,dealerDelta:-1350000,kind:'power_grade'},
  {id:'magnum340_340',name:'FPT Cursor 9 · Magnum 340 spec',gradeName:'Case IH Magnum 340',hp:340,fuelLph:46,stock:true,swapCost:2550000,swapHours:50,dealerDelta:0,kind:'power_grade'},
  {id:'magnum370_370',name:'FPT Cursor 9 · Magnum 370 spec',gradeName:'Case IH Magnum 370',hp:370,fuelLph:50,swapCost:2950000,swapHours:54,dealerDelta:1500000,kind:'power_grade'}],
 nht7060:[
  {id:'t7040_180',name:'NEF 6.7 · T7040 spec',gradeName:'New Holland T7040',hp:180,fuelLph:25.5,swapCost:1180000,swapHours:34,dealerDelta:-780000,kind:'power_grade'},
  {id:'t7050_197',name:'NEF 6.7 · T7050 spec',gradeName:'New Holland T7050',hp:197,fuelLph:28,swapCost:1380000,swapHours:36,dealerDelta:-340000,kind:'power_grade'},
  {id:'t7060_213',name:'NEF 6.7 · T7060 spec',gradeName:'New Holland T7060',hp:213,fuelLph:30,stock:true,swapCost:1580000,swapHours:38,dealerDelta:0,kind:'power_grade'}],
 nht8_390:[
  {id:'t8330_284',name:'FPT Cursor 9 · T8.330 spec',gradeName:'New Holland T8.330',hp:284,fuelLph:40,swapCost:2050000,swapHours:44,dealerDelta:-1650000,kind:'power_grade'},
  {id:'t8360_311',name:'FPT Cursor 9 · T8.360 spec',gradeName:'New Holland T8.360',hp:311,fuelLph:43.5,swapCost:2350000,swapHours:48,dealerDelta:-750000,kind:'power_grade'},
  {id:'t8390_340',name:'FPT Cursor 9 · T8.390 spec',gradeName:'New Holland T8.390',hp:340,fuelLph:47,stock:true,swapCost:2700000,swapHours:52,dealerDelta:0,kind:'power_grade'}],
 claasaxion850:[
  {id:'axion820_190',name:'DPS 6.8 · AXION 820 spec',gradeName:'CLAAS AXION 820',hp:190,fuelLph:28,swapCost:1500000,swapHours:36,dealerDelta:-1850000,kind:'power_grade'},
  {id:'axion830_205',name:'DPS 6.8 · AXION 830 spec',gradeName:'CLAAS AXION 830',hp:205,fuelLph:30,swapCost:1680000,swapHours:38,dealerDelta:-1250000,kind:'power_grade'},
  {id:'axion840_225',name:'DPS 6.8 · AXION 840 spec',gradeName:'CLAAS AXION 840',hp:225,fuelLph:32.5,swapCost:1920000,swapHours:40,dealerDelta:-650000,kind:'power_grade'},
  {id:'axion850_250',name:'DPS 6.8 · AXION 850 spec',gradeName:'CLAAS AXION 850',hp:250,fuelLph:35,stock:true,swapCost:2200000,swapHours:44,dealerDelta:0,kind:'power_grade'}],
 jd6r215:[
  {id:'6r175_223',name:'PowerTech PVS 6.8 · 6R 175 / IPM',gradeName:'John Deere 6R 175',hp:223,fuelLph:27.5,swapCost:1900000,swapHours:30,dealerDelta:-2700000,dealerExtraDays:1,kind:'power_grade'},
  {id:'6r195_244',name:'PowerTech PVS 6.8 · 6R 195 / IPM',gradeName:'John Deere 6R 195',hp:244,fuelLph:29.5,swapCost:2150000,swapHours:32,dealerDelta:-1350000,dealerExtraDays:1,kind:'power_grade'},
  {id:'6r215_259',name:'PowerTech PVS 6.8 · 6R 215 / IPM',gradeName:'John Deere 6R 215',hp:259,fuelLph:31,stock:true,swapCost:2380000,swapHours:34,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'},
  {id:'6r230_281',name:'PowerTech PSS 6.8 · 6R 230 / IPM',gradeName:'John Deere 6R 230',hp:281,fuelLph:34,fuelRange:[31,37],swapCost:2850000,swapHours:40,dealerDelta:1750000,dealerExtraDays:3,kind:'power_grade'},
  {id:'6r250_301',name:'PowerTech PSS 6.8 · 6R 250 / IPM',gradeName:'John Deere 6R 250',hp:301,fuelLph:36.5,fuelRange:[34,39],swapCost:3250000,swapHours:44,dealerDelta:3200000,dealerExtraDays:4,kind:'power_grade'}],
 jd7r330:[
  {id:'7r270_305',name:'PowerTech PSS 9.0 · 7R 270 spec',gradeName:'John Deere 7R 270',hp:305,fuelLph:38,swapCost:2700000,swapHours:38,dealerDelta:-4200000,dealerExtraDays:1,kind:'power_grade'},
  {id:'7r290_326',name:'PowerTech PSS 9.0 · 7R 290 spec',gradeName:'John Deere 7R 290',hp:326,fuelLph:40.5,swapCost:2950000,swapHours:40,dealerDelta:-2700000,dealerExtraDays:1,kind:'power_grade'},
  {id:'7r310_349',name:'PowerTech PSS 9.0 · 7R 310 spec',gradeName:'John Deere 7R 310',hp:349,fuelLph:43,swapCost:3250000,swapHours:42,dealerDelta:-1350000,dealerExtraDays:2,kind:'power_grade'},
  {id:'7r330_373',name:'PowerTech PSS 9.0 · 7R 330 spec',gradeName:'John Deere 7R 330',hp:373,fuelLph:45,stock:true,swapCost:3550000,swapHours:44,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 jd8r410:[
  {id:'8r310_341',name:'PowerTech PSS 9.0 · 8R 310 spec',gradeName:'John Deere 8R 310',hp:341,fuelLph:45,swapCost:3250000,swapHours:42,dealerDelta:-6200000,dealerExtraDays:1,kind:'power_grade'},
  {id:'8r340_374',name:'PowerTech PSS 9.0 · 8R 340 spec',gradeName:'John Deere 8R 340',hp:374,fuelLph:48,swapCost:3650000,swapHours:44,dealerDelta:-3900000,dealerExtraDays:1,kind:'power_grade'},
  {id:'8r370_407',name:'PowerTech PSS 9.0 · 8R 370 spec',gradeName:'John Deere 8R 370',hp:407,fuelLph:52,swapCost:4050000,swapHours:46,dealerDelta:-1900000,dealerExtraDays:2,kind:'power_grade'},
  {id:'8r410_443',name:'PowerTech PSS 9.0 · 8R 410 spec',gradeName:'John Deere 8R 410',hp:443,fuelLph:56,stock:true,swapCost:4450000,swapHours:48,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 claasaxion960:[
  {id:'axion920_325',name:'FPT Cursor 9 · AXION 920 spec',gradeName:'CLAAS AXION 920',hp:325,fuelLph:42,swapCost:3000000,swapHours:40,dealerDelta:-6500000,dealerExtraDays:1,kind:'power_grade'},
  {id:'axion930_355',name:'FPT Cursor 9 · AXION 930 spec',gradeName:'CLAAS AXION 930',hp:355,fuelLph:45.5,swapCost:3300000,swapHours:42,dealerDelta:-4800000,dealerExtraDays:1,kind:'power_grade'},
  {id:'axion940_385',name:'FPT Cursor 9 · AXION 940 spec',gradeName:'CLAAS AXION 940',hp:385,fuelLph:49,swapCost:3650000,swapHours:44,dealerDelta:-3000000,dealerExtraDays:2,kind:'power_grade'},
  {id:'axion950_410',name:'FPT Cursor 9 · AXION 950 spec',gradeName:'CLAAS AXION 950',hp:410,fuelLph:52,swapCost:3950000,swapHours:46,dealerDelta:-1550000,dealerExtraDays:2,kind:'power_grade'},
  {id:'axion960_445',name:'FPT Cursor 9 · AXION 960 spec',gradeName:'CLAAS AXION 960',hp:445,fuelLph:55,stock:true,swapCost:4350000,swapHours:48,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 casemagnum400:[
  {id:'magnum310_345',name:'FPT Cursor 9 · Magnum 310 spec',gradeName:'Case IH Magnum 310',hp:345,fuelLph:44,swapCost:3250000,swapHours:42,dealerDelta:-5800000,dealerExtraDays:1,kind:'power_grade'},
  {id:'magnum340_374',name:'FPT Cursor 9 · Magnum 340 spec',gradeName:'Case IH Magnum 340',hp:374,fuelLph:47.5,swapCost:3600000,swapHours:44,dealerDelta:-3900000,dealerExtraDays:1,kind:'power_grade'},
  {id:'magnum380_417',name:'FPT Cursor 9 · Magnum 380 spec',gradeName:'Case IH Magnum 380',hp:417,fuelLph:52,swapCost:4100000,swapHours:46,dealerDelta:-1700000,dealerExtraDays:2,kind:'power_grade'},
  {id:'magnum400_435',name:'FPT Cursor 9 · Magnum 400 spec',gradeName:'Case IH Magnum 400',hp:435,fuelLph:55,stock:true,swapCost:4400000,swapHours:48,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 claas_arion650:[
  {id:'arion630_155',name:'DPS 6.8 · ARION 630 spec',gradeName:'CLAAS ARION 630',hp:155,fuelLph:21.5,swapCost:1200000,swapHours:30,dealerDelta:-900000,kind:'power_grade'},
  {id:'arion640_165',name:'DPS 6.8 · ARION 640 spec',gradeName:'CLAAS ARION 640',hp:165,fuelLph:23,swapCost:1350000,swapHours:32,dealerDelta:-420000,kind:'power_grade'},
  {id:'arion650_175',name:'DPS 6.8 · ARION 650 spec',gradeName:'CLAAS ARION 650',hp:175,fuelLph:24,stock:true,swapCost:1500000,swapHours:34,dealerDelta:0,kind:'power_grade'}],
 claas_arion6190:[
  {id:'arion6150_165',name:'DPS 6.8 · ARION 6.150 spec',gradeName:'CLAAS ARION 6.150 CMATIC',hp:165,fuelLph:22,swapCost:1750000,swapHours:30,dealerDelta:-3100000,dealerExtraDays:1,kind:'power_grade'},
  {id:'arion6165_180',name:'DPS 6.8 · ARION 6.165 spec',gradeName:'CLAAS ARION 6.165 CMATIC',hp:180,fuelLph:24,swapCost:1950000,swapHours:32,dealerDelta:-2100000,dealerExtraDays:1,kind:'power_grade'},
  {id:'arion6185_195',name:'DPS 6.8 · ARION 6.185 spec',gradeName:'CLAAS ARION 6.185 CMATIC',hp:195,fuelLph:26,swapCost:2200000,swapHours:34,dealerDelta:-950000,dealerExtraDays:2,kind:'power_grade'},
  {id:'arion6190_205',name:'DPS 6.8 · ARION 6.190 spec',gradeName:'CLAAS ARION 6.190 CMATIC',hp:205,fuelLph:27,stock:true,swapCost:2400000,swapHours:36,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 claas_xerion4500:[
  {id:'xerion4000_435',name:'Mercedes-Benz OM 470 · XERION 4000 spec',gradeName:'CLAAS XERION 4000',hp:435,fuelLph:50,swapCost:3200000,swapHours:48,dealerDelta:-2200000,kind:'power_grade'},
  {id:'xerion4500_483',name:'Mercedes-Benz OM 470 · XERION 4500 spec',gradeName:'CLAAS XERION 4500',hp:483,fuelLph:55,stock:true,swapCost:3650000,swapHours:52,dealerDelta:0,kind:'power_grade'},
  {id:'xerion5000_530',name:'Mercedes-Benz OM 471 · XERION 5000 spec',gradeName:'CLAAS XERION 5000',hp:530,fuelLph:61,swapCost:4200000,swapHours:58,dealerDelta:2600000,kind:'power_grade'}],
 claas_xerion12650:[
  {id:'xerion12590_590',name:'Mercedes-Benz 15.6 · XERION 12.590 spec',gradeName:'CLAAS XERION 12.590',hp:590,fuelLph:66,swapCost:4700000,swapHours:50,dealerDelta:-5200000,dealerExtraDays:2,kind:'power_grade'},
  {id:'xerion12650_653',name:'Mercedes-Benz 15.6 · XERION 12.650 spec',gradeName:'CLAAS XERION 12.650',hp:653,fuelLph:72,stock:true,swapCost:5250000,swapHours:54,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 nh_t7270:[
  {id:'t7230_200',name:'NEF 6.7 · T7.230 spec',gradeName:'New Holland T7.230',hp:200,fuelLph:27,swapCost:1550000,swapHours:34,dealerDelta:-1800000,kind:'power_grade'},
  {id:'t7245_220',name:'NEF 6.7 · T7.245 spec',gradeName:'New Holland T7.245',hp:220,fuelLph:29,swapCost:1750000,swapHours:36,dealerDelta:-1150000,kind:'power_grade'},
  {id:'t7260_240',name:'NEF 6.7 · T7.260 spec',gradeName:'New Holland T7.260',hp:240,fuelLph:31.5,swapCost:1980000,swapHours:38,dealerDelta:-520000,kind:'power_grade'},
  {id:'t7270_269',name:'NEF 6.7 · T7.270 spec',gradeName:'New Holland T7.270',hp:269,fuelLph:34,stock:true,swapCost:2250000,swapHours:40,dealerDelta:0,kind:'power_grade'}],
 nh_t7340:[
  {id:'t7290_288',name:'NEF 6.7 · T7.290 HD spec',gradeName:'New Holland T7.290 HD',hp:288,fuelLph:35,swapCost:2450000,swapHours:36,dealerDelta:-3900000,dealerExtraDays:1,kind:'power_grade'},
  {id:'t7315_313',name:'NEF 6.7 · T7.315 HD spec',gradeName:'New Holland T7.315 HD',hp:313,fuelLph:38,swapCost:2750000,swapHours:38,dealerDelta:-2100000,dealerExtraDays:2,kind:'power_grade'},
  {id:'t7340_340',name:'NEF 6.7 · T7.340 HD spec',gradeName:'New Holland T7.340 HD',hp:340,fuelLph:41,stock:true,swapCost:3050000,swapHours:40,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 nh_t8410:[
  {id:'t8350_315',name:'FPT Cursor 9 · T8.350 spec',gradeName:'New Holland T8.350',hp:315,fuelLph:43,swapCost:2700000,swapHours:42,dealerDelta:-2600000,kind:'power_grade'},
  {id:'t8380_347',name:'FPT Cursor 9 · T8.380 spec',gradeName:'New Holland T8.380',hp:347,fuelLph:46,swapCost:3050000,swapHours:44,dealerDelta:-1250000,kind:'power_grade'},
  {id:'t8410_370',name:'FPT Cursor 9 · T8.410 spec',gradeName:'New Holland T8.410',hp:370,fuelLph:49,stock:true,swapCost:3350000,swapHours:46,dealerDelta:0,kind:'power_grade'},
  {id:'t8435_417',name:'FPT Cursor 9 · T8.435 spec',gradeName:'New Holland T8.435',hp:417,fuelLph:54,swapCost:3900000,swapHours:50,dealerDelta:2200000,kind:'power_grade'}],
 nh_t8435:[
  {id:'t8320_320',name:'FPT Cursor 9 · T8.320 spec',gradeName:'New Holland T8.320',hp:320,fuelLph:42,swapCost:2750000,swapHours:40,dealerDelta:-6200000,dealerExtraDays:1,kind:'power_grade'},
  {id:'t8350_351',name:'FPT Cursor 9 · T8.350 spec',gradeName:'New Holland T8.350',hp:351,fuelLph:45.5,swapCost:3100000,swapHours:42,dealerDelta:-4600000,dealerExtraDays:1,kind:'power_grade'},
  {id:'t8380_381',name:'FPT Cursor 9 · T8.380 spec',gradeName:'New Holland T8.380',hp:381,fuelLph:49,swapCost:3450000,swapHours:44,dealerDelta:-3000000,dealerExtraDays:2,kind:'power_grade'},
  {id:'t8410_409',name:'FPT Cursor 9 · T8.410 spec',gradeName:'New Holland T8.410',hp:409,fuelLph:52,swapCost:3800000,swapHours:46,dealerDelta:-1500000,dealerExtraDays:2,kind:'power_grade'},
  {id:'t8435_435',name:'FPT Cursor 9 · T8.435 spec',gradeName:'New Holland T8.435',hp:435,fuelLph:55,stock:true,swapCost:4150000,swapHours:48,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 case_puma185:[
  {id:'puma185_185',name:'FPT 6.7 · Puma 185 spec',gradeName:'Case IH Puma 185',hp:185,fuelLph:27,stock:true,swapCost:1350000,swapHours:34,dealerDelta:0,kind:'power_grade'},
  {id:'puma200_200',name:'FPT 6.7 · Puma 200 spec',gradeName:'Case IH Puma 200',hp:200,fuelLph:29,swapCost:1550000,swapHours:36,dealerDelta:580000,kind:'power_grade'},
  {id:'puma220_220',name:'FPT 6.7 · Puma 220 spec',gradeName:'Case IH Puma 220',hp:220,fuelLph:31.5,swapCost:1800000,swapHours:38,dealerDelta:1250000,kind:'power_grade'}],
 case_puma260:[
  {id:'puma185_225',name:'FPT 6.7 · Puma 185 boosted spec',gradeName:'Case IH Puma 185',hp:225,fuelLph:29,swapCost:1950000,swapHours:34,dealerDelta:-3800000,dealerExtraDays:1,kind:'power_grade'},
  {id:'puma200_245',name:'FPT 6.7 · Puma 200 boosted spec',gradeName:'Case IH Puma 200',hp:245,fuelLph:31,swapCost:2150000,swapHours:36,dealerDelta:-2800000,dealerExtraDays:1,kind:'power_grade'},
  {id:'puma220_265',name:'FPT 6.7 · Puma 220 boosted spec',gradeName:'Case IH Puma 220',hp:265,fuelLph:33,swapCost:2400000,swapHours:38,dealerDelta:-1500000,dealerExtraDays:2,kind:'power_grade'},
  {id:'puma260_280',name:'FPT 6.7 · Puma 260 game-rated spec',gradeName:'Case IH Puma 260',hp:280,fuelLph:35,stock:true,swapCost:2650000,swapHours:40,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 case_steiger450:[
  {id:'steiger400_400',name:'FPT Cursor 13 · Steiger 400 spec',gradeName:'Case IH Steiger 400',hp:400,fuelLph:53,swapCost:3500000,swapHours:48,dealerDelta:-1900000,kind:'power_grade'},
  {id:'steiger450_450',name:'FPT Cursor 13 · Steiger 450 spec',gradeName:'Case IH Steiger 450',hp:450,fuelLph:58,stock:true,swapCost:4050000,swapHours:52,dealerDelta:0,kind:'power_grade'},
  {id:'steiger500_500',name:'FPT Cursor 13 · Steiger 500 spec',gradeName:'Case IH Steiger 500',hp:500,fuelLph:64,swapCost:4650000,swapHours:56,dealerDelta:2300000,kind:'power_grade'}],
 case_quadtrac715:[
  {id:'steiger645_700',name:'FPT Cursor 13 · Steiger 645 package',gradeName:'Case IH Steiger 645 Quadtrac',hp:700,fuelLph:75,swapCost:5600000,swapHours:54,dealerDelta:-6500000,dealerExtraDays:2,kind:'power_grade'},
  {id:'steiger715_778',name:'FPT Cursor 16 · Steiger 715 package',gradeName:'Case IH Steiger 715 Quadtrac',hp:778,fuelLph:82,stock:true,swapCost:6400000,swapHours:60,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 fendt716:[
  {id:'fendt712_125',name:'Deutz 6.1 · 712 Vario spec',gradeName:'Fendt 712 Vario',hp:125,fuelLph:18,swapCost:1250000,swapHours:30,dealerDelta:-1250000,kind:'power_grade'},
  {id:'fendt714_145',name:'Deutz 6.1 · 714 Vario spec',gradeName:'Fendt 714 Vario',hp:145,fuelLph:20,swapCost:1450000,swapHours:32,dealerDelta:-620000,kind:'power_grade'},
  {id:'fendt716_165',name:'Deutz 6.1 · 716 Vario spec',gradeName:'Fendt 716 Vario',hp:165,fuelLph:22,stock:true,swapCost:1680000,swapHours:34,dealerDelta:0,kind:'power_grade'}],
 fendt728:[
  {id:'fendt720_223',name:'AGCO Power CORE75 · 720 DP',gradeName:'Fendt 720 Vario',hp:223,fuelLph:26,swapCost:2250000,swapHours:32,dealerDelta:-4700000,dealerExtraDays:1,kind:'power_grade'},
  {id:'fendt722_243',name:'AGCO Power CORE75 · 722 DP',gradeName:'Fendt 722 Vario',hp:243,fuelLph:28,swapCost:2450000,swapHours:34,dealerDelta:-3400000,dealerExtraDays:1,kind:'power_grade'},
  {id:'fendt724_262',name:'AGCO Power CORE75 · 724 DP',gradeName:'Fendt 724 Vario',hp:262,fuelLph:30,swapCost:2680000,swapHours:36,dealerDelta:-2200000,dealerExtraDays:2,kind:'power_grade'},
  {id:'fendt726_282',name:'AGCO Power CORE75 · 726 DP',gradeName:'Fendt 726 Vario',hp:282,fuelLph:32,swapCost:2920000,swapHours:38,dealerDelta:-1050000,dealerExtraDays:2,kind:'power_grade'},
  {id:'fendt728_303',name:'AGCO Power CORE75 · 728 DP',gradeName:'Fendt 728 Vario',hp:303,fuelLph:34,stock:true,swapCost:3200000,swapHours:40,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 fendt936:[
  {id:'fendt930_296',name:'MAN D1556 · 930 Vario spec',gradeName:'Fendt 930 Vario',hp:296,fuelLph:38,swapCost:2750000,swapHours:40,dealerDelta:-2600000,kind:'power_grade'},
  {id:'fendt933_326',name:'MAN D1556 · 933 Vario spec',gradeName:'Fendt 933 Vario',hp:326,fuelLph:42,swapCost:3050000,swapHours:42,dealerDelta:-1600000,kind:'power_grade'},
  {id:'fendt936_360',name:'MAN D1556 · 936 Vario spec',gradeName:'Fendt 936 Vario',hp:360,fuelLph:46,stock:true,swapCost:3400000,swapHours:44,dealerDelta:0,kind:'power_grade'},
  {id:'fendt939_385',name:'MAN D1556 · 939 Vario spec',gradeName:'Fendt 939 Vario',hp:385,fuelLph:49,swapCost:3700000,swapHours:46,dealerDelta:1200000,kind:'power_grade'},
  {id:'fendt942_415',name:'MAN D1556 · 942 Vario spec',gradeName:'Fendt 942 Vario',hp:415,fuelLph:52,swapCost:4050000,swapHours:48,dealerDelta:2500000,kind:'power_grade'}],
 fendt942:[
  {id:'fendt930_296',name:'MAN D1556 · 930 Vario spec',gradeName:'Fendt 930 Vario',hp:296,fuelLph:38,swapCost:2750000,swapHours:40,dealerDelta:-7600000,dealerExtraDays:1,kind:'power_grade'},
  {id:'fendt933_326',name:'MAN D1556 · 933 Vario spec',gradeName:'Fendt 933 Vario',hp:326,fuelLph:42,swapCost:3050000,swapHours:42,dealerDelta:-5600000,dealerExtraDays:1,kind:'power_grade'},
  {id:'fendt936_355',name:'MAN D1556 · 936 Vario spec',gradeName:'Fendt 936 Vario',hp:355,fuelLph:46,swapCost:3400000,swapHours:44,dealerDelta:-3700000,dealerExtraDays:2,kind:'power_grade'},
  {id:'fendt939_385',name:'MAN D1556 · 939 Vario spec',gradeName:'Fendt 939 Vario',hp:385,fuelLph:49,swapCost:3700000,swapHours:46,dealerDelta:-1800000,dealerExtraDays:2,kind:'power_grade'},
  {id:'fendt942_415',name:'MAN D1556 · 942 Vario spec',gradeName:'Fendt 942 Vario',hp:415,fuelLph:52,stock:true,swapCost:4050000,swapHours:48,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 df_6230ttv:[
  {id:'df6190_192',name:'Deutz TCD 6.1 · 6190 TTV spec',gradeName:'DEUTZ-FAHR 6190 TTV',hp:192,fuelLph:26,swapCost:1900000,swapHours:32,dealerDelta:-3200000,dealerExtraDays:1,kind:'power_grade'},
  {id:'df6210_216',name:'Deutz TCD 6.1 · 6210 TTV spec',gradeName:'DEUTZ-FAHR 6210 TTV',hp:216,fuelLph:29,swapCost:2150000,swapHours:34,dealerDelta:-1600000,dealerExtraDays:2,kind:'power_grade'},
  {id:'df6230_230',name:'Deutz TCD 6.1 · 6230 TTV spec',gradeName:'DEUTZ-FAHR 6230 TTV',hp:230,fuelLph:31,stock:true,swapCost:2350000,swapHours:36,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 df_9340ttv:[
  {id:'df9290_295',name:'Deutz TTCD 7.8 · 9290 TTV spec',gradeName:'DEUTZ-FAHR 9290 TTV',hp:295,fuelLph:40,swapCost:2850000,swapHours:38,dealerDelta:-4200000,dealerExtraDays:1,kind:'power_grade'},
  {id:'df9310_313',name:'Deutz TTCD 7.8 · 9310 TTV spec',gradeName:'DEUTZ-FAHR 9310 TTV',hp:313,fuelLph:42.5,swapCost:3050000,swapHours:40,dealerDelta:-2300000,dealerExtraDays:2,kind:'power_grade'},
  {id:'df9340_336',name:'Deutz TTCD 7.8 · 9340 TTV spec',gradeName:'DEUTZ-FAHR 9340 TTV',hp:336,fuelLph:45,stock:true,swapCost:3300000,swapHours:42,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 mf_7726s_used:[
  {id:'mf7720_200',name:'AGCO Power 7.4 · 7720 S spec',gradeName:'Massey Ferguson 7720 S',hp:200,fuelLph:27,swapCost:1700000,swapHours:34,dealerDelta:-1700000,kind:'power_grade'},
  {id:'mf7722_220',name:'AGCO Power 7.4 · 7722 S spec',gradeName:'Massey Ferguson 7722 S',hp:220,fuelLph:29.5,swapCost:1950000,swapHours:36,dealerDelta:-1050000,kind:'power_grade'},
  {id:'mf7724_240',name:'AGCO Power 7.4 · 7724 S spec',gradeName:'Massey Ferguson 7724 S',hp:240,fuelLph:31.5,swapCost:2200000,swapHours:38,dealerDelta:-450000,kind:'power_grade'},
  {id:'mf7726_255',name:'AGCO Power 7.4 · 7726 S spec',gradeName:'Massey Ferguson 7726 S',hp:255,fuelLph:33,stock:true,swapCost:2400000,swapHours:40,dealerDelta:0,kind:'power_grade'}],
 mf_8s265:[
  {id:'mf8s205_225',name:'AGCO Power 7.4 · 8S.205 EPM',gradeName:'Massey Ferguson 8S.205',hp:225,fuelLph:29,swapCost:2150000,swapHours:32,dealerDelta:-3800000,dealerExtraDays:1,kind:'power_grade'},
  {id:'mf8s225_245',name:'AGCO Power 7.4 · 8S.225 EPM',gradeName:'Massey Ferguson 8S.225',hp:245,fuelLph:31,swapCost:2350000,swapHours:34,dealerDelta:-2600000,dealerExtraDays:1,kind:'power_grade'},
  {id:'mf8s245_265',name:'AGCO Power 7.4 · 8S.245 EPM',gradeName:'Massey Ferguson 8S.245',hp:265,fuelLph:33,swapCost:2550000,swapHours:36,dealerDelta:-1200000,dealerExtraDays:2,kind:'power_grade'},
  {id:'mf8s265_265',name:'AGCO Power 7.4 · 8S.265 nominal',gradeName:'Massey Ferguson 8S.265',hp:265,fuelLph:34,stock:true,swapCost:2700000,swapHours:38,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'},
  {id:'mf8s285_305',name:'AGCO Power 7.4 · 8S.285 EPM',gradeName:'Massey Ferguson 8S.285',hp:305,fuelLph:38,swapCost:3150000,swapHours:42,dealerDelta:2500000,dealerExtraDays:3,kind:'power_grade'}],
 mf_9s370:[
  {id:'mf9s285_285',name:'AGCO Power 8.4 · 9S.285 spec',gradeName:'Massey Ferguson 9S.285',hp:285,fuelLph:38,swapCost:2850000,swapHours:36,dealerDelta:-5700000,dealerExtraDays:1,kind:'power_grade'},
  {id:'mf9s310_310',name:'AGCO Power 8.4 · 9S.310 spec',gradeName:'Massey Ferguson 9S.310',hp:310,fuelLph:41,swapCost:3100000,swapHours:38,dealerDelta:-3900000,dealerExtraDays:1,kind:'power_grade'},
  {id:'mf9s340_340',name:'AGCO Power 8.4 · 9S.340 spec',gradeName:'Massey Ferguson 9S.340',hp:340,fuelLph:44.5,swapCost:3450000,swapHours:40,dealerDelta:-1900000,dealerExtraDays:2,kind:'power_grade'},
  {id:'mf9s370_370',name:'AGCO Power 8.4 · 9S.370 spec',gradeName:'Massey Ferguson 9S.370',hp:370,fuelLph:48,stock:true,swapCost:3800000,swapHours:42,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}]
};
Object.assign(POWERTRAIN_VARIANTS,{
 versatile365_new:[
  {id:'vers_mfwd275_275',name:'Cummins QSL9 · MFWD 275 spec',gradeName:'Versatile 275 MFWD',hp:275,fuelLph:36,swapCost:2500000,swapHours:38,dealerDelta:-3900000,dealerExtraDays:1,kind:'power_grade'},
  {id:'vers_mfwd315_315',name:'Cummins QSL9 · MFWD 315 spec',gradeName:'Versatile 315 MFWD',hp:315,fuelLph:40,swapCost:2850000,swapHours:40,dealerDelta:-2200000,dealerExtraDays:2,kind:'power_grade'},
  {id:'vers_mfwd335_335',name:'Cummins QSL9 · MFWD 335 spec',gradeName:'Versatile 335 MFWD',hp:335,fuelLph:42,swapCost:3050000,swapHours:42,dealerDelta:-1100000,dealerExtraDays:2,kind:'power_grade'},
  {id:'vers_mfwd365_365',name:'Cummins QSL9 · MFWD 365 spec',gradeName:'Versatile 365 MFWD',hp:365,fuelLph:44,stock:true,swapCost:3350000,swapHours:44,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 versatile460_new:[
  {id:'vers4wd380_375',name:'Cummins QSG12 · 380 spec',gradeName:'Versatile 380 4WD',hp:375,fuelLph:50,swapCost:3500000,swapHours:44,dealerDelta:-5200000,dealerExtraDays:1,kind:'power_grade'},
  {id:'vers4wd405_400',name:'Cummins QSG12 · 405 spec',gradeName:'Versatile 405 4WD',hp:400,fuelLph:52,swapCost:3750000,swapHours:46,dealerDelta:-3400000,dealerExtraDays:1,kind:'power_grade'},
  {id:'vers4wd430_430',name:'Cummins QSG12 · 430 spec',gradeName:'Versatile 430 4WD',hp:430,fuelLph:55,swapCost:4050000,swapHours:48,dealerDelta:-1700000,dealerExtraDays:2,kind:'power_grade'},
  {id:'vers4wd460_460',name:'Cummins QSG12 · 460 spec',gradeName:'Versatile 460 4WD',hp:460,fuelLph:58,stock:true,swapCost:4350000,swapHours:50,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 versatile620_new:[
  {id:'vers4wd520_520',name:'Cummins QSX15 · 520 spec',gradeName:'Versatile 520 4WD',hp:520,fuelLph:65,swapCost:4650000,swapHours:50,dealerDelta:-4700000,dealerExtraDays:1,kind:'power_grade'},
  {id:'vers4wd570_570',name:'Cummins QSX15 · 570 spec',gradeName:'Versatile 570 4WD',hp:570,fuelLph:71,swapCost:5100000,swapHours:54,dealerDelta:-2300000,dealerExtraDays:2,kind:'power_grade'},
  {id:'vers4wd610_616',name:'Cummins QSX15 · 610 spec',gradeName:'Versatile 610 4WD',hp:616,fuelLph:76,stock:true,swapCost:5550000,swapHours:58,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'}],
 versatile570dt_new:[
  {id:'versdt520_520',name:'Cummins QSX15 · DeltaTrack 520 spec',gradeName:'Versatile 520DT DeltaTrack',hp:520,fuelLph:66,swapCost:4950000,swapHours:52,dealerDelta:-3600000,dealerExtraDays:1,kind:'power_grade'},
  {id:'versdt570_570',name:'Cummins QSX15 · DeltaTrack 570 spec',gradeName:'Versatile 570DT DeltaTrack',hp:570,fuelLph:72,stock:true,swapCost:5450000,swapHours:56,dealerDelta:0,dealerExtraDays:0,kind:'power_grade'},
  {id:'versdt610_605',name:'Cummins QSX15 · DeltaTrack 610 spec',gradeName:'Versatile 610DT DeltaTrack',hp:605,fuelLph:77,swapCost:5900000,swapHours:60,dealerDelta:2800000,dealerExtraDays:3,kind:'power_grade'}]
});

for(const [modelId,vs] of Object.entries(POWERTRAIN_VARIANTS)){
 if(!ENGINE_VARIANTS[modelId])ENGINE_VARIANTS[modelId]=vs;
}

for(const [modelId,vs] of Object.entries(ENGINE_VARIANTS)){
 const m=C.find(x=>x.id===modelId);if(!m||m.type!=='tractor')continue;
 m.engineVariants=vs;const st=vs.find(v=>v.stock)||vs[0];m.stockEngineId=st.id;
}

// Комбайны — 26 моделей.
[
['sk5','СК-5 «Нива»','domestic_used',100,750000,22,[1973,1990]],['nivaeffect','Нива-Эффект','domestic_used',155,1700000,28,[2002,2017]],['don1200','ДОН-1200','domestic_used',160,1200000,30,[1986,1998]],['don1500a','ДОН-1500А','domestic_used',220,1800000,36,[1986,1995]],['don1500b','ДОН-1500Б','domestic_used',235,2600000,38,[1995,2006]],['enisey1200','Енисей-1200','domestic_used',145,1100000,28,[1985,2003]],['enisey950','Енисей-950','domestic_used',180,1900000,32,[2003,2014]],
['nova340','Ростсельмаш NOVA 340','domestic_new',180,9500000,31,[2022,2026],true],['vector410','Ростсельмаш VECTOR 410','domestic_new',210,12300000,36,[2022,2026],true],['acros550','Ростсельмаш ACROS 550','domestic_new',280,17500000,43,[2022,2026],true],['acros585','Ростсельмаш ACROS 585','domestic_new',300,19500000,46,[2022,2026],true],['acros595','Ростсельмаш ACROS 595 Plus','domestic_new',330,22500000,49,[2022,2026],true],['rsm161','Ростсельмаш RSM 161','domestic_new',400,28500000,56,[2022,2026],true],['torum785','Ростсельмаш TORUM 785','domestic_new',510,36500000,66,[2022,2026],true],
['jd9640wts','John Deere 9640 WTS','foreign_used',250,8200000,39,[2002,2007]],['jd9680wts','John Deere 9680 WTS','foreign_used',330,10300000,47,[2002,2007]],['jd9670sts','John Deere 9670 STS','foreign_used',305,12800000,45,[2008,2012]],['jds660','John Deere S660','foreign_used',320,18500000,47,[2012,2017]],['jds670','John Deere S670','foreign_used',373,22500000,53,[2012,2017]],['jds680','John Deere S680','foreign_used',473,27500000,61,[2012,2017]],['claasmega360','CLAAS Mega 360','foreign_used',260,8500000,40,[2002,2007]],['claastucano450','CLAAS Tucano 450','foreign_used',299,16800000,45,[2008,2018]],['claaslexion600','CLAAS Lexion 600','foreign_used',586,31000000,70,[2005,2012]],['nhcx8080','New Holland CX8080','foreign_used',394,19800000,54,[2007,2015]],['case2388','Case IH Axial-Flow 2388','foreign_used',280,11300000,44,[1998,2006]],
['jds7_800','John Deere S7 800','foreign_new',473,52000000,58,[2024,2026],true],['claastrion750','CLAAS TRION 750','foreign_new',435,49500000,56,[2023,2026],true],['nhcr8_90','New Holland CR8.90','foreign_new',571,56500000,66,[2023,2026],true]
].forEach(x=>cb(...x));

// 0.11.9.21 — old foreign combine layer (1970s–1990s).
[
 ['claas_dominator108sl_used','CLAAS Dominator 108 SL','foreign_used',221,4200000,35,[1985,1989],false],
 ['claas_mega208_used','CLAAS Mega 208','foreign_used',235,5600000,37,[1993,1999],false],
 ['jd9500_used','John Deere 9500','foreign_used',215,4700000,34,[1989,1997],false],
 ['jd9600_used','John Deere 9600','foreign_used',260,5900000,40,[1989,1997],false],
 ['case1680_used','Case IH Axial-Flow 1680','foreign_used',256,4800000,40,[1993,1995],false],
 ['case2188_used','Case IH Axial-Flow 2188','foreign_used',266,6500000,42,[1995,1998],false],
 ['nh_tx66_used','New Holland TX66','foreign_used',271,6200000,42,[1993,2003],false],
 ['mf_40rs_used','Massey Ferguson 40 RS','foreign_used',266,5400000,41,[1992,1996],false],
 ['df_topliner4080_used','DEUTZ-FAHR TopLiner 4080 HTS','foreign_used',256,5700000,40,[1994,2002],false],
 ['fortschritt_e516_used','Fortschritt E 516','foreign_used',228,2400000,37,[1977,1988],false],
 ['bizon_z056_used','Bizon Z056 Super','foreign_used',100,1100000,22,[1976,1994],false]
].forEach(x=>cb(...x));

// Орудия: по 8–10 моделей в ключевых категориях.
const defs={
 stubble:[['КПС-4',90,4,9,280000],['КПЭ-3,8',110,3.8,9,420000],['КШУ-6',130,6,10,680000],['БДМ 4x2П',150,3.9,10,1320000],['БДМ 5x2П',170,4.8,10,1450000],['Кузбасс КШП-8',180,8,10,2200000],['HORSCH Terrano 4 FX',200,4,10,3100000],['Lemken Karat 9/500',220,5,10,4200000],['Väderstad Cultus 500',220,5,10,4500000],['Amazone Cenius 5003-2TX',240,5,10,5200000]],
 disk:[['БДТ-3',80,3,8,260000],['БДТ-7',150,7,8,620000],['БДТ-10',220,10,8,980000],['БДМ 4x2П',150,3.9,11,1320000],['БДМ 5x2П',170,4.8,11,1450000],['БДМ 5x4ПК',270,5.2,10,2780000],['БДМ 6x4П',330,5.6,10,2370000],['БДМ Merus 6',270,6.2,12,3230000],['Lemken Rubin 10/500',240,5,12,5900000],['HORSCH Joker 8 RT',300,8,12,8200000],['Amazone Catros 5003',180,5,14,3900000],['Väderstad Carrier 650',220,6.5,14,5600000]],
 plow:[['ПЛН-3-35',80,1.05,7,180000],['ПЛН-4-35',100,1.4,7,240000],['ПЛН-5-35',130,1.75,7,320000],['ПЛН-8-40',220,3.2,7,750000],['ППО-5-40',160,2,7,980000],['ППО-8-40',250,3.2,7,1450000],['Kverneland 150 B 5',160,2.5,8,2900000],['Kverneland 2500 i-Plough 6',240,3,8,4800000],['Lemken Juwel 8 5+1',220,3,8,4600000],['Lemken Diamant 16 7+1',320,4,8,7200000]],
 deepRip:[['ПЧ-2,5',180,2.5,6,650000],['ПЧ-4,5',280,4.5,6,1100000],['ГР-3,4',250,3.4,6,1350000],['Almaz ПЧ-4,5',300,4.5,7,1900000],['БДМ Чизель 4',280,4,7,2100000],['БДМ Чизель 6',380,6,7,3250000],['HORSCH Tiger 4 AS',280,4,7,5200000],['HORSCH Tiger 6 MT',400,6,7,8400000],['Lemken Karat 12/600',360,6,8,7900000],['Kuhn Performer 5000',350,5,8,7600000]],
 cultivate:[['КПС-4',80,4,10,280000],['КПС-8',140,8,10,610000],['КШУ-8',160,8,11,880000],['КШУ-12',220,12,11,1350000],['Агромастер EuroTill 6',150,6,11,1850000],['Агромастер EuroTill 10',220,10,11,2650000],['Lemken Korund 8/600',150,6,12,3200000],['Amazone Kompaktor 6000',180,6,12,4200000],['Väderstad NZ Aggressive 700',180,7,12,4600000],['HORSCH Cruiser 9 XL',450,9,14,13800000]],
 harrow:[['БЗСС-1.0 сцепка 10 м',80,10,12,220000],['БЗТС-1.0 сцепка 14 м',100,14,12,320000],['БИГ-3',100,6,12,480000],['БМШ-15',130,15,14,850000],['БМШ-21',180,21,14,1250000],['Агромастер БЗГТ-12',120,12,14,1150000]],
 sow_grain:[['СЗ-3,6',80,3.6,8,680000],['СЗ-5,4',100,5.4,8,980000],['СЗП-3,6А',90,3.6,8,790000],['Astra 5.4',110,5.4,9,1800000],['Agrator Disk 6000',180,6,10,4200000],['Кузбасс-Т ПК-8,5',300,8.5,10,7800000],['Amazone Cirrus 6003-2',240,6,12,11500000],['HORSCH Pronto 6 DC',220,6,12,12200000],['Väderstad Rapid A 600S',220,6,12,13500000],['John Deere 1890 10.7m',320,10.7,10,17500000]],
 sow_row:[['СУПН-8',80,5.6,8,520000],['УПС-8',100,5.6,8,820000],['Веста-8',100,5.6,9,1450000],['Вега-8 Профи',120,5.6,9,2200000],['MaterMacc MS 8100',140,5.6,10,4100000],['Kuhn Maxima 3 8R',150,6,10,6800000],['Gaspardo MTR 8',160,5.6,10,3490000],['HORSCH Maestro 8 CV',180,6,12,9900000],['Väderstad Tempo V8',180,6,14,11800000],['John Deere 1725 12R',220,9,10,14500000]],
 fertilizer:[['РУМ-5',80,14,10,420000],['МВУ-5',80,18,10,560000],['МВУ-8',100,24,10,820000],['Amazone ZA-M 1500',90,24,12,1800000],['Amazone ZA-TS 3200',120,36,15,5200000],['Rauch Axis 30.2',100,28,14,3900000],['Kuhn Axis 40.2',110,36,14,4700000],['Bogballe M35W',100,36,14,4600000]],
 sprayer:[['ОП-2000-2-01',80,18,10,950000],['ОПШ-24',100,24,10,1450000],['Туман-2М прицепной',120,24,12,2600000],['Amazone UX 4201',130,28,12,6800000],['Hardi Navigator 4000',120,24,12,5900000],['Kuhn Lexis 3000',120,24,12,5400000],['John Deere M732',150,28,13,7900000],['HORSCH Leeb 5 LT',150,30,14,9800000]]
};

// Корнеплоды: специализированная посадка, формирование гребней и уборка.
defs.ridge=[['КОН-2,8ПМ окучник-гребнеобразователь',80,2.8,7,420000],['Grimme GF 400',120,4,8,2800000],['AVR Multivator HD 4x75',140,3,8,3200000]];
defs.sow_potato=[['СН-4Б картофелесажалка',60,2.8,6,520000],['Grimme GL 34T',90,3,7,2600000],['Grimme GL 420 Exacta',120,3,8,4900000],['AVR Ceres 440',140,3,8,5600000]];
defs.harvest_potato=[['ККУ-2А',80,1.4,3,2100000],['Grimme SE 75-30',90,0.75,4,5600000],['Grimme SE 150-60',150,1.5,5,9800000],['AVR Spirit 9200',180,1.5,6,13500000]];
defs.harvest_beet=[['Grimme Rootster 604 + FT 300',185,3,7,8500000]];
let seq=0; for(const [cat,arr] of Object.entries(defs)){arr.forEach((x,i)=>{const foreign=/John Deere|HORSCH|Lemken|Väderstad|Amazone|Kverneland|Kuhn|Hardi|Rauch|Bogballe|Gaspardo|MaterMacc/.test(x[0]); const modern=i>=Math.floor(arr.length/2); const seg=foreign?(modern?'foreign_new':'foreign_used'):(modern?'domestic_new':'domestic_used'); imp('imp'+(++seq),x[0],seg,cat,x[1],x[2],x[3],x[4],modern?[2018,2026]:[1980,2018],modern,x[5]||.78);});}

// Самоходные уборочные машины корнеплодов. Хранятся в категории агрегатов, но работают без трактора.
[
 ['root_ksp4','КСП-4 картофелеуборочный комбайн','domestic_used','harvest_potato',0,2.8,5,4200000,[1985,2005],false,.72,'potato',180,32],
 ['root_varitron470','Grimme VARITRON 470','foreign_used','harvest_potato',0,3.0,7,24500000,[2014,2022],false,.78,'potato',435,48],
 ['root_dewulf_kwatro','Dewulf Kwatro','foreign_new','harvest_potato',0,3.0,8,39000000,[2023,2026],true,.80,'potato',496,54],
 ['root_ks6b','КС-6Б свеклоуборочный комбайн','domestic_used','harvest_beet',0,2.7,6,3800000,[1980,2005],false,.70,'sugar_beet',150,34],
 ['root_ropa_panther','ROPA Panther 2','foreign_used','harvest_beet',0,2.7,9,36000000,[2015,2022],false,.80,'sugar_beet',700,64],
 ['root_holmer_t4','HOLMER Terra Dos T4-40','foreign_used','harvest_beet',0,5.4,8,42000000,[2014,2022],false,.80,'sugar_beet',626,62],
 ['root_ropa_tiger','ROPA Tiger 6S','foreign_new','harvest_beet',0,4.0,10,62000000,[2023,2026],true,.82,'sugar_beet',768,72]
].forEach(x=>{const [id,name,segment,category,requiredHp,width,speed,price,years,newAvailable,eff,crop,hp,fuelLph]=x;add({id,name,type:'implement',segment,category,requiredHp,width,speed,price,years,newAvailable,eff,crops:[crop],selfPropelled:true,hp,fuelLph});});


// Сенокос и тюковка — от дешёвых прицепных машин до самоходных комплексов.
[
 ['hay_krn21','КРН-2.1 роторная косилка','domestic_used','mower',60,2.1,10,450000,[1985,2020],false,.76],
 ['hay_kdp4','КДП-4.0 косилка-плющилка','domestic_new','mower',90,4.0,12,1450000,[2022,2026],true,.78],
 ['hay_claas_disco3200','CLAAS DISCO 3200','foreign_used','mower',80,3.0,14,2850000,[2012,2022],false,.82],
 ['hay_krone_ec870','KRONE EasyCut B 870','foreign_new','mower',150,8.7,16,9800000,[2023,2026],true,.84],
 ['hay_gvk6_ted','ГВК-6 ворошилка','domestic_used','tedder',55,6.0,10,380000,[1980,2015],false,.76],
 ['hay_kuhn_gf7902','Kuhn GF 7902','foreign_used','tedder',70,7.8,12,2600000,[2012,2022],false,.82],
 ['hay_krone_kwt11','KRONE KWT 11.22','foreign_new','tedder',90,10.9,14,6200000,[2023,2026],true,.84],
 ['hay_gvk6_rake','ГВК-6 валкообразователь','domestic_used','rake',55,6.0,10,360000,[1980,2015],false,.75],
 ['hay_sip_star600','SIP STAR 600/20 T','foreign_used','rake',70,6.0,12,3100000,[2012,2022],false,.82],
 ['hay_krone_swadro810','KRONE Swadro TC 760','foreign_new','rake',80,7.6,14,6400000,[2023,2026],true,.84],
 ['hay_sipma_z224','Sipma Z224/1 малый тюковый пресс','foreign_used','baler',45,1.8,7,620000,[1990,2015],false,.72],
 ['hay_prf145','ПРФ-145 пресс-подборщик','domestic_used','baler',80,1.5,7,780000,[1995,2015],false,.72],
 ['hay_pr180','ПР-180 рулонный пресс','domestic_new','baler',100,1.8,8,1850000,[2022,2026],true,.77],
 ['hay_claas_rollant455','CLAAS ROLLANT 455','foreign_used','baler',120,2.1,10,6200000,[2014,2022],false,.82],
 ['hay_krone_bigpack','KRONE BiG Pack 1290 HDP VC','foreign_new','baler',220,2.35,12,18500000,[2023,2026],true,.86],
 ['hay_pt12','ПТ-12 тюковоз','domestic_new','bale_transport',90,7.0,14,1450000,[2022,2026],true,.80],
 ['hay_fl902','Fliegl DPW 210 тюковоз','foreign_new','bale_transport',120,10.0,16,4800000,[2023,2026],true,.84]
].forEach(x=>imp(...x));
// Самоходные валковые косилки / косилки-плющилки. В каталоге оформлены единым рабочим комплексом с жаткой.
[
 ['hay_macdon_m1170','MacDon M1170 + R116 валковая жатка','foreign_used',173,9.1,18,24500000,[2018,2023],false,.86,31],
 ['hay_krone_bigm450','KRONE BiG M 450','foreign_new',449,9.9,20,52000000,[2023,2026],true,.88,58]
].forEach(x=>{const [id,name,segment,hp,width,speed,price,years,newAvailable,eff,fuelLph]=x;add({id,name,type:'implement',segment,category:'mower',requiredHp:0,width,speed,price,years,newAvailable,eff,selfPropelled:true,hp,fuelLph});});

// 0.11.9.50 — исторические валковые жатки теперь являются именно жатками комбайна,
// а не тракторными орудиями. Это позволяет старому комбайну работать как энергосредство
// раздельной уборки без включения молотилки.
[
 ['zhvn6a','ЖВН-6А валковая жатка','domestic_used','grain_windrow',6.0,8.0,480000,[1975,2005],false],
 ['zhvn6v','ЖВН-6В валковая жатка','domestic_used','grain_windrow',6.0,10.0,650000,[1990,2018],false],
 ['zhn6b_don','ЖН-6Б-01 валковая жатка для ДОН','domestic_used','grain_windrow',6.0,10.0,720000,[1990,2018],false]
].forEach(x=>hd(...x));

// Жатки и адаптеры.
[
['powerstream5','Power Stream 500','domestic_new','grain',5,6,2200000,[2022,2026],true],['powerstream7','Power Stream 700','domestic_new','grain',7,6,3200000,[2022,2026],true],['powerstream9','Power Stream 900','domestic_new','grain',9,6,4500000,[2022,2026],true],['jd622r','John Deere 622R','foreign_used','grain',6.7,6,3800000,[2012,2020]],['jd630r','John Deere 630R','foreign_used','grain',9.1,6,6200000,[2012,2020]],['claasvario770','CLAAS VARIO 770','foreign_used','grain',7.7,6,6100000,[2014,2021]],['claasvario930','CLAAS VARIO 930','foreign_new','grain',9.3,6,11800000,[2023,2026],true],['nhvarifeed760','New Holland Varifeed 760CG','foreign_new','grain',7.6,6,10600000,[2023,2026],true],
['psp8','ПСП-8','domestic_used','sunflower',5.6,6,650000,[1990,2014]],['falcon8','Ростсельмаш Falcon 8','domestic_new','sunflower',5.6,7,3600000,[2022,2026],true],['sunmaster870','Geringhoff SunLite 8','foreign_used','sunflower',5.6,8,5900000,[2014,2021]],
['kmd6','КМД-6','domestic_used','corn',4.2,6,750000,[1990,2012]],['argus870','Ростсельмаш ARGUS 870','domestic_new','corn',5.6,6,5200000,[2022,2026],true],['jd608c','John Deere 608C','foreign_used','corn',6.1,6,6500000,[2010,2020]],['jd712fc','John Deere 712FC','foreign_new','corn',9.1,6,12800000,[2023,2026],true],['claascorio875','CLAAS CORIO 875','foreign_new','corn',6,6,11800000,[2023,2026],true]
].forEach(x=>hd(...x));

// 0.11.9.47 — платформы-подборщики для раздельной уборки.
// 0.11.9.49 — исторический слой: дешёвый Б/У вход для старых отечественных и импортных комбайнов.
[
 ['ppt3a_legacy','ППТ-3А полотенный подборщик','domestic_used','pickup_grain',3.0,7.0,280000,[1975,2005],false],
 ['pp34_legacy','ПП-3,4 платформа-подборщик (Б/У)','domestic_used','pickup_grain',3.4,8.0,520000,[1992,2020],false],
 ['jd_914p_pickup','John Deere 914P Pick-Up','foreign_used','pickup_grain',4.27,10.0,950000,[1990,2005],false],
 ['case_1015_pickup','Case IH 1015 Pick-Up','foreign_used','pickup_grain',4.3,10.0,850000,[1986,2014],false],
 ['swa_pick340','Ростсельмаш SWA PICK 340','domestic_new','pickup_grain',3.4,13.0,2850000,[2022,2026],true],
 ['swa_pick430','Ростсельмаш SWA PICK 430','domestic_new','pickup_grain',4.3,13.0,3350000,[2022,2026],true],
 ['macdon_pw8','MacDon PW8 Pick-Up Header','foreign_new','pickup_grain',4.6,14.0,6900000,[2015,2026],true],
 ['case_3016_pickup','Case IH 3016 Pick-Up Header','foreign_new','pickup_grain',4.6,13.0,6200000,[2012,2026],true],
 ['jd_615p_pickup','John Deere 615P Belt Pickup','foreign_new','pickup_grain',4.57,13.0,6400000,[2010,2026],true],
 ['claas_swathup450','CLAAS SWATH UP 450','foreign_new','pickup_grain',4.5,14.0,7100000,[2015,2026],true],
 ['nh_790cp15','New Holland 790CP 15 ft','foreign_new','pickup_grain',4.6,14.0,6500000,[2015,2026],true]
].forEach(x=>hd(...x));


// 0.11.9.21 — period-correct grain headers for the historical foreign combines.
[
 ['claas_c450_legacy','CLAAS C 450','foreign_used','grain',4.5,5.5,1250000,[1985,1999],false],
 ['claas_c510_legacy','CLAAS C 510','foreign_used','grain',5.1,5.5,1450000,[1985,1999],false],
 ['jd_920_legacy','John Deere 920 Flex','foreign_used','grain',6.1,5.5,1550000,[1989,1998],false],
 ['jd_925_legacy','John Deere 925 Flex','foreign_used','grain',7.6,5.5,1850000,[1989,1998],false],
 ['case_1020_20_legacy','Case IH 1020 20 ft','foreign_used','grain',6.1,5.5,1500000,[1988,1999],false],
 ['case_1020_25_legacy','Case IH 1020 25 ft','foreign_used','grain',7.6,5.5,1850000,[1988,1999],false],
 ['nh_highcapacity_17_legacy','New Holland High-Capacity 17 ft','foreign_used','grain',5.2,5.5,1400000,[1993,2003],false],
 ['nh_highcapacity_20_legacy','New Holland High-Capacity 20 ft','foreign_used','grain',6.1,5.5,1650000,[1993,2003],false],
 ['mf_powerflow16_legacy','Massey Ferguson PowerFlow 16 ft','foreign_used','grain',4.9,5.5,1450000,[1990,1998],false],
 ['df_54_legacy','DEUTZ-FAHR 5.4 m grain header','foreign_used','grain',5.4,5.5,1500000,[1990,2002],false],
 ['fortschritt_e516_67_header','Fortschritt E 516 6,7 m Schneidwerk','foreign_used','grain',6.7,5.0,760000,[1977,1988],false],
 ['bizon_z056_42_header','Bizon Z056 4,2 m grain header','foreign_used','grain',4.2,5.0,420000,[1976,1994],false]
].forEach(x=>hd(...x));

// 0.11.8.31 — переработка жаток: прямое комбайнирование отделено от валковых жаток.
// ЖВН-6 как валковая жатка раздельной уборки удалена из текущего каталога, а не хранится как legacy-запись.
[
 // СССР / РФ: штатные жатки прямого комбайнирования.
 ['niva_jkn41','ЖКН-4,1 (СК-5 «Нива»)','domestic_used','grain',4.1,5.5,230000,[1973,2005]],
 ['niva_jkn5','ЖКН-5 (СК-5 «Нива»)','domestic_used','grain',5.0,5.5,290000,[1973,2010]],
 ['niva_effect6','Жатка «Нива-Эффект» 6 м','domestic_used','grain',6.0,6.0,470000,[2002,2017]],
 ['don_zhu6','ЖУ-6 (ДОН)','domestic_used','grain',6.0,6.0,420000,[1986,2010]],
 ['don_zhu7','ЖУ-7 (ДОН)','domestic_used','grain',7.0,6.0,520000,[1986,2010]],
 ['don_zhu86','ЖУ-8,6 (ДОН)','domestic_used','grain',8.6,6.0,690000,[1986,2010]],
 ['enisey_jkn4','ЖКН-4 (Енисей)','domestic_used','grain',4.0,5.5,240000,[1985,2005]],
 ['enisey_jkn5','ЖКН-5 (Енисей)','domestic_used','grain',5.0,5.5,300000,[1985,2014]],
 ['enisey_jkn6','ЖКН-6 (Енисей)','domestic_used','grain',6.0,5.5,390000,[1985,2014]],
 ['enisey_jkn7','ЖКН-7 (Енисей-950)','domestic_used','grain',7.0,5.5,490000,[2003,2014]],
 // ДОН: специализированные адаптеры для подсолнечника и кукурузы.
 ['psp10','ПСП-10','domestic_used','sunflower',5.6,6.0,620000,[1988,2008]],
 ['psp810','ПСП-810 Falcon','domestic_used','sunflower',5.6,6.5,980000,[2000,2016]],
 ['pzs8','ПЗС-8','domestic_used','sunflower',5.6,6.0,720000,[1995,2015]],
 ['zhns6','ЖНС-6 безрядковая','domestic_used','sunflower',6.0,6.5,900000,[2000,2018]],
 ['zhns74','ЖНС-7,4 безрядковая','domestic_used','sunflower',7.4,6.5,1150000,[2000,2018]],
 ['kms6','КМС-6','domestic_used','corn',4.2,6.0,820000,[1990,2015]],
 ['kms8','КМС-8','domestic_used','corn',5.6,6.0,1050000,[1995,2018]],
 // Ростсельмаш: расширенная заводская линейка.
 ['powerstream4','Power Stream 400','domestic_new','grain',4.0,6.0,1850000,[2022,2026],true],
 ['powerstream6','Power Stream 600','domestic_new','grain',6.0,6.0,2700000,[2022,2026],true],
 ['floatstream6','FLOAT STREAM 600','domestic_new','grain',6.0,6.5,3900000,[2022,2026],true],
 ['floatstream7','FLOAT STREAM 700','domestic_new','grain',7.0,6.5,4800000,[2022,2026],true],
 ['floatstream9','FLOAT STREAM 900','domestic_new','grain',9.0,6.5,6500000,[2022,2026],true],
 ['draperstream9','DRAPER STREAM 900','domestic_new','grain',9.0,7.0,7200000,[2022,2026],true],
 ['falcon6','Ростсельмаш FALCON 6','domestic_new','sunflower',4.2,7.0,3100000,[2022,2026],true],
 ['falcon12','Ростсельмаш FALCON 12','domestic_new','sunflower',8.4,7.0,6100000,[2022,2026],true],
 ['sunstream65','Ростсельмаш SUN STREAM 650','domestic_new','sunflower',6.5,7.5,5200000,[2022,2026],true],
 ['sunstream78','Ростсельмаш SUN STREAM 780','domestic_new','sunflower',7.8,7.5,6400000,[2022,2026],true],
 ['sunstream92','Ростсельмаш SUN STREAM 920','domestic_new','sunflower',9.2,7.5,7900000,[2022,2026],true],
 ['sunstream119','Ростсельмаш SUN STREAM 1190','domestic_new','sunflower',11.9,7.5,9800000,[2022,2026],true],
 ['argus670','Ростсельмаш ARGUS 670','domestic_new','corn',4.2,6.5,4200000,[2022,2026],true],
 ['argus1270','Ростсельмаш ARGUS 1270','domestic_new','corn',8.4,6.5,7600000,[2022,2026],true],
 ['cornstream670','Ростсельмаш CORN STREAM 670','domestic_new','corn',4.2,7.0,5100000,[2023,2026],true],
 ['cornstream870','Ростсельмаш CORN STREAM 870','domestic_new','corn',5.6,7.0,6300000,[2023,2026],true],
 ['cornstream1270','Ростсельмаш CORN STREAM 1270','domestic_new','corn',8.4,7.0,9200000,[2023,2026],true],
 // Дополнительные OEM-варианты западных производителей.
 ['jd625r','John Deere 625R','foreign_used','grain',7.6,6.0,4700000,[2010,2020]],
 ['jd635r','John Deere 635R','foreign_used','grain',10.7,6.0,7600000,[2012,2021]],
 ['jd640fd','John Deere 640FD HydraFlex Draper','foreign_used','grain',12.2,7.0,10500000,[2014,2022]],
 ['jd606c','John Deere 606C','foreign_used','corn',4.6,6.5,4900000,[2010,2020]],
 ['jd612c','John Deere 612C','foreign_used','corn',9.1,6.5,7900000,[2010,2022]],
 ['jd616c','John Deere 616C','foreign_new','corn',12.2,6.5,14500000,[2023,2026],true],
 ['claas_c600','CLAAS C 600','foreign_used','grain',6.0,6.0,3900000,[2002,2015]],
 ['claasvario1080','CLAAS VARIO 1080','foreign_new','grain',10.8,6.5,13900000,[2023,2026],true],
 ['claascorio1275','CLAAS CORIO 1275 CONSPEED','foreign_new','corn',9.0,6.5,15800000,[2023,2026],true],
 ['nh_varifeed1070','New Holland Varifeed 10.7 m','foreign_new','grain',10.7,6.5,13900000,[2023,2026],true],
 ['nh_varifeed1250','New Holland Varifeed 12.5 m','foreign_new','grain',12.5,6.5,16500000,[2023,2026],true],
 ['nh_corn6','New Holland 6-row maize header','foreign_used','corn',4.5,6.5,5600000,[2012,2021]],
 ['nh_corn8','New Holland 8-row maize header','foreign_used','corn',6.0,6.5,7600000,[2012,2022]],
 ['nh_9212','New Holland 9212 12-row','foreign_new','corn',9.0,7.0,14800000,[2024,2026],true],
 ['case3020_20','Case IH 3020 20 ft','foreign_used','grain',6.1,6.0,4200000,[2008,2018]],
 ['case3020_30','Case IH 3020 30 ft','foreign_used','grain',9.1,6.0,6700000,[2008,2020]],
 ['case4412','Case IH 4412','foreign_used','corn',9.1,6.5,8700000,[2014,2022]],
 ['case4416','Case IH 4416','foreign_used','corn',12.2,6.5,11200000,[2015,2023]],
 ['case_c516','Case IH C516','foreign_new','corn',12.2,7.0,16800000,[2024,2026],true],
 ['fendt_powerflow92','Fendt PowerFlow 9.2 m','foreign_used','grain',9.2,6.5,7300000,[2014,2022]],
 ['mf_freeflow62','Massey Ferguson FreeFlow 6.2 m','foreign_used','grain',6.2,6.0,4300000,[2014,2022]],
 ['mf_powerflow68','Massey Ferguson PowerFlow 6.8 m','foreign_used','grain',6.8,6.5,5100000,[2014,2022]],
 ['mf_powerflow122','Massey Ferguson PowerFlow 12.2 m','foreign_new','grain',12.2,6.5,15100000,[2024,2026],true],
 ['df_varicrop54','DEUTZ-FAHR DH 5.4','foreign_used','grain',5.4,6.0,4200000,[2014,2022]],
 ['df_varicrop9','DEUTZ-FAHR DH 9.0','foreign_new','grain',9.0,6.5,10800000,[2024,2026],true],
 // Универсальные MacDon FlexDraper: установка через completion/adaptor package.
 ['macdon_fd225','MacDon FD225 FlexDraper 25 ft','foreign_new','grain',7.6,7.0,9800000,[2023,2026],true],
 ['macdon_fd230','MacDon FD230 FlexDraper 30 ft','foreign_new','grain',9.1,7.0,11600000,[2023,2026],true],
 ['macdon_fd235','MacDon FD235 FlexDraper 35 ft','foreign_new','grain',10.7,7.0,13700000,[2023,2026],true],
 ['macdon_fd240','MacDon FD240 FlexDraper 40 ft','foreign_new','grain',12.2,7.0,15900000,[2023,2026],true],
 ['macdon_fd245','MacDon FD245 FlexDraper 45 ft','foreign_new','grain',13.7,7.0,18500000,[2023,2026],true],
 // Capello: универсальные кукурузные и безрядковые подсолнечниковые жатки через адаптер.
 ['capello_quasar4','Capello Quasar F4 (4 ряда) — кукурузная жатка','foreign_new','corn',3.2,7.0,6200000,[2023,2026],true],
 ['capello_quasar6','Capello Quasar F6 (6 рядов) — кукурузная жатка','foreign_new','corn',4.7,7.0,7800000,[2023,2026],true],
 ['capello_quasar8','Capello Quasar F8 (8 рядов) — кукурузная жатка','foreign_new','corn',6.2,7.0,9900000,[2023,2026],true],
 ['capello_quasar12','Capello Quasar F12 (12 рядов) — кукурузная жатка','foreign_new','corn',9.0,7.0,14200000,[2023,2026],true],
 ['capello_hel57','Capello Helianthus Pro 5.7 — жатка для подсолнечника','foreign_new','sunflower',5.7,8.0,8600000,[2023,2026],true],
 ['capello_hel75','Capello Helianthus Pro 7.5 — жатка для подсолнечника','foreign_new','sunflower',7.5,8.0,10500000,[2023,2026],true],
 ['capello_hel94','Capello Helianthus Pro 9.4 — жатка для подсолнечника','foreign_new','sunflower',9.4,8.0,12800000,[2023,2026],true],
 ['capello_hel119','Capello Helianthus Pro 12.0 — жатка для подсолнечника','foreign_new','sunflower',11.9,8.0,15600000,[2023,2026],true],
 // 0.11.8.32 — уточнённые заводские варианты после модельного аудита.
 ['floatstream5','Ростсельмаш FLOAT STREAM 500','domestic_new','grain',5.0,6.5,3300000,[2022,2026],true],
 ['argus570','Ростсельмаш ARGUS 570','domestic_new','corn',3.5,6.5,3500000,[2022,2026],true],
 ['sunstream49','Ростсельмаш SUN STREAM 490','domestic_new','sunflower',4.9,7.5,4100000,[2022,2026],true],
 ['sunstream105','Ростсельмаш SUN STREAM 1050','domestic_new','sunflower',10.5,7.5,8900000,[2022,2026],true],
 ['claas_vario660_used','CLAAS VARIO 660','foreign_used','grain',6.68,6.0,5200000,[2008,2018]],
 ['claas_vario1050_used','CLAAS VARIO 1050','foreign_used','grain',10.5,6.0,8500000,[2007,2014]],
 ['claas_convio1230','CLAAS CONVIO FLEX 1230','foreign_new','grain',12.3,7.0,17600000,[2024,2026],true],
 ['claas_sunspeed8','CLAAS SUNSPEED 8-row','foreign_used','sunflower',6.0,7.0,6900000,[2010,2022]],
 ['jd_rdf35','John Deere RDF 35','foreign_new','grain',10.7,7.0,14800000,[2024,2026],true],
 ['jd_rdf40','John Deere RDF 40','foreign_new','grain',12.2,7.0,16900000,[2024,2026],true],
 ['case_g500v35','Case IH G500V 35 ft','foreign_new','grain',10.7,7.0,15400000,[2025,2026],true],
 ['case_g500v41','Case IH G500V 41 ft','foreign_new','grain',12.5,7.0,17800000,[2025,2026],true],
 ['fendt_powerflow107','Fendt PowerFlow 10.7 m','foreign_new','grain',10.7,6.5,13900000,[2024,2026],true],
 ['fendt_powerflow122','Fendt PowerFlow 12.2 m','foreign_new','grain',12.2,6.5,15900000,[2024,2026],true],
 ['mf_powerflow107','Massey Ferguson PowerFlow 10.7 m','foreign_new','grain',10.7,6.5,13900000,[2024,2026],true],
 ['challenger_pf18','Challenger PowerFlow 18 ft','foreign_used','grain',5.5,6.0,2600000,[2006,2014]],
 ['challenger_pf20','Challenger PowerFlow 20 ft','foreign_used','grain',6.1,6.0,3000000,[2006,2014]],
 ['challenger_pf22','Challenger PowerFlow 22 ft','foreign_used','grain',6.7,6.0,3400000,[2006,2014]],
 ['challenger_pf25','Challenger PowerFlow 25 ft','foreign_used','grain',7.6,6.0,3900000,[2006,2014]],
 ['df_dh63','DEUTZ-FAHR DH 6.3','foreign_used','grain',6.3,6.0,5100000,[2014,2023]],
 ['df_dh72','DEUTZ-FAHR DH 7.2','foreign_used','grain',7.2,6.0,6100000,[2014,2023]],
 ['df_varicrop50','DEUTZ-FAHR VARICrop 5.0','foreign_used','grain',5.0,6.2,4700000,[2014,2023]],
 ['df_varicrop55','DEUTZ-FAHR VARICrop 5.5','foreign_used','grain',5.5,6.2,5200000,[2014,2023]],
 ['df_varicrop65','DEUTZ-FAHR VARICrop 6.5','foreign_used','grain',6.5,6.2,6500000,[2014,2023]]
].forEach(x=>hd(...x));


// 0.11.9.74 — road transport expansion: agricultural Urals, ZIL-45065 and fifth-wheel grain logistics.
// Tractor units carry no crop by themselves; their working capacity comes from an explicitly compatible semi-trailer.
[
 ['ural5557_agro','Урал-5557 сельхозник','domestic_used',7.0,10.0,75,1450000,31,[1983,2005]],
 ['ural_next_58314s','Урал NEXT 58314S зерновоз','domestic_new',10.5,15.5,75,11800000,30,[2021,2026],true],
 ['zil45065','ЗИЛ-ММЗ-45065 сельхозсамосвал','domestic_used',5.7,6.0,75,650000,29,[1990,2005]]
].forEach(x=>truck(...x));

[
 {id:'kamaz5410_tractor',name:'КамАЗ-5410 седельный тягач',segment:'domestic_used',hp:210,roadSpeed:80,price:950000,fuelLph:32,years:[1980,1996]},
 {id:'maz5432_tractor',name:'МАЗ-5432 седельный тягач',segment:'domestic_used',hp:330,roadSpeed:90,price:1650000,fuelLph:31,years:[1988,2011]},
 {id:'volvo_fh12_420_tractor',name:'Volvo FH12 420 седельный тягач',segment:'foreign_used',hp:420,roadSpeed:90,price:5200000,fuelLph:27,years:[2002,2012]},
 {id:'scania_r420_tractor',name:'Scania R420 седельный тягач',segment:'foreign_used',hp:420,roadSpeed:90,price:5900000,fuelLph:27,years:[2005,2014]},
 {id:'kamaz54901_tractor',name:'КамАЗ К5 54901 седельный тягач',segment:'domestic_new',hp:482,roadSpeed:90,price:12500000,fuelLph:25,years:[2023,2026],newAvailable:true},
 {id:'maz5440c9_tractor',name:'МАЗ-5440C9 седельный тягач',segment:'domestic_new',hp:420,roadSpeed:90,price:11200000,fuelLph:27,years:[2022,2026],newAvailable:true},
 {id:'man_tgx18520_tractor',name:'MAN TGX 18.520 седельный тягач',segment:'foreign_new',hp:520,roadSpeed:90,price:21500000,fuelLph:24,years:[2024,2026],newAvailable:true},
 {id:'volvo_fh_aero500_tractor',name:'Volvo FH Aero 500 седельный тягач',segment:'foreign_new',hp:500,roadSpeed:90,price:23800000,fuelLph:23,years:[2024,2026],newAvailable:true}
].forEach(x=>add({...x,type:'truck',capacityT:0,bodyM3:0,tractorUnit:true,agCargoEligible:false,driveType:'wheeled',availableDriveTypes:['wheeled']}));

[
 ['odaz9370_grain','ОдАЗ-9370 зерновой бортовой полуприцеп','domestic_used',14.2,24.0,0,75,520000,[1976,1997],false],
 ['tonar9523_used','Тонар-9523 зерновоз (Б/У)','domestic_used',28.8,30.0,0,80,4200000,[2010,2022],false],
 ['maz934700_grain','МАЗ-934700-4010-010 зерновоз','domestic_new',21.0,60.0,0,80,7900000,[2024,2026],true],
 ['tonar9523_al_grain','Тонар-9523 алюминиевый зерновоз','domestic_new',31.0,42.0,0,80,8600000,[2024,2026],true],
 ['wielton_nw3_grain_used','Wielton NW 3 A зерновоз (Б/У)','foreign_used',27.0,48.0,0,80,6500000,[2014,2022],false],
 ['stas_agrostar_used','STAS AgroSTAR зерновоз (Б/У)','foreign_used',28.0,50.0,0,80,7600000,[2016,2023],false],
 ['stas_agrostar_new','STAS AgroSTAR 60 зерновоз','foreign_new',28.5,60.0,0,80,13900000,[2024,2026],true],
 ['sespel_db4u70','Сеспель DB4U70 зерновоз 70 м³','domestic_new',28.05,70.0,0,80,11800000,[2024,2026],true]
].forEach(x=>trailer(...x));

// Логистика урожая. Параметры адаптированы для игрового баланса; ГАЗ-53 и ЗИЛ-130 — дешёвые стартовые машины.
[
 ['gaz53','ГАЗ-САЗ-3507 сельхозсамосвал','domestic_used',4.4,5.0,55,420000,24,[1989,2008]],
 ['zil130','ЗИЛ-ММЗ-554М (ЗИЛ-130) сельхозсамосвал','domestic_used',5.5,5.0,60,520000,28,[1964,1994]],
 ['kamaz55102','КамАЗ-55102 сельхозник','domestic_used',7.0,7.9,65,1100000,30,[1980,2008]],
 ['maz5551','МАЗ-5551 сельхозсамосвал','domestic_used',9.7,5.5,65,1350000,29,[1985,2012]],
 ['kamaz45143','КамАЗ-45143 зерновоз','domestic_new',15,15.4,75,7000000,28,[2020,2026],true],
 ['kamaz65115','КамАЗ-65115 зерновоз','domestic_new',15,10.7,75,7950000,31,[2020,2026],true],
 ['kamaz6520grain','КамАЗ-6520 зерновоз','domestic_new',20,20.0,75,7900000,36,[2020,2026],true],
 ['maz6501grain','МАЗ-6501С9 зерновоз','domestic_new',19,32,80,9200000,35,[2020,2026],true],
 ['man_tgs26','MAN TGS 26.440 зерновоз','foreign_used',14.5,36,82,7800000,31,[2012,2020]],
 ['scania_g440','Scania G440 зерновоз','foreign_used',15,38,82,8500000,30,[2011,2019]],
 ['volvo_fm','Volvo FM 440 зерновоз','foreign_used',15,38,82,8200000,30,[2011,2019]]
].forEach(x=>truck(...x));
[
 ['2pts4','2ПТС-4','domestic_used',4,5.0,50,30,220000,[1975,2015]],
 ['2pts6','2ПТС-6','domestic_used',6,4.6,70,30,360000,[1985,2018]],
 ['pst9','ПСТ-9','domestic_new',9,10.5,80,25,1150000,[2020,2026],true],
 ['pst12','ПСТ-12','domestic_new',12,12.5,105,25,1650000,[2020,2026],true],
 ['pst18','ПСТ-18','domestic_new',18,15.5,150,25,2650000,[2020,2026],true]
].forEach(x=>trailer(...x));
// 0.11.9.74 — one physical 2PTS trailer can also serve as a bale platform; no duplicate catalog card is required.
{const m=C.find(x=>x.id==='2pts4');if(m){m.baleFormats=['small_square','round','large_square'];m.baleCapacity={small_square:120,round:10,large_square:8};m.baleRole='convertible_platform';m.balePlatformUpgradePrice=95000;}}
{const m=C.find(x=>x.id==='2pts6');if(m){m.baleFormats=['small_square','round','large_square'];m.baleCapacity={small_square:180,round:14,large_square:10};m.baleRole='convertible_platform';m.balePlatformUpgradePrice=120000;}}

// 0.11.9.24 — tractor-trailer fleet expansion. Models selected to fill real payload/volume gaps without duplicating near-identical variants.
[
 ['2pts9','2ПТС-9','domestic_used',9,8.5,110,35,520000,[1985,2005]],
 ['2pts11','2ПТС-11','domestic_used',11,11.0,130,35,690000,[1991,1998]],
 ['3pts12','3ПТС-12','domestic_used',12,11.6,150,35,820000,[1985,1998]],
 ['pronar_t653_2','Pronar T653/2','foreign_new',6,4.1,47,30,2450000,[2024,2026],true],
 ['pronar_t680','Pronar T680','foreign_new',13.1,9.8,110,40,5350000,[2024,2026],true],
 ['joskin_transcap_5500_15','JOSKIN Trans-CAP 5500/15BC125','foreign_new',14,15.5,120,40,6900000,[2024,2026],true],
 ['krampe_bigbody650','Krampe BigBody 650','foreign_new',15.5,21.9,140,40,9800000,[2024,2026],true],
 ['joskin_transspace_9200','JOSKIN Trans-SPACE 9200/30TRC150','foreign_new',26,30.8,220,40,15400000,[2024,2026],true],
 ['krampe_bigbody900','Krampe BigBody 900','foreign_new',25.7,30.3,190,40,16800000,[2025,2026],true]
].forEach(x=>trailer(...x));


// 0.11.9.03 — дорожные самосвальные прицепы для сельхозгрузовиков.
// truckTrailerFor ограничивает совместимость реальными семействами автопоездов.
[
 ['gkb8527','ГКБ-8527 самосвальный прицеп','domestic_used',7.0,7.9,0,65,520000,[1975,1995],false],
 ['nefaz8560_old','НЕФАЗ-8560 сельхозприцеп','domestic_used',7.0,7.8,0,65,720000,[1985,2008],false],
 ['maz857100','МАЗ-857100-010 сельхозприцеп','domestic_used',10.6,8.85,0,70,1250000,[1995,2012],false],
 ['nefaz8560_new','НЕФАЗ-8560-02 сельхозприцеп','domestic_new',11.15,15.0,0,75,3900000,[2020,2026],true],
 ['szap8551_ural','СЗАП-8551-02М сельхозприцеп','domestic_new',12.0,18.8,0,80,3150000,[2018,2026],true]
].forEach(x=>trailer(...x));

[
 ['pbn16','ПБН-16 бункер-перегрузчик','domestic_new',16,21,140,25,3.0,3300000,[2020,2026],true],
 ['pbn20','ПБН-20 бункер-перегрузчик','domestic_new',20,28,180,25,3.5,4200000,[2020,2026],true],
 ['pbn30','ПБН-30 бункер-перегрузчик','domestic_new',30,40,240,25,4.5,6100000,[2020,2026],true],
 ['kinze1050','Kinze 1050 бункер-перегрузчик','foreign_used',28,37,220,25,5.0,7200000,[2012,2020]]
].forEach(x=>cart(...x));


// 0.11.8.85 — catalog gap expansion: documented domestic tillage/logistics and missing transport classes.
// Exact market prices are normalized for game balance; widths/capacities/power classes follow real product families.
[
 ['bdm_ks8m','БДМ-Агро КС-8М','domestic_new','cultivate',200,8.12,11,2070000,[2024,2026],true,.86],
 ['bdm_ks12m','БДМ-Агро КС-12М','domestic_new','cultivate',285,12.0,11,3520000,[2024,2026],true,.87],
 ['bdm_ks14m','БДМ-Агро КС-14М','domestic_new','cultivate',330,13.9,11,3780000,[2024,2026],true,.87],
 ['bdm_pchn32m','БДМ-Агро ПЧН-3,2М','domestic_new','deepRip',290,3.2,7,925000,[2024,2026],true,.86],
 ['bdm_pchn45','БДМ-Агро ПЧН-4,5','domestic_new','deepRip',380,4.5,7,1190000,[2024,2026],true,.87],
 ['bdm_gkr25','БДМ-Агро ГКР-2,5','domestic_new','deepRip',320,2.4,6,1270000,[2024,2026],true,.87],
 ['bdm_gkr4','БДМ-Агро ГКР-4','domestic_new','deepRip',430,4.0,6,1665000,[2024,2026],true,.88],
 ['bdm_ksu6ps','БДМ-Агро КСУ-6ПС','domestic_new','stubble',340,5.71,10,4540000,[2024,2026],true,.87],
 ['bdm_ksu9ps','БДМ-Агро КСУ-9ПС','domestic_new','stubble',450,9.0,10,5390000,[2024,2026],true,.88],
 ['rsm_sh8200','Ростсельмаш SH-8200 / AT-8','domestic_new','sow_grain',260,8.2,10,9800000,[2024,2026],true,.89],
 ['rsm_sh12200','Ростсельмаш SH-12200 / AT-11','domestic_new','sow_grain',390,12.2,10,13900000,[2024,2026],true,.90],
 ['jd915_vripper_used','John Deere 915 V-Ripper (Б/У)','foreign_used','deepRip',220,4.6,7,4200000,[2008,2018],false,.82],
 ['kelly_diamond_1200_used','Kelly Diamond Harrow 12 m (Б/У)','foreign_used','harrow',180,12.0,12,5200000,[2014,2022],false,.83],
 ['einbock_aerostar1200','Einböck AEROSTAR-EXACT 1200','foreign_new','harrow',120,12.0,12,6900000,[2024,2026],true,.88],
 ['kleine_kr2_used','Kleine KR2 (Б/У)','foreign_used','harvest_beet',80,0.9,6,3200000,[1994,2005],false,.78]
].forEach(x=>imp(...x));

// 0.11.9.35 — harrow principle gap-fill. Real families; prices normalized for game economy.
[
 ['kelly_2006_6m_used','Kelly Diamond Harrow 2006 · 6,4 м (Б/У)','foreign_used','harrow',140,6.4,13,3200000,[2010,2022],false,.82],
 ['kelly_3009_9m_used','Kelly Diamond Harrow 3009 · 9 м (Б/У)','foreign_used','harrow',170,9.0,13,4300000,[2012,2023],false,.83],
 ['einbock_aerostar600','Einböck AEROSTAR-EXACT 600','foreign_new','harrow',70,6.0,12,3900000,[2024,2026],true,.87],
 ['einbock_aerostar900','Einböck AEROSTAR-EXACT 900','foreign_new','harrow',90,9.0,12,5200000,[2024,2026],true,.88]
].forEach(x=>imp(...x));

// Domestic self-propelled machines that fill real crop-care / forage gaps without new mechanics.
[
 ['rsm_ksu1','Ростсельмаш КСУ 1','domestic_new','mower',0,9.0,14,15800000,[2024,2026],true,.88,180,24],
 ['tuman3','Пегас-Агро Туман-3','domestic_new','sprayer',0,28.0,20,13900000,[2024,2026],true,.88,97,16]
].forEach(x=>{const [id,name,segment,category,requiredHp,width,speed,price,years,newAvailable,eff,hp,fuelLph]=x;add({id,name,type:'implement',segment,category,requiredHp,width,speed,price,years,newAvailable,eff,selfPropelled:true,hp,fuelLph});});

// 0.11.9.50 — исторические самоходные валкователи зерновых.
// КПС-5Г и Fortschritt работают как энергосредства со специальной зерновой валковой жаткой;
// западные draper-swather комплексы представлены как единая рабочая машина.
[
 ['kps5g_grain','КПС-5Г + ЖВН-6А','domestic_used',80,6.0,8.0,1100000,[1978,1995],false,.83,14],
 ['fortschritt_e303_grain','Fortschritt E-303 + зерновая валковая жатка','foreign_used',65,6.0,8.6,1450000,[1983,1993],false,.78,11],
 ['versatile_4400_grain','Versatile 4400 Hydrostatic · 20 ft','foreign_used',95,6.1,9.0,1750000,[1978,1985],false,.74,18],
 ['hesston_8100_grain','Hesston 8100 · 30 ft draper','foreign_used',77,9.1,10.0,2650000,[1988,1996],false,.76,10]
].forEach(x=>{const [id,name,segment,hp,width,speed,price,years,newAvailable,eff,fuelLph]=x;add({id,name,type:'implement',segment,category:'grain_windrower',requiredHp:0,width,speed,price,years,newAvailable,eff,selfPropelled:true,hp,fuelLph,grainWindrow:true,grainWindrowGatherWidthM:width,supportedCategories:['grain_windrower']});});

// Modern agricultural transport and transfer equipment.
[
 ['tonar6328','ТОНАР-6328 автомобиль-зерновоз','domestic_new',21,28,80,12800000,34,[2024,2026],true],
 ['man_tgs_agro','MAN TGS 33.540 Agro 6×4 зерновоз','foreign_new',20,38,85,21500000,30,[2025,2026],true],
 ['scania_super500_grain','Scania Super 500 8×4 зерновоз','foreign_new',24,44,85,23800000,29,[2025,2026],true]
].forEach(x=>truck(...x));
[
 ['tonar_pt9','Тонар ПТ-9','domestic_new',8,16,80,35,1850000,[2024,2026],true],
 ['tonar_pt2','Тонар ПТ-2','domestic_new',20,25,160,35,4650000,[2024,2026],true],
 ['fliegl_asw271_used','Fliegl ASW 271 (Б/У)','foreign_used',20,35,150,40,4200000,[2014,2022],false],
 ['fliegl_asw281','Fliegl ASW 281','foreign_new',22,40,180,40,8900000,[2024,2026],true]
].forEach(x=>trailer(...x));
[
 ['tonar_pt5','Тонар ПТ5 бункер-перегрузчик','domestic_new',17.35,22,120,25,7.5,5200000,[2024,2026],true],
 ['tonar_pt11','Тонар ПТ11 бункер-перегрузчик','domestic_new',22.5,30,150,25,7.5,6900000,[2024,2026],true],
 ['kinze1321','Kinze 1321 Harvest Commander','foreign_new',31,44,300,30,7.5,14500000,[2024,2026],true]
].forEach(x=>cart(...x));



// 0.11.6.0 — расширенные западные брендовые линейки.
// Точные паспортные данные упрощены до игровых характеристик; модельные ряды и классы основаны на реальной технике.
// Старые поколения представлены как Б/У, актуальные — доступны у дилера.
[
 ['claas_arion650','CLAAS ARION 650','foreign_used',175,7800000,24,[2007,2017],false],
 ['claas_arion6190','CLAAS ARION 6.190 CMATIC','foreign_new',205,25800000,27,[2026,2026],true],
 ['claas_xerion4500','CLAAS XERION 4500','foreign_used',483,21500000,55,[2014,2022],false],
 ['claas_xerion12650','CLAAS XERION 12.650','foreign_new',653,63500000,72,[2025,2026],true],
 ['nh_t7270','New Holland T7.270','foreign_used',269,10800000,34,[2012,2020],false],
 ['nh_t7340','New Holland T7.340','foreign_new',340,32500000,41,[2025,2026],true],
 ['nh_t8410','New Holland T8.410','foreign_used',370,17800000,49,[2016,2022],false],
 ['nh_t8435','New Holland T8.435','foreign_new',435,44500000,55,[2024,2026],true],
 ['case_puma185','Case IH Puma 185','foreign_used',185,7600000,27,[2010,2018],false],
 ['case_puma260','Case IH Puma 260','foreign_new',280,27800000,35,[2024,2026],true],
 ['case_steiger450','Case IH Steiger 450','foreign_used',450,20500000,58,[2012,2021],false],
 ['case_quadtrac715','Case IH Steiger 715 Quadtrac','foreign_new',778,72000000,82,[2024,2026],true],
 ['fendt716','Fendt 716 Vario','foreign_used',165,8800000,22,[2006,2015],false],
 ['fendt728','Fendt 728 Vario','foreign_new',303,34500000,34,[2024,2026],true],
 ['fendt936','Fendt 936 Vario','foreign_used',360,16800000,46,[2008,2018],false],
 ['fendt942','Fendt 942 Vario','foreign_new',415,46200000,52,[2024,2026],true]
].forEach(x=>tr(...x));

[
 ['claas_lexion570','CLAAS LEXION 570','foreign_used',385,16500000,54,[2004,2012],false],
 ['claas_lexion8600','CLAAS LEXION 8600','foreign_new',626,68500000,72,[2025,2026],true],
 ['nh_cx790','New Holland CX7.90','foreign_used',374,20500000,52,[2015,2022],false],
 ['nh_cr1090','New Holland CR10.90','foreign_new',700,69500000,79,[2024,2026],true],
 ['case_8120','Case IH Axial-Flow 8120','foreign_used',420,22500000,56,[2009,2015],false],
 ['case_af11','Case IH AF11','foreign_new',775,78500000,83,[2025,2026],true],
 ['fendt_9490x','Fendt 9490 X','foreign_used',496,25800000,61,[2014,2020],false],
 ['fendt_ideal9t','Fendt IDEAL 9T','foreign_new',647,74800000,75,[2024,2026],true]
].forEach(x=>cb(...x));

// Почвообработка и посев — Case IH + PÖTTINGER.
[
 ['brand_case_speedtiller335','Case IH Speed-Tiller 335','foreign_used','disk',180,4.2,12,5200000,[2016,2022],false,.82],
 ['brand_case_speedtiller475','Case IH Speed-Tiller 475','foreign_new','disk',320,8.5,14,12800000,[2024,2026],true,.86],
 ['brand_case_tigermate200','Case IH Tiger-Mate 200','foreign_used','cultivate',220,8.0,11,6200000,[2014,2021],false,.82],
 ['brand_case_tigermate255','Case IH Tiger-Mate 255','foreign_new','cultivate',330,12.0,12,13200000,[2024,2026],true,.86],
 ['brand_case_er1255','Case IH Early Riser 1255','foreign_used','sow_row',180,8.0,10,8400000,[2013,2021],false,.82],
 ['brand_case_er2150','Case IH 2150 Early Riser','foreign_new','sow_row',280,12.0,12,18200000,[2024,2026],true,.86],
 ['pot_synkro3030','PÖTTINGER SYNKRO 3030','foreign_used','stubble',120,3.0,10,2850000,[2013,2021],false,.82],
 ['pot_synkro5030','PÖTTINGER SYNKRO 5030 T','foreign_new','stubble',250,5.0,11,7200000,[2024,2026],true,.86],
 ['pot_terrdisc5001','PÖTTINGER TERRADISC 5001 K','foreign_used','disk',180,5.0,12,5800000,[2015,2022],false,.83],
 ['pot_terrdisc10001','PÖTTINGER TERRADISC 10001 T','foreign_new','disk',350,10.0,14,14500000,[2024,2026],true,.87],
 ['pot_servo35s','PÖTTINGER SERVO 35 S','foreign_used','plow',150,2.5,8,3200000,[2014,2021],false,.82],
 ['pot_servot6000','PÖTTINGER SERVO T 6000','foreign_new','plow',280,4.0,8,7800000,[2024,2026],true,.86],
 ['pot_vitasem302','PÖTTINGER VITASEM 302 A','foreign_used','sow_grain',100,3.0,9,3400000,[2015,2022],false,.82],
 ['pot_aerosem6002','PÖTTINGER AEROSEM 6002 ADD','foreign_new','sow_grain',220,6.0,12,13200000,[2024,2026],true,.87]
].forEach(x=>imp(...x));


// 0.11.8.67 — тяжёлые агрегаты для тракторов 450–780 л.с.
[
 ['horsch_joker12rt','HORSCH Joker 12 RT','foreign_new','disk',480,12.15,15,19500000,[2024,2026],true,.90],
 ['salford_5200_29','Salford 5200 Enforcer 29 ft','foreign_new','disk',435,8.84,14,18000000,[2024,2026],true,.89],
 ['salford_5200_36','Salford 5200 Enforcer 36 ft','foreign_new','disk',540,10.97,14,24000000,[2024,2026],true,.90],
 ['salford_5200_39','Salford 5200 Enforcer 39 ft','foreign_new','disk',585,11.89,14,28000000,[2024,2026],true,.90],
 ['salford_i2100_50','Salford Independent Series I-2100 50 ft','foreign_new','disk',600,15.24,14,22500000,[2024,2026],true,.90],
 ['salford_i2100_60','Salford Independent Series I-2100 60 ft','foreign_new','disk',720,18.29,14,27500000,[2024,2026],true,.90],
 ['jd_2730_26','John Deere 2730 Combination Ripper 26 ft','foreign_new','deepRip',620,7.92,9,32000000,[2024,2026],true,.89],
 ['case_ecolotiger875_26','Case IH Ecolo-Tiger 875 26 ft','foreign_new','deepRip',600,7.92,9,28000000,[2024,2026],true,.89],
 ['jd_2230fh_695','John Deere 2230FH Field Cultivator 69.5 ft','foreign_new','cultivate',560,21.18,14,24000000,[2024,2026],true,.90],
 ['horsch_sprinter18nt','HORSCH Sprinter 18 NT','foreign_new','sow_grain',500,18.0,10,31000000,[2024,2026],true,.90],
 ['horsch_panther460','HORSCH Panther 460 60 ft','foreign_new','sow_grain',600,18.29,13,35000000,[2024,2026],true,.90]
].forEach(x=>imp(...x));

// 0.11.8.68 — аудит пробелов каталога: промежуточные классы мощности и специализированные агрегаты.
[
 ['horsch_cruiser7xl','HORSCH Cruiser 7 XL','foreign_new','cultivate',390,7.5,14,11500000,[2024,2026],true,.89],
 ['horsch_cruiser12xl','HORSCH Cruiser 12 XL','foreign_new','cultivate',500,12.0,14,18500000,[2024,2026],true,.90],
 ['bednar_terraland4000','BEDNAR TERRALAND TO 4000 HM','foreign_new','deepRip',320,4.0,7.5,10500000,[2024,2026],true,.88],
 ['bednar_terraland5000','BEDNAR TERRALAND TO 5000 HM','foreign_new','deepRip',450,5.0,8.5,13500000,[2024,2026],true,.89],
 ['bednar_terraland6000','BEDNAR TERRALAND TO 6000 HM','foreign_new','deepRip',560,6.0,8.5,17000000,[2024,2026],true,.90],
 ['kverneland_rw10','Kverneland RW 10-furrow','foreign_new','plow',300,5.0,8,10500000,[2024,2026],true,.87],
 ['kverneland_rw12','Kverneland RW 12-furrow','foreign_new','plow',360,6.0,8,13000000,[2024,2026],true,.88],
 ['horsch_terrano7fm','HORSCH Terrano 7 FM','foreign_new','stubble',395,7.0,11,12000000,[2024,2026],true,.89],
 ['bednar_swifterdisc12400','BEDNAR SWIFTERDISC XE 12400 PROFI','foreign_new','stubble',500,12.4,15,19000000,[2024,2026],true,.90],
 ['horsch_sprinter15nt','HORSCH Sprinter 15 NT','foreign_new','sow_grain',400,15.0,10,27000000,[2024,2026],true,.90],
 ['vaderstad_tempo_l24','Väderstad Tempo L 24','foreign_new','sow_row',350,12.2,15,24000000,[2024,2026],true,.90],
 ['krone_easycut_b1250cv','KRONE EasyCut B 1250 CV Fold Collect','foreign_new','mower',300,10.45,16,15500000,[2024,2026],true,.89],
 ['krone_bigpack_hdp2_1290vc','KRONE BiG Pack HDP II 1290 VC','foreign_new','baler',258,2.35,13,26000000,[2024,2026],true,.89]
].forEach(x=>imp(...x));

// Сенокос и прессование — полноценные пары Б/У / дилер.
[
 ['claas_volto80','CLAAS VOLTO 80','foreign_used','tedder',70,7.7,12,2850000,[2013,2021],false,.82],
 ['claas_volto1100','CLAAS VOLTO 1100','foreign_new','tedder',90,10.7,14,6500000,[2024,2026],true,.86],
 ['claas_liner2700','CLAAS LINER 2700','foreign_used','rake',75,7.4,12,4200000,[2014,2021],false,.82],
 ['claas_liner4700','CLAAS LINER 4700','foreign_new','rake',140,12.7,14,11800000,[2024,2026],true,.87],
 ['claas_quadrant5200','CLAAS QUADRANT 5200','foreign_used','baler',180,2.35,11,11800000,[2017,2022],false,.84],
 ['claas_quadrant5300','CLAAS QUADRANT 5300 EVOLUTION','foreign_new','baler',220,2.35,12,20500000,[2024,2026],true,.87],
 ['nh_h7450','New Holland H7450 Discbine','foreign_used','mower',100,4.0,13,3900000,[2013,2020],false,.82],
 ['nh_megacutter860','New Holland MegaCutter 860','foreign_new','mower',180,8.6,16,11200000,[2024,2026],true,.86],
 ['nh_proted880','New Holland ProTed 880','foreign_used','tedder',75,8.7,12,3200000,[2014,2021],false,.82],
 ['nh_proted1022','New Holland ProTed 1022','foreign_new','tedder',90,10.2,14,6200000,[2024,2026],true,.86],
 ['nh_prorotorc760','New Holland ProRotor C 760','foreign_used','rake',80,7.6,12,4300000,[2015,2021],false,.82],
 ['nh_prorotorc1290','New Holland ProRotor C 1290','foreign_new','rake',120,12.5,14,9800000,[2024,2026],true,.86],
 ['nh_br7060','New Holland BR7060','foreign_used','baler',90,2.0,9,3600000,[2008,2016],false,.80],
 ['nh_bigbaler1290','New Holland BigBaler 1290 High Density','foreign_new','baler',240,2.35,12,22500000,[2024,2026],true,.88],
 ['fendt_slicer310','Fendt Slicer 310 FQ','foreign_used','mower',90,3.1,14,3500000,[2015,2021],false,.82],
 ['fendt_slicer991','Fendt Slicer 991 TL','foreign_new','mower',200,9.3,16,11900000,[2024,2026],true,.87],
 ['fendt_twister8608','Fendt Twister 8608 DN','foreign_used','tedder',75,8.6,12,3400000,[2015,2021],false,.82],
 ['fendt_lotus1250','Fendt Lotus 1250 T','foreign_new','tedder',90,12.5,14,7900000,[2024,2026],true,.87],
 ['fendt_former671','Fendt Former 671','foreign_used','rake',75,6.7,12,3800000,[2015,2021],false,.82],
 ['fendt_former14055','Fendt Former 14055 PRO','foreign_new','rake',130,13.8,14,11500000,[2024,2026],true,.87],
 ['fendt_rotana160','Fendt Rotana 160 V','foreign_used','baler',100,2.0,10,5600000,[2018,2022],false,.83],
 ['fendt_squadra1290','Fendt Squadra 1290 UD','foreign_new','baler',230,2.35,12,21800000,[2024,2026],true,.87],
 ['pot_novacat302','PÖTTINGER NOVACAT 302 ED','foreign_used','mower',90,3.0,14,3100000,[2014,2021],false,.82],
 ['pot_novacatv10000','PÖTTINGER NOVACAT V 10000','foreign_new','mower',200,9.6,16,12800000,[2024,2026],true,.87],
 ['pot_hit891','PÖTTINGER HIT 8.91','foreign_used','tedder',75,8.9,12,3400000,[2014,2021],false,.82],
 ['pot_hitht11100','PÖTTINGER HIT HT 11100','foreign_new','tedder',95,10.7,14,6800000,[2024,2026],true,.87],
 ['pot_top762','PÖTTINGER TOP 762 C','foreign_used','rake',80,7.6,12,4200000,[2015,2021],false,.82],
 ['pot_top1403','PÖTTINGER TOP 1403 C','foreign_new','rake',120,14.0,14,9800000,[2024,2026],true,.87],
 ['pot_impress155','PÖTTINGER IMPRESS 155 V PRO','foreign_used','baler',110,2.1,10,6900000,[2017,2022],false,.83],
 ['pot_impress3190','PÖTTINGER IMPRESS 3190 V PRO','foreign_new','baler',160,2.1,11,12800000,[2024,2026],true,.87]
].forEach(x=>imp(...x));

// Самоходные опрыскиватели — работают без трактора в существующей операции СЗР.
[
 ['case_patriot3330','Case IH Patriot 3330','foreign_used','sprayer',0,30,20,16500000,[2012,2020],false,.84,250,32],
 ['case_patriot4450','Case IH Patriot 4450','foreign_new','sprayer',0,36,22,36500000,[2025,2026],true,.89,390,44],
 ['nh_guardian300','New Holland Guardian SP.300F','foreign_used','sprayer',0,30,20,15800000,[2013,2020],false,.84,300,36],
 ['nh_guardian410','New Holland Guardian SP.410F','foreign_new','sprayer',0,36,22,35200000,[2024,2026],true,.89,410,46],
 ['fendt_rogator635','Fendt Rogator 635','foreign_used','sprayer',0,36,20,20500000,[2018,2022],false,.85,354,40],
 ['fendt_rogator645','Fendt Rogator 645','foreign_new','sprayer',0,36,22,38500000,[2024,2026],true,.89,395,44]
].forEach(x=>{const [id,name,segment,category,requiredHp,width,speed,price,years,newAvailable,eff,hp,fuelLph]=x;add({id,name,type:'implement',segment,category,requiredHp,width,speed,price,years,newAvailable,eff,selfPropelled:true,hp,fuelLph});});

// Брендовые зерновые жатки: старые поколения на вторичке, актуальные — у дилеров.
[
 ['claas_vario680_used','CLAAS VARIO 680','foreign_used','grain',6.8,6,5200000,[2013,2020],false],
 ['claas_convio1080','CLAAS CONVIO FLEX 1080','foreign_new','grain',10.8,7,16800000,[2024,2026],true],
 ['nh_varifeed740_used','New Holland Varifeed 740','foreign_used','grain',7.4,6,5400000,[2013,2020],false],
 ['nh_varifeed915','New Holland Varifeed 915','foreign_new','grain',9.15,7,14200000,[2024,2026],true],
 ['case_3050_25','Case IH 3050 25 ft','foreign_used','grain',7.6,6,5600000,[2012,2020],false],
 ['case_3162_35','Case IH 3162 TerraFlex 35 ft','foreign_new','grain',10.7,7,15800000,[2024,2026],true],
 ['fendt_powerflow770','Fendt PowerFlow 770','foreign_used','grain',7.7,6,5900000,[2015,2021],false],
 ['fendt_superflow1070','Fendt SuperFlow 1070','foreign_new','grain',10.7,7,16200000,[2024,2026],true]
].forEach(x=>hd(...x));


// 0.11.7.0 — LEMKEN / AMAZONE, СЗС-2.1, БДМ, PALESSE и Versatile.
// Характеристики адаптированы под игровой баланс, но ширины/классы мощности
// опираются на реальные продуктовые семейства.

// LEMKEN: обработка почвы, посев, удобрения и crop care.
[
 ['lemken_karat9_used','LEMKEN Karat 9/400','foreign_used','stubble',170,4.0,10,3600000,[2012,2020],false,.82],
 ['lemken_karat10_new','LEMKEN Karat 10/500','foreign_new','stubble',220,5.0,12,6900000,[2024,2026],true,.87],
 ['lemken_heliodor9_used','LEMKEN Heliodor 9/600','foreign_used','disk',180,6.0,13,4200000,[2013,2021],false,.83],
 ['lemken_rubin10_new','LEMKEN Rubin 10/700 KUA','foreign_new','disk',300,7.0,14,9800000,[2024,2026],true,.88],
 ['lemken_juwel8_used','LEMKEN Juwel 8 5+1','foreign_used','plow',210,3.0,8,4500000,[2013,2021],false,.82],
 ['lemken_diamant16_new','LEMKEN Diamant 16 7+1','foreign_new','plow',320,4.0,9,7900000,[2024,2026],true,.87],
 ['lemken_korund8_used','LEMKEN Korund 8/600','foreign_used','cultivate',150,6.0,12,3300000,[2013,2020],false,.82],
 ['lemken_kompaktor_new','LEMKEN System-Kompaktor K 600 A','foreign_new','cultivate',190,6.0,13,6100000,[2024,2026],true,.87],
 ['lemken_saphir9_used','LEMKEN Saphir 9/400','foreign_used','sow_grain',135,4.0,9,4900000,[2014,2021],false,.83],
 ['lemken_solitairdt_new','LEMKEN Solitair DT 600','foreign_new','sow_grain',240,6.0,13,13900000,[2024,2026],true,.89],
 ['lemken_azurit9_used','LEMKEN Azurit 9','foreign_used','sow_row',160,6.0,11,6900000,[2018,2022],false,.84],
 ['lemken_azurit10_new','LEMKEN Azurit 10','foreign_new','sow_row',180,6.0,13,11800000,[2024,2026],true,.89],
 ['lemken_spica8_used','LEMKEN Spica 8','foreign_used','fertilizer',80,18,12,1900000,[2018,2023],false,.84],
 ['lemken_polaris14_new','LEMKEN Polaris 14','foreign_new','fertilizer',120,44,15,7200000,[2025,2026],true,.90],
 ['lemken_albatros9_used','LEMKEN Albatros 9','foreign_used','sprayer',130,27,12,4900000,[2012,2018],false,.82],
 ['lemken_sprayhub_new','LEMKEN SprayHub + SprayKit','foreign_new','sprayer',110,18,12,6900000,[2024,2026],true,.89]
].forEach(x=>imp(...x));

// AMAZONE: плуги, обработка почвы, посев, удобрения и опрыскиватели.
[
 ['amazone_cayros_used','AMAZONE Cayros XMS 950','foreign_used','plow',210,3.0,8,4400000,[2014,2021],false,.83],
 ['amazone_teres_new','AMAZONE Teres 300 Onland','foreign_new','plow',300,3.3,9,7800000,[2026,2026],true,.89],
 ['amazone_catros6001_used','AMAZONE Catros+ 6001-2','foreign_used','disk',180,6.0,14,4900000,[2015,2021],false,.84],
 ['amazone_catros12003_new','AMAZONE Catros+ 12003-2TS','foreign_new','disk',360,12.0,15,14800000,[2024,2026],true,.90],
 ['amazone_cenius4003_used','AMAZONE Cenius 4003-2 Super','foreign_used','stubble',180,4.0,11,4600000,[2015,2021],false,.84],
 ['amazone_ceus6000_new','AMAZONE Ceus 6000-2TX','foreign_new','stubble',300,6.0,12,10900000,[2024,2026],true,.90],
 ['amazone_cenio3000_used','AMAZONE Cenio 3000','foreign_used','cultivate',120,3.0,11,3200000,[2018,2022],false,.84],
 ['amazone_cenius5004_new','AMAZONE Cenius 5004-2TX','foreign_new','cultivate',240,5.0,12,7900000,[2024,2026],true,.89],
 ['amazone_d9_used','AMAZONE D9 4000 Super','foreign_used','sow_grain',100,4.0,9,3800000,[2012,2020],false,.82],
 ['amazone_cirrus_new','AMAZONE Cirrus 6004-2C','foreign_new','sow_grain',240,6.0,13,14500000,[2024,2026],true,.90],
 ['amazone_ed_used','AMAZONE ED 602-K','foreign_used','sow_row',140,6.0,10,5700000,[2012,2019],false,.82],
 ['amazone_precea_new','AMAZONE Precea 6000-2CC','foreign_new','sow_row',180,6.0,14,12900000,[2024,2026],true,.90],
 ['amazone_zam_used','AMAZONE ZA-M 1501','foreign_used','fertilizer',90,24,12,2100000,[2012,2020],false,.83],
 ['amazone_zats_new','AMAZONE ZA-TS 4200 ProfisPro','foreign_new','fertilizer',120,42,16,7400000,[2024,2026],true,.91],
 ['amazone_ux4201_used','AMAZONE UX 4201 Super','foreign_used','sprayer',130,28,13,6500000,[2016,2022],false,.85]
].forEach(x=>imp(...x));
{
 const x=['amazone_pantera4504_new','AMAZONE Pantera 4504','foreign_new','sprayer',0,36,22,39500000,[2025,2026],true,.91,218,29];
 const [id,name,segment,category,requiredHp,width,speed,price,years,newAvailable,eff,hp,fuelLph]=x;
 add({id,name,type:'implement',segment,category,requiredHp,width,speed,price,years,newAvailable,eff,selfPropelled:true,hp,fuelLph});
}

// СЗС-2.1: дешёвая зерновая сеялка-культиватор в трёх размерах агрегата.
// Одинарная — малый трактор, ×3 — Т-150К класс, ×5 — К-701/300 л.с.
[
 ['szs21_used','СЗС-2,1 (Б/У)','domestic_used','sow_grain',55,2.1,10,260000,[1985,2015],false,.72],
 ['szs21_new','СЗС-2,1М','domestic_new','sow_grain',55,2.1,10,520000,[2024,2026],true,.78],
 ['szs21x3_used','СЗС-2,1 ×3 сцепка (Б/У)','domestic_used','sow_grain',150,6.3,9,720000,[1985,2015],false,.72],
 ['szs21x3_new','СЗС-2,1М ×3 сцепка','domestic_new','sow_grain',150,6.3,10,1350000,[2024,2026],true,.79],
 ['szs21x5_used','СЗС-2,1 ×5 сцепка (Б/У)','domestic_used','sow_grain',250,10.5,8.5,1180000,[1985,2015],false,.70],
 ['szs21x5_new','СЗС-2,1М ×5 сцепка','domestic_new','sow_grain',250,10.5,9.5,2150000,[2024,2026],true,.79]
].forEach(x=>imp(...x));

// БДМ-Агро: линейка дискаторов под тракторы от 70 до 300+ л.с.
[
 ['bdm24x2_used','БДМ-2,4×2П (Б/У)','domestic_used','disk',70,2.4,10,320000,[2006,2020],false,.73],
 ['bdm24x2_new','БДМ-2,4×2П','domestic_new','disk',70,2.4,11,490000,[2024,2026],true,.80],
 ['bdm4x2_used','БДМ-4×2П (Б/У)','domestic_used','disk',150,3.88,11,820000,[2008,2021],false,.74],
 ['bdm4x2_new','БДМ-4×2П','domestic_new','disk',150,3.88,12,1320000,[2024,2026],true,.81],
 ['bdm5x2_new','БДМ-5×2П','domestic_new','disk',160,4.76,12,1450000,[2024,2026],true,.81],
 ['bdm7x2_new','БДМ-7×2П','domestic_new','disk',260,7.12,12,2720000,[2024,2026],true,.82],
 ['bdm32x4_used','БДМ-3,2×4П (Б/У)','domestic_used','disk',130,3.2,10,990000,[2008,2021],false,.74],
 ['bdm32x4_new','БДМ-3,2×4П','domestic_new','disk',130,3.2,11,1650000,[2024,2026],true,.82],
 ['bdm6x4_used','БДМ-6×4П (Б/У)','domestic_used','disk',250,5.6,10,1650000,[2008,2021],false,.73],
 ['bdm6x4_new','БДМ-6×4П','domestic_new','disk',250,5.6,11,2850000,[2024,2026],true,.82]
].forEach(x=>imp(...x));

// Versatile — от средних MFWD до тяжёлых 4WD / DeltaTrack.
[
 ['versatile280_used','Versatile 280','foreign_used',280,8500000,39,[2008,2016],false],
 ['versatile375_used','Versatile 375 4WD','foreign_used',375,12800000,52,[2010,2018],false],
 ['versatile450_used','Versatile 450 4WD','foreign_used',450,17600000,61,[2013,2020],false],
 ['versatile365_new','Versatile 365 MFWD','foreign_new',365,31800000,44,[2024,2026],true],
 ['versatile460_new','Versatile 460 4WD','foreign_new',460,43800000,58,[2024,2026],true],
 ['versatile620_new','Versatile 620 4WD','foreign_new',616,59800000,76,[2024,2026],true],
 ['versatile570dt_new','Versatile 570DT DeltaTrack','foreign_new',570,68500000,72,[2024,2026],true]
].forEach(x=>tr(...x));

// Гомсельмаш / ПАЛЕССЕ: популярная в РФ белорусская зерноуборочная линейка.
[
 ['palesse_gs05_used','ПАЛЕССЕ GS05','domestic_used',210,3900000,34,[2006,2015],false],
 ['palesse_gs12_used','ПАЛЕССЕ GS12','domestic_used',330,8500000,47,[2008,2021],false],
 ['palesse_gs12a1_new','ПАЛЕССЕ GS12A1','domestic_new',330,19800000,45,[2023,2026],true],
 ['palesse_gs16_new','ПАЛЕССЕ GS16','domestic_new',530,31500000,64,[2023,2026],true]
].forEach(x=>cb(...x));
[
 ['palesse_zhzk5_used','ПАЛЕССЕ ЖЗК-5','domestic_new','grain',5.0,6,2300000,[2018,2026],true],
 ['palesse_zhzk6_used','ПАЛЕССЕ ЖЗК-6-5','domestic_used','grain',6.0,6,1900000,[2008,2021],false],
 ['palesse_zhzk75_new','ПАЛЕССЕ ЖЗК-7,5В','domestic_new','grain',7.5,7,3900000,[2023,2026],true],
 ['palesse_zhzk9_new','ПАЛЕССЕ ЖЗК-9','domestic_new','grain',9.2,7,5200000,[2023,2026],true]
].forEach(x=>hd(...x));


// 0.11.8.2 — расширение доступной кормозаготовительной и корнеплодной техники.
[
 // Косилки
 ['hay_kdn210_used','КДН-210 дисковая косилка (Б/У)','domestic_used','mower',60,2.1,10,310000,[1995,2018],false,.74],
 ['hay_kdn210_new','КДН-210','domestic_new','mower',60,2.1,12,889000,[2024,2026],true,.80],
 ['hay_kpr9_used','КПР-9 «Палессе» (Б/У)','domestic_used','mower',180,9.0,12,1450000,[2005,2018],false,.76],
 ['hay_kpr9_new','КПР-9','domestic_new','mower',180,9.0,14,5180000,[2024,2026],true,.82],
 // Ворошилки
 ['hay_gvk6_ted_old','ГВК-6А ворошилка (Б/У)','domestic_used','tedder',45,6.0,9,210000,[1980,2012],false,.72],
 ['hay_gvr630_ted_used','ГВР-6,3 ворошилка (Б/У)','domestic_used','tedder',55,6.3,10,390000,[1998,2020],false,.75],
 ['hay_gvr630_ted_new','ГВР-6,3М ворошилка','domestic_new','tedder',55,6.3,12,790000,[2024,2026],true,.81],
 ['hay_bulava9_new','Булавка-9 ворошилка','domestic_new','tedder',80,9.0,13,1450000,[2024,2026],true,.82],
 // Валкообразователи
 ['hay_gvk6_rake_old','ГВК-6А валкообразователь (Б/У)','domestic_used','rake',45,6.0,9,190000,[1980,2012],false,.72],
 ['hay_gvr630_rake_used','ГВР-6,3 валкообразователь (Б/У)','domestic_used','rake',55,6.3,10,360000,[1998,2020],false,.75],
 ['hay_gvr630_rake_new','ГВР-6,3М валкообразователь','domestic_new','rake',55,6.3,12,760000,[2024,2026],true,.81],
 ['hay_gvr9_new','ГВР-9 российский валкообразователь','domestic_new','rake',80,9.0,13,1550000,[2024,2026],true,.82],
 // Пресс-подборщики
 ['hay_prp16_used','ПРП-1,6 рулонный пресс (Б/У)','domestic_used','baler',55,1.5,6,330000,[1985,2005],false,.68],
 ['hay_prf110_used','ПРФ-110 рулонный пресс (Б/У)','domestic_used','baler',55,1.4,7,480000,[1995,2015],false,.71],
 ['hay_prf145m_used','ПРФ-145 (поздний Б/У)','domestic_used','baler',80,1.5,8,650000,[2005,2020],false,.75],
 ['hay_prf145m_new','ПРФ-145М','domestic_new','baler',80,1.5,9,1350000,[2024,2026],true,.81],
 ['hay_prf180_new','ПРФ-180М','domestic_new','baler',100,1.8,9,1950000,[2024,2026],true,.82],
 ['hay_tukan1600_new','TUKAN 1600 пресс малых прямоугольных тюков','domestic_new','baler',90,1.8,9,1295000,[2024,2026],true,.83],
 // Тюковозы — width ниже используется только как условная габаритная величина и скрывается UI.
 ['hay_pts9_old','ПТС-9 платформа-тюковоз (Б/У)','domestic_used','bale_transport',100,2.5,14,520000,[1990,2015],false,.74],
 ['hay_pt8_new','ПТ-8 тюковоз','domestic_new','bale_transport',80,2.5,14,980000,[2024,2026],true,.80],
 ['hay_pt16_new','ПТ-16 тюковоз','domestic_new','bale_transport',120,2.5,16,1850000,[2024,2026],true,.82],
 ['hay_pronar_t026_used','Pronar T026 тюковоз (Б/У)','foreign_used','bale_transport',90,2.5,16,1650000,[2012,2021],false,.80],
 ['hay_krone_bale_trailer_used','KRONE BaleCollect Transport (Б/У)','foreign_used','bale_transport',120,2.5,18,3200000,[2016,2022],false,.82],
 // Картофель: дешёвые Б/У и отечественные альтернативы
 ['root_sn4b_used','СН-4Б картофелесажалка (Б/У)','domestic_used','sow_potato',60,2.8,6,240000,[1980,2005],false,.68],
 ['root_kku2a_used','ККУ-2А картофелеуборочный комбайн (Б/У)','domestic_used','harvest_potato',80,1.4,3.5,950000,[1985,2008],false,.68],
 ['root_kpk2_used','КПК-2-01 картофелеуборочный комбайн (Б/У)','domestic_used','harvest_potato',100,1.4,4,1350000,[1995,2015],false,.71],
 ['root_kpk2_new','КПК-2-01М картофелеуборочный комбайн','domestic_new','harvest_potato',100,1.4,5,4125000,[2024,2026],true,.79],
 // Свёкла: советские/СНГ Б/У и более доступная современная техника
 ['root_rks6_used','РКС-6 свеклоуборочная машина (Б/У)','domestic_used','harvest_beet',150,2.7,5,1250000,[1980,2002],false,.66],
 ['root_ks6b_new','КС-6БМ модернизированный','domestic_new','harvest_beet',180,2.7,7,5600000,[2024,2026],true,.78]
].forEach(x=>imp(...x));

// 0.11.8.6 — доступная современная отечественная техника для малого и среднего хозяйства.
[
 ['fert_mvu5m_new','МВУ-5М разбрасыватель удобрений','domestic_new','fertilizer',80,18,12,1150000,[2024,2026],true,.80],
 ['fert_rum8m_new','РУМ-8М разбрасыватель удобрений','domestic_new','fertilizer',100,24,12,1650000,[2024,2026],true,.81],
 ['spr_op2000m_new','ОП-2000М опрыскиватель','domestic_new','sprayer',80,18,12,1650000,[2024,2026],true,.80],
 ['spr_opsh24m_new','ОПШ-24М опрыскиватель','domestic_new','sprayer',100,24,12,2350000,[2024,2026],true,.81],
 ['row_vesta8_new','Веста-8М сеялка точного высева','domestic_new','sow_row',100,5.6,9,2100000,[2024,2026],true,.80],
 ['row_vega8_new','Вега-8 Профи М','domestic_new','sow_row',120,5.6,10,2800000,[2024,2026],true,.82],
 ['pot_sn4bm_new','СН-4БМ картофелесажалка','domestic_new','sow_potato',60,2.8,7,1150000,[2024,2026],true,.79],
 ['pot_kon28m_new','КОН-2,8М гребнеобразователь','domestic_new','ridge',80,2.8,8,425000,[2024,2026],true,.80]
].forEach(x=>imp(...x));

// Явная вместимость тюковозов по формату тюка.
const baleCaps={
 hay_pts9_old:{small_square:240,round:20,large_square:16},
 hay_pt8_new:{small_square:220,round:18,large_square:14},
 hay_pt12:{small_square:260,round:24,large_square:20},
 hay_pt16_new:{small_square:360,round:30,large_square:24},
 hay_pronar_t026_used:{small_square:300,round:24,large_square:20},
 hay_krone_bale_trailer_used:{small_square:380,round:30,large_square:26},
 hay_fl902:{small_square:420,round:32,large_square:28}
};
for(const [id,cap] of Object.entries(baleCaps)){const m=C.find(x=>x.id===id);if(m){m.baleCapacity=cap;m.capacityT=Math.round((cap.round||0)*.35*10)/10;}}

// 0.11.9.19 — physical bale logistics: real self-loading/stacking Premium machines.
add({id:'bale_anderson_rbm1400',name:'Anderson RBM1400',type:'implement',segment:'foreign_new',category:'bale_transport',requiredHp:100,width:2.6,speed:25,roadSpeed:32,price:6900000,years:[2023,2026],newAvailable:true,eff:.90,baleSelfLoading:true,baleFormats:['round'],baleCapacity:{round:14,large_square:0,small_square:0},capacityT:4.9,baleLoadSec:50,baleUnloadMin:8});
add({id:'bale_anderson_trb2000',name:'Anderson TRB2000',type:'implement',segment:'foreign_new',category:'bale_transport',requiredHp:120,width:2.8,speed:25,roadSpeed:35,price:8900000,years:[2023,2026],newAvailable:true,eff:.91,baleSelfLoading:true,baleFormats:['round'],baleCapacity:{round:20,large_square:0,small_square:0},capacityT:7,baleLoadSec:34,baleUnloadMin:5});
add({id:'bale_anderson_stackpro7200',name:'Anderson STACKPRO 7200',type:'implement',segment:'foreign_new',category:'bale_transport',requiredHp:180,width:3,speed:25,roadSpeed:35,price:14900000,years:[2023,2026],newAvailable:true,eff:.92,baleSelfLoading:true,baleFormats:['large_square'],baleCapacity:{round:0,large_square:14,small_square:0},capacityT:6.8,baleLoadSec:42,baleUnloadMin:6});
add({id:'bale_nh_stackcruiser102',name:'New Holland Stackcruiser 102',type:'truck',segment:'foreign_new',category:'bale_transport',capacityT:8.5,bodyM3:72,roadSpeed:65,fuelLph:24,driveType:'wheeled',availableDriveTypes:['wheeled'],price:24500000,years:[2022,2026],newAvailable:true,baleSelfLoading:true,baleHaulEligible:false,baleRole:'self_propelled_stack_wagon',baleFormats:['small_square'],baleCapacity:{round:0,large_square:0,small_square:161},baleLoadSec:5.5,baleUnloadMin:4});


// 0.11.8.8 — расширение брендов: YTO, LOVOL, KUHN, DEUTZ-FAHR, Challenger, Massey Ferguson, Great Plains.
// Цены — среднерыночные игровые ориентиры 2025–2026 с поправкой на поставку/импорт в РФ; Б/У — базовая стоимость модели до состояния объявления.
[
 ['yto_x904_used','YTO X904','foreign_used',90,2900000,15,[2019,2024],false],
 ['yto_x1304','YTO X1304','foreign_new',130,5200000,21,[2024,2026],true],
 ['yto_x1804','YTO X1804','foreign_new',180,7900000,28,[2024,2026],true],
 ['yto_x2304','YTO X2304','foreign_new',230,10800000,35,[2024,2026],true],
 ['lovol_m1304_used','LOVOL M1304','foreign_used',130,3800000,21,[2018,2023],false],
 ['lovol_tb504','LOVOL TB504','foreign_new',50,2600000,9,[2025,2026],true],
 ['lovol_td904','LOVOL TD904','foreign_new',90,4300000,15,[2024,2026],true],
 ['lovol_m1304','LOVOL M1304 Pro','foreign_new',130,5900000,21,[2024,2026],true],
 ['lovol_p7240','LOVOL P7240','foreign_new',240,11800000,36,[2025,2026],true],
 ['df_7250ttv_used','DEUTZ-FAHR 7250 TTV','foreign_used',246,11800000,34,[2014,2022],false],
 ['df_6230ttv','DEUTZ-FAHR 6230 TTV','foreign_new',230,24500000,31,[2025,2026],true],
 ['df_8280ttv','DEUTZ-FAHR 8280 TTV','foreign_new',287,32500000,39,[2025,2026],true],
 ['df_9340ttv','DEUTZ-FAHR 9340 TTV','foreign_new',336,38500000,45,[2025,2026],true],
 ['challenger_mt765b','Challenger MT765B','foreign_used',355,6400000,43,[2007,2010],false],
 ['challenger_mt865e','Challenger MT865E','foreign_used',550,16300000,62,[2014,2019],false],
 ['mf_7726s_used','Massey Ferguson 7726 S','foreign_used',255,10500000,33,[2017,2022],false],
 ['mf_8s265','Massey Ferguson 8S.265','foreign_new',265,28500000,34,[2025,2026],true],
 ['mf_9s370','Massey Ferguson 9S.370','foreign_new',370,41500000,48,[2025,2026],true]
].forEach(x=>tr(...x));

[
 ['lovol_gm100','LOVOL GM100','foreign_new',190,14500000,34,[2024,2026],true],
 ['df_c7206_used','DEUTZ-FAHR C7206 TS','foreign_used',353,21800000,48,[2017,2023],false],
 ['df_c9306','DEUTZ-FAHR C9306 TS','foreign_new',381,46500000,54,[2025,2026],true],
 ['challenger_680b','Challenger 680B','foreign_used',430,14800000,55,[2008,2012],false],
 ['mf_beta7360_used','Massey Ferguson Beta 7360','foreign_used',306,18500000,45,[2015,2022],false],
 ['mf_ideal9','Massey Ferguson IDEAL 9','foreign_new',647,73500000,73,[2025,2026],true]
].forEach(x=>cb(...x));

[
 ['kuhn_master153_used','KUHN MASTER 153 5E','foreign_used','plow',150,2.5,8,2850000,[2015,2022],false,.82],
 ['kuhn_optimer5000','KUHN OPTIMER L 5000','foreign_new','disk',200,5.0,13,6900000,[2024,2026],true,.86],
 ['kuhn_espro6000','KUHN ESPRO 6000 RC','foreign_new','sow_grain',240,6.0,12,14800000,[2024,2026],true,.87],
 ['kuhn_fc3161','KUHN FC 3161 TCD','foreign_new','mower',90,3.1,14,6400000,[2024,2026],true,.86],
 ['kuhn_gf8712','KUHN GF 8712','foreign_new','tedder',75,8.7,13,5500000,[2024,2026],true,.86],
 ['kuhn_ga8731','KUHN GA 8731+','foreign_new','rake',90,8.7,13,7200000,[2024,2026],true,.87],
 ['kuhn_vb3160','KUHN VB 3160','foreign_new','baler',100,2.1,10,10800000,[2024,2026],true,.87],
 ['kuhn_vb2160_used','KUHN VB 2160','foreign_used','baler',90,2.0,9,5100000,[2014,2022],false,.82],
 ['mf_dm316_used','Massey Ferguson DM 316','foreign_used','mower',80,3.1,13,3100000,[2016,2022],false,.82],
 ['mf_dm367','Massey Ferguson DM 367 TL-V','foreign_new','mower',100,3.6,14,6100000,[2024,2026],true,.86],
 ['mf_td776','Massey Ferguson TD 776 TRC','foreign_new','tedder',70,7.7,12,5200000,[2024,2026],true,.86],
 ['mf_rk802','Massey Ferguson RK 802 TRC','foreign_new','rake',80,8.0,12,7200000,[2024,2026],true,.86],
 ['mf_rb4160v_used','Massey Ferguson RB 4160V','foreign_used','baler',90,2.0,9,5200000,[2017,2022],false,.83],
 ['mf_rb4160v','Massey Ferguson RB 4160V Protec','foreign_new','baler',110,2.1,10,11800000,[2024,2026],true,.87],
 ['gp_1006nt_used','Great Plains 1006NT','foreign_used','sow_grain',80,3.0,9,2300000,[2010,2023],false,.82],
 ['gp_3s4000hd_used','Great Plains 3S-4000HD','foreign_used','sow_grain',180,12.2,9,4200000,[2010,2022],false,.82],
 ['gp_bd7600','Great Plains BD7600 40 ft','foreign_new','sow_grain',220,12.2,10,13200000,[2024,2026],true,.87],
 ['gp_1800tm_used','Great Plains 1800TM Turbo-Max','foreign_used','disk',180,5.5,12,4300000,[2014,2023],false,.83],
 ['gp_3000tm','Great Plains 3000TM Turbo-Max','foreign_new','disk',300,9.1,13,11800000,[2024,2026],true,.87],
 ['gp_yp1625a_used','Great Plains YP1625A','foreign_used','sow_row',220,12.2,10,7600000,[2014,2022],false,.83],
 ['gp_pl5700','Great Plains PL5700 16R','foreign_new','sow_row',250,12.2,11,16800000,[2024,2026],true,.87]
].forEach(x=>imp(...x));

[
 ['lovol_header457','LOVOL 4.57 m grain header','foreign_new','grain',4.57,6,3900000,[2024,2026],true],
 ['df_varicrop75','DEUTZ-FAHR VARICrop 7.5','foreign_new','grain',7.5,6,9200000,[2025,2026],true],
 ['challenger_pf30','Challenger PowerFlow 30 ft','foreign_used','grain',9.1,6,4400000,[2006,2014],false]
].forEach(x=>hd(...x));


// 0.11.9.21 — historical foreign tractor gaps + underrepresented modern brands.
[
 ['jd4755_used','John Deere 4755','foreign_used',187,3900000,27,[1989,1991],false],
 ['jd4955_used','John Deere 4955','foreign_used',225,4700000,32,[1988,1992],false],
 ['case1455xl_used','Case IH 1455 XL','foreign_used',145,3100000,23,[1985,1996],false],
 ['mf3080_used','Massey Ferguson 3080','foreign_used',95,2200000,16,[1986,1988],false],
 ['mf3125_used','Massey Ferguson 3125','foreign_used',123,2800000,20,[1990,1995],false],
 ['fendt615lsa_used','Fendt Favorit 615 LSA','foreign_used',150,3300000,24,[1979,1993],false],
 ['fendt824_used','Fendt Favorit 824','foreign_used',230,5200000,34,[1993,1999],false],
 ['ford8830_used','Ford 8830','foreign_used',189,3900000,29,[1990,1993],false],
 ['fiatagri18090_used','Fiatagri 180-90','foreign_used',180,3600000,28,[1984,1994],false],
 ['renault14514_used','Renault 145.14','foreign_used',135,2700000,22,[1986,1989],false],
 ['df_dx650_used','DEUTZ-FAHR DX 6.50','foreign_used',137,2850000,22,[1983,1990],false],
 ['valmet8400_used','Valmet 8400','foreign_used',138,3100000,22,[1993,2004],false],
 ['valmet8750_used','Valmet 8750','foreign_used',190,4200000,29,[1995,2000],false],
 ['case7110_used','Case IH Magnum 7110','foreign_used',144,3400000,23,[1988,1993],false],
 ['case7140_used','Case IH Magnum 7140','foreign_used',195,4600000,30,[1988,1993],false],
 ['jcb_fastrac8330','JCB Fastrac 8330','foreign_new',335,43500000,42,[2023,2026],true],
 ['valtra_t175','Valtra T175','foreign_new',190,26900000,27,[2023,2026],true],
 ['valtra_t215','Valtra T215','foreign_new',230,30900000,31,[2023,2026],true],
 ['valtra_t255','Valtra T255','foreign_new',271,34900000,36,[2023,2026],true],
 ['steyr_6280_absolut','STEYR 6280 Absolut CVT','foreign_new',280,36500000,37,[2024,2026],true],
 ['steyr_6300_terrus','STEYR 6300 Terrus CVT','foreign_new',300,39900000,40,[2024,2026],true],
 ['mccormick_x7624','McCormick X7.624 VT-Drive','foreign_new',240,31900000,33,[2024,2026],true],
 ['mccormick_x8631','McCormick X8.631 VT-Drive','foreign_new',313,38900000,41,[2024,2026],true],
 ['landini_7230','Landini 7-230 Robo-Six','foreign_new',225,28500000,31,[2024,2026],true],
 ['landini_8310','Landini 8-310 VS-Drive','foreign_new',313,37900000,41,[2024,2026],true]
].forEach(x=>tr(...x));

// 0.11.9.19 — catalog realism expansion after full machinery audit.
// Requested brands + genuinely old foreign machines. Values are conservative game passports;
// years/power/role follow the represented real model rather than forcing every machine into a modern tier.
[
 ['jcb_fastrac185_used','JCB Fastrac 185','foreign_used',188,4900000,27,[1994,1997],false],
 ['jd7810_used','John Deere 7810','foreign_used',175,5400000,25,[1997,2003],false],
 ['case7240_used','Case IH 7240 Magnum','foreign_used',217,5900000,31,[1994,1996],false],
 ['fendt_favorit926_used','Fendt Favorit 926 Vario','foreign_used',260,7600000,36,[1996,2002],false],
 ['valmet8950_used','Valmet 8950','foreign_used',197,5200000,28,[1998,2002],false],
 ['mf3690_used','Massey Ferguson 3690','foreign_used',190,4300000,29,[1991,1994],false],
 ['df_agrostar681_used','DEUTZ-FAHR AgroStar 6.81','foreign_used',185,4500000,27,[1992,1997],false],
 ['jcb_fastrac4220','JCB Fastrac 4220','foreign_new',218,27800000,29,[2023,2026],true],
 ['valtra_q305','Valtra Q305','foreign_new',305,38900000,39,[2023,2026],true]
].forEach(x=>tr(...x));

add({id:'brantner_z18051_2xxl',name:'Brantner Z 18051/2 XXL',type:'trailer',segment:'foreign_new',capacityT:12.0,bodyM3:20.5,requiredHp:130,roadSpeed:40,price:6900000,years:[2024,2026],newAvailable:true});
add({id:'kinze_3665_bluedrive',name:'Kinze 3665 Blue Drive 16R30',type:'implement',segment:'foreign_new',category:'sow_row',requiredHp:250,width:12.2,speed:18,price:22500000,years:[2022,2026],newAvailable:true,eff:.91,crops:['sunflower','corn','soy'],seedKg:1450});
add({id:'vicon_fanex904',name:'Vicon Fanex 904',type:'implement',segment:'foreign_new',category:'tedder',requiredHp:80,width:9.0,speed:14,price:4800000,years:[2022,2026],newAvailable:true,eff:.90});
add({id:'arcusin_fsx6372',name:'Arcusin AutoStack FSX 63.72',type:'implement',segment:'foreign_new',category:'bale_transport',requiredHp:150,width:2.45,speed:25,roadSpeed:40,price:15800000,years:[2022,2026],newAvailable:true,eff:.92,baleSelfLoading:true,baleHaulEligible:true,baleFormats:['large_square'],baleCapacity:{round:0,large_square:16,small_square:0},capacityT:6.9,baleLoadSec:38,baleUnloadMin:5.5});
add({id:'bale_anderson_rbm2000',name:'Anderson RBM2000',type:'implement',segment:'foreign_new',category:'bale_transport',requiredHp:130,width:2.95,speed:25,roadSpeed:35,price:9900000,years:[2023,2026],newAvailable:true,eff:.92,baleSelfLoading:true,baleHaulEligible:true,baleFormats:['round'],baleCapacity:{round:20,large_square:0,small_square:0},capacityT:7.0,baleLoadSec:25.5,baleUnloadMin:5});
add({id:'bobruisk_tp10_1',name:'Бобруйскагромаш ТП-10-1 транспортировщик рулонов',type:'implement',segment:'domestic_new',category:'bale_transport',requiredHp:80,width:2.5,speed:20,roadSpeed:25,price:2100000,years:[2022,2026],newAvailable:true,eff:.84,baleSelfLoading:true,baleHaulEligible:true,baleFormats:['round'],baleCapacity:{round:17,large_square:0,small_square:0},capacityT:7.0,baleLoadSec:38,baleUnloadMin:7});
// Historical pull-type Stackliner closes the small-square Premium gap without misclassifying a self-propelled Stackcruiser as a trailer.
add({id:'nh_1033_stackliner_used',name:'New Holland 1033 Stackliner',type:'implement',segment:'foreign_used',category:'bale_transport',requiredHp:50,width:2.7,speed:18,roadSpeed:25,price:1700000,years:[1972,1978],newAvailable:false,eff:.78,baleSelfLoading:true,baleHaulEligible:true,baleFormats:['small_square'],baleCapacity:{round:0,large_square:0,small_square:104},capacityT:2.5,baleLoadSec:8,baleUnloadMin:6});

// 0.11.8.7 — нормализация дилерского каталога и исправления происхождения техники.
for(const id of ['imp96','imp97','imp100','imp101','imp104','imp105','imp106']){const m=C.find(x=>x.id===id);if(m)m.segment='foreign_new';}
// Удаляем подтверждённые дубли, не меняя стабильные imp-ID остальных моделей.
for(const id of ['imp30','bdm6x4_new']){const i=C.findIndex(x=>x.id===id);if(i>=0)C.splice(i,1);}
// Оставшаяся БДМ-6×4П соответствует спецификации производителя.
{const m=C.find(x=>x.id==='imp17');if(m){m.name='БДМ-6×4П';m.requiredHp=330;m.price=2373000;}}
// Метаданные брендов для фильтра каталога и гарантированного Б/У представительства.
const brandRules=[
 ['CLAAS',/^CLAAS /],['New Holland',/^New Holland /],['Case IH',/^Case IH /],['Fendt',/^Fendt /],['PÖTTINGER',/^PÖTTINGER /],
 ['LEMKEN',/^LEMKEN |^Lemken /],['AMAZONE',/^AMAZONE |^Amazone /],['HORSCH',/^HORSCH /],['Väderstad',/^Väderstad /],['Kverneland',/^Kverneland /],['Gaspardo',/^Gaspardo /],['KRONE',/^KRONE /],['GRIMME',/^GRIMME |^Grimme /],['AVR',/^AVR /],['ROPA',/^ROPA /],['Dewulf',/^Dewulf /],['HOLMER',/^HOLMER /],['Hardi',/^Hardi /],['Rauch',/^Rauch /],['Bogballe',/^Bogballe /],['MaterMacc',/^MaterMacc /],['SIP',/^SIP /],['Sipma',/^Sipma /],['Fliegl',/^Fliegl /],['MacDon',/^MacDon /],['Capello',/^Capello /],['Geringhoff',/^Geringhoff /],['Pronar',/^Pronar /],['JOSKIN',/^JOSKIN /],['Krampe',/^Krampe /],['Versatile',/^Versatile /],['ПАЛЕССЕ',/^ПАЛЕССЕ /],['БДМ-Агро',/^БДМ[- ,]/],
 ['STEYR',/^STEYR /],['McCormick',/^McCormick /],['Landini',/^Landini /],['Ford',/^Ford /],['Fiatagri',/^Fiatagri /],['Renault',/^Renault /],['Fortschritt',/^Fortschritt /],['Bizon',/^Bizon /],['YTO',/^YTO /],['LOVOL',/^LOVOL /],['JCB',/^JCB /],['Valtra',/^(Valtra|Valmet) /],['Brantner',/^Brantner /],['Kinze',/^Kinze /],['Vicon',/^Vicon /],['Arcusin',/^Arcusin /],['Anderson Group',/^Anderson /],['Бобруйскагромаш',/^Бобруйскагромаш /],['KUHN',/^KUHN |^Kuhn /],['DEUTZ-FAHR',/^DEUTZ-FAHR /],['Challenger',/^Challenger /],['Massey Ferguson',/^Massey Ferguson /],['Great Plains',/^Great Plains /],
 ['John Deere',/^John Deere /],['Ростсельмаш',/^Ростсельмаш /],['Беларус',/^(Беларус|МТЗ-)/],['Кировец',/^Кировец /]
];
for(const m of C){for(const [brand,re] of brandRules)if(re.test(m.name)){m.brand=brand;break;}if(!m.brand)m.brand='Прочие';}
for(const m of C)if(m.type==='header'&&/^(Power Stream|FLOAT STREAM|DRAPER STREAM)/.test(m.name))m.brand='Ростсельмаш';
// 0.11.8.32 — некорректные PowerFlow 7.7/9.2 удалены из текущего каталога; legacy-копии не сохраняются.
// 0.11.8.11 — исправляем происхождение старых GRIMME/AVR, ранее попавших в советский сегмент из-за общего генератора defs.
for(const m of C){if(/^Grimme |^GRIMME |^AVR /.test(m.name))m.segment=m.newAvailable?'foreign_new':'foreign_used';}
// 0.11.9.74 — physical-model deduplication: one catalog record per real machine; market age/condition creates used instances.
// 0.11.8.9 — одна физическая машина может выполнять несколько агроопераций.
// Старые дублирующие ID удалены без alias-слоя: межверсионная миграция сохранений не поддерживается.
for(const [id,categories] of Object.entries({
 imp43:['cultivate','stubble'],
 bdm4x2_used:['disk','stubble'],
 bdm4x2_new:['disk','stubble'],
 imp15:['disk','stubble'],
 bdm5x2_new:['disk','stubble']
})){const m=C.find(x=>x.id===id);if(m)m.categories=categories;}
for(const oldId of ['imp1','imp4','imp14','imp5']){const i=C.findIndex(x=>x.id===oldId);if(i>=0)C.splice(i,1);}
const featuredUsedIds=new Set([
 't40','yumz6','mtz80','mtz82','t150k','k700','k701','sk5','enisey1200','don1200',
 'imp21','imp43','imp79','imp87','imp69','imp95','imp98','2pts4',
 'claas_arion650','claas_xerion4500','claas_lexion570','claas_volto80','claas_liner2700','claas_quadrant5200','claas_vario680_used',
 'nh_t7270','nh_t8410','nh_cx790','nh_h7450','nh_proted880','nh_prorotorc760','nh_br7060','nh_guardian300','nh_varifeed740_used',
 'case_puma185','case_steiger450','case_8120','brand_case_speedtiller335','brand_case_tigermate200','brand_case_er1255','case_patriot3330','case_3050_25',
 'fendt716','fendt936','fendt_9490x','fendt_slicer310','fendt_twister8608','fendt_former671','fendt_rotana160','fendt_rogator635','fendt_powerflow770',
 'pot_synkro3030','pot_terrdisc5001','pot_servo35s','pot_vitasem302','pot_novacat302','pot_hit891','pot_top762','pot_impress155',
 'lemken_karat9_used','lemken_heliodor9_used','lemken_juwel8_used','lemken_korund8_used','lemken_saphir9_used','lemken_azurit9_used','lemken_spica8_used','lemken_albatros9_used',
 'amazone_cayros_used','amazone_catros6001_used','amazone_cenius4003_used','amazone_cenio3000_used','amazone_d9_used','amazone_ed_used','amazone_zam_used','amazone_ux4201_used',
 'szs21_used','szs21x3_used','szs21x5_used','bdm24x2_used','bdm4x2_used','bdm32x4_used','bdm6x4_used',
 'versatile280_used','versatile375_used','versatile450_used','palesse_gs05_used','palesse_gs12_used','palesse_zhzk6_used',
 'hay_kdn210_used','hay_kpr9_used','hay_gvk6_ted_old','hay_gvr630_ted_used','hay_gvk6_rake_old','hay_gvr630_rake_used','hay_prp16_used','hay_prf110_used','hay_prf145m_used','2pts4','2pts6','hay_pts9_old','hay_pronar_t026_used',
 'root_sn4b_used','root_kku2a_used','root_kpk2_used','root_ksp4','root_rks6_used','root_ks6b',
 'jcb_fastrac185_used','jd7810_used','case7240_used','fendt_favorit926_used','valmet8950_used','mf3690_used','df_agrostar681_used','nh_1033_stackliner_used',
 'yto_x904_used','lovol_m1304_used','kuhn_master153_used','kuhn_vb2160_used','df_7250ttv_used','df_c7206_used','challenger_mt765b','challenger_mt865e','challenger_680b','challenger_pf30','mf_7726s_used','mf_beta7360_used','mf_dm316_used','mf_rb4160v_used','gp_1006nt_used','gp_3s4000hd_used','gp_1800tm_used','gp_yp1625a_used'
]);
for(const m of C)if(featuredUsedIds.has(m.id))m.featuredUsed=true;

// Совместимость комбайнов и жаток. Семейство задаёт тип приёмной камеры, maxHeaderWidth — допустимую ширину.
const byId=Object.fromEntries(C.map(x=>[x.id,x]));
// 0.11.9.50 — самоходные валкователи и комбайновые валковые жатки используют один grainWindrow-процесс.
for(const id of ['rsm_ksu1','hay_macdon_m1170'])if(byId[id]){byId[id].grainWindrow=true;byId[id].grainWindrowGatherWidthM=Number(byId[id].width)||9;byId[id].supportedCategories=[...(byId[id].supportedCategories||[]),'grain_windrower'];}
if(byId.zhvn6a)byId.zhvn6a.directCombineIds=['sk5','enisey1200'];
if(byId.zhvn6v)byId.zhvn6v.directCombineIds=['sk5','nivaeffect','enisey1200','enisey950'];
if(byId.zhn6b_don)byId.zhn6b_don.directCombineIds=['don1200','don1500a','don1500b'];
const combineCompat={
 sk5:['soviet_small',5],nivaeffect:['soviet_small',6],don1200:['soviet_classic',8.6],don1500a:['soviet_classic',8.6],don1500b:['soviet_classic',8.6],enisey1200:['soviet_classic',6],enisey950:['soviet_classic',7],
 nova340:['rsm',7],vector410:['rsm',9],rsm_vector450track_new:['rsm',7.8],rsm_t500_new:['rsm',9],acros550:['rsm',9],acros585:['rsm',9],acros595:['rsm',9],rsm161:['rsm',11.9],torum785:['rsm',11.9],
 jd9500_used:['jd_legacy',6.1],jd9600_used:['jd_legacy',7.6],jd9640wts:['jd',6.7],jd9680wts:['jd',7.6],jd9670sts:['jd',9.1],jds660:['jd',9.1],jds670:['jd',10.7],jds680:['jd',12.2],jds7_800:['jd',12.2],jd_x9_1100_new:['jd',13.7],
 claas_dominator108sl_used:['claas_legacy',5.1],claas_mega208_used:['claas_legacy',6.0],claasmega360:['claas',6.6],claastucano450:['claas',9.3],claaslexion600:['claas',10.5],claas_evion450_new:['claas',6.8],claastrion750:['claas',10.8],claas_lexion570:['claas',9.3],claas_lexion8600:['claas',12.3],
 nh_tx66_used:['nh_legacy',6.1],nhcx8080:['nh',10.7],nhcr8_90:['nh',12.5],nh_cx790:['nh',9.15],nh_cr1090:['nh',12.5],case1680_used:['case_legacy',6.1],case2188_used:['case_legacy',7.6],case2388:['case',9.1],case_8120:['case',10.7],case_af11:['case',13.7],fendt_9490x:['fendt',9.2],fendt_ideal9t:['fendt',12.2],palesse_gs05_used:['palesse',5.5],palesse_gs12_used:['palesse',9.2],palesse_gs12a1_new:['palesse',9.2],palesse_gs16_new:['palesse',9.2],lovol_gm100:['lovol',4.6],df_topliner4080_used:['deutz_legacy',5.4],df_c7206_used:['deutz',9.0],df_c9306:['deutz',9.0],fortschritt_e516_used:['fortschritt',6.7],bizon_z056_used:['bizon',4.2],challenger_680b:['challenger',9.1],mf_40rs_used:['mf_legacy',4.9],mf_beta7360_used:['mf',7.7],mf_ideal9:['mf',12.2]
};
for(const [id,[family,maxHeaderWidth]] of Object.entries(combineCompat)){if(byId[id]){byId[id].headerFamily=family;byId[id].maxHeaderWidth=maxHeaderWidth;}}
// Категорийные пределы не дают широкой универсальной жатке обходить реальные ограничения конкретной машины.
const combineHeaderWidthByCategory={
 sk5:{grain:5,corn:3.3,sunflower:0},nivaeffect:{grain:6,corn:3.3,sunflower:0},
 don1200:{grain:8.6,corn:5.6,sunflower:7.4},don1500a:{grain:8.6,corn:5.6,sunflower:7.4},don1500b:{grain:8.6,corn:6.2,sunflower:7.4},
 enisey1200:{grain:6,corn:4.7,sunflower:5.7},enisey950:{grain:7,corn:4.7,sunflower:5.7},
 nova340:{grain:7,corn:3.5,sunflower:4.9},vector410:{grain:9,corn:5.6,sunflower:7.8},rsm_vector450track_new:{grain:7,corn:5.6,sunflower:7.8},rsm_t500_new:{grain:9,corn:6.2,sunflower:9.2},
 acros550:{grain:9,corn:6.2,sunflower:7.8},acros585:{grain:9,corn:6.2,sunflower:9.2},acros595:{grain:9,corn:6.2,sunflower:9.2},
 rsm161:{grain:9.2,corn:8.4,sunflower:11.9},torum785:{grain:9.2,corn:8.4,sunflower:11.9}
};
for(const [id,v] of Object.entries(combineHeaderWidthByCategory)){if(byId[id])byId[id].maxHeaderWidthByCategory=v;}
for(const id of ['sk5','nivaeffect','enisey1200','enisey950','don1200','don1500a','don1500b'])if(byId[id])byId[id].maxHeaderWidthByCategory={...(byId[id].maxHeaderWidthByCategory||{}),grain_windrow:6};

// Вместимость зерновых бункеров комбайнов, м³. Значения используются игровой
// моделью заполнения/разгрузки и различаются по поколениям и классу машин.
const combineTankM3={
 sk5:3.0,nivaeffect:3.5,don1200:6.0,don1500a:6.0,don1500b:6.0,enisey1200:4.5,enisey950:5.0,
 nova340:4.9,vector410:6.0,rsm_vector450track_new:6.0,rsm_t500_new:10.0,acros550:9.0,acros585:9.0,acros595:9.0,rsm161:10.5,torum785:12.0,
 jd9500_used:6.9,jd9600_used:7.7,jd9640wts:7.5,jd9680wts:8.0,jd9670sts:8.8,jds660:10.6,jds670:10.6,jds680:14.1,
 claas_dominator108sl_used:6.0,claas_mega208_used:7.2,claasmega360:7.2,claastucano450:9.0,claaslexion600:12.0,nh_tx66_used:8.0,nhcx8080:11.5,case1680_used:7.4,case2188_used:7.4,case2388:7.4,
 jds7_800:14.1,jd_x9_1100_new:16.2,claas_evion450_new:8.0,claastrion750:12.0,nhcr8_90:14.5,claas_lexion570:10.5,claas_lexion8600:13.5,nh_cx790:12.5,nh_cr1090:14.5,case_8120:12.3,case_af11:20.0,fendt_9490x:12.5,fendt_ideal9t:17.1,palesse_gs05_used:4.5,palesse_gs12_used:8.0,palesse_gs12a1_new:8.0,palesse_gs16_new:10.5,lovol_gm100:4.5,df_topliner4080_used:8.5,df_c7206_used:9.5,df_c9306:10.5,fortschritt_e516_used:4.5,bizon_z056_used:2.5,challenger_680b:12.3,mf_40rs_used:6.5,mf_beta7360_used:9.0,mf_ideal9:17.1
};
for(const [id,v] of Object.entries(combineTankM3)){if(byId[id])byId[id].grainTankM3=v;}
// 0.11.8.35 — параметры уборочной цепочки комбайнов.
// unloadLps: скорость выгрузки зерна. Для моделей без надёжной заводской цифры это
// консервативная игровая калибровка по поколению/классу; tank берётся из grainTankM3 выше.
const combineUnloadLps={
 sk5:18,nivaeffect:28,don1200:32,don1500a:38,don1500b:42,enisey1200:28,enisey950:35,
 nova340:50,vector410:50,acros550:90,acros585:90,acros595:90,rsm161:115,torum785:120,
 jd9500_used:45,jd9600_used:50,jd9640wts:55,jd9680wts:60,jd9670sts:75,jds660:88,jds670:88,jds680:116,jds7_800:116,
 claas_dominator108sl_used:38,claas_mega208_used:45,claasmega360:55,claastucano450:75,claaslexion600:105,claastrion750:110,claas_lexion570:95,claas_lexion8600:130,
 nh_tx66_used:55,nhcx8080:100,nhcr8_90:126,nh_cx790:100,nh_cr1090:126,
 case1680_used:48,case2188_used:55,case2388:75,case_8120:113,case_af11:159,
 fendt_9490x:105,fendt_ideal9t:140,
 palesse_gs05_used:45,palesse_gs12_used:70,palesse_gs12a1_new:70,palesse_gs16_new:100,
 lovol_gm100:45,df_topliner4080_used:48,df_c7206_used:90,df_c9306:100,fortschritt_e516_used:32,bizon_z056_used:22,challenger_680b:105,mf_40rs_used:45,mf_beta7360_used:85,mf_ideal9:140
};
for(const [id,v] of Object.entries(combineUnloadLps)){if(byId[id])byId[id].unloadLps=v;}

// Явная совместимость OEM-жаток. Для конкретных моделей она важнее общего семейства.
const headerCombineIds={
 ppt3a_legacy:['sk5','enisey1200'],
 jd_914p_pickup:['jd9500_used','jd9600_used'],
 case_1015_pickup:['case1680_used','case2188_used','case2388'],
 niva_jkn41:['sk5','nivaeffect'],niva_jkn5:['sk5','nivaeffect'],niva_effect6:['nivaeffect'],
 don_zhu6:['don1200','don1500a','don1500b'],don_zhu7:['don1200','don1500a','don1500b'],don_zhu86:['don1200','don1500a','don1500b'],
 enisey_jkn4:['enisey1200'],enisey_jkn5:['enisey1200','enisey950'],enisey_jkn6:['enisey1200','enisey950'],enisey_jkn7:['enisey950'],
 psp8:['don1200','don1500a','don1500b'],psp10:['don1200','don1500a','don1500b'],psp810:['don1500a','don1500b','acros550'],pzs8:['don1200','don1500a','don1500b'],zhns6:['don1200','don1500a','don1500b'],zhns74:['don1500a','don1500b'],
 kmd6:['don1200','don1500a','don1500b'],kms6:['don1200','don1500a','don1500b'],kms8:['don1500a','don1500b'],
 powerstream4:['nova340'],powerstream5:['nova340','vector410','acros550'],powerstream6:['nova340','vector410','acros550','acros585','acros595'],powerstream7:['nova340','vector410','acros550','acros585','acros595','rsm161','torum785'],powerstream9:['vector410','acros550','acros585','acros595','rsm161','torum785'],
 floatstream5:['nova340'],floatstream6:['acros550','acros585','acros595'],floatstream7:['vector410','acros550','acros585','acros595','rsm161','torum785'],floatstream9:['vector410','acros585','acros595','rsm161','torum785'],draperstream9:['acros550','acros585','rsm161','torum785'],
 falcon6:['nova340','vector410','acros550','acros585','acros595','rsm161'],falcon8:['vector410','acros550','acros585','acros595','rsm161','torum785'],falcon12:['rsm161','torum785'],
 sunstream49:['nova340','vector410'],sunstream65:['acros550','acros585','acros595','torum785'],sunstream78:['acros550','acros585','acros595','rsm161','torum785'],sunstream92:['acros585','acros595','rsm161','torum785'],sunstream105:['torum785'],sunstream119:['rsm161','torum785'],
 argus570:['nova340'],argus670:['vector410','acros550','acros585','acros595','rsm161','torum785'],argus870:['vector410','acros550','acros585','acros595','rsm161','torum785'],argus1270:['rsm161','torum785'],cornstream670:['vector410','acros550','acros585','acros595'],cornstream870:['acros550','acros585','acros595','rsm161','torum785'],cornstream1270:['rsm161','torum785'],
 claas_c450_legacy:['claas_dominator108sl_used','claas_mega208_used'],claas_c510_legacy:['claas_dominator108sl_used','claas_mega208_used'],
 jd_920_legacy:['jd9500_used','jd9600_used'],jd_925_legacy:['jd9600_used'],
 case_1020_20_legacy:['case1680_used','case2188_used'],case_1020_25_legacy:['case2188_used'],
 nh_highcapacity_17_legacy:['nh_tx66_used'],nh_highcapacity_20_legacy:['nh_tx66_used'],
 mf_powerflow16_legacy:['mf_40rs_used'],df_54_legacy:['df_topliner4080_used'],
 fortschritt_e516_67_header:['fortschritt_e516_used'],bizon_z056_42_header:['bizon_z056_used'],
 jd622r:['jd9640wts','jd9680wts','jd9670sts','jds660'],jd625r:['jd9680wts','jd9670sts','jds660','jds670'],jd630r:['jd9670sts','jds660','jds670','jds680'],jd635r:['jds670','jds680','jds7_800'],jd640fd:['jds680','jds7_800'],jd_rdf35:['jds7_800'],jd_rdf40:['jds7_800'],
 jd606c:['jd9640wts','jd9680wts','jd9670sts','jds660'],jd608c:['jd9670sts','jds660','jds670','jds680'],jd612c:['jds670','jds680','jds7_800'],jd712fc:['jds680','jds7_800'],jd616c:['jds7_800'],
 claas_c600:['claasmega360','claastucano450'],claas_vario660_used:['claastucano450','claas_lexion570'],claas_vario680_used:['claasmega360','claastucano450','claas_lexion570'],claasvario770:['claastucano450','claas_lexion570','claaslexion600'],claasvario930:['claastucano450','claas_lexion570','claaslexion600','claastrion750','claas_lexion8600'],claas_vario1050_used:['claaslexion600'],claasvario1080:['claastrion750','claas_lexion8600'],claas_convio1080:['claastrion750','claas_lexion8600'],claas_convio1230:['claas_lexion8600'],claas_sunspeed8:['claastucano450','claas_lexion570','claaslexion600','claastrion750'],claascorio875:['claastucano450','claas_lexion570','claaslexion600','claastrion750'],claascorio1275:['claaslexion600','claastrion750','claas_lexion8600'],
 nh_varifeed740_used:['nhcx8080','nh_cx790'],nhvarifeed760:['nhcx8080','nh_cx790','nhcr8_90'],nh_varifeed915:['nhcx8080','nh_cx790','nhcr8_90','nh_cr1090'],nh_varifeed1070:['nhcx8080','nhcr8_90','nh_cr1090'],nh_varifeed1250:['nhcr8_90','nh_cr1090'],nh_corn6:['nhcx8080','nh_cx790'],nh_corn8:['nhcx8080','nh_cx790','nhcr8_90','nh_cr1090'],nh_9212:['nhcx8080','nhcr8_90','nh_cr1090'],
 case3020_20:['case2388','case_8120'],case_3050_25:['case2388','case_8120'],case3020_30:['case2388','case_8120'],case_3162_35:['case_8120','case_af11'],case_g500v35:['case_af11'],case_g500v41:['case_af11'],case4412:['case_8120','case_af11'],case4416:['case_8120','case_af11'],case_c516:['case_af11'],
 fendt_powerflow770:['fendt_9490x'],fendt_powerflow92:['fendt_9490x'],fendt_superflow1070:['fendt_ideal9t'],fendt_powerflow107:['fendt_ideal9t'],fendt_powerflow122:['fendt_ideal9t'],
 palesse_zhzk5_used:['palesse_gs05_used','palesse_gs12_used'],palesse_zhzk6_used:['palesse_gs05_used','palesse_gs12_used','palesse_gs12a1_new'],palesse_zhzk75_new:['palesse_gs12_used','palesse_gs12a1_new','palesse_gs16_new'],palesse_zhzk9_new:['palesse_gs12_used','palesse_gs12a1_new','palesse_gs16_new'],
 lovol_header457:['lovol_gm100'],
 mf_freeflow62:['mf_beta7360_used'],mf_powerflow68:['mf_beta7360_used'],mf_powerflow107:['mf_ideal9'],mf_powerflow122:['mf_ideal9'],challenger_pf18:['challenger_680b'],challenger_pf20:['challenger_680b'],challenger_pf22:['challenger_680b'],challenger_pf25:['challenger_680b'],challenger_pf30:['challenger_680b'],
 df_varicrop54:['df_c7206_used','df_c9306'],df_dh63:['df_c7206_used','df_c9306'],df_dh72:['df_c7206_used','df_c9306'],df_varicrop9:['df_c7206_used','df_c9306'],df_varicrop50:['df_c7206_used','df_c9306'],df_varicrop55:['df_c7206_used','df_c9306'],df_varicrop65:['df_c7206_used','df_c9306'],df_varicrop75:['df_c7206_used','df_c9306']
};
for(const [id,ids] of Object.entries(headerCombineIds)){if(byId[id])byId[id].directCombineIds=ids;}

// Универсальные адаптерные жатки. Мощностные пороги — игровое инженерное ограничение,
// чтобы тяжёлая/широкая жатка не превращала малый комбайн в нереалистичную связку.
const universalHeaderRules={
 pp34_legacy:{families:['soviet_small','soviet_classic','rsm','jd','jd_legacy','claas','claas_legacy','nh','nh_legacy','case','case_legacy','fendt','palesse','lovol','deutz','deutz_legacy','challenger','mf','mf_legacy','fortschritt','bizon'],minHp:80},
 swa_pick340:{families:['soviet_small','soviet_classic','rsm','jd','jd_legacy','claas','claas_legacy','nh','nh_legacy','case','case_legacy','fendt','palesse','lovol','deutz','deutz_legacy','challenger','mf','mf_legacy','fortschritt','bizon'],minHp:80},
 swa_pick430:{families:['soviet_small','soviet_classic','rsm','jd','jd_legacy','claas','claas_legacy','nh','nh_legacy','case','case_legacy','fendt','palesse','lovol','deutz','deutz_legacy','challenger','mf','mf_legacy','fortschritt','bizon'],minHp:100},
 macdon_pw8:{families:['jd','jd_legacy','claas','claas_legacy','nh','nh_legacy','case','case_legacy','fendt','mf','mf_legacy','challenger','rsm','deutz','deutz_legacy'],minHp:160},
 case_3016_pickup:{families:['case','case_legacy'],minHp:160},
 jd_615p_pickup:{families:['jd','jd_legacy'],minHp:160},
 claas_swathup450:{families:['claas','claas_legacy'],minHp:160},
 nh_790cp15:{families:['nh','nh_legacy'],minHp:160},
 macdon_fd225:{families:['jd','claas','nh','case','fendt','mf','challenger','rsm','deutz'],minHp:240},
 macdon_fd230:{families:['jd','claas','nh','case','fendt','mf','challenger','rsm','deutz'],minHp:300},
 macdon_fd235:{families:['jd','claas','nh','case','fendt','mf','challenger','rsm','deutz'],minHp:360},
 macdon_fd240:{families:['jd','claas','nh','case','fendt','mf','challenger','rsm'],minHp:430},
 macdon_fd245:{families:['jd','claas','nh','case','fendt','mf','challenger','rsm'],minHp:500},
 capello_quasar4:{families:['soviet_small','soviet_classic','rsm','jd','jd_legacy','claas','claas_legacy','nh','nh_legacy','case','case_legacy','fendt','palesse','lovol','deutz','deutz_legacy','challenger','mf','mf_legacy','fortschritt','bizon'],minHp:100},
 capello_quasar6:{families:['soviet_small','soviet_classic','rsm','jd','jd_legacy','claas','claas_legacy','nh','nh_legacy','case','case_legacy','fendt','palesse','lovol','deutz','deutz_legacy','challenger','mf','mf_legacy','fortschritt','bizon'],minHp:160},
 capello_quasar8:{families:['soviet_small','soviet_classic','rsm','jd','jd_legacy','claas','claas_legacy','nh','nh_legacy','case','case_legacy','fendt','palesse','lovol','deutz','deutz_legacy','challenger','mf','mf_legacy','fortschritt','bizon'],minHp:220},
 capello_quasar12:{families:['soviet_small','soviet_classic','rsm','jd','jd_legacy','claas','claas_legacy','nh','nh_legacy','case','case_legacy','fendt','palesse','lovol','deutz','deutz_legacy','challenger','mf','mf_legacy','fortschritt','bizon'],minHp:380},
 capello_hel57:{families:['soviet_small','soviet_classic','rsm','jd','jd_legacy','claas','claas_legacy','nh','nh_legacy','case','case_legacy','fendt','palesse','lovol','deutz','deutz_legacy','challenger','mf','mf_legacy','fortschritt','bizon'],minHp:160},
 capello_hel75:{families:['soviet_small','soviet_classic','rsm','jd','jd_legacy','claas','claas_legacy','nh','nh_legacy','case','case_legacy','fendt','palesse','lovol','deutz','deutz_legacy','challenger','mf','mf_legacy','fortschritt','bizon'],minHp:240},
 capello_hel94:{families:['soviet_small','soviet_classic','rsm','jd','jd_legacy','claas','claas_legacy','nh','nh_legacy','case','case_legacy','fendt','palesse','lovol','deutz','deutz_legacy','challenger','mf','mf_legacy','fortschritt','bizon'],minHp:330},
 capello_hel119:{families:['soviet_small','soviet_classic','rsm','jd','jd_legacy','claas','claas_legacy','nh','nh_legacy','case','case_legacy','fendt','palesse','lovol','deutz','deutz_legacy','challenger','mf','mf_legacy','fortschritt','bizon'],minHp:450},
 sunmaster870:{families:['jd','claas','nh','case','fendt','mf','challenger'],minHp:220}
};
for(const [id,r] of Object.entries(universalHeaderRules)){if(byId[id]){byId[id].mounts=r.families;byId[id].minCombineHp=r.minHp;byId[id].adapterRequired=true;}}

// 0.11.8.34 — калибровка активных жаток + технологические классы для новой модели уборки.
// speed = реалистичная рабочая скорость, eff = полевая эффективность, fieldCapacityHaH = фактическая
// базовая производительность жатки до ограничения пропускной способностью конкретного комбайна.
// Цена проверена для каждой модели; там, где надёжного рыночного якоря нет, сохранена предыдущая
// игровая цена, чтобы не вносить произвольный балансный сдвиг.
const HEADER_CALIBRATION={
 "zhvn6a":{speed:8.0,eff:0.83,fieldCapacityHaH:4.0,price:480000,techClass:"windrow_legacy"},
 "zhvn6v":{speed:10.0,eff:0.80,fieldCapacityHaH:4.8,price:650000,techClass:"windrow_legacy"},
 "zhn6b_don":{speed:10.0,eff:0.80,fieldCapacityHaH:4.8,price:720000,techClass:"windrow_legacy"},
 "ppt3a_legacy":{speed:7.0,eff:0.72,price:280000,techClass:"pickup_belt"},
 "pp34_legacy":{speed:8.0,eff:0.75,price:520000,techClass:"pickup_belt"},
 "jd_914p_pickup":{speed:10.0,eff:0.78,price:950000,techClass:"pickup_belt"},
 "case_1015_pickup":{speed:10.0,eff:0.78,price:850000,techClass:"pickup_belt"},
 "swa_pick340":{speed:13.0,eff:0.82,price:2850000,techClass:"pickup_belt"},
 "swa_pick430":{speed:13.0,eff:0.82,price:3350000,techClass:"pickup_belt"},
 "macdon_pw8":{speed:14.0,eff:0.86,price:6900000,techClass:"pickup_belt"},
 "case_3016_pickup":{speed:13.0,eff:0.84,price:6200000,techClass:"pickup_belt"},
 "jd_615p_pickup":{speed:13.0,eff:0.84,price:6400000,techClass:"pickup_belt"},
 "claas_swathup450":{speed:14.0,eff:0.86,price:7100000,techClass:"pickup_belt"},
 "nh_790cp15":{speed:14.0,eff:0.85,price:6500000,techClass:"pickup_belt"},
 "claas_c450_legacy":{speed:5.3,eff:0.70,fieldCapacityHaH:1.67,price:1250000,techClass:"legacy_rigid"},
 "claas_c510_legacy":{speed:5.3,eff:0.70,fieldCapacityHaH:1.89,price:1450000,techClass:"legacy_rigid"},
 "jd_920_legacy":{speed:5.4,eff:0.71,fieldCapacityHaH:2.34,price:1550000,techClass:"legacy_rigid"},
 "jd_925_legacy":{speed:5.4,eff:0.71,fieldCapacityHaH:2.91,price:1850000,techClass:"legacy_rigid"},
 "case_1020_20_legacy":{speed:5.4,eff:0.71,fieldCapacityHaH:2.34,price:1500000,techClass:"legacy_rigid"},
 "case_1020_25_legacy":{speed:5.4,eff:0.71,fieldCapacityHaH:2.91,price:1850000,techClass:"legacy_rigid"},
 "nh_highcapacity_17_legacy":{speed:5.5,eff:0.72,fieldCapacityHaH:2.06,price:1400000,techClass:"legacy_rigid"},
 "nh_highcapacity_20_legacy":{speed:5.5,eff:0.72,fieldCapacityHaH:2.42,price:1650000,techClass:"legacy_rigid"},
 "mf_powerflow16_legacy":{speed:5.7,eff:0.73,fieldCapacityHaH:2.04,price:1450000,techClass:"legacy_rigid"},
 "df_54_legacy":{speed:5.5,eff:0.72,fieldCapacityHaH:2.14,price:1500000,techClass:"legacy_rigid"},
 "fortschritt_e516_67_header":{speed:5.0,eff:0.69,fieldCapacityHaH:2.31,price:760000,techClass:"legacy_rigid"},
 "bizon_z056_42_header":{speed:4.8,eff:0.68,fieldCapacityHaH:1.37,price:420000,techClass:"legacy_rigid"},
 "powerstream5":{speed:6.4,eff:0.78,fieldCapacityHaH:2.5,price:2200000,techClass:"modern_rigid"},
 "powerstream7":{speed:6.4,eff:0.78,fieldCapacityHaH:3.49,price:3200000,techClass:"modern_rigid"},
 "powerstream9":{speed:6.4,eff:0.78,fieldCapacityHaH:4.49,price:4500000,techClass:"modern_rigid"},
 "jd622r":{speed:6.2,eff:0.76,fieldCapacityHaH:3.16,price:3800000,techClass:"modern_rigid"},
 "jd630r":{speed:6.0,eff:0.76,fieldCapacityHaH:4.15,price:6200000,techClass:"modern_rigid"},
 "claasvario770":{speed:6.8,eff:0.8,fieldCapacityHaH:4.19,price:6100000,techClass:"variable_feeding"},
 "claasvario930":{speed:6.6,eff:0.8,fieldCapacityHaH:4.91,price:11800000,techClass:"variable_feeding"},
 "nhvarifeed760":{speed:6.8,eff:0.8,fieldCapacityHaH:4.13,price:10600000,techClass:"variable_feeding"},
 "psp8":{speed:5.5,eff:0.71,fieldCapacityHaH:2.19,price:650000,techClass:"legacy_sunflower"},
 "falcon8":{speed:6.4,eff:0.76,fieldCapacityHaH:2.72,price:3600000,techClass:"sunflower_row"},
 "sunmaster870":{speed:7.2,eff:0.8,fieldCapacityHaH:3.23,price:5900000,techClass:"modern_sunflower"},
 "kmd6":{speed:5.5,eff:0.7,fieldCapacityHaH:1.62,price:750000,techClass:"legacy_corn"},
 "argus870":{speed:6.5,eff:0.76,fieldCapacityHaH:2.77,price:5200000,techClass:"corn_row"},
 "jd608c":{speed:6.5,eff:0.76,fieldCapacityHaH:3.01,price:6500000,techClass:"corn_row"},
 "jd712fc":{speed:7.2,eff:0.8,fieldCapacityHaH:5.24,price:12800000,techClass:"modern_corn"},
 "claascorio875":{speed:6.5,eff:0.76,fieldCapacityHaH:2.96,price:11800000,techClass:"corn_row"},
 "niva_jkn41":{speed:4.9,eff:0.7,fieldCapacityHaH:1.41,price:230000,techClass:"legacy_rigid"},
 "niva_jkn5":{speed:4.9,eff:0.7,fieldCapacityHaH:1.71,price:290000,techClass:"legacy_rigid"},
 "niva_effect6":{speed:6.2,eff:0.76,fieldCapacityHaH:2.83,price:470000,techClass:"modern_rigid"},
 "don_zhu6":{speed:4.9,eff:0.7,fieldCapacityHaH:2.06,price:420000,techClass:"legacy_rigid"},
 "don_zhu7":{speed:4.9,eff:0.7,fieldCapacityHaH:2.4,price:520000,techClass:"legacy_rigid"},
 "don_zhu86":{speed:4.9,eff:0.7,fieldCapacityHaH:2.95,price:690000,techClass:"legacy_rigid"},
 "enisey_jkn4":{speed:4.9,eff:0.7,fieldCapacityHaH:1.37,price:240000,techClass:"legacy_rigid"},
 "enisey_jkn5":{speed:4.9,eff:0.7,fieldCapacityHaH:1.71,price:300000,techClass:"legacy_rigid"},
 "enisey_jkn6":{speed:4.9,eff:0.7,fieldCapacityHaH:2.06,price:390000,techClass:"legacy_rigid"},
 "enisey_jkn7":{speed:5.4,eff:0.7,fieldCapacityHaH:2.65,price:490000,techClass:"modern_rigid"},
 "psp10":{speed:5.2,eff:0.71,fieldCapacityHaH:2.07,price:620000,techClass:"legacy_sunflower"},
 "psp810":{speed:5.5,eff:0.71,fieldCapacityHaH:2.19,price:980000,techClass:"legacy_sunflower"},
 "pzs8":{speed:5.5,eff:0.71,fieldCapacityHaH:2.19,price:720000,techClass:"legacy_sunflower"},
 "zhns6":{speed:7.0,eff:0.79,fieldCapacityHaH:3.32,price:900000,techClass:"rowless_sunflower"},
 "zhns74":{speed:7.0,eff:0.79,fieldCapacityHaH:4.09,price:1150000,techClass:"rowless_sunflower"},
 "kms6":{speed:5.5,eff:0.7,fieldCapacityHaH:1.62,price:820000,techClass:"legacy_corn"},
 "kms8":{speed:5.5,eff:0.7,fieldCapacityHaH:2.16,price:1050000,techClass:"legacy_corn"},
 "powerstream4":{speed:6.4,eff:0.78,fieldCapacityHaH:2.0,price:1850000,techClass:"modern_rigid"},
 "powerstream6":{speed:6.4,eff:0.78,fieldCapacityHaH:3.0,price:2700000,techClass:"modern_rigid"},
 "floatstream6":{speed:6.7,eff:0.8,fieldCapacityHaH:3.22,price:3900000,techClass:"variable_feeding"},
 "floatstream7":{speed:6.7,eff:0.8,fieldCapacityHaH:3.75,price:4800000,techClass:"variable_feeding"},
 "floatstream9":{speed:6.7,eff:0.8,fieldCapacityHaH:4.82,price:6500000,techClass:"variable_feeding"},
 "draperstream9":{speed:7.3,eff:0.83,fieldCapacityHaH:5.45,price:7200000,techClass:"flex_draper"},
 "falcon6":{speed:6.4,eff:0.76,fieldCapacityHaH:2.04,price:3100000,techClass:"sunflower_row"},
 "falcon12":{speed:6.4,eff:0.76,fieldCapacityHaH:4.09,price:6100000,techClass:"sunflower_row"},
 "sunstream65":{speed:7.2,eff:0.8,fieldCapacityHaH:3.74,price:5200000,techClass:"modern_sunflower"},
 "sunstream78":{speed:7.2,eff:0.8,fieldCapacityHaH:4.49,price:6400000,techClass:"modern_sunflower"},
 "sunstream92":{speed:7.0,eff:0.8,fieldCapacityHaH:5.15,price:7900000,techClass:"modern_sunflower"},
 "sunstream119":{speed:7.0,eff:0.8,fieldCapacityHaH:6.66,price:9800000,techClass:"modern_sunflower"},
 "argus670":{speed:6.5,eff:0.76,fieldCapacityHaH:2.07,price:4200000,techClass:"corn_row"},
 "argus1270":{speed:6.5,eff:0.76,fieldCapacityHaH:4.15,price:7600000,techClass:"corn_row"},
 "cornstream670":{speed:7.4,eff:0.8,fieldCapacityHaH:2.49,price:5100000,techClass:"modern_corn"},
 "cornstream870":{speed:7.4,eff:0.8,fieldCapacityHaH:3.32,price:6300000,techClass:"modern_corn"},
 "cornstream1270":{speed:7.4,eff:0.8,fieldCapacityHaH:4.97,price:9200000,techClass:"modern_corn"},
 "jd625r":{speed:6.2,eff:0.76,fieldCapacityHaH:3.58,price:4700000,techClass:"modern_rigid"},
 "jd635r":{speed:6.0,eff:0.76,fieldCapacityHaH:4.88,price:7600000,techClass:"modern_rigid"},
 "jd640fd":{speed:7.4,eff:0.84,fieldCapacityHaH:7.58,price:10500000,techClass:"flex_draper"},
 "jd606c":{speed:6.5,eff:0.76,fieldCapacityHaH:2.27,price:4900000,techClass:"corn_row"},
 "jd612c":{speed:6.3,eff:0.76,fieldCapacityHaH:4.36,price:7900000,techClass:"corn_row"},
 "jd616c":{speed:7.0,eff:0.8,fieldCapacityHaH:6.83,price:14500000,techClass:"modern_corn"},
 "claas_c600":{speed:6.2,eff:0.76,fieldCapacityHaH:2.83,price:3900000,techClass:"modern_rigid"},
 "claasvario1080":{speed:6.6,eff:0.8,fieldCapacityHaH:5.7,price:13900000,techClass:"variable_feeding"},
 "claascorio1275":{speed:6.3,eff:0.76,fieldCapacityHaH:4.31,price:15800000,techClass:"corn_row"},
 "nh_varifeed1070":{speed:6.6,eff:0.8,fieldCapacityHaH:5.65,price:13900000,techClass:"variable_feeding"},
 "nh_varifeed1250":{speed:6.4,eff:0.8,fieldCapacityHaH:6.4,price:16500000,techClass:"variable_feeding"},
 "nh_corn6":{speed:6.5,eff:0.76,fieldCapacityHaH:2.22,price:5600000,techClass:"corn_row"},
 "nh_corn8":{speed:6.5,eff:0.76,fieldCapacityHaH:2.96,price:7600000,techClass:"corn_row"},
 "nh_9212":{speed:7.2,eff:0.8,fieldCapacityHaH:5.18,price:14800000,techClass:"modern_corn"},
 "case3020_20":{speed:6.2,eff:0.76,fieldCapacityHaH:2.87,price:4200000,techClass:"modern_rigid"},
 "case3020_30":{speed:6.0,eff:0.76,fieldCapacityHaH:4.15,price:6700000,techClass:"modern_rigid"},
 "case4412":{speed:6.3,eff:0.76,fieldCapacityHaH:4.36,price:8700000,techClass:"corn_row"},
 "case4416":{speed:6.1,eff:0.76,fieldCapacityHaH:5.66,price:11200000,techClass:"corn_row"},
 "case_c516":{speed:7.0,eff:0.8,fieldCapacityHaH:6.83,price:16800000,techClass:"modern_corn"},
 "fendt_powerflow92":{speed:6.6,eff:0.8,fieldCapacityHaH:4.86,price:7300000,techClass:"variable_feeding"},
 "mf_freeflow62":{speed:6.2,eff:0.76,fieldCapacityHaH:2.92,price:4300000,techClass:"modern_rigid"},
 "mf_powerflow68":{speed:6.8,eff:0.8,fieldCapacityHaH:3.7,price:5100000,techClass:"variable_feeding"},
 "mf_powerflow122":{speed:6.4,eff:0.8,fieldCapacityHaH:6.25,price:15100000,techClass:"variable_feeding"},
 "df_varicrop54":{speed:6.2,eff:0.76,fieldCapacityHaH:2.54,price:4200000,techClass:"modern_rigid"},
 "df_varicrop9":{speed:6.0,eff:0.76,fieldCapacityHaH:4.1,price:10800000,techClass:"modern_rigid"},
 "macdon_fd225":{speed:8.6,eff:0.86,fieldCapacityHaH:5.62,price:9800000,techClass:"flex_draper"},
 "macdon_fd230":{speed:8.6,eff:0.86,fieldCapacityHaH:6.73,price:11600000,techClass:"flex_draper"},
 "macdon_fd235":{speed:8.6,eff:0.86,fieldCapacityHaH:7.91,price:13700000,techClass:"flex_draper"},
 "macdon_fd240":{speed:8.2,eff:0.86,fieldCapacityHaH:8.6,price:15900000,techClass:"flex_draper"},
 "macdon_fd245":{speed:8.2,eff:0.86,fieldCapacityHaH:9.66,price:18500000,techClass:"flex_draper"},
 "capello_quasar4":{speed:7.8,eff:0.82,fieldCapacityHaH:2.05,price:3200000,techClass:"modern_corn"},
 "capello_quasar6":{speed:7.8,eff:0.82,fieldCapacityHaH:3.01,price:4500000,techClass:"modern_corn"},
 "capello_quasar8":{speed:7.8,eff:0.82,fieldCapacityHaH:3.97,price:5900000,techClass:"modern_corn"},
 "capello_quasar12":{speed:7.4,eff:0.82,fieldCapacityHaH:5.46,price:8900000,techClass:"modern_corn"},
 "capello_hel57":{speed:8.0,eff:0.82,fieldCapacityHaH:3.74,price:8600000,techClass:"rowless_sunflower"},
 "capello_hel75":{speed:8.0,eff:0.82,fieldCapacityHaH:4.92,price:10500000,techClass:"rowless_sunflower"},
 "capello_hel94":{speed:7.6,eff:0.82,fieldCapacityHaH:5.86,price:12800000,techClass:"rowless_sunflower"},
 "capello_hel119":{speed:7.6,eff:0.82,fieldCapacityHaH:7.42,price:15600000,techClass:"rowless_sunflower"},
 "floatstream5":{speed:6.7,eff:0.8,fieldCapacityHaH:2.68,price:3300000,techClass:"variable_feeding"},
 "argus570":{speed:6.5,eff:0.76,fieldCapacityHaH:1.73,price:3500000,techClass:"corn_row"},
 "sunstream49":{speed:7.2,eff:0.8,fieldCapacityHaH:2.82,price:4100000,techClass:"modern_sunflower"},
 "sunstream105":{speed:7.0,eff:0.8,fieldCapacityHaH:5.88,price:8900000,techClass:"modern_sunflower"},
 "claas_vario660_used":{speed:6.8,eff:0.8,fieldCapacityHaH:3.63,price:5200000,techClass:"variable_feeding"},
 "claas_vario1050_used":{speed:6.6,eff:0.8,fieldCapacityHaH:5.54,price:8500000,techClass:"variable_feeding"},
 "claas_convio1230":{speed:7.4,eff:0.84,fieldCapacityHaH:7.65,price:17600000,techClass:"flex_draper"},
 "claas_sunspeed8":{speed:7.2,eff:0.8,fieldCapacityHaH:3.46,price:6900000,techClass:"modern_sunflower"},
 "jd_rdf35":{speed:7.6,eff:0.84,fieldCapacityHaH:6.83,price:11500000,techClass:"flex_draper"},
 "jd_rdf40":{speed:7.4,eff:0.84,fieldCapacityHaH:7.58,price:13200000,techClass:"flex_draper"},
 "case_g500v35":{speed:6.0,eff:0.76,fieldCapacityHaH:4.88,price:15400000,techClass:"modern_rigid"},
 "case_g500v41":{speed:5.8,eff:0.76,fieldCapacityHaH:5.51,price:17800000,techClass:"modern_rigid"},
 "fendt_powerflow107":{speed:6.6,eff:0.8,fieldCapacityHaH:5.65,price:13900000,techClass:"variable_feeding"},
 "fendt_powerflow122":{speed:6.4,eff:0.8,fieldCapacityHaH:6.25,price:15900000,techClass:"variable_feeding"},
 "mf_powerflow107":{speed:6.6,eff:0.8,fieldCapacityHaH:5.65,price:13900000,techClass:"variable_feeding"},
 "challenger_pf18":{speed:6.8,eff:0.8,fieldCapacityHaH:2.99,price:2600000,techClass:"variable_feeding"},
 "challenger_pf20":{speed:6.8,eff:0.8,fieldCapacityHaH:3.32,price:3000000,techClass:"variable_feeding"},
 "challenger_pf22":{speed:6.8,eff:0.8,fieldCapacityHaH:3.64,price:3400000,techClass:"variable_feeding"},
 "challenger_pf25":{speed:6.8,eff:0.8,fieldCapacityHaH:4.13,price:3900000,techClass:"variable_feeding"},
 "df_dh63":{speed:6.2,eff:0.76,fieldCapacityHaH:2.97,price:5100000,techClass:"modern_rigid"},
 "df_dh72":{speed:6.2,eff:0.76,fieldCapacityHaH:3.39,price:6100000,techClass:"modern_rigid"},
 "df_varicrop50":{speed:6.2,eff:0.76,fieldCapacityHaH:2.36,price:4700000,techClass:"modern_rigid"},
 "df_varicrop55":{speed:6.2,eff:0.76,fieldCapacityHaH:2.59,price:5200000,techClass:"modern_rigid"},
 "df_varicrop65":{speed:6.2,eff:0.76,fieldCapacityHaH:3.06,price:6500000,techClass:"modern_rigid"},
 "claas_vario680_used":{speed:6.8,eff:0.8,fieldCapacityHaH:3.7,price:5200000,techClass:"variable_feeding"},
 "claas_convio1080":{speed:7.6,eff:0.84,fieldCapacityHaH:6.89,price:16800000,techClass:"flex_draper"},
 "nh_varifeed740_used":{speed:6.8,eff:0.8,fieldCapacityHaH:4.03,price:5400000,techClass:"variable_feeding"},
 "nh_varifeed915":{speed:6.6,eff:0.8,fieldCapacityHaH:4.83,price:14200000,techClass:"variable_feeding"},
 "case_3050_25":{speed:6.2,eff:0.76,fieldCapacityHaH:3.58,price:5600000,techClass:"modern_rigid"},
 "case_3162_35":{speed:6.6,eff:0.8,fieldCapacityHaH:5.65,price:15800000,techClass:"variable_feeding"},
 "fendt_powerflow770":{speed:6.8,eff:0.8,fieldCapacityHaH:4.19,price:5900000,techClass:"variable_feeding"},
 "fendt_superflow1070":{speed:7.6,eff:0.84,fieldCapacityHaH:6.83,price:16200000,techClass:"flex_draper"},
 "palesse_zhzk5_used":{speed:6.2,eff:0.76,fieldCapacityHaH:2.36,price:2300000,techClass:"modern_rigid"},
 "palesse_zhzk6_used":{speed:6.2,eff:0.76,fieldCapacityHaH:2.83,price:1900000,techClass:"modern_rigid"},
 "palesse_zhzk75_new":{speed:6.2,eff:0.76,fieldCapacityHaH:3.53,price:3900000,techClass:"modern_rigid"},
 "palesse_zhzk9_new":{speed:6.0,eff:0.76,fieldCapacityHaH:4.2,price:5200000,techClass:"modern_rigid"},
 "lovol_header457":{speed:6.2,eff:0.76,fieldCapacityHaH:2.15,price:3900000,techClass:"modern_rigid"},
 "df_varicrop75":{speed:6.2,eff:0.76,fieldCapacityHaH:3.53,price:9200000,techClass:"modern_rigid"},
 "challenger_pf30":{speed:6.6,eff:0.8,fieldCapacityHaH:4.8,price:4400000,techClass:"variable_feeding"}
};
for(const [id,v] of Object.entries(HEADER_CALIBRATION)){const h=byId[id];if(!h||h.type!=='header')continue;Object.assign(h,v);h.physicalModelKey=id;}

// Рекомендуемая мощность — не жёсткая совместимость, а диапазон, при котором жатка
// раскрывает паспортную полевую производительность без перегруза комбайна.
function recommendedHeaderHp(h){
 const w=Math.max(1,Number(h.width)||1),t=h.techClass||'modern_rigid';
 const factor={legacy_rigid:13.2,modern_rigid:15,variable_feeding:16,flex_draper:17,
  legacy_corn:23,corn_row:25,modern_corn:27,legacy_sunflower:18,sunflower_row:20,modern_sunflower:22,rowless_sunflower:20}[t]||15;
 const exp=(h.category==='grain'?1.35:1.25),calc=factor*Math.pow(w,exp),min=Math.max(Number(h.minCombineHp)||0,calc);
 return Math.max(80,Math.round(min/10)*10);
}
for(const h of C.filter(x=>x.type==='header'&&!x.hidden)){
 h.recommendedCombineHp=recommendedHeaderHp(h);
 h.recommendedCombineHpMax=Math.round(h.recommendedCombineHp*1.45/10)*10;
}


// 0.11.9.22 — Capello physical compatibility audit. Official attachment weights are used
// as an additional engineering gate alongside adapter family, combine power and working width.
const headerWeightsKg={capello_quasar4:1210,capello_quasar6:1750,capello_quasar8:2230,capello_quasar12:3650,capello_hel57:1800,capello_hel75:2400,capello_hel94:2900,capello_hel119:3500};
for(const [id,kg] of Object.entries(headerWeightsKg)){if(byId[id])byId[id].headerWeightKg=kg;}
for(const c of C.filter(x=>x.type==='combine')){
 if(!Number(c.maxHeaderWeightKg)>0){
  const hp=Math.max(1,Number(c.hp)||1),mw=Math.max(1,Number(c.maxHeaderWidth)||1);
  c.maxHeaderWeightKg=Math.round(Math.max(1400,900+hp*5.5+mw*80)/50)*50;
 }
}

// Строгая двусторонняя матрица совместимости. Все экраны и подбор техники
// используют именно эти списки, чтобы магазин, парк и агрооперации не расходились.
for(const m of C){
 if(m.type==='combine')m.compatibleHeaderIds=[];
 if(m.type==='header')m.compatibleCombineIds=[];
}
for(const h of C.filter(x=>x.type==='header')){
 for(const c of C.filter(x=>x.type==='combine')){
  const direct=Array.isArray(h.directCombineIds)?h.directCombineIds:null;
  const mounts=Array.isArray(h.mounts)?h.mounts:[];
  const family=c.headerFamily||null, maxW=Number(c.maxHeaderWidthByCategory?.[h.category]??c.maxHeaderWidth)||0,minHp=Number(h.minCombineHp)||0,maxWeight=Number(c.maxHeaderWeightKg)||0,headerWeight=Number(h.headerWeightKg)||0;
  const directOk=direct?direct.includes(c.id):false;
  const universalOk=!direct&&!!family&&mounts.includes(family)&&(Number(c.hp)||0)>=minHp;
  const ok=(directOk||universalOk)&&(!maxW||Number(h.width||0)<=maxW+.01)&&(!headerWeight||!maxWeight||headerWeight<=maxWeight+1);
  if(ok){h.compatibleCombineIds.push(c.id);c.compatibleHeaderIds.push(h.id);}
 }
}


// 0.11.8.9: одна физическая модель может обслуживать несколько агроопераций.
// 0.11.8.60: часть расширенного каталога тракторов добавляется ниже базового блока,
// поэтому повторно привязываем силовые варианты после формирования всего каталога.
for(const [modelId,vs] of Object.entries(ENGINE_VARIANTS)){
 const m=C.find(x=>x.id===modelId);if(!m||m.type!=='tractor')continue;
 m.engineVariants=vs;const st=vs.find(v=>v.stock)||vs[0];m.stockEngineId=st.id;
}



// 0.11.9.03 — реальные варианты объёма кузова / надставных бортов.
// capacityT остаётся паспортной грузоподъёмностью: надставки увеличивают объём, а не допустимую массу.
const BODY_CONFIGS={
 gaz53:[
  {id:'stock',name:'Штатные борта',bodyM3:5.0,price:0,stock:true},
  {id:'ext',name:'Надставные борта',bodyM3:10.0,price:85000,agroOverloadFactor:1.35}
 ],
 zil130:[
  {id:'stock',name:'Штатные борта',bodyM3:5.0,price:0,stock:true},
  {id:'agro',name:'Сельхознадставки',bodyM3:8.0,price:80000,agroOverloadFactor:1.25},
  {id:'high',name:'Высокие надставные борта',bodyM3:9.5,price:115000,agroOverloadFactor:1.45}
 ],
 zil45065:[
  {id:'stock',name:'Основные борта',bodyM3:6.0,price:0,stock:true},
  {id:'ext',name:'Заводские надставные борта',bodyM3:12.5,price:105000}
 ],
 ural5557_agro:[
  {id:'stock',name:'Сельхозплатформа',bodyM3:10.0,price:0,stock:true},
  {id:'ext',name:'Высокие сельхозборта',bodyM3:15.0,price:180000}
 ],
 ural_next_58314s:[
  {id:'stock',name:'Зерновой кузов',bodyM3:15.5,price:0,stock:true},
  {id:'ext',name:'Надставные борта',bodyM3:20.0,price:260000}
 ],
 szap8551_ural:[
  {id:'stock',name:'Основные борта',bodyM3:9.4,price:0,stock:true},
  {id:'ext',name:'Надставные борта',bodyM3:15.4,price:210000},
  {id:'high',name:'Высокий зерновой кузов 02М',bodyM3:18.8,price:320000}
 ],
 kamaz55102:[
  {id:'stock',name:'Основные борта',bodyM3:7.9,price:0,stock:true},
  {id:'wood',name:'Дополнительные деревянные борта',bodyM3:10.12,price:110000},
  {id:'metal',name:'Надставные металлические борта',bodyM3:15.8,price:185000,agroOverloadFactor:1.75}
 ],
 maz5551:[
  {id:'stock',name:'Штатный кузов',bodyM3:5.5,price:0,stock:true},
  {id:'ext',name:'Надставные борта',bodyM3:7.7,price:135000}
 ],
 kamaz45143:[
  {id:'stock',name:'Сельхозкузов',bodyM3:15.4,price:0,stock:true},
  {id:'grain',name:'Высокие зерновые надставки',bodyM3:20.0,price:220000},
  {id:'silage',name:'Сетчатые силосные надставки',bodyM3:27.0,price:310000,silageSides:true}
 ],
 kamaz65115:[
  {id:'stock',name:'Сельхозкузов',bodyM3:10.7,price:0,stock:true},
  {id:'ext',name:'Надставные борта 400 мм',bodyM3:15.8,price:240000},
  {id:'grain',name:'Высокие зерновые борта',bodyM3:22.0,price:340000},
  {id:'silage',name:'Высокие силосные надставки',bodyM3:30.0,price:420000,silageSides:true}
 ],
 kamaz6520grain:[
  {id:'stock',name:'Зерновой кузов',bodyM3:20.0,price:0,stock:true},
  {id:'ext',name:'Надставные зерновые борта',bodyM3:26.0,price:310000},
  {id:'high',name:'Высокие зерновые борта',bodyM3:30.0,price:430000}
 ],
 gkb8527:[
  {id:'stock',name:'Основные борта',bodyM3:7.9,price:0,stock:true},
  {id:'metal',name:'Надставные борта',bodyM3:15.8,price:145000,agroOverloadFactor:1.75}
 ],
 nefaz8560_old:[
  {id:'stock',name:'Основные борта',bodyM3:7.8,price:0,stock:true},
  {id:'metal',name:'Надставные металлические борта',bodyM3:15.4,price:160000,agroOverloadFactor:1.75}
 ],
 maz857100:[
  {id:'stock',name:'Штатные борта',bodyM3:8.85,price:0,stock:true},
  {id:'ext',name:'Высокие сельхозборта',bodyM3:14.5,price:175000}
 ],
 nefaz8560_new:[
  {id:'stock',name:'Зерновая платформа',bodyM3:15.0,price:0,stock:true},
  {id:'grain',name:'Высокие зерновые борта',bodyM3:20.0,price:240000}
 ],
 maz6501grain:[{id:'stock',name:'Заводской зерновой кузов',bodyM3:32.0,price:0,stock:true}],
 man_tgs26:[{id:'stock',name:'Зерновой кузов',bodyM3:36.0,price:0,stock:true}],
 scania_g440:[{id:'stock',name:'Зерновой кузов',bodyM3:38.0,price:0,stock:true}],
 volvo_fm:[{id:'stock',name:'Зерновой кузов',bodyM3:38.0,price:0,stock:true}],
 tonar6328:[{id:'stock',name:'Зерновой кузов',bodyM3:28.0,price:0,stock:true}],
 man_tgs_agro:[{id:'stock',name:'Зерновой кузов',bodyM3:38.0,price:0,stock:true}],
 scania_super500_grain:[{id:'stock',name:'Зерновой кузов',bodyM3:44.0,price:0,stock:true}],
 // Тракторные прицепы: грузоподъёмность не меняется при наращивании бортов.
 '2pts4':[
  {id:'stock',name:'Основные борта',bodyM3:5.0,price:0,stock:true},
  {id:'ext',name:'Надставные борта',bodyM3:13.0,price:95000},
  {id:'silage',name:'Сетчатые силосные борта',bodyM3:16.5,price:145000,silageSides:true}
 ],
 '2pts6':[
  {id:'stock',name:'Основные борта',bodyM3:4.6,price:0,stock:true},
  {id:'ext',name:'Надставные борта',bodyM3:10.8,price:120000}
 ],
 '2pts9':[
  {id:'stock',name:'Основные борта',bodyM3:8.5,price:0,stock:true},
  {id:'ext',name:'Высокие надставные борта',bodyM3:17.4,price:165000},
  {id:'silage',name:'Силосные надставки большого объёма',bodyM3:22.5,price:240000,silageSides:true}
 ],
 '2pts11':[
  {id:'stock',name:'Основные борта',bodyM3:11.0,price:0,stock:true},
  {id:'ext',name:'Надставные борта',bodyM3:18.0,price:190000}
 ],
 '3pts12':[
  {id:'stock',name:'Основные борта',bodyM3:11.6,price:0,stock:true},
  {id:'ext',name:'Надставные борта',bodyM3:23.5,price:230000}
 ],
 pst9:[
  {id:'stock',name:'Основной кузов',bodyM3:10.5,price:0,stock:true},
  {id:'low',name:'Низкие надставные борта',bodyM3:12.5,price:150000},
  {id:'high',name:'Высокие надставные борта',bodyM3:17.5,price:240000}
 ],
 pst12:[
  {id:'stock',name:'Основной кузов',bodyM3:12.5,price:0,stock:true},
  {id:'low',name:'Надставные борта 200 мм',bodyM3:14.5,price:180000},
  {id:'high',name:'Высокие сетчатые борта',bodyM3:19.5,price:285000}
 ],
 pst18:[
  {id:'stock',name:'Основной кузов',bodyM3:15.5,price:0,stock:true},
  {id:'high',name:'Высокие надставные борта',bodyM3:22.3,price:340000},
  {id:'silage',name:'Силосные сетчатые борта',bodyM3:31.0,price:470000,silageSides:true}
 ],
 pronar_t653_2:[
  {id:'stock',name:'Борта 500 мм',bodyM3:4.1,price:0,stock:true},
  {id:'ext500',name:'Надставки 500 мм',bodyM3:8.2,price:230000}
 ],
 pronar_t680:[
  {id:'stock',name:'Борта 800 мм',bodyM3:9.8,price:0,stock:true},
  {id:'ext600',name:'Надставки 600 мм',bodyM3:17.2,price:360000}
 ],
 joskin_transcap_5500_15:[
  {id:'stock',name:'Штатный кузов 125 см',bodyM3:15.5,price:0,stock:true},
  {id:'ext25',name:'Алюминиевые надставки 25 см',bodyM3:18.5,price:410000},
  {id:'ext50',name:'Алюминиевые надставки 50 см',bodyM3:21.6,price:610000},
  {id:'ext75',name:'Алюминиевые надставки 75 см',bodyM3:24.6,price:790000},
  {id:'ext100',name:'Алюминиевые надставки 100 см',bodyM3:27.7,price:980000}
 ],
 krampe_bigbody650:[
  {id:'stock',name:'Штатный кузов',bodyM3:21.9,price:0,stock:true},
  {id:'ext40',name:'Надставки 40 см',bodyM3:27.6,price:520000},
  {id:'ext60',name:'Надставки 60 см',bodyM3:30.5,price:680000},
  {id:'ext80',name:'Надставки 80 см',bodyM3:33.3,price:820000},
  {id:'ext100',name:'Надставки 80+20 см',bodyM3:36.2,price:990000}
 ],
 joskin_transspace_9200:[
  {id:'stock',name:'Штатный кузов',bodyM3:30.8,price:0,stock:true},
  {id:'ext',name:'Высокие надставные борта',bodyM3:36.2,price:890000}
 ],
 krampe_bigbody900:[
  {id:'stock',name:'Штатный кузов',bodyM3:30.3,price:0,stock:true},
  {id:'ext40',name:'Надставки 40 см',bodyM3:38.2,price:690000},
  {id:'ext60',name:'Надставки 60 см',bodyM3:42.2,price:890000},
  {id:'ext80',name:'Надставки 80 см',bodyM3:46.1,price:1090000},
  {id:'ext100',name:'Надставки 80+20 см',bodyM3:50.1,price:1290000}
 ]
};
for(const [id,configs] of Object.entries(BODY_CONFIGS)){const m=byId[id];if(m)m.bodyConfigs=configs;}
// Дорожные прицепы работают с грузовиками, а не с тракторной системой ПТС.
for(const [id,truckTrailerFor] of Object.entries({gkb8527:['kamaz55102'],nefaz8560_old:['kamaz55102'],maz857100:['maz5551','maz6501grain'],nefaz8560_new:['kamaz45143','kamaz65115'],szap8551_ural:['ural5557_agro','ural_next_58314s'],odaz9370_grain:['kamaz5410_tractor'],tonar9523_used:['maz5432_tractor','volvo_fh12_420_tractor','scania_r420_tractor'],wielton_nw3_grain_used:['volvo_fh12_420_tractor','scania_r420_tractor'],stas_agrostar_used:['volvo_fh12_420_tractor','scania_r420_tractor'],maz934700_grain:['kamaz54901_tractor','maz5440c9_tractor','man_tgx18520_tractor','volvo_fh_aero500_tractor'],tonar9523_al_grain:['kamaz54901_tractor','maz5440c9_tractor','man_tgx18520_tractor','volvo_fh_aero500_tractor'],stas_agrostar_new:['man_tgx18520_tractor','volvo_fh_aero500_tractor'],sespel_db4u70:['kamaz54901_tractor','maz5440c9_tractor','man_tgx18520_tractor','volvo_fh_aero500_tractor']})){const m=byId[id];if(m){m.truckTrailer=true;m.truckTrailerFor=truckTrailerFor;m.semiTrailer=['odaz9370_grain','tonar9523_used','wielton_nw3_grain_used','stas_agrostar_used','maz934700_grain','tonar9523_al_grain','stas_agrostar_new','sespel_db4u70'].includes(id);}}

// 0.11.8.66 — тип ходовой. Все самоходные машины получают явную маркировку.
const TRACKED_IDS=new Set(['t150track','dt75','agromash_ruslan','case_quadtrac715','versatile570dt_new','challenger_mt765b','challenger_mt865e']);
const HALFTRACK_IDS=new Set(['fendt_ideal9t']);
const CONVERTIBLE_HALFTRACK_IDS=new Set(['nh_t8410','nh_t8435']);
for(const m of C){
 if(!['tractor','combine','truck'].includes(m.type)&&!m.selfPropelled)continue;
 m.driveType=TRACKED_IDS.has(m.id)?'tracked':HALFTRACK_IDS.has(m.id)?'halftrack':'wheeled';
 if(CONVERTIBLE_HALFTRACK_IDS.has(m.id)){m.driveType='wheeled';m.availableDriveTypes=['wheeled','halftrack'];m.halftrackSystem='New Holland SmartTrax';}
 if(m.driveType==='tracked')m.availableDriveTypes=['tracked'];
 else if(!m.availableDriveTypes)m.availableDriveTypes=[m.driveType];
}


// 0.11.9.14 — material-capacity pass. Capacities are nominal working capacities of the
// represented model/configuration. Fertilizer sections on seeders are stored as passport
// metadata only; simultaneous seed + fertilizer application is not enabled yet.
const MATERIAL_CAPACITY={
 // Grain drills / air seeders: seed kg; optional fertilizer kg is metadata for future combined application.
 imp59:{seedKg:720,fertilizerKg:400}, imp60:{seedKg:1080,fertilizerKg:600}, imp61:{seedKg:720,fertilizerKg:400},
 imp62:{seedKg:1200}, imp63:{seedKg:2100}, imp64:{seedKg:6000}, imp65:{seedKg:3600}, imp66:{seedKg:4000}, imp67:{seedKg:3100}, imp68:{seedKg:7600},
 rsm_sh8200:{seedKg:6200}, rsm_sh12200:{seedKg:9200}, pot_vitasem302:{seedKg:1000}, pot_aerosem6002:{seedKg:2800},
 horsch_sprinter18nt:{seedKg:12000}, horsch_panther460:{seedKg:11000}, horsch_sprinter15nt:{seedKg:11000}, lemken_saphir9_used:{seedKg:1100},
 lemken_solitairdt_new:{seedKg:5100}, amazone_d9_used:{seedKg:1000,fertilizerKg:450}, amazone_cirrus_new:{seedKg:5000},
 szs21_used:{seedKg:275,fertilizerKg:140}, szs21_new:{seedKg:335,fertilizerKg:195}, szs21x3_used:{seedKg:825,fertilizerKg:420}, szs21x3_new:{seedKg:1005,fertilizerKg:585},
 szs21x5_used:{seedKg:1375,fertilizerKg:700}, szs21x5_new:{seedKg:1675,fertilizerKg:975}, kuhn_espro6000:{seedKg:3500},
 gp_1006nt_used:{seedKg:1075}, gp_3s4000hd_used:{seedKg:4200}, gp_bd7600:{seedKg:6200},
 // Row crop planters: nominal seed hopper mass-equivalent. Sugar-beet seed uses a separate area fallback in runtime.
 imp69:{seedKg:180}, imp70:{seedKg:200}, imp71:{seedKg:220}, imp72:{seedKg:250}, imp73:{seedKg:300}, imp74:{seedKg:420}, imp75:{seedKg:320}, imp76:{seedKg:560}, imp77:{seedKg:640}, imp78:{seedKg:900},
 brand_case_er1255:{seedKg:700}, brand_case_er2150:{seedKg:1200}, vaderstad_tempo_l24:{seedKg:1450}, lemken_azurit9_used:{seedKg:600}, lemken_azurit10_new:{seedKg:700},
 amazone_ed_used:{seedKg:420}, amazone_precea_new:{seedKg:660}, row_vesta8_new:{seedKg:260}, row_vega8_new:{seedKg:300}, gp_yp1625a_used:{seedKg:1050}, gp_pl5700:{seedKg:1400},
 // Dry fertilizer spreaders: usable payload kg. Where the real family is sold by hopper litres, a conservative fertilizer payload is used.
 imp79:{dryKg:5000}, imp80:{dryKg:5000}, imp81:{dryKg:8000}, imp82:{dryKg:1500}, imp83:{dryKg:3200}, imp84:{dryKg:3200}, imp85:{dryKg:3200}, imp86:{dryKg:3500},
 lemken_spica8_used:{dryKg:1900}, lemken_polaris14_new:{dryKg:14000}, amazone_zam_used:{dryKg:1500}, amazone_zats_new:{dryKg:4200}, fert_mvu5m_new:{dryKg:5000}, fert_rum8m_new:{dryKg:8000},
 // Sprayers: main solution tank litres.
 imp87:{tankL:2000}, imp88:{tankL:3000}, imp89:{tankL:2500}, imp90:{tankL:4200}, imp91:{tankL:4000}, imp92:{tankL:3000}, imp93:{tankL:3200}, imp94:{tankL:5000},
 tuman3:{tankL:3000}, case_patriot3330:{tankL:3800}, case_patriot4450:{tankL:4500}, nh_guardian300:{tankL:3785}, nh_guardian410:{tankL:4542}, fendt_rogator635:{tankL:5000}, fendt_rogator645:{tankL:6000},
 lemken_albatros9_used:{tankL:4000}, lemken_sprayhub_new:{tankL:1100}, amazone_ux4201_used:{tankL:4200}, amazone_pantera4504_new:{tankL:4500}, spr_op2000m_new:{tankL:2000}, spr_opsh24m_new:{tankL:3000}
};
for(const [id,c] of Object.entries(MATERIAL_CAPACITY)){const m=C.find(x=>x.id===id);if(m)Object.assign(m,c);}
// Operation-specific material support. Lime requires dedicated feed/spreading hardware and narrower effective swath.
for(const [id,x] of Object.entries({
 imp79:{limeCapable:true,limeWidth:10,limeSpeed:9},
 imp80:{limeCapable:true,limeWidth:10,limeSpeed:9},
 imp81:{limeCapable:true,limeWidth:12,limeSpeed:10},
 fert_mvu5m_new:{limeCapable:true,limeWidth:10,limeSpeed:10},
 fert_rum8m_new:{limeCapable:true,limeWidth:12,limeSpeed:11}
})){const m=C.find(z=>z.id===id);if(m)Object.assign(m,x);}
for(const m of C.filter(x=>x.category==='fertilizer'&&!Array.isArray(x.fertilizerKinds)))m.fertilizerKinds=m.limeCapable?['granular','lime']:['granular'];
// Carefully chosen gap-fillers only; each occupies a previously empty compact-capacity niche.
add({id:'fert_rum1000_new',name:'РУМ-1000 навесной',type:'implement',segment:'domestic_new',category:'fertilizer',requiredHp:50,width:12,speed:13,price:690000,years:[2024,2026],newAvailable:true,eff:.80,dryKg:1000,hopperL:1000});
add({id:'spr_on60012_new',name:'ОН-600-12',type:'implement',segment:'domestic_new',category:'sprayer',requiredHp:70,width:12,speed:8,price:590000,years:[2024,2026],newAvailable:true,eff:.80,tankL:600});
add({id:'spr_jarmet_p1282_new',name:'JAR-MET P128/2',type:'implement',segment:'foreign_new',category:'sprayer',requiredHp:35,width:10,speed:8,price:420000,years:[2024,2026],newAvailable:true,eff:.80,tankL:400});

// 0.11.9.15–0.11.9.16 — field material-supply equipment.
// 0.11.9.16 makes big-bag logistics physical: a compatible tractor-loader + tool + real transport is required.
add({id:'supply_uzsa40_zil',name:'УЗСА-40 семенозагрузчик (ЗИЛ)',type:'truck',segment:'domestic_used',category:'field_supply',capacityT:3,bodyM3:5.5,roadSpeed:55,fuelLph:18,driveType:'wheeled',availableDriveTypes:['wheeled'],price:780000,years:[1980,1995],fieldSupplyMode:'seed_loader',fieldSupplyKinds:['seed'],supplyCapacity:3000,supplyUnit:'кг',transferPerMin:450,brand:'УЗСА',bodyManufacturer:'УЗСА',chassisBrand:'ЗИЛ'});
add({id:'supply_as2um_gaz51',name:'АС-2УМ автозагрузчик сеялок (ГАЗ-51А)',type:'truck',segment:'domestic_used',category:'field_supply',capacityT:2.3,bodyM3:3.3,roadSpeed:45,fuelLph:17,driveType:'wheeled',availableDriveTypes:['wheeled'],price:520000,years:[1965,1980],fieldSupplyMode:'seed_loader',fieldSupplyKinds:['seed'],supplyCapacity:2300,supplyUnit:'кг',transferPerMin:260});
add({id:'supply_zus_l_domestic',name:'ЗУС-Л загрузчик сеялок',type:'implement',segment:'domestic_new',category:'field_supply',requiredHp:80,width:2.2,speed:18,price:680000,years:[2024,2026],newAvailable:true,eff:.84,fieldSupplyMode:'seed_loader',fieldSupplyKinds:['seed'],supplyRequiresTractor:true,supplyCapacity:6500,supplyUnit:'кг',transferPerMin:333});
add({id:'supply_zsb30_domestic',name:'ЗСБ-30 бортовой загрузчик сеялок',type:'implement',segment:'domestic_new',category:'field_supply',requiredHp:110,width:2.4,speed:20,price:1450000,years:[2024,2026],newAvailable:true,eff:.86,fieldSupplyMode:'seed_loader',fieldSupplyKinds:['seed'],supplyRequiresTractor:true,supplyCapacity:10000,supplyUnit:'кг',transferPerMin:500});
add({id:'supply_unverferth3750_used',name:'Unverferth Seed Runner 3750',type:'implement',segment:'foreign_used',category:'field_supply',requiredHp:120,width:2.6,speed:25,price:2900000,years:[2011,2017],eff:.86,fieldSupplyMode:'seed_loader',fieldSupplyKinds:['seed'],supplyRequiresTractor:true,supplyCapacity:8200,supplyUnit:'кг',transferPerMin:500});
add({id:'supply_jm375st_used',name:'J&M 375ST SpeedTender',type:'implement',segment:'foreign_used',category:'field_supply',requiredHp:130,width:2.6,speed:25,price:3600000,years:[2015,2021],eff:.88,fieldSupplyMode:'seed_loader',fieldSupplyKinds:['seed'],supplyRequiresTractor:true,supplyCapacity:9000,supplyUnit:'кг',transferPerMin:620});
add({id:'supply_jm510st_new',name:'J&M 510ST SpeedTender',type:'implement',segment:'foreign_new',category:'field_supply',requiredHp:150,width:2.8,speed:28,price:7200000,years:[2023,2026],newAvailable:true,eff:.90,fieldSupplyMode:'seed_loader',fieldSupplyKinds:['seed'],supplyRequiresTractor:true,supplyCapacity:12000,supplyUnit:'кг',transferPerMin:950});
add({id:'supply_unverferth3755_new',name:'Unverferth Seed Runner 3755 XL',type:'implement',segment:'foreign_new',category:'field_supply',requiredHp:140,width:2.6,speed:28,price:6400000,years:[2022,2026],newAvailable:true,eff:.90,fieldSupplyMode:'seed_loader',fieldSupplyKinds:['seed'],supplyRequiresTractor:true,supplyCapacity:9000,supplyUnit:'кг',transferPerMin:760});

// Front loaders are detachable assets. Compatibility is handled in runtime by loader class, tractor type/brand and hydraulics.
add({id:'loader_pku08',name:'ПКУ-0,8',type:'implement',segment:'domestic_used',category:'front_loader',requiredHp:50,width:1.8,speed:6,price:145000,years:[1982,2005],eff:.78,loaderMinHp:50,loaderMaxHp:140,loaderLiftKg:800,loaderCycleSec:32,loaderMounts:['legacy_pku'],hydraulicLpm:35});
add({id:'supply_pku08',name:'ПКУ-0,8М современное исполнение',type:'implement',segment:'domestic_new',category:'front_loader',requiredHp:70,width:1.9,speed:6,price:235000,years:[2022,2026],newAvailable:true,eff:.82,loaderMinHp:70,loaderMaxHp:160,loaderLiftKg:1000,loaderCycleSec:26,loaderMounts:['legacy_pku','euro_global'],hydraulicLpm:45});
add({id:'loader_universal18',name:'Универсал 1800',type:'implement',segment:'domestic_new',category:'front_loader',requiredHp:90,width:2.1,speed:7,price:590000,years:[2023,2026],newAvailable:true,eff:.86,loaderMinHp:90,loaderMaxHp:220,loaderLiftKg:1800,loaderCycleSec:20,loaderMounts:['euro_global'],hydraulicLpm:65});
add({id:'loader_quicke_q46_used',name:'Quicke Q46',type:'implement',segment:'foreign_used',category:'front_loader',requiredHp:90,width:2.1,speed:7,price:780000,years:[2007,2018],eff:.86,loaderMinHp:90,loaderMaxHp:210,loaderLiftKg:1900,loaderCycleSec:19,loaderMounts:['euro_global'],hydraulicLpm:60});
add({id:'loader_jd_643r',name:'John Deere 643R',type:'implement',segment:'foreign_new',category:'front_loader',requiredHp:130,width:2.2,speed:8,price:1950000,years:[2021,2026],newAvailable:true,eff:.90,loaderMinHp:130,loaderMaxHp:280,loaderLiftKg:2300,loaderCycleSec:15,loaderMounts:['jd_global','euro_global'],loaderBrands:['John Deere'],hydraulicLpm:90});
add({id:'loader_jd_700m',name:'John Deere 700M',type:'implement',segment:'foreign_new',category:'front_loader',requiredHp:180,width:2.45,speed:8,price:2850000,years:[2020,2026],newAvailable:true,eff:.91,loaderMinHp:180,loaderMaxHp:450,loaderLiftKg:3000,loaderCycleSec:14,loaderMounts:['jd_global'],loaderBrands:['John Deere'],loaderTractorIds:['jd7430','jd7830','jd7930','jd8230','jd8330','jd8430','jd7r330','jd8r410'],hydraulicLpm:90});
add({id:'loader_quicke_q6m',name:'Quicke Q6M',type:'implement',segment:'foreign_new',category:'front_loader',requiredHp:120,width:2.2,speed:8,price:1680000,years:[2022,2026],newAvailable:true,eff:.90,loaderMinHp:120,loaderMaxHp:280,loaderLiftKg:2500,loaderCycleSec:14,loaderMounts:['euro_global'],hydraulicLpm:85});
add({id:'loader_quicke_q8m',name:'Quicke Q8M',type:'implement',segment:'foreign_new',category:'front_loader',requiredHp:170,width:2.4,speed:8,price:2450000,years:[2022,2026],newAvailable:true,eff:.91,loaderMinHp:170,loaderMaxHp:370,loaderLiftKg:3000,loaderCycleSec:13,loaderMounts:['euro_global'],hydraulicLpm:95});

// Detachable loader tools. These are intentionally bought/sold as normal equipment assets on both markets.
add({id:'tool_bucket_pku05',name:'Ковш ПКУ 0,5 м³',type:'implement',segment:'domestic_used',category:'loader_tool',price:65000,years:[1982,2005],toolRole:'bucket',toolMounts:['legacy_pku'],toolMassKg:180,bucketM3:.5,toolPayloadKg:700});
add({id:'tool_quicke_bucket12_used',name:'Quicke ковш 1,2 м³ (Б/У)',type:'implement',segment:'foreign_used',category:'loader_tool',price:210000,years:[2008,2020],toolRole:'bulk_bucket',toolMounts:['euro_global'],toolMassKg:330,bucketM3:1.2,toolPayloadKg:1500});
add({id:'tool_bucket_general10',name:'Ковш универсальный 1,0 м³',type:'implement',segment:'domestic_new',category:'loader_tool',price:165000,years:[2024,2026],newAvailable:true,toolRole:'bucket',toolMounts:['legacy_pku','euro_global'],toolMassKg:280,bucketM3:1,toolPayloadKg:1300});
add({id:'tool_bucket_grain18',name:'Ковш зерновой 1,8 м³',type:'implement',segment:'foreign_new',category:'loader_tool',price:390000,years:[2023,2026],newAvailable:true,toolRole:'bulk_bucket',toolMounts:['euro_global','jd_global'],toolMassKg:410,bucketM3:1.8,toolPayloadKg:1800});
add({id:'tool_bigbag_hook',name:'Траверса-крюк для биг-бэгов',type:'implement',segment:'domestic_new',category:'loader_tool',price:115000,years:[2024,2026],newAvailable:true,toolRole:'bigbag_hook',toolMounts:['legacy_pku','euro_global','jd_global'],toolMassKg:120,toolPayloadKg:1500});
add({id:'tool_bale_fork',name:'Вилы / пика для тюков',type:'implement',segment:'domestic_new',category:'loader_tool',price:125000,years:[2024,2026],newAvailable:true,toolRole:'bale_fork',toolMounts:['legacy_pku','euro_global','jd_global'],toolMassKg:170,toolPayloadKg:1600,futureUse:true});
add({id:'tool_wrapped_bale_grab',name:'Захват для тюков в плёнке',type:'implement',segment:'foreign_new',category:'loader_tool',price:420000,years:[2023,2026],newAvailable:true,toolRole:'wrapped_bale_grab',toolMounts:['euro_global','jd_global'],toolMassKg:350,toolPayloadKg:1400,requiresThirdFunction:true,futureUse:true});
add({id:'tool_silage_grab',name:'Ковш-захват для силоса 1,5 м³',type:'implement',segment:'foreign_new',category:'loader_tool',price:590000,years:[2023,2026],newAvailable:true,toolRole:'silage_grab',toolMounts:['euro_global','jd_global'],toolMassKg:520,bucketM3:1.5,toolPayloadKg:1700,requiresThirdFunction:true,futureUse:true});


// 0.11.9.47 — universal self-propelled loaders and high-volume forage logistics.
// Telehandlers are intentionally modern/new-only. Wheel loaders include affordable legacy CIS machines.
[
 {id:'loader_jcb52040_agri',name:'JCB 520-40 AGRI',segment:'foreign_new',hp:49,price:7800000,fuelLph:8.5,years:[2023,2026],newAvailable:true,loaderClass:'telehandler',loaderLiftKg:2000,loaderCycleSec:17,loaderMounts:['tele_qfit','euro_global'],liftHeightM:4.0,roadSpeed:30},
 {id:'loader_manitou_mlt625',name:'Manitou MLT-X 625-75 H',segment:'foreign_new',hp:75,price:10800000,fuelLph:10.5,years:[2023,2026],newAvailable:true,loaderClass:'telehandler',loaderLiftKg:2500,loaderCycleSec:15,loaderMounts:['tele_qfit','euro_global'],liftHeightM:5.9,roadSpeed:35},
 {id:'loader_manitou_mlt738',name:'Manitou MLT-X 738-130 PS+',segment:'foreign_new',hp:129,price:17600000,fuelLph:15.5,years:[2023,2026],newAvailable:true,loaderClass:'telehandler',loaderLiftKg:3800,loaderCycleSec:12,loaderMounts:['tele_qfit','euro_global'],liftHeightM:6.91,roadSpeed:40},
 {id:'loader_rsm_tlh740',name:'Ростсельмаш TLH 740',segment:'domestic_new',hp:132,price:14900000,fuelLph:16,years:[2027,2035],newAvailable:true,loaderClass:'telehandler',loaderLiftKg:4000,loaderCycleSec:12,loaderMounts:['tele_qfit','euro_global'],liftHeightM:7.0,roadSpeed:40},
 {id:'loader_to18b_used',name:'ТО-18Б',segment:'domestic_used',hp:130,price:1450000,fuelLph:20,years:[1988,2005],newAvailable:false,loaderClass:'wheel_loader',loaderLiftKg:3300,loaderCycleSec:20,loaderMounts:['wheel_iso'],bucketM3:1.9,liftHeightM:2.8,roadSpeed:30},
 {id:'loader_amkodor342_used',name:'АМКОДОР 342С4',segment:'domestic_used',hp:155,price:4200000,fuelLph:22,years:[2005,2021],newAvailable:false,loaderClass:'wheel_loader',loaderLiftKg:3800,loaderCycleSec:12,loaderMounts:['wheel_iso'],bucketM3:2.3,liftHeightM:3.03,roadSpeed:36},
 {id:'loader_rsm_wl530',name:'Ростсельмаш WL 530',segment:'domestic_new',hp:218,price:18900000,fuelLph:28,years:[2027,2035],newAvailable:true,loaderClass:'wheel_loader',loaderLiftKg:10600,loaderCycleSec:10,loaderMounts:['wheel_iso'],bucketM3:3.0,liftHeightM:3.15,roadSpeed:36}
].forEach(m=>add({...m,type:'implement',category:'loader_selfpropelled',selfPropelled:true,driveType:'wheeled',availableDriveTypes:['wheeled'],eff:.9,requiredHp:0,width:2.5,speed:8,bulkLoader:true,baleLoader:true,silageLoader:true,organicLoader:true}));

// Quick-change loader tools. Heavy wheel-loader tools stay separate from tractor/telehandler tools.
add({id:'tool_tele_bucket20',name:'Зерновой ковш 2,0 м³ для телескопа',type:'implement',segment:'foreign_new',category:'loader_tool',price:520000,years:[2023,2026],newAvailable:true,toolRole:'bulk_bucket',toolMounts:['tele_qfit','euro_global'],toolMassKg:480,bucketM3:2.0,toolPayloadKg:2200,bulkLoader:true,grainLoader:true});
add({id:'tool_tele_bale_grab2',name:'Захват для 2 тюков',type:'implement',segment:'foreign_new',category:'loader_tool',price:610000,years:[2023,2026],newAvailable:true,toolRole:'bale_fork',toolMounts:['tele_qfit','euro_global'],toolMassKg:420,toolPayloadKg:2300,balePerCycle:2,baleLoader:true});
add({id:'tool_tele_silage_grab25',name:'Ковш-захват силос/органика 2,5 м³',type:'implement',segment:'foreign_new',category:'loader_tool',price:820000,years:[2023,2026],newAvailable:true,toolRole:'silage_grab',toolMounts:['tele_qfit','euro_global'],toolMassKg:720,bucketM3:2.5,toolPayloadKg:3000,requiresThirdFunction:true,silageLoader:true,organicLoader:true});
add({id:'tool_wheel_bulk30',name:'Ковш лёгких материалов 3,0 м³',type:'implement',segment:'domestic_new',category:'loader_tool',price:690000,years:[2024,2026],newAvailable:true,toolRole:'bulk_bucket',toolMounts:['wheel_iso'],toolMassKg:950,bucketM3:3.0,toolPayloadKg:4500,bulkLoader:true,grainLoader:true});
add({id:'tool_wheel_bulk45',name:'Ковш лёгких материалов 4,5 м³',type:'implement',segment:'foreign_new',category:'loader_tool',price:1450000,years:[2023,2026],newAvailable:true,toolRole:'bulk_bucket',toolMounts:['wheel_iso'],toolMassKg:1450,bucketM3:4.5,toolPayloadKg:6500,bulkLoader:true,grainLoader:true});
add({id:'tool_wheel_grab35',name:'Ковш-захват силос/навоз 3,5 м³',type:'implement',segment:'domestic_new',category:'loader_tool',price:1180000,years:[2024,2026],newAvailable:true,toolRole:'silage_grab',toolMounts:['wheel_iso'],toolMassKg:1650,bucketM3:3.5,toolPayloadKg:6500,requiresThirdFunction:true,silageLoader:true,organicLoader:true});
add({id:'tool_wheel_bale_fork',name:'Тяжёлые вилы для тюков',type:'implement',segment:'domestic_new',category:'loader_tool',price:420000,years:[2024,2026],newAvailable:true,toolRole:'bale_fork',toolMounts:['wheel_iso'],toolMassKg:600,toolPayloadKg:4500,balePerCycle:3,baleLoader:true});

// Dedicated high-volume forage trailers: payload remains the mass constraint; body volume matters for chopped silage.
add({id:'fliegl_asw271_silage',name:'Fliegl ASW 271 Taurus',type:'trailer',segment:'foreign_new',capacityT:16.5,bodyM3:40,requiredHp:180,roadSpeed:40,price:12800000,years:[2024,2026],newAvailable:true,silageTransport:true,pushOff:true});
add({id:'fliegl_cargos8400',name:'Fliegl CARGOS 8400',type:'trailer',segment:'foreign_new',capacityT:14,bodyM3:38,requiredHp:180,roadSpeed:40,price:15400000,years:[2024,2026],newAvailable:true,silageTransport:true,forageWagon:true});

add({id:'fert_magnum3000_new',name:'MAGNUM 3000',type:'implement',segment:'domestic_new',category:'fertilizer',requiredHp:80,width:30,speed:14,price:2450000,years:[2024,2026],newAvailable:true,eff:.86,dryKg:3000,hopperL:3000,fertilizerKinds:['granular']});
add({id:'fert_rauch_axent1001_new',name:'RAUCH AXENT 100.1',type:'implement',segment:'foreign_new',category:'fertilizer',requiredHp:180,width:50,speed:18,price:13800000,years:[2024,2026],newAvailable:true,eff:.91,dryKg:8400,hopperL:9400,fertilizerKinds:['granular','lime'],limeCapable:true,limeWidth:18,limeSpeed:14,spreaderModules:['AXIS PowerPack','UNIVERSAL PowerPack']});

add({id:'supply_metalfor_fsg20000',name:'Metalfor FSG 20.000 загрузчик семян и удобрений',type:'implement',segment:'foreign_new',category:'field_supply',requiredHp:120,width:2.5,speed:20,price:5900000,years:[2022,2026],newAvailable:true,eff:.85,fieldSupplyMode:'fert_tender',fieldSupplyKinds:['seed','dry'],supplyRequiresTractor:true,supplyCapacity:14000,supplyVolumeL:20000,supplyUnit:'кг',transferPerMin:900});
add({id:'supply_solution10000',name:'Мобильный растворный узел 10 000 л',type:'implement',segment:'domestic_new',category:'field_supply',requiredHp:100,width:2.5,speed:20,price:1850000,years:[2023,2026],newAvailable:true,eff:.85,fieldSupplyMode:'solution_tanker',fieldSupplyKinds:['spray'],supplyRequiresTractor:true,supplyCapacity:10000,supplyUnit:'л',transferPerMin:640});

for(const m of C){if(m.category==='loader_tool'){if(m.requiredHp===undefined)m.requiredHp=0;if(m.width===undefined)m.width=.6;if(m.speed===undefined)m.speed=1;}}

// 0.11.9.19 — fuel realism pass: explicit work vs road/transit consumption.
// `fuelLph` remains the work/base value for save/runtime compatibility. Only clear high outliers are capped;
// roadFuelLph is a separate moderate-load transport passport and is intentionally lower than heavy field work.
const fuelWorkCap=(m)=>{
 if(!Number(m?.hp)||!Number(m?.fuelLph))return Number(m?.fuelLph)||0;
 const seg=m.segment||'foreign_used',type=m.type;
 const rate=type==='tractor'?({domestic_used:.17,domestic_new:.155,foreign_used:.15,foreign_new:.14}[seg]||.15)
  :type==='combine'?({domestic_used:.18,domestic_new:.16,foreign_used:.155,foreign_new:.145}[seg]||.155)
  :({domestic_used:.18,domestic_new:.165,foreign_used:.16,foreign_new:.15}[seg]||.16);
 return Math.round(Math.min(Number(m.fuelLph),Number(m.hp)*rate)*10)/10;
};
const fuelRoadRatio=(m)=>m.type==='tractor'?({domestic_used:.48,domestic_new:.44,foreign_used:.45,foreign_new:.42}[m.segment]||.38)
 :m.type==='combine'?({domestic_used:.36,domestic_new:.34,foreign_used:.34,foreign_new:.32}[m.segment]||.30)
 :(m.type==='truck'?1:({domestic_used:.48,domestic_new:.45,foreign_used:.45,foreign_new:.42}[m.segment]||.42));
for(const m of C){
 const powered=m.type==='tractor'||m.type==='combine'||m.type==='truck'||m.selfPropelled||Number(m.hp)>0&&m.type==='implement';
 if(!powered||!Number(m.fuelLph))continue;
 m.fuelLphOriginal=Number(m.fuelLph);
 if(m.type!=='truck')m.fuelLph=fuelWorkCap(m);
 m.workFuelLph=Number(m.fuelLph);
 m.roadFuelLph=Math.round((m.type==='truck'?Number(m.fuelLph):Number(m.fuelLph)*fuelRoadRatio(m))*10)/10;
}
for(const [modelId,variants] of Object.entries(ENGINE_VARIANTS)){
 const parent=C.find(x=>x.id===modelId); if(!parent)continue;
 for(const e of variants||[]){
  e.fuelLphOriginal=Number(e.fuelLph)||0;
  const pseudo={...parent,hp:e.hp,fuelLph:e.fuelLph,type:'tractor'};
  e.fuelLph=fuelWorkCap(pseudo); e.workFuelLph=e.fuelLph; e.roadFuelLph=Math.round(e.fuelLph*fuelRoadRatio(parent)*10)/10;
 }
}

// 0.11.9.25 — seeding fleet historical expansion and year/class audit.
// Segment describes technology era; newAvailable independently controls whether the dealer sells the model new.
[
 {type:'implement',id:'seed_amazone_primera_dmc_old',name:'AMAZONE Primera DMC 601 (ранняя)',brand:'AMAZONE',segment:'foreign_used',category:'sow_grain',requiredHp:180,width:6.0,speed:12,price:3600000,years:[1987,1998],newAvailable:false,eff:.80,seedKg:3200,fertilizerKg:1800,seedingModes:['conventional','minTill','noTill'],seedbedPrep:false,directDrill:true,combinedFertilizer:true},
 {type:'implement',id:'seed_vaderstad_rapid400c_old',name:'Väderstad Rapid 400C (ранняя)',brand:'Väderstad',segment:'foreign_used',category:'sow_grain',requiredHp:130,width:4.0,speed:12,price:4200000,years:[1991,1997],newAvailable:false,eff:.83,seedKg:2200,fertilizerKg:1200,seedingModes:['conventional','minTill'],seedbedPrep:true,directDrill:false,combinedFertilizer:true},
 {type:'implement',id:'seed_jd750_15ft_old',name:'John Deere 750 No-Till 15 ft',brand:'John Deere',segment:'foreign_used',category:'sow_grain',requiredHp:90,width:4.57,speed:9,price:2750000,years:[1989,1998],newAvailable:false,eff:.81,seedKg:1250,fertilizerKg:650,seedingModes:['conventional','minTill','noTill'],seedbedPrep:false,directDrill:true,combinedFertilizer:true},
 {type:'implement',id:'seed_gp_3sf30_old',name:'Great Plains 3SF30 Folding Drill',brand:'Great Plains',segment:'foreign_used',category:'sow_grain',requiredHp:170,width:9.14,speed:9,price:3100000,years:[1991,1999],newAvailable:false,eff:.79,seedKg:3000,seedingModes:['conventional','minTill'],seedbedPrep:false,directDrill:false,combinedFertilizer:false},
 {type:'implement',id:'seed_gp_1000nt_old',name:'Great Plains 1000 No-Till Drill',brand:'Great Plains',segment:'foreign_used',category:'sow_grain',requiredHp:70,width:3.05,speed:8,price:1650000,years:[1989,1993],newAvailable:false,eff:.78,seedKg:900,seedingModes:['conventional','minTill','noTill'],seedbedPrep:false,directDrill:true,combinedFertilizer:false},
 {type:'implement',id:'seed_kuhn_venta_al402_old',name:'KUHN VENTA AL 402',brand:'KUHN',segment:'foreign_used',category:'sow_grain',requiredHp:110,width:4.0,speed:10,price:2950000,years:[1995,2004],newAvailable:false,eff:.81,seedKg:900,seedingModes:['conventional'],seedbedPrep:true,directDrill:false,combinedFertilizer:false},
 {type:'implement',id:'seed_simba_freeflow4_old',name:'Simba Free Flow 4.0',brand:'Simba',segment:'foreign_used',category:'sow_grain',requiredHp:150,width:4.0,speed:10,price:2400000,years:[1998,2005],newAvailable:false,eff:.80,seedKg:1800,seedingModes:['conventional','minTill'],seedbedPrep:true,directDrill:false,combinedFertilizer:false},
 {type:'implement',id:'seed_monosem_ngplus8_old',name:'Monosem NG Plus 8R',brand:'Monosem',segment:'foreign_used',category:'sow_row',requiredHp:100,width:6.0,speed:9,price:2600000,years:[1989,1999],newAvailable:false,eff:.82,seedKg:260,crops:['sunflower','corn','soy'],seedingModes:['conventional','minTill'],seedbedPrep:false,directDrill:false,combinedFertilizer:false},
 {type:'implement',id:'seed_accord_optima8_old',name:'ACCORD Optima 8R',brand:'ACCORD',segment:'foreign_used',category:'sow_row',requiredHp:110,width:6.0,speed:9,price:2900000,years:[1996,2005],newAvailable:false,eff:.81,seedKg:300,crops:['sunflower','corn','soy'],seedingModes:['conventional','minTill'],seedbedPrep:false,directDrill:false,combinedFertilizer:false}
].forEach(add);

// Replace broad generator placeholders with model-specific production eras and correct technology era.
const SEED_YEAR_AUDIT={
 imp59:{years:[1971,2005],segment:'domestic_used'},
 imp60:{years:[1975,2005],segment:'domestic_used'},
 imp61:{years:[1980,2007],segment:'domestic_used'},
 imp62:{years:[2004,2017],segment:'domestic_used'},
 imp63:{years:[2010,2017],segment:'domestic_new'},
 imp64:{years:[2020,2026],segment:'domestic_new'},
 imp65:{years:[2016,2021],segment:'foreign_new',newAvailable:false},
 imp66:{years:[2003,2021],segment:'foreign_used',newAvailable:false},
 imp67:{years:[2004,2021],segment:'foreign_used',newAvailable:false},
 imp68:{years:[1999,2021],segment:'foreign_used',newAvailable:false},
 imp69:{years:[1976,2005],segment:'domestic_used'},
 imp70:{years:[1995,2010],segment:'domestic_used'},
 imp71:{years:[2004,2015],segment:'domestic_used'},
 imp72:{years:[2010,2018],segment:'domestic_new',newAvailable:false},
 imp73:{years:[2005,2017],segment:'foreign_used'},
 imp74:{years:[2014,2021],segment:'foreign_new',newAvailable:false},
 imp75:{years:[2010,2021],segment:'foreign_new',newAvailable:false},
 imp76:{years:[2012,2021],segment:'foreign_new',newAvailable:false},
 imp77:{years:[2012,2021],segment:'foreign_new',newAvailable:false},
 imp78:{years:[2011,2021],segment:'foreign_new',newAvailable:false},
 imp98:{remove:true},
 imp99:{years:[1998,2012],segment:'foreign_used'},
 imp100:{years:[2012,2022],segment:'foreign_new',newAvailable:false},
 imp101:{years:[2014,2022],segment:'foreign_new',newAvailable:false},
 root_sn4b_used:{years:[1980,2005],segment:'domestic_used'}
};
for(const [id,a] of Object.entries(SEED_YEAR_AUDIT)){
 const i=C.findIndex(x=>x.id===id); if(i<0)continue;
 if(a.remove){C.splice(i,1);continue;}
 Object.assign(C[i],a);
}

const SEED_TECH={
 imp59:{m:['conventional'],prep:false},imp60:{m:['conventional'],prep:false},imp61:{m:['conventional','minTill'],prep:false},
 imp62:{m:['conventional'],prep:false},imp63:{m:['conventional','minTill'],prep:true},imp64:{m:['conventional','minTill'],prep:true},
 imp65:{m:['conventional','minTill'],prep:true},imp66:{m:['conventional','minTill'],prep:true},imp67:{m:['conventional','minTill'],prep:true},
 imp68:{m:['conventional','minTill','noTill'],prep:false,direct:true},
 amazone_d9_used:{m:['conventional'],prep:false},amazone_cirrus_new:{m:['conventional','minTill'],prep:true},
 lemken_saphir9_used:{m:['conventional'],prep:false},lemken_solitairdt_new:{m:['conventional','minTill'],prep:true},
 pot_vitasem302:{m:['conventional'],prep:false},pot_aerosem6002:{m:['conventional','minTill'],prep:true},
 kuhn_espro6000:{m:['conventional','minTill'],prep:true},gp_1006nt_used:{m:['conventional','minTill','noTill'],direct:true},
 gp_3s4000hd_used:{m:['conventional','minTill'],prep:false},gp_bd7600:{m:['conventional','minTill'],prep:false},
 horsch_sprinter18nt:{m:['minTill','noTill'],direct:true},horsch_sprinter15nt:{m:['minTill','noTill'],direct:true},horsch_panther460:{m:['minTill','noTill'],direct:true},
 imp69:{m:['conventional'],prep:false},imp70:{m:['conventional'],prep:false},imp71:{m:['conventional','minTill'],prep:false},imp72:{m:['conventional','minTill'],prep:false},
 imp73:{m:['conventional','minTill'],prep:false},imp74:{m:['conventional','minTill'],prep:false},imp75:{m:['conventional','minTill'],prep:false},imp76:{m:['conventional','minTill'],prep:false},imp77:{m:['conventional','minTill','noTill'],prep:false,direct:true},imp78:{m:['conventional','minTill'],prep:false},
 brand_case_er1255:{m:['conventional','minTill','noTill'],prep:false,direct:true},brand_case_er2150:{m:['conventional','minTill','noTill'],prep:false,direct:true},vaderstad_tempo_l24:{m:['conventional','minTill','noTill'],prep:false,direct:true},
 lemken_azurit9_used:{m:['conventional','minTill'],prep:false},lemken_azurit10_new:{m:['conventional','minTill'],prep:false},amazone_ed_used:{m:['conventional'],prep:false},amazone_precea_new:{m:['conventional','minTill'],prep:false},
 gp_yp1625a_used:{m:['conventional','minTill'],prep:false},gp_pl5700:{m:['conventional','minTill'],prep:false},kinze_3665_bluedrive:{m:['conventional','minTill'],prep:false}
};
for(const x of C.filter(x=>x.type==='implement'&&['sow_grain','sow_row'].includes(x.category))){
 const a=SEED_TECH[x.id]; if(a){x.seedingModes=a.m;x.seedbedPrep=!!a.prep;x.directDrill=!!a.direct;}
 if(!Array.isArray(x.seedingModes))x.seedingModes=['conventional'];
}
// sow_row is the internal operation code; user-facing semantics are precision planters.
for(const x of C.filter(x=>x.type==='implement'&&x.category==='sow_row'))x.precisionPlanter=true;

for(const id of ['brand_case_er1255','pot_vitasem302','lemken_azurit9_used','gp_yp1625a_used']){const m=C.find(x=>x.id===id);if(m){m.segment='foreign_new';m.newAvailable=false;}}



// 0.11.9.28 — second seeding audit: physical hopper units, explicit crop profiles and planter calibration.
const SEEDER_AUDIT_011928={
 sz36m_new:{seedHopperL:720,fertilizerHopperL:400,combinedFertilizer:true},
 imp59:{seedHopperL:830,fertilizerHopperL:540,combinedFertilizer:true},
 imp60:{seedHopperL:1245,fertilizerHopperL:810,combinedFertilizer:true},
 imp61:{seedHopperL:638,fertilizerHopperL:426,combinedFertilizer:true},
 imp67:{requiredHp:180,seedHopperL:3100},
 imp73:{requiredHp:90,seedHopperL:400,crops:['corn','sunflower','soybean']},
 imp76:{seedHopperL:560,fertilizerHopperL:3000,combinedFertilizer:true,crops:['corn','sunflower','soybean']},
 imp77:{requiredHp:150,seedHopperL:560,crops:['corn','sunflower','soybean']},
 imp78:{seedHopperL:900,crops:['corn','sunflower','soybean']},
 imp69:{seedHopperL:180,crops:['corn','sunflower','soybean']},imp70:{seedHopperL:200,crops:['corn','sunflower','soybean']},
 imp71:{seedHopperL:220,crops:['corn','sunflower','soybean']},imp72:{seedHopperL:250,crops:['corn','sunflower','soybean']},
 imp74:{seedHopperL:420,crops:['corn','sunflower','soybean']},imp75:{seedHopperL:320,crops:['corn','sunflower','soybean']},
 row_vesta8_new:{seedHopperL:260,crops:['corn','sunflower','soybean']},row_vega8_new:{seedHopperL:300,crops:['corn','sunflower','soybean']},
 brand_case_er1255:{seedHopperL:700,crops:['corn','sunflower','soybean']},brand_case_er2150:{seedHopperL:1200,crops:['corn','sunflower','soybean']},
 vaderstad_tempo_l24:{seedHopperL:1700,crops:['corn','sunflower','soybean','sugar_beet']},
 lemken_azurit9_used:{seedHopperL:600,crops:['corn','sunflower','soybean']},lemken_azurit10_new:{seedHopperL:700,crops:['corn','sunflower','soybean']},
 amazone_ed_used:{seedHopperL:420,crops:['corn','sunflower','soybean']},
 amazone_precea_new:{seedHopperL:560,fertilizerHopperL:1250,combinedFertilizer:true,crops:['corn','sunflower','soybean','sugar_beet']},
 gp_yp1625a_used:{seedHopperL:1050,crops:['corn','sunflower','soybean']},gp_pl5700:{seedHopperL:1400,crops:['corn','sunflower','soybean']},
 kinze_3665_bluedrive:{seedHopperL:1450,crops:['corn','sunflower','soybean']},
 seed_monosem_ngplus8_old:{seedHopperL:400,crops:['corn','sunflower','soybean']},seed_accord_optima8_old:{seedHopperL:400,crops:['corn','sunflower','soybean']},
 amazone_d9_used:{seedHopperL:1000,fertilizerHopperL:450,combinedFertilizer:true},
 seed_amazone_primera_dmc_old:{seedHopperL:3200,fertilizerHopperL:1800,combinedFertilizer:true},
 seed_vaderstad_rapid400c_old:{seedHopperL:2200,fertilizerHopperL:1200,combinedFertilizer:true},
 seed_jd750_15ft_old:{seedHopperL:1250,fertilizerHopperL:650,combinedFertilizer:true},
 seed_gp_3sf30_old:{seedHopperL:4567},seed_gp_1000nt_old:{seedHopperL:900},seed_kuhn_venta_al402_old:{seedHopperL:900},seed_simba_freeflow4_old:{seedHopperL:1800},
 pot_vitasem302:{seedHopperL:1000},pot_aerosem6002:{seedHopperL:2800,fertilizerHopperL:1200,combinedFertilizer:true},
 kuhn_espro6000:{seedHopperL:3500,fertilizerHopperL:2500,combinedFertilizer:true},
 lemken_solitairdt_new:{seedHopperL:5100,fertilizerHopperL:2000,combinedFertilizer:true},
 amazone_cirrus_new:{seedHopperL:5000,fertilizerHopperL:2500,combinedFertilizer:true},
 imp65:{seedHopperL:3600},imp66:{seedHopperL:4000},imp68:{seedHopperL:7600},
 rsm_sh8200:{seedHopperL:6200},rsm_sh12200:{seedHopperL:9200},
 lemken_saphir9_used:{seedHopperL:1100},gp_1006nt_used:{seedHopperL:1075},gp_3s4000hd_used:{seedHopperL:4567},gp_bd7600:{seedHopperL:6200},
 horsch_sprinter18nt:{seedHopperL:12000},horsch_sprinter15nt:{seedHopperL:11000},horsch_panther460:{seedHopperL:11000},
 szs21_used:{seedHopperL:335,fertilizerHopperL:195,combinedFertilizer:true},szs21_new:{seedHopperL:335,fertilizerHopperL:195,combinedFertilizer:true},
 szs21x3_used:{seedHopperL:1005,fertilizerHopperL:585,combinedFertilizer:true},szs21x3_new:{seedHopperL:1005,fertilizerHopperL:585,combinedFertilizer:true},
 szs21x5_used:{seedHopperL:1675,fertilizerHopperL:975,combinedFertilizer:true},szs21x5_new:{seedHopperL:1675,fertilizerHopperL:975,combinedFertilizer:true},
 root_sn4b_used:{seedHopperKg:360,fertilizerHopperKg:48,combinedFertilizer:true},pot_sn4bm_new:{seedHopperKg:400,fertilizerHopperKg:60,combinedFertilizer:true},
 imp99:{seedHopperKg:1200},imp100:{requiredHp:155,seedHopperKg:1800},imp101:{seedHopperKg:1900}
};
for(const [id,a] of Object.entries(SEEDER_AUDIT_011928)){const x=C.find(m=>m.id===id);if(x)Object.assign(x,a);}
for(const x of C.filter(x=>x.type==='implement'&&['sow_grain','sow_row'].includes(x.category))){
 if(!(Number(x.seedHopperL)>0)&&Number(x.seedKg)>0)x.seedHopperL=Number(x.seedKg);
 if(!(Number(x.fertilizerHopperL)>0)&&Number(x.fertilizerKg)>0)x.fertilizerHopperL=Number(x.fertilizerKg);
 if(Number(x.fertilizerHopperL)>0)x.combinedFertilizer=true;
 delete x.seedKg; delete x.fertilizerKg;
}
for(const x of C.filter(x=>x.type==='implement'&&x.category==='sow_row')){
 if(Array.isArray(x.crops))x.crops=x.crops.map(k=>k==='soy'?'soybean':k);
 else x.crops=['corn','sunflower','soybean'];
}


// 0.11.9.28 — рабочие глубины и типы почвообрабатывающих орудий.
const TILLAGE_PROFILE_DEFAULTS={stubble:[4,12,6,'stubble_cultivator'],disk:[6,16,10,'disc'],plow:[18,35,25,'plough'],deepRip:[25,55,35,'subsoiler'],cultivate:[5,18,8,'field_cultivator'],harrow:[2,8,4,'tooth_harrow']};
for(const x of C.filter(x=>x.type==='implement'&&TILLAGE_PROFILE_DEFAULTS[x.category])){const d=TILLAGE_PROFILE_DEFAULTS[x.category];x.workDepthMinCm=x.workDepthMinCm||d[0];x.workDepthMaxCm=x.workDepthMaxCm||d[1];x.defaultDepthCm=x.defaultDepthCm||d[2];x.tillageToolType=x.tillageToolType||d[3];const n=x.name.toLowerCase();if(x.category==='harrow'){if(/aerostar|штриг|пружин/.test(n))x.tillageToolType='spring_harrow';else if(/kelly|chain|цеп/.test(n))x.tillageToolType='chain_harrow';else x.tillageToolType='tooth_harrow';if(/бзсс|бзтс|биг-3|бмш|бзгт/.test(n))x.tillageToolType='tooth_harrow';}if(/terraland/.test(n)){x.workDepthMinCm=15;x.workDepthMaxCm=55;x.defaultDepthCm=35;x.tillageToolType='subsoiler';x.supportedCategories=[...new Set([...(x.supportedCategories||[]),'deepRip'])];}if(/terrano/.test(n)){x.workDepthMinCm=5;x.workDepthMaxCm=30;x.defaultDepthCm=12;x.tillageToolType='stubble_cultivator';x.supportedCategories=[...new Set([...(x.supportedCategories||[]),'stubble','cultivate','deepRip'])];}if(/karat|cenius|ceus/.test(n)){x.workDepthMinCm=5;x.workDepthMaxCm=30;x.defaultDepthCm=12;x.tillageToolType='stubble_cultivator';x.supportedCategories=[...new Set([...(x.supportedCategories||[]),'stubble','cultivate'])];}if(/joker|catros|terradisc|carrier/.test(n)){x.workDepthMinCm=4;x.workDepthMaxCm=15;x.defaultDepthCm=9;x.tillageToolType='disc';x.supportedCategories=[...new Set([...(x.supportedCategories||[]),'stubble','disk'])];}}


// 0.11.9.28 — final tillage catalog audit: production eras, physical de-duplication.
const TILLAGE_YEAR_AUDIT_011928={
 imp2:[1985,2010],imp3:[1995,2015],imp6:[2005,2020],imp7:[2003,2026],imp8:[2009,2023],imp9:[2014,2023],imp10:[2014,2026],
 imp11:[1975,2005],imp12:[1975,2010],imp13:[1985,2010],imp15:[2008,2026],imp16:[2010,2026],imp17:[2008,2026],imp18:[2020,2026],imp19:[2017,2026],imp20:[2007,2026],imp21:[2014,2026],imp22:[2010,2023],
 imp23:[1970,2005],imp24:[1970,2005],imp25:[1970,2005],imp26:[1980,2010],imp27:[1995,2020],imp28:[2010,2026],imp29:[2014,2026],imp31:[2013,2026],imp32:[2019,2026],
 imp33:[1985,2010],imp34:[1990,2015],imp35:[1995,2015],imp36:[2005,2020],imp37:[2008,2020],imp38:[2015,2026],imp39:[2006,2022],imp40:[2008,2023],imp41:[2010,2022],imp42:[2014,2026],
 imp43:[1970,2010],imp44:[1985,2015],imp45:[1995,2018],imp46:[2000,2020],imp47:[2010,2022],imp48:[2018,2026],imp49:[2005,2026],imp50:[2008,2022],imp51:[2005,2023],imp52:[2017,2026],
 imp53:[1970,2010],imp54:[1975,2015],imp55:[1985,2015],imp56:[2000,2026],imp57:[2005,2026],imp58:[2015,2026]
};
for(const [id,years] of Object.entries(TILLAGE_YEAR_AUDIT_011928)){const x=C.find(m=>m.id===id);if(x)x.years=years;}
// Same physical model is one catalog record; the used market creates second-hand instances.
const TILLAGE_REMOVE_011928=new Set(['imp17','imp31','imp32','imp49','bdm24x2_used','bdm4x2_used','bdm32x4_used']);
for(let i=C.length-1;i>=0;i--)if(TILLAGE_REMOVE_011928.has(C[i].id))C.splice(i,1);
const TILLAGE_CONSOLIDATE_011928={
 bdm24x2_new:{years:[2006,2026]},bdm4x2_new:{years:[2008,2026]},bdm32x4_new:{years:[2008,2026]},bdm6x4_used:{name:'БДМ-6×4П',segment:'domestic_new',years:[2008,2026],newAvailable:true,price:2373000,requiredHp:330,speed:10},
 lemken_juwel8_used:{name:'LEMKEN Juwel 8 5+1',segment:'foreign_new',years:[2013,2026],newAvailable:true,price:4600000,requiredHp:220},
 lemken_diamant16_new:{years:[2019,2026]},lemken_korund8_used:{name:'LEMKEN Korund 8/600',segment:'foreign_new',years:[2005,2026],newAvailable:true,price:3300000}
};
for(const [id,a] of Object.entries(TILLAGE_CONSOLIDATE_011928)){const x=C.find(m=>m.id===id);if(x)Object.assign(x,a);}


// 0.11.9.29 — forage-chain audit: mower conditioning, multi-role hay tools and explicit bale packages.
const FORAGE_MOWER_META_011929={
 hay_krn21:{mowerType:'plain',conditionerType:'none'},hay_kdp4:{mowerType:'conditioner',conditionerType:'roller',conditioningDryingFactor:1.10},hay_claas_disco3200:{mowerType:'plain',conditionerType:'none'},hay_krone_ec870:{mowerType:'plain',conditionerType:'none'},
 hay_macdon_m1170:{mowerType:'windrower',conditionerType:'roller',conditioningDryingFactor:1.10,directWindrow:true,windrowGatherWidthM:9.1},hay_krone_bigm450:{mowerType:'conditioner',conditionerType:'roller',conditioningDryingFactor:1.12,directWindrow:true,windrowGatherWidthM:9.9},
 nh_h7450:{mowerType:'conditioner',conditionerType:'roller',conditioningDryingFactor:1.10},fendt_slicer310:{mowerType:'conditioner',conditionerType:'tine',conditioningDryingFactor:1.09},pot_novacat302:{mowerType:'conditioner',conditionerType:'tine',conditioningDryingFactor:1.09},kuhn_fc3161:{mowerType:'conditioner',conditionerType:'tine',conditioningDryingFactor:1.09},mf_dm316_used:{mowerType:'plain',conditionerType:'none'}
};
for(const [id,a] of Object.entries(FORAGE_MOWER_META_011929)){const x=C.find(m=>m.id===id);if(x)Object.assign(x,a);}
for(const x of C.filter(m=>m.type==='implement'&&m.category==='mower')){x.mowerType=x.mowerType||(/плющ|discbine|novacat|fc /i.test(x.name)?'conditioner':'plain');x.conditionerType=x.conditionerType|| (x.mowerType==='conditioner'?'tine':'none');if(x.conditionerType!=='none')x.conditioningDryingFactor=x.conditioningDryingFactor||1.08;}

const BALER_META_011929={
 hay_sipma_z224:['small_square',.025,{baleWidthM:.46,baleHeightM:.36,baleLengthMinM:.5,baleLengthMaxM:1.2}],
 hay_prf145:['round',.35,{baleWidthM:1.2,baleDiameterMinM:1.2,baleDiameterMaxM:1.45}],hay_pr180:['round',.40,{baleWidthM:1.2,baleDiameterMinM:1.4,baleDiameterMaxM:1.8}],hay_claas_rollant455:['round',.39,{baleWidthM:1.2,baleDiameterMinM:1.25,baleDiameterMaxM:1.35,cutter:true}],
 hay_krone_bigpack:['large_square',.58,{baleWidthM:1.2,baleHeightM:.9,baleLengthMinM:.5,baleLengthMaxM:3.2,cutter:true,highDensity:true,requiredHp:245}],
 krone_bigpack_hdp2_1290vc:['large_square',.62,{baleWidthM:1.2,baleHeightM:.9,baleLengthMinM:.5,baleLengthMaxM:3.2,cutter:true,highDensity:true,requiredHp:258}],
 claas_quadrant5200:['large_square',.48,{baleWidthM:1.2,baleHeightM:.7,baleLengthMinM:.5,baleLengthMaxM:3.0,cutter:true}],claas_quadrant5300:['large_square',.54,{baleWidthM:1.2,baleHeightM:.9,baleLengthMinM:.5,baleLengthMaxM:3.0,cutter:true,highDensity:true}],
 nh_br7060:['round',.34,{baleWidthM:1.2,baleDiameterMinM:.9,baleDiameterMaxM:1.6}],nh_bigbaler1290:['large_square',.60,{baleWidthM:1.2,baleHeightM:.9,baleLengthMinM:.8,baleLengthMaxM:2.7,cutter:true,highDensity:true}],
 fendt_rotana160:['round',.38,{baleWidthM:1.23,baleDiameterMinM:.7,baleDiameterMaxM:1.6,cutter:true}],fendt_squadra1290:['large_square',.55,{baleWidthM:1.2,baleHeightM:.9,baleLengthMinM:.7,baleLengthMaxM:2.75,cutter:true,highDensity:true}],
 pot_impress155:['round',.36,{baleWidthM:1.2,baleDiameterMinM:.8,baleDiameterMaxM:1.55,cutter:true}],pot_impress3190:['round',.39,{baleWidthM:1.2,baleDiameterMinM:.9,baleDiameterMaxM:1.85,cutter:true}],
 hay_prp16_used:['round',.30,{baleWidthM:1.2,baleDiameterMinM:1.2,baleDiameterMaxM:1.6}],hay_prf110_used:['round',.28,{baleWidthM:1.2,baleDiameterMinM:1.0,baleDiameterMaxM:1.1}],hay_prf145m_used:['round',.35,{baleWidthM:1.2,baleDiameterMinM:1.2,baleDiameterMaxM:1.45}],hay_prf145m_new:['round',.36,{baleWidthM:1.2,baleDiameterMinM:1.2,baleDiameterMaxM:1.45}],hay_prf180_new:['round',.40,{baleWidthM:1.2,baleDiameterMinM:1.4,baleDiameterMaxM:1.8}],hay_tukan1600_new:['small_square',.026,{baleWidthM:.46,baleHeightM:.36,baleLengthMinM:.5,baleLengthMaxM:1.2}],
 kuhn_vb3160:['round',.39,{baleWidthM:1.2,baleDiameterMinM:.8,baleDiameterMaxM:1.6,cutter:true}],kuhn_vb2160_used:['round',.37,{baleWidthM:1.2,baleDiameterMinM:.8,baleDiameterMaxM:1.6,cutter:true}],mf_rb4160v_used:['round',.37,{baleWidthM:1.23,baleDiameterMinM:.9,baleDiameterMaxM:1.6,cutter:true,requiredHp:120}],mf_rb4160v:['round',.39,{baleWidthM:1.23,baleDiameterMinM:.9,baleDiameterMaxM:1.6,cutter:true,requiredHp:130}]
};
for(const [id,[fmt,mass,a]] of Object.entries(BALER_META_011929)){const x=C.find(m=>m.id===id);if(x)Object.assign(x,{baleFormat:fmt,baleMassT:mass,...a});}
// Safety net: every physical baler must declare a format and package mass; names only classify legacy catalog records.
for(const x of C.filter(m=>m.type==='implement'&&m.category==='baler')){if(!x.baleFormat)x.baleFormat=/quadrant|bigbaler|big pack|squadra/i.test(x.name)?'large_square':/tukan|z224/i.test(x.name)?'small_square':'round';if(!(Number(x.baleMassT)>0))x.baleMassT=x.baleFormat==='small_square'?.025:x.baleFormat==='large_square'?.50:.35;}

// One physical GVK/GVR machine can ted and rake; remove role-only duplicate catalog cards.
const FORAGE_MULTIROLE_011929={hay_gvk6_ted:{name:'ГВК-6 грабли-ворошилка',categories:['tedder','rake']},hay_gvk6_ted_old:{name:'ГВК-6А грабли-ворошилка',categories:['tedder','rake']},hay_gvr630_ted_used:{name:'ГВР-6,3 грабли-ворошилка',categories:['tedder','rake']},hay_gvr630_ted_new:{name:'ГВР-6,3М грабли-ворошилка',categories:['tedder','rake']}};
for(const [id,a] of Object.entries(FORAGE_MULTIROLE_011929)){const x=C.find(m=>m.id===id);if(x)Object.assign(x,a);}
const FORAGE_REMOVE_011929=new Set(['hay_gvk6_rake','hay_gvk6_rake_old','hay_gvr630_rake_used','hay_gvr630_rake_new']);
for(let i=C.length-1;i>=0;i--)if(FORAGE_REMOVE_011929.has(C[i].id))C.splice(i,1);
// Same KDN/KPR physical model is represented once; the used market supplies aged instances.
for(const id of ['hay_kdn210_used','hay_kpr9_used']){const i=C.findIndex(m=>m.id===id);if(i>=0)C.splice(i,1);}
for(const [id,years] of Object.entries({hay_kdn210_new:[1995,2026],hay_kpr9_new:[2005,2026]})){const x=C.find(m=>m.id===id);if(x)x.years=years;}


// 0.11.9.42 — Stage B: physical silage harvesters. Game-adapted prices/specs;
// direct-discharge machines require transport alongside and therefore use a very small crop buffer.
[
 {id:'ksk100a_used',name:'КСК-100А',segment:'domestic_used',hp:200,price:1850000,fuelLph:34,years:[1985,2005],width:3.4,speed:7.0,eff:.70,bufferT:1.4,directDischargeTph:95},
 {id:'don680m_used',name:'ДОН-680М',segment:'domestic_used',hp:290,price:4200000,fuelLph:46,years:[1998,2014],width:3.0,speed:9.0,eff:.76,bufferT:1.6,directDischargeTph:135},
 {id:'palesse_fs80_new',name:'ПАЛЕССЕ FS80',segment:'domestic_new',hp:450,price:18500000,fuelLph:62,years:[2022,2026],newAvailable:true,width:3.0,speed:11.0,eff:.80,bufferT:1.8,directDischargeTph:180},
 {id:'claas_jaguar850_used',name:'CLAAS JAGUAR 850',segment:'foreign_used',hp:455,price:14200000,fuelLph:58,years:[2001,2014],width:4.5,speed:9.5,eff:.78,bufferT:1.8,directDischargeTph:190},
 {id:'claas_jaguar950_new',name:'CLAAS JAGUAR 950',segment:'foreign_new',hp:585,price:47000000,fuelLph:72,years:[2023,2026],newAvailable:true,width:4.5,speed:11.5,eff:.82,bufferT:2.0,directDischargeTph:240}
].forEach(x=>add({...x,type:'implement',category:'forage_harvester',selfPropelled:true,requiredHp:0,crops:['corn'],driveType:'wheeled',availableDriveTypes:['wheeled'],workFuelLph:x.fuelLph,roadFuelLph:Math.max(8,Math.round(x.fuelLph*.58)),roadSpeed:x.segment==='domestic_used'?25:35}));
// 0.11.9.43 — Stage C catalog expansion: Rostselmash forage line and dedicated bunker tools.
// Throughput follows manufacturer-published class figures where available; game prices are balance values.
[
 {id:'rsm_f1300_new',name:'Ростсельмаш RSM F 1300',segment:'domestic_new',hp:330,price:14500000,fuelLph:50,years:[2023,2026],newAvailable:true,width:3.0,speed:9.5,eff:.78,bufferT:1.7,directDischargeTph:120},
 {id:'rsm_f1500_new',name:'Ростсельмаш RSM F 1500',segment:'domestic_new',hp:510,price:24500000,fuelLph:70,years:[2025,2026],newAvailable:true,width:4.5,speed:10.5,eff:.81,bufferT:1.9,directDischargeTph:160},
 {id:'rsm_f2650_new',name:'Ростсельмаш RSM F 2650',segment:'domestic_new',hp:643,price:32000000,fuelLph:92,years:[2022,2026],newAvailable:true,width:7.5,speed:11.5,eff:.83,bufferT:2.0,directDischargeTph:200},
 {id:'rsm_f2750_new',name:'Ростсельмаш RSM F 2750',segment:'domestic_new',hp:770,price:41000000,fuelLph:108,years:[2026,2026],newAvailable:true,width:7.5,speed:12.0,eff:.84,bufferT:2.1,directDischargeTph:280}
].forEach(x=>add({...x,type:'implement',category:'forage_harvester',selfPropelled:true,requiredHp:0,crops:['corn'],driveType:'wheeled',availableDriveTypes:['wheeled'],workFuelLph:x.fuelLph,roadFuelLph:Math.max(10,Math.round(x.fuelLph*.55)),roadSpeed:35}));
[
 {id:'oss5m_new',speed:6.0,name:'АМЗ ОСС-5М силосно-сенажный отвал',segment:'domestic_new',price:620000,years:[2024,2026],newAvailable:true,requiredHp:200,width:5.0,silageRateFactor:1.32},
 {id:'silage_blade4000_new',speed:6.5,name:'Отвал для силосования 4000',segment:'domestic_new',price:470000,years:[2022,2026],newAvailable:true,requiredHp:170,width:4.0,silageRateFactor:1.22}
].forEach(x=>add({...x,type:'implement',category:'silage_leveler',crops:['corn']}));
[
 {id:'nts3m_new',speed:5.5,name:'АМЗ НТС-3М каток-трамбовщик',segment:'domestic_new',price:780000,years:[2024,2026],newAvailable:true,requiredHp:220,width:3.0,silageRateFactor:1.48},
 {id:'ks4_silage_new',speed:5.0,name:'БашАгроМаш КС-4 силосный каток',segment:'domestic_new',price:920000,years:[2023,2026],newAvailable:true,requiredHp:250,width:4.08,silageRateFactor:1.62},
 {id:'slon32_new',speed:5.5,name:'СЛОН-3,2 трамбовщик силоса',segment:'domestic_new',price:850000,years:[2023,2026],newAvailable:true,requiredHp:200,width:3.25,silageRateFactor:1.52}
].forEach(x=>add({...x,type:'implement',category:'silage_compactor',crops:['corn']}));



// 0.11.9.67 — рабочий контур для тракторов 50–80 л.с.
// Узкие/лёгкие агрегаты не заменяют средний класс: они дают малому хозяйству самостоятельный, но медленный путь.
[
 ['small_pln235_used','ПЛН-2-35','domestic_used','plow',50,0.70,7.0,120000,[1970,2020],false,.72],
 ['small_pln235_new','ПЛН-2-35М','domestic_new','plow',50,0.70,7.5,230000,[2022,2026],true,.76],
 ['small_kps28_new','КПС-2,8','domestic_new','cultivate',50,2.80,9.0,260000,[2022,2026],true,.78],
 ['small_bdm18_new','БДМ-1,8×2П','domestic_new','disk',55,1.80,10.0,390000,[2022,2026],true,.78],
 ['small_bzss6_used','БЗСС-1.0 сцепка 6 м','domestic_used','harrow',50,6.00,11.0,145000,[1980,2020],false,.76],
 ['small_amazone_d825_used','AMAZONE D8 25 Special','foreign_used','sow_grain',50,2.50,8.5,520000,[1980,2005],false,.74],
 ['small_supn4_used','СУПН-4','domestic_used','sow_row',55,2.80,8.0,290000,[1985,2015],false,.72],
 ['small_mvu05_new','МВУ-0,5 навесной','domestic_new','fertilizer',40,12.0,12.0,320000,[2022,2026],true,.78]
].forEach(x=>imp(...x));
{const m=C.find(x=>x.id==='small_amazone_d825_used');if(m)m.seedHopperL=320;}
for(const [id,meta] of Object.entries({
 supn6_used_legacy:{seedHopperL:121.2,fertilizerHopperL:135,combinedFertilizer:true},
 gaspardo_mtr4_new:{seedHopperL:144},
 supn4m_new:{seedHopperL:80.8},
 small_supn4_used:{seedHopperL:80.8}
})){const m=C.find(x=>x.id===id);if(m)Object.assign(m,meta);}
for(const [id,dryKg] of Object.entries({nru05_used:500,small_mvu05_new:500})){const m=C.find(x=>x.id===id);if(m)m.dryKg=dryKg;}

// 0.11.9.30 — mineral application / crop-protection technology audit.
// Organic manure/slurry equipment is intentionally out of scope until livestock is implemented.
for(const x of C.filter(m=>m.type==='implement'&&m.category==='fertilizer')){
 const n=x.name.toLowerCase(),modern=x.segment==='foreign_new'||x.segment==='domestic_new';
 x.precisionClass=x.precisionClass||(modern?'electronic':'mechanical');
 x.rateControl=!!(modern||/profis|axis|m35w|axent|polaris|za-ts/.test(n));
 x.weighingSystem=!!(/profis|axis|m35w|axent|polaris|za-ts/.test(n));
 x.sectionControl=!!(/za-ts|axis|m35w|axent|polaris/.test(n));
 x.borderControl=!!(/za-ts|axis|m35w|axent|polaris/.test(n));
 x.windCompensation=!!(/za-ts/.test(n));
}
for(const x of C.filter(m=>m.type==='implement'&&m.category==='sprayer')){
 const n=x.name.toLowerCase(),modern=x.segment==='foreign_new'||x.segment==='domestic_new';
 x.precisionClass=x.precisionClass||(modern?'electronic':'mechanical');
 x.autoRate=!!(modern||/ux 4201|leeb|patriot|guardian|rogator|pantera|sprayhub/.test(n));
 x.sectionControl=!!(/ux 4201|leeb|patriot|guardian|rogator|pantera|sprayhub|m732/.test(n));
 x.boomControl=!!(/leeb|pantera|rogator|patriot|guardian/.test(n));
 x.driftReduction=/leeb|pantera|rogator/.test(n)?.28:/patriot|guardian|ux 4201/.test(n)?.18:modern?.10:.03;
 x.solutionRateMinLHa=x.solutionRateMinLHa||100;
 x.solutionRateMaxLHa=x.solutionRateMaxLHa||250;
}
// Mechanical predecessor / modernized pairs remain separate only when the catalog names a distinct generation;
// used-vs-new availability itself is handled by the live secondary market, not by hidden duplicate aliases.


// 0.11.9.63 — physical field-fuel logistics ladder, rebalanced progression and heavy KamAZ tanker.
// Light support vehicles are intentionally excluded from crop haul; their purpose is service/fuel supply.
add({id:'fuel_uaz469',name:'УАЗ-469 · хозяйственный автомобиль',type:'truck',segment:'domestic_used',category:'fuel_support_light',capacityT:.45,bodyM3:1.2,roadSpeed:70,price:190000,fuelLph:12,driveType:'wheeled',availableDriveTypes:['wheeled'],years:[1972,2007],agCargoEligible:false,fuelSupportVehicle:true,fuelCanMaxL:160});
add({id:'fuel_light_trailer500',name:'Легковой грузовой прицеп · 500 кг',type:'trailer',segment:'domestic_used',category:'fuel_support_trailer',capacityT:.5,bodyM3:2.0,roadSpeed:70,price:70000,requiredHp:0,years:[1980,2026],newAvailable:true,agCargoEligible:false});
add({id:'fuel_uaz3303',name:'УАЗ-3303 бортовой + прицеп · ГСМ',type:'truck',segment:'domestic_used',category:'fuel_support_light',capacityT:.8,bodyM3:3.2,roadSpeed:65,price:310000,fuelLph:13,driveType:'wheeled',availableDriveTypes:['wheeled'],years:[1985,2015],agCargoEligible:false,fuelSupportVehicle:true,fuelCanMaxL:240});
add({id:'fuel_uaz_pickup',name:'УАЗ Pickup · ГСМ',type:'truck',segment:'domestic_used',category:'fuel_support_light',capacityT:.725,bodyM3:2.5,roadSpeed:90,price:1350000,fuelLph:14,driveType:'wheeled',availableDriveTypes:['wheeled'],years:[2008,2022],agCargoEligible:false,fuelSupportVehicle:true,fuelCanMaxL:240});
add({id:'fuel_gazelle3302',name:'ГАЗель ГАЗ-3302 ранняя · ГСМ',type:'truck',segment:'domestic_used',category:'fuel_support_light',capacityT:1.5,bodyM3:9,roadSpeed:75,price:430000,fuelLph:15,driveType:'wheeled',availableDriveTypes:['wheeled'],years:[1998,2020],agCargoEligible:false,fuelSupportVehicle:true,fuelCanMaxL:300,fuelIbcEligible:true});
add({id:'fuel_can_kit200',name:'Полевой комплект канистр ГСМ · 200 л',type:'implement',segment:'domestic_used',category:'fuel_supply_kit',requiredHp:0,width:0,speed:0,price:45000,years:[1970,2026],newAvailable:true,fuelSupplyMode:'cans',fuelSupplyCapacityL:200,fuelTransferLpm:18});
add({id:'fuel_ibc1000',name:'Еврокуб IBC · мобильный топливный модуль 1000 л',type:'implement',segment:'domestic_new',category:'fuel_supply_container',requiredHp:0,width:0,speed:0,price:95000,years:[2000,2026],newAvailable:true,fuelSupplyMode:'ibc',fuelSupplyCapacityL:1000,fuelTransferLpm:45,fuelLoadedMassT:1.05});
add({id:'fuel_atz38_gaz53',name:'АТЗ-3,8-53А (ГАЗ-53А)',type:'truck',segment:'domestic_used',category:'fuel_tanker',capacityT:4.1,bodyM3:3.8,roadSpeed:55,price:1150000,fuelLph:24,driveType:'wheeled',availableDriveTypes:['wheeled'],years:[1975,1995],agCargoEligible:false,fuelSupplyMode:'tanker',fuelSupplyCapacityL:3800,fuelTransferLpm:250});
add({id:'fuel_atz66_gaz3309',name:'АТЗ-6,6 на шасси ГАЗ-3309',type:'truck',segment:'domestic_used',category:'fuel_tanker',capacityT:6.8,bodyM3:6.6,roadSpeed:65,price:2850000,fuelLph:22,driveType:'wheeled',availableDriveTypes:['wheeled'],years:[2005,2020],agCargoEligible:false,fuelSupplyMode:'tanker',fuelSupplyCapacityL:6600,fuelTransferLpm:300});
add({id:'fuel_atz10_kamaz43118',name:'АТЗ-10 на шасси КамАЗ-43118',type:'truck',segment:'domestic_new',category:'fuel_tanker',capacityT:10.4,bodyM3:10,roadSpeed:70,price:8900000,fuelLph:32,driveType:'wheeled',availableDriveTypes:['wheeled'],years:[2015,2026],newAvailable:true,agCargoEligible:false,fuelSupplyMode:'tanker',fuelSupplyCapacityL:10000,fuelTransferLpm:400});


// 0.11.9.67 — catalog semantic normalization + heavy-endgame tractor ladder.
// Historical models that are no longer sold new belong to the used-market segment even when
// their original data block was authored in a *_new family. Stable IDs are intentionally kept
// for save/debug continuity; market semantics live in segment/newAvailable.
for(const id of ['imp63','imp65','imp72','imp74','imp75','imp76','imp77','imp78','imp100','imp101','brand_case_er1255','pot_vitasem302','lemken_azurit9_used','gp_yp1625a_used']){
 const m=C.find(x=>x.id===id);if(m){m.segment=/^(Agrator|Вега)/.test(m.name)?'domestic_used':'foreign_used';m.newAvailable=false;}
}
for(const id of ['fuel_light_trailer500','fuel_can_kit200']){const m=C.find(x=>x.id===id);if(m){m.segment='domestic_new';m.newAvailable=true;}}
for(const id of ['imp65','imp74','imp76','imp78','imp100','imp101']){const m=C.find(x=>x.id===id);if(m){m.segment='foreign_new';m.newAvailable=true;m.years=[m.years?.[0]||2020,2026];}}

// Explicitly document legacy IDs whose suffix no longer describes market availability.
const LEGACY_ID_NOTES={
 lemken_juwel8_used:'stable legacy id; current model is sold in foreign_new',
 lemken_korund8_used:'stable legacy id; current model is sold in foreign_new',
 lemken_azurit9_used:'stable legacy id; historical model now correctly routed to foreign_used',
 bdm6x4_used:'stable legacy id; retained for continuity despite domestic_new segment',
 palesse_zhzk5_used:'stable legacy id; retained for continuity despite domestic_new segment',
 gp_yp1625a_used:'stable legacy id; historical model now correctly routed to foreign_used'
};
for(const [id,note] of Object.entries(LEGACY_ID_NOTES)){const m=C.find(x=>x.id===id);if(m){m.legacyId=true;m.legacyIdNote=note;}}

// Brand normalization for late-added/specialized catalog families. Generic implements without a
// manufacturer stay "Прочие" by design; identifiable brands must not.
const BRAND_NORMALIZE_011967=[
 ['ЮМЗ',/^ЮМЗ-/],['ЛТЗ',/^ЛТЗ /],['ХТЗ',/^ХТЗ[- ]/],['ВгТЗ',/^ДТ-75$/],['АГРОМАШ',/^АГРОМАШ /],
 ['Ростсельмаш',/^(СК-5|Нива-|ДОН-|КСК-|ДОН-680|RSM )/],['Енисей',/^Енисей-/],
 ['Агромастер',/^Агромастер /],['Salford',/^Salford /],['BEDNAR',/^BEDNAR /],['Kelly',/^Kelly /],['Einböck',/^Einböck /],
 ['Пегас-Агро',/^Пегас-Агро /],['JAR-MET',/^JAR-MET /],['Unverferth',/^Unverferth /],['J&M',/^J&M /],
 ['Quicke',/^Quicke /],['Manitou',/^Manitou /],['АМКОДОР',/^АМКОДОР /],['ТОНАР',/^(ТОНАР|Тонар)[ -]/],
 ['MAN',/^MAN /],['Scania',/^Scania /],['Volvo',/^Volvo /],['МАЗ',/^МАЗ-/],['КамАЗ',/^КамАЗ(?:-| )/],['Урал',/^Урал(?:-| )/],['ГАЗ',/^(ГАЗ|ГАЗель)/],['ЗИЛ',/^ЗИЛ-/],['УАЗ',/^УАЗ/],['НЕФАЗ',/^НЕФАЗ-/],['Wielton',/^Wielton /],['STAS',/^STAS /],['Сеспель',/^Сеспель /],
 ['Hesston',/^Hesston /],['Sipma',/^Sipma /],['Fliegl',/^Fliegl /],['JCB',/^JCB /],
 ['John Deere',/^John Deere /],['Case IH',/^Case IH /],['New Holland',/^New Holland /],['Fendt',/^Fendt /],['Massey Ferguson',/^Massey Ferguson /],['DEUTZ-FAHR',/^DEUTZ-FAHR /],['Valtra',/^(Valtra|Valmet) /],['CLAAS',/^CLAAS /],
 ['Ростсельмаш',/^(Ростсельмаш |RSM )/],['ПАЛЕССЕ',/^ПАЛЕССЕ /],['AMAZONE',/^(AMAZONE|Amazone) /],['Kinze',/^Kinze /]
];
for(const m of C){for(const [brand,re] of BRAND_NORMALIZE_011967)if(re.test(m.name)){m.brand=brand;break;}}
for(const m of C)if(!m.brand)m.brand='Прочие';
for(const m of C)if(m.type==='implement'&&m.category==='sow_row')m.precisionPlanter=true;
for(const [id,brand] of Object.entries({fuel_atz38_gaz53:'ГАЗ',fuel_atz66_gaz3309:'ГАЗ',fuel_atz10_kamaz43118:'КамАЗ',supply_as2um_gaz51:'ГАЗ'})){const m=C.find(x=>x.id===id);if(m)m.brand=brand;}

window.EQUIPMENT_CATALOG=C;
window.TRACTOR_ENGINE_VARIANTS=ENGINE_VARIANTS;
})();


// 0.11.8.69 — внутренние системы пассивных агрегатов, износ рабочих органов и критические отказы.
