/* ASCII-only generator: writes UTF-8 HTML/JS with Bengali via code points. */
const fs = require("fs");
const path = require("path");

const bn = (...codes) => String.fromCharCode(...codes);

const B = {
  muktar: bn(0x09AE, 0x09C1, 0x0995, 0x09CD, 0x09A4, 0x09BE, 0x09B0),
  thai: bn(0x09A5, 0x09BE, 0x0987),
  ess: bn(0x098F, 0x09B8) + "." + bn(0x098F, 0x09B8),
  gallery: bn(0x0997, 0x09CD, 0x09AF, 0x09BE, 0x09B2, 0x09BE, 0x09B0, 0x09C0),
  and: bn(0x098F, 0x09A8, 0x09CD, 0x09A1),
  glass: bn(0x0997, 0x09CD, 0x09B2, 0x09BE, 0x09B8),
  house: bn(0x09B9, 0x09BE, 0x0989, 0x099C),
  calc: bn(0x0995, 0x09CD, 0x09AF, 0x09BE, 0x09B2, 0x0995, 0x09C1, 0x09B2, 0x09C7, 0x099F, 0x09B0),
  kach: bn(0x0995, 0x09BE, 0x0981, 0x099A),
  janala: bn(0x099C, 0x09BE, 0x09A8, 0x09BE, 0x09B2, 0x09BE),
  dorja: bn(0x09A6, 0x09B0, 0x099C, 0x09BE),
  o: bn(0x0993),
  map: bn(0x09AE, 0x09BE, 0x09AA),
  dekhe: bn(0x09A6, 0x09C7, 0x0996, 0x09C7),
  visual: bn(0x09AD, 0x09BF, 0x099C, 0x09C1, 0x09DF, 0x09BE, 0x09B2),
  soho: bn(0x09B8, 0x09B9),
  dam: bn(0x09A6, 0x09BE, 0x09AE),
  hisab: bn(0x09B9, 0x09BF, 0x09B8, 0x09BE, 0x09AC),
  korun: bn(0x0995, 0x09B0, 0x09C1, 0x09A8),
  mistrir: bn(0x09AE, 0x09BF, 0x09B8, 0x09CD, 0x09A4, 0x09CD, 0x09B0, 0x09BF, 0x09B0),
  cutting: bn(0x0995, 0x09BE, 0x099F, 0x09BF, 0x0982),
  list: bn(0x09B2, 0x09BF, 0x09B8, 0x09CD, 0x099F),
  rate: bn(0x09B0, 0x09C7, 0x099F),
  settings: bn(0x09B8, 0x09C7, 0x099F, 0x09BF, 0x0982, 0x09B8),
  notun: bn(0x09A8, 0x09A4, 0x09C1, 0x09A8),
  jog: bn(0x09AF, 0x09CB, 0x0997),
  ucchota: bn(0x0989, 0x099A, 0x09CD, 0x099A, 0x09A4, 0x09BE),
  prostho: bn(0x09AA, 0x09CD, 0x09B0, 0x09B8, 0x09CD, 0x09A5),
  fut: bn(0x09AB, 0x09C1, 0x099F),
  inchi: bn(0x0987, 0x099E, 0x09CD, 0x099A, 0x09BF),
  poriman: bn(0x09AA, 0x09B0, 0x09BF, 0x09AE, 0x09BE, 0x09A3),
  songkha: bn(0x09B8, 0x0982, 0x0996, 0x09CD, 0x09AF, 0x09BE),
  thickness: bn(0x09A5, 0x09BF, 0x0995, 0x09A8, 0x09C7, 0x09B8),
  mm: bn(0x09AE, 0x09BF, 0x09AE, 0x09BF),
  kacher: bn(0x0995, 0x09BE, 0x0981, 0x099A, 0x09C7, 0x09B0),
  company: bn(0x0995, 0x09CB, 0x09AE, 0x09CD, 0x09AA, 0x09BE, 0x09A8, 0x09BF),
  lock: bn(0x09B2, 0x0995),
  er: bn(0x098F, 0x09B0),
  dhoron: bn(0x09A7, 0x09B0, 0x09A8),
  frame: bn(0x09AB, 0x09CD, 0x09B0, 0x09C7, 0x09AE),
  borgofut: bn(0x09AC, 0x09B0, 0x09CD, 0x0997, 0x09AB, 0x09C1, 0x099F),
  optional: bn(0x0990, 0x099A, 0x09CD, 0x099B, 0x09BF, 0x0995),
  install: bn(0x0987, 0x09A8, 0x09B8, 0x09CD, 0x099F, 0x09B2, 0x09C7, 0x09B6, 0x09A8),
  onnanno: bn(0x0985, 0x09A8, 0x09CD, 0x09AF, 0x09BE, 0x09A8, 0x09CD, 0x09AF),
  charge: bn(0x099A, 0x09BE, 0x09B0, 0x09CD, 0x099C),
  sothik: bn(0x09B8, 0x09A0, 0x09BF, 0x0995, 0x09AD, 0x09BE, 0x09AC, 0x09C7),
  din: bn(0x09A6, 0x09BF, 0x09A8),
  preview: bn(0x09AA, 0x09CD, 0x09B0, 0x09BF, 0x09AD, 0x09BF, 0x0989),
  model: bn(0x09AE, 0x09A1, 0x09C7, 0x09B2),
  likhun: bn(0x09B2, 0x09BF, 0x0996, 0x09C1, 0x09A8),
  talika: bn(0x09A4, 0x09BE, 0x09B2, 0x09BF, 0x0995, 0x09BE),
  ekhono: bn(0x098F, 0x0996, 0x09A8, 0x0993),
  kono: bn(0x0995, 0x09CB, 0x09A8, 0x09CB),
  ba: bn(0x09AC, 0x09BE),
  hoyni: bn(0x09B9, 0x09DF, 0x09A8, 0x09BF),
  kora: bn(0x0995, 0x09B0, 0x09BE),
  mot: bn(0x09AE, 0x09CB, 0x099F),
  sorbo: bn(0x09B8, 0x09B0, 0x09CD, 0x09AC, 0x09AE, 0x09CB, 0x099F),
  khali: bn(0x0996, 0x09BE, 0x09B2, 0x09BF),
  print: bn(0x09AA, 0x09CD, 0x09B0, 0x09BF, 0x09A8, 0x09CD, 0x099F),
  jonno: bn(0x099C, 0x09A8, 0x09CD, 0x09AF),
  prati: bn(0x09AA, 0x09CD, 0x09B0, 0x09A4, 0x09BF, 0x099F, 0x09BF),
  parts: bn(0x09AA, 0x09BE, 0x09B0, 0x09CD, 0x099F, 0x09B8),
  kottuku: bn(0x0995, 0x09A4, 0x099F, 0x09C1, 0x0995, 0x09C1),
  kate: bn(0x0995, 0x09BE, 0x099F, 0x09A4, 0x09C7),
  hobe: bn(0x09B9, 0x09AC, 0x09C7),
  tar: bn(0x09A4, 0x09BE, 0x09B0),
  sadharon: bn(0x09B8, 0x09BE, 0x09A7, 0x09BE, 0x09B0, 0x09A3),
  shutter: bn(0x09B6, 0x09BE, 0x099F, 0x09BE, 0x09B0),
  overlap: bn(0x0993, 0x09AD, 0x09BE, 0x09B0, 0x09B2, 0x09CD, 0x09AF, 0x09BE, 0x09AA),
  track: bn(0x099F, 0x09CD, 0x09B0, 0x09CD, 0x09AF, 0x09BE, 0x0995),
  gobir: bn(0x0997, 0x09AD, 0x09C0, 0x09B0, 0x09A4, 0x09BE),
  profile: bn(0x09AA, 0x09CD, 0x09B0, 0x09CB, 0x09AB, 0x09BE, 0x0987, 0x09B2),
  onujayi: bn(0x0985, 0x09A8, 0x09C1, 0x09AF, 0x09BE, 0x09AF, 0x09BC, 0x09C0),
  prokrito: bn(0x09AA, 0x09CD, 0x09B0, 0x0995, 0x09C3, 0x09A4),
  kichuta: bn(0x0995, 0x09BF, 0x099B, 0x09C1, 0x099F, 0x09BE),
  bhinno: bn(0x09AD, 0x09BF, 0x09A8, 0x09CD, 0x09A8),
  hote: bn(0x09B9, 0x09A4, 0x09C7),
  pare: bn(0x09AA, 0x09BE, 0x09B0, 0x09C7),
  formula: bn(0x09AB, 0x09B0, 0x09CD, 0x09AE, 0x09C1, 0x09B2, 0x09BE),
  bairer: bn(0x09AC, 0x09BE, 0x0987, 0x09B0, 0x09C7, 0x09B0),
  theke: bn(0x09A5, 0x09C7, 0x0995, 0x09C7),
  komiye: bn(0x0995, 0x09AE, 0x09BF, 0x09AF, 0x09BC, 0x09C7),
  hoy: bn(0x09B9, 0x09AF, 0x09BC),
  ekhane: bn(0x098F, 0x0996, 0x09BE, 0x09A8, 0x09C7),
  set: bn(0x09B8, 0x09C7, 0x099F),
  outer: bn(0x0986, 0x0989, 0x099F, 0x09BE, 0x09B0),
  upor: bn(0x0989, 0x09AA, 0x09B0),
  nich: bn(0x09A8, 0x09BF, 0x099A),
  komti: bn(0x0995, 0x09AE, 0x09A4, 0x09BF),
  side: bn(0x09B8, 0x09BE, 0x0987, 0x09A1),
  interlock: bn(0x0987, 0x09A8, 0x09CD, 0x099F, 0x09BE, 0x09B0, 0x09B2, 0x0995),
  gap: bn(0x0997, 0x09CD, 0x09AF, 0x09BE, 0x09AA),
  choto: bn(0x099B, 0x09CB, 0x099F),
  songrokkhon: bn(0x09B8, 0x0982, 0x09B0, 0x0995, 0x09CD, 0x09B7, 0x09A3),
  sob: bn(0x09B8, 0x09AC),
  man: bn(0x09AE, 0x09BE, 0x09A8),
  inchite: bn(0x0987, 0x099E, 0x09CD, 0x099A, 0x09BF, 0x09A4, 0x09C7),
  apnar: bn(0x0986, 0x09AA, 0x09A8, 0x09BE, 0x09B0),
  bodle: bn(0x09AC, 0x09A6, 0x09B2, 0x09C7),
  nin: bn(0x09A8, 0x09BF, 0x09A8),
  niyomito: bn(0x09A8, 0x09BF, 0x09AF, 0x09BC, 0x09AE, 0x09BF, 0x09A4),
  byabohrito: bn(0x09AC, 0x09CD, 0x09AF, 0x09AC, 0x09B9, 0x09C3, 0x09A4),
  nam: bn(0x09A8, 0x09BE, 0x09AE),
  proti: bn(0x09AA, 0x09CD, 0x09B0, 0x09A4, 0x09BF),
  default: bn(0x09A1, 0x09BF, 0x09AB, 0x09B2, 0x09CD, 0x099F),
  bazar: bn(0x09AC, 0x09BE, 0x099C, 0x09BE, 0x09B0, 0x09AD, 0x09C7, 0x09A6, 0x09C7),
  bodlay: bn(0x09AC, 0x09A6, 0x09B2, 0x09BE, 0x09AF, 0x09BC),
  asol: bn(0x0986, 0x09B8, 0x09B2),
  kroy: bn(0x0995, 0x09CD, 0x09B0, 0x09AF, 0x09BC, 0x09AE, 0x09C2, 0x09B2, 0x09CD, 0x09AF),
  edit: bn(0x098F, 0x09A1, 0x09BF, 0x099F),
  kore: bn(0x0995, 0x09B0, 0x09C7),
  jemon: bn(0x09AF, 0x09C7, 0x09AE, 0x09A8),
  hoyeche: bn(0x09B9, 0x09AF, 0x09BC, 0x09C7, 0x099B, 0x09C7),
  fixed: bn(0x09AB, 0x09BF, 0x0995, 0x09CD, 0x09B8, 0x09A1),
  sliding: bn(0x09B8, 0x09CD, 0x09B2, 0x09BE, 0x0987, 0x09A1, 0x09BF, 0x0982),
  single: bn(0x09B8, 0x09BF, 0x0999, 0x09CD, 0x0997, 0x09C7, 0x09B2),
  double: bn(0x09A1, 0x09BE, 0x09AC, 0x09B2),
  pata: bn(0x09AA, 0x09BE, 0x09A4, 0x09BE),
  nasir: bn(0x09A8, 0x09BE, 0x09B8, 0x09BF, 0x09B0),
  abul: bn(0x0986, 0x09AC, 0x09C1, 0x09B2),
  khayer: bn(0x0996, 0x09BE, 0x09AF, 0x09BC, 0x09C7, 0x09B0),
  dhaka: bn(0x09A2, 0x09BE, 0x0995, 0x09BE),
  euro: bn(0x0987, 0x0989, 0x09B0, 0x09CB),
  usmania: bn(0x0989, 0x09B8, 0x09AE, 0x09BE, 0x09A8, 0x09BF, 0x09AF, 0x09BC, 0x09BE),
  casement: bn(0x0995, 0x09CD, 0x09AF, 0x09BE, 0x09B8, 0x09AE, 0x09C7, 0x09A8, 0x09CD, 0x099F),
  handle: bn(0x09B9, 0x09CD, 0x09AF, 0x09BE, 0x09A8, 0x09CD, 0x09A1, 0x09C7, 0x09B2),
  bam: bn(0x09AC, 0x09BE, 0x09AE),
  dan: bn(0x09A1, 0x09BE, 0x09A8),
  muchun: bn(0x09AE, 0x09C1, 0x099B, 0x09C1, 0x09A8),
  dekhun: bn(0x09A6, 0x09C7, 0x0996, 0x09BE, 0x09A8),
  lukan: bn(0x09B2, 0x09C1, 0x0995, 0x09BE, 0x09A8),
  subtotal: bn(0x09B8, 0x09BE, 0x09AC, 0x099F, 0x09CB, 0x099F, 0x09BE, 0x09B2),
  prothome: bn(0x09AA, 0x09CD, 0x09B0, 0x09A5, 0x09AE, 0x09C7),
  tab: bn(0x099F, 0x09CD, 0x09AF, 0x09BE, 0x09AC),
  theke2: bn(0x09A5, 0x09C7, 0x0995, 0x09C7),
  ontoto: bn(0x0985, 0x09A8, 0x09CD, 0x09A4, 0x09A4),
  ekti: bn(0x098F, 0x0995, 0x099F, 0x09BF),
  likhle: bn(0x09B2, 0x09BF, 0x0996, 0x09B2, 0x09C7),
  chobir: bn(0x099B, 0x09AC, 0x09BF, 0x09B0),
  onupat: bn(0x0985, 0x09A8, 0x09C1, 0x09AA, 0x09BE, 0x09A4),
  bodlabe: bn(0x09AC, 0x09A6, 0x09B2, 0x09BE, 0x09AC, 0x09C7),
  customer: bn(0x0995, 0x09BE, 0x09B8, 0x09CD, 0x099F, 0x09AE, 0x09BE, 0x09B0),
  sohoje: bn(0x09B8, 0x09B9, 0x099C, 0x09C7),
  bujhte: bn(0x09AC, 0x09C1, 0x099D, 0x09A4, 0x09C7),
  parben: bn(0x09AA, 0x09BE, 0x09B0, 0x09AC, 0x09C7, 0x09A8),
  nei: bn(0x09A8, 0x09C7, 0x0987),
  n1: bn(0x09E7),
  n2: bn(0x09E8),
  n3: bn(0x09E9),
  n4: bn(0x09EA),
  n5: bn(0x09EB),
  n6: bn(0x09EC),
  taka: bn(0x09F3),
  dari: bn(0x0964),
  janalar: bn(0x099C, 0x09BE, 0x09A8, 0x09BE, 0x09B2, 0x09BE, 0x09B0),
  dorjar: bn(0x09A6, 0x09B0, 0x099C, 0x09BE, 0x09B0),
  locker: bn(0x09B2, 0x0995, 0x09C7, 0x09B0),
  kacherDam: bn(0x0995, 0x09BE, 0x0981, 0x099A, 0x09C7, 0x09B0),
  piece: bn(0x09AA, 0x09BF, 0x09B8),
  ekta: bn(0x098F, 0x0995, 0x099F, 0x09BE)
};

const shop = `${B.muktar} ${B.thai} ${B.ess} ${B.gallery} ${B.and} ${B.glass} ${B.house}`;
const subtitle = `${B.thai} ${B.kach} ${B.janala} ${B.o} ${B.dorja} ${B.calc}  -  ${B.map} ${B.dekhe} ${B.visual} ${B.soho} ${B.dam} ${B.hisab} ${B.korun}`;
const cuttingList = `${B.mistrir} ${B.cutting} ${B.list}`;
const rateSettings = `${B.rate} ${B.settings}`;
const addTitle = `${B.notun} ${B.janala} / ${B.dorja} ${B.jog} ${B.korun}`;
const winTypes = `${B.janalar} ${B.dhoron}`;
const doorTypes = `${B.dorjar} ${B.dhoron}`;
const hFt = `${B.ucchota} (${B.fut})`;
const hIn = `${B.ucchota} (${B.inchi})`;
const qty = `${B.poriman} (${B.songkha})`;
const wFt = `${B.prostho} (${B.fut})`;
const wIn = `${B.prostho} (${B.inchi})`;
const thick = `${B.thickness} (${B.mm})`;
const glassCo = `${B.kacher} ${B.company}`;
const lockType = `${B.lock} ${B.er} ${B.dhoron}`;
const frameRate = `${B.frame} ${B.rate} (${B.taka}/${B.borgofut})  -  ${B.optional}`;
const extra = `${B.install} / ${B.onnanno} ${B.charge} (${B.taka})`;
const errSize = `${B.ucchota} ${B.o} ${B.prostho} ${B.sothik} ${B.din}${B.dari}`;
const addBtn = `+ ${B.jog} ${B.korun} ${B.o} ${B.hisab} ${B.korun}`;
const livePrev = `${B.visual} ${B.preview}`;
const caption = `${B.ucchota} ${B.o} ${B.prostho} ${B.likhle} ${B.chobir} ${B.onupat} ${B.bodlabe}  -  ${B.customer} ${B.sohoje} ${B.bujhte} ${B.parben}${B.dari}`;
const itemList = `${B.janala} / ${B.dorjar} ${B.talika}`;
const empty = `${B.ekhono} ${B.kono} ${B.janala} ${B.ba} ${B.dorja} ${B.jog} ${B.kora} ${B.hoyni}${B.dari}`;
const totalSq = `${B.mot} ${B.borgofut}`;
const glassPrice = `${B.kacherDam} ${B.dam}`;
const lockPrice = `${B.locker} ${B.dam}`;
const framePrice = `${B.frame} ${B.er} ${B.dam}`;
const extraLine = `${B.install} / ${B.onnanno}`;
const grand = B.sorbo;
const clearList = `${B.talika} ${B.khali} ${B.korun}`;
const printPdf = `${B.print} / PDF`;
const cutForMistri = `${B.mistrir} ${B.jonno} ${B.cutting} ${B.list}`;
const mape = B.map + bn(0x09C7);
const kichu = bn(0x0995, 0x09BF, 0x099B, 0x09C1);
const ta = bn(0x09A4, 0x09BE);
  const cutHint = `${B.prati} ${B.janala}/${B.dorjar} ${B.jonno} ${B.kono} ${B.parts} ${B.kottuku} ${mape} ${B.kate} ${B.hobe} ${B.tar} ${B.talika}${B.dari}`;
const cutWarn = `${B.ekta} ${B.sadharon} ${B.hisab}  -  ${B.shutter} ${B.er} ${B.overlap}, ${B.track} ${B.gobir} ${B.ba} ${B.profile} ${B.onujayi} ${B.prokrito} ${B.map} ${B.kichuta} ${B.bhinno} ${B.hote} ${B.pare}${B.dari}`;
const cutFormula = `${B.cutting} ${B.formula} ${B.settings}`;
const cutFormulaHint = `${B.frame} ${B.er} ${B.bairer} ${B.map} ${B.theke} ${B.prati} ${B.parts} ${B.kottuku} ${B.komiye} ${B.kate} ${B.hoy} ${ta} ${B.ekhane} ${B.set} ${B.korun}${B.dari}`;
const ohb = `O/H, B  -  ${B.outer} ${B.frame} ${B.upor}/${B.nich} ${B.komti}`;
const sln = `S/L, I/N  -  ${B.side}/${B.interlock} ${B.komti}`;
const stb = `S/T, B  -  ${B.shutter} ${B.upor}/${B.nich} ${B.komti}`;
const ggap = `${B.glass} ${B.gap}  -  ${B.frame} ${B.theke} ${B.kach} ${B.kottuku} ${B.choto}`;
const save = B.songrokkhon;
const inchHint = `${B.sob} ${B.man} ${B.inchite}${B.dari} ${B.apnar} ${B.profile}/${B.mistrir} ${B.map} ${B.onujayi} ${B.bodle} ${B.nin}${B.dari}`;
const coRates = `${B.kacher} ${B.company} ${B.o} ${B.rate}`;
const coHint = `${B.niyomito} ${B.byabohrito} ${B.kach} ${B.company} ${B.er} ${B.nam} ${B.o} ${B.proti} ${B.borgofut} ${B.rate} ${B.jog} ${B.korun}${B.dari}`;
const coWarn = `${B.default} ${B.rate} ${B.bazar} ${B.bodlay}  -  ${B.apnar} ${B.asol} ${B.kroy} ${B.onujayi} ${B.edit} ${B.kore} ${B.nin}${B.dari}`;
const coPh = `${B.company} ${B.er} ${B.nam}, ${B.jemon}${bn(0x0983)} ${B.thai} ${B.n5} ${B.mm}`;
const ratePh = `${B.rate} (${B.taka}/${B.borgofut})`;
const add = `${B.jog} ${B.korun}`;
const lockTitle = `${B.lock} ${B.er} ${B.dhoron} ${B.o} ${B.dam}`;
const lockHint = `${B.prati} ${B.lock} ${B.er} ${B.dhoron} ${B.o} ${B.tar} ${B.dam} ${B.jog} ${B.korun}${B.dari}`;
const lockPh = `${B.lock} ${B.er} ${B.nam}, ${B.jemon}${bn(0x0983)} ${B.sliding} ${B.lock}`;
const damPh = `${B.dam} (${B.taka})`;
const saved = `${B.songrokkhon} ${B.hoyeche} \u2713`;
const dhoron = B.dhoron;
const mapeFix = B.map;

const html = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${shop}  -  ${B.calc}</title>
  <link rel="icon" href="images/logo.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="pane-bg"></div>
  <div class="wrap">
    <header class="top">
      <img class="logo" src="images/logo.svg" alt="${B.glass} ${B.house}">
      <div>
        <h1>${shop}</h1>
        <p>${subtitle}</p>
      </div>
    </header>

    <div class="tabs">
      <button type="button" class="tab-btn active" data-tab="calc">${B.calc}</button>
      <button type="button" class="tab-btn" data-tab="cutting">${cuttingList}</button>
      <button type="button" class="tab-btn" data-tab="rates">${rateSettings}</button>
    </div>

    <div id="tab-calc">
      <div class="calc-layout">
        <div class="card">
          <h2>${addTitle} <span class="badge">Add Item</span></h2>
          <div class="type-section">
            <h3>${winTypes}</h3>
            <div class="type-grid" id="type-windows"></div>
          </div>
          <div class="type-section">
            <h3>${doorTypes}</h3>
            <div class="type-grid doors" id="type-doors"></div>
          </div>
          <div class="grid3">
            <div class="field"><label for="in-h-ft">${hFt}</label><input type="number" min="0" step="0.1" id="in-h-ft" placeholder="${B.n5}"></div>
            <div class="field"><label for="in-h-in">${hIn}</label><input type="number" min="0" max="11.9" step="0.1" id="in-h-in" placeholder="${B.n6}"></div>
            <div class="field"><label for="in-qty">${qty}</label><input type="number" min="1" step="1" id="in-qty" value="1"></div>
          </div>
          <div class="grid3">
            <div class="field"><label for="in-w-ft">${wFt}</label><input type="number" min="0" step="0.1" id="in-w-ft" placeholder="${B.n4}"></div>
            <div class="field"><label for="in-w-in">${wIn}</label><input type="number" min="0" max="11.9" step="0.1" id="in-w-in" placeholder="${B.n1 === B.n1 ? '0' : '0'}"></div>
            <div class="field"><label for="in-thickness">${thick}</label><input type="number" min="0" step="0.5" id="in-thickness" placeholder="${B.n5}"></div>
          </div>
          <div class="grid2">
            <div class="field"><label for="sel-company">${glassCo}</label><select id="sel-company"></select></div>
            <div class="field">
              <label>${B.kacher} ${bn(0x09B0, 0x0982)}</label>
              <div class="color-grid" id="color-grid"></div>
            </div>
          </div>
          <div class="grid2">
            <div class="field"><label for="sel-lock">${lockType}</label><select id="sel-lock"></select></div>
            <div class="field">
              <label>${bn(0x09AE, 0x09B6, 0x09BE, 0x09B0, 0x09BF)} ${bn(0x09A8, 0x09C7, 0x099F)}</label>
              <div class="choice-row">
                <button type="button" class="choice-btn active" data-net="0" id="btn-net-no">${B.nei}</button>
                <button type="button" class="choice-btn" data-net="1" id="btn-net-yes">${bn(0x0986, 0x099B, 0x09C7)}</button>
              </div>
            </div>
          </div>
          <div class="grid2">
            <div class="field"><label for="in-frame-rate">${frameRate}</label><input type="number" min="0" step="1" id="in-frame-rate" placeholder="0"></div>
            <div class="field"><label for="in-net-rate">${bn(0x09A8, 0x09C7, 0x099F)} ${B.charge} (${B.taka})</label><input type="number" min="0" step="1" id="in-net-rate" placeholder="0"></div>
          </div>
          <div class="field">
            <label for="in-extra">${extra}</label>
            <input type="number" min="0" step="1" id="in-extra" placeholder="0">
          </div>
          <div class="err" id="err-msg">${errSize}</div>
          <button type="button" class="primary" id="btn-add">${addBtn}</button>
        </div>

        <aside class="card preview-card">
          <h2>${livePrev} <span class="badge">Live</span></h2>
          <div class="preview-stage" id="live-preview"></div>
          <div class="preview-meta">
            <div><span>${dhoron}</span><strong id="preview-kind">${B.janala}</strong></div>
            <div><span>${B.model}</span><strong id="preview-type">${B.fixed}</strong></div>
            <div><span>${B.map}</span><strong id="preview-size">${B.map} ${B.likhun}</strong></div>
          </div>
          <div class="preview-meta">
            <div><span>${bn(0x09B0, 0x0982)}</span><strong id="preview-color">${bn(0x09B8, 0x09CD, 0x09AC, 0x099A, 0x09CD, 0x099B)}</strong></div>
            <div><span>${B.lock}</span><strong id="preview-lock">${B.lock} ${B.nei}</strong></div>
            <div><span>${bn(0x09A8, 0x09C7, 0x099F)}</span><strong id="preview-net">${B.nei}</strong></div>
          </div>
          <p class="preview-caption">${caption}</p>
        </aside>
      </div>

      <div class="card" id="list-card">
        <h2>${itemList}</h2>
        <div id="item-list"></div>
        <div class="empty-note" id="empty-note">${empty}</div>
      </div>

      <div class="summary hidden" id="summary-card">
        <div class="summary-line"><span>${totalSq}</span><span id="sum-sqft">0</span></div>
        <div class="summary-line"><span>${glassPrice}</span><span id="sum-glass">${B.taka}0</span></div>
        <div class="summary-line"><span>${lockPrice}</span><span id="sum-lock">${B.taka}0</span></div>
        <div class="summary-line"><span>${framePrice}</span><span id="sum-frame">${B.taka}0</span></div>
        <div class="summary-line"><span>${bn(0x09AE, 0x09B6, 0x09BE, 0x09B0, 0x09BF)} ${bn(0x09A8, 0x09C7, 0x099F)}</span><span id="sum-net">${B.taka}0</span></div>
        <div class="summary-line"><span>${extraLine}</span><span id="sum-extra">${B.taka}0</span></div>
        <div class="summary-line grand"><span>${grand}</span><span id="sum-total">${B.taka}0</span></div>
        <div class="actions-row">
          <button type="button" class="secondary" id="btn-clear">${clearList}</button>
          <button type="button" class="secondary" id="btn-print">${printPdf}</button>
        </div>
      </div>
    </div>

    <div id="tab-cutting" class="hidden">
      <div class="card">
        <h2>${cutForMistri} <span class="badge">Cutting List</span></h2>
        <p class="hint">${cutHint}</p>
        <p class="hint warn">${cutWarn}</p>
        <div id="cutting-list-wrap"></div>
        <div class="empty-note" id="cutting-empty">${empty}</div>
        <div class="actions-row hidden" id="cutting-actions">
          <button type="button" class="secondary" id="btn-print-cutting">${printPdf}</button>
        </div>
      </div>
    </div>

    <div id="tab-rates" class="hidden">
      <div class="card">
        <h2>${cutFormula} <span class="badge">Cutting Formula</span></h2>
        <p class="hint">${cutFormulaHint}</p>
        <div class="grid2">
          <div class="field"><label for="in-cp-outerhoriz">${ohb}</label><input type="number" min="0" step="0.1" id="in-cp-outerhoriz" placeholder="3.6"></div>
          <div class="field"><label for="in-cp-side">${sln}</label><input type="number" min="0" step="0.1" id="in-cp-side" placeholder="1.1"></div>
        </div>
        <div class="grid2">
          <div class="field"><label for="in-cp-shutterhoriz">${stb}</label><input type="number" min="0" step="0.1" id="in-cp-shutterhoriz" placeholder="1.5"></div>
          <div class="field"><label for="in-cp-glassgap">${ggap}</label><input type="number" min="0" step="0.05" id="in-cp-glassgap" placeholder="0.25"></div>
        </div>
        <button type="button" class="secondary" id="btn-save-cut">${save}</button>
        <p class="hint spaced">${inchHint}</p>
      </div>

      <div class="card">
        <h2>${coRates} <span class="badge">${B.taka} / ${B.borgofut}</span></h2>
        <p class="hint">${coHint}</p>
        <p class="hint warn">${coWarn}</p>
        <div class="rate-list" id="company-list"></div>
        <div class="add-row-form">
          <input type="text" id="new-company-name" placeholder="${coPh}">
          <input type="number" id="new-company-rate" class="narrow-num" placeholder="${ratePh}" min="0" step="1">
          <button type="button" class="secondary" id="btn-add-company">${add}</button>
        </div>
      </div>

      <div class="card">
        <h2>${lockTitle} <span class="badge">${B.taka} / ${B.proti} ${B.lock}</span></h2>
        <p class="hint">${lockHint}</p>
        <div class="rate-list" id="lock-list"></div>
        <div class="add-row-form">
          <input type="text" id="new-lock-name" placeholder="${lockPh}">
          <select id="new-lock-style" style="max-width:150px;">
            <option value="sliding">${B.sliding}</option>
            <option value="casement">${B.handle}</option>
            <option value="deadbolt">${bn(0x09A1, 0x09C7, 0x09A1, 0x09AC, 0x09CB, 0x09B2, 0x09CD, 0x099F)}</option>
            <option value="knob">${bn(0x09A8, 0x09AC)}</option>
            <option value="generic">${B.sadharon}</option>
          </select>
          <input type="number" id="new-lock-rate" class="narrow-num" placeholder="${damPh}" min="0" step="1">
          <button type="button" class="secondary" id="btn-add-lock">${add}</button>
        </div>
      </div>
      <span class="save-flash" id="save-flash">${saved}</span>
    </div>
  </div>
  <script src="js/calculator.js"></script>
</body>
</html>
`;

const i18n = {
  shop,
  janala: B.janala,
  dorja: B.dorja,
  fut: B.fut,
  inchi: B.inchi,
  fixedFrame: `${B.fixed} ${B.frame}`,
  oneGlass: `${B.n1} ${B.kach}`,
  sliding: B.sliding,
  s2: `${B.n2} ${B.shutter}`,
  s3: `${B.n3} ${B.shutter}`,
  s4: `${B.n4} ${B.shutter}`,
  doorSingle: `${B.single} ${B.dorja}`,
  oneLeaf: `${B.n1} ${B.pata}`,
  doorDouble: `${B.double} ${B.dorja}`,
  twoLeaf: `${B.n2} ${B.pata}`,
  doorSliding: `${B.sliding} ${B.dorja}`,
  nasir5: `${B.nasir} ${B.thai} ${B.glass} (${B.n5} ${B.mm})`,
  nasir6: `${B.nasir} ${B.thai} ${B.glass} (${B.n6} ${B.mm})`,
  abul: `${B.abul} ${B.khayer} ${B.thai} ${B.glass}`,
  dhaka: `${B.dhaka} ${B.euro} ${B.glass}`,
  usmania: `${B.usmania} ${B.glass}`,
  slidingLock: `${B.sliding} ${B.lock}`,
  caseLock: `${B.casement} ${B.handle} ${B.lock}`,
  noLock: `${B.lock} ${B.nei}`,
  emptyRates: `${B.ekhono} ${kichu} ${B.jog} ${B.kora} ${B.hoyni}${B.dari}`,
  perSq: `/${B.fut}\u00B2`,
  muchun: B.muchun,
  outerTB: `${B.bairer} ${B.frame}  -  ${B.upor}/${B.nich} (O/H, B)`,
  outerLR: `${B.bairer} ${B.frame}  -  ${B.bam}/${B.dan} (S/L)`,
  glass: B.kach,
  shutterTB: `${B.shutter} ${B.frame}`,
  shutterLR: `${B.shutter} ${B.frame}  -  ${B.bam}/${B.dan}`,
  glassEach: `${B.kach} (${B.prati} ${B.shutter})`,
  parts: B.parts,
  map: B.map,
  songkha: B.songkha,
  piece: B.piece,
  errCompany: `${B.prothome} "${rateSettings}" ${B.tab} ${B.theke2} ${B.ontoto} ${B.ekti} ${B.kacher} ${B.company} ${B.jog} ${B.korun}${B.dari}`,
  errSize,
  cutToggle: `${B.cutting} ${B.list} ${B.dekhun}/${B.lukan}`,
  subtotal: B.subtotal,
  outerSize: `${B.bairer} ${B.map}`,
  glassGap: `${B.glass} ${B.gap}`,
  typeEnterSize: `${B.map} ${B.likhun}`,
  perSqft: `/${B.fut}\u00B2`,
  taka: B.taka,
  sqLabel: ` ${B.fut}\u00B2`,
  thickness: B.thickness,
  mm: B.mm,
  ti: bn(0x099F, 0x09BF),
  kach: B.kach,
  lock: B.lock,
  perSqftSlash: `/${B.borgofut}`,
  net: `${bn(0x09AE, 0x09B6, 0x09BE, 0x09B0, 0x09BF)} ${bn(0x09A8, 0x09C7, 0x099F)}`,
  netNo: B.nei,
  netYes: bn(0x0986, 0x099B, 0x09C7),
  glassColor: `${B.kacher} ${bn(0x09B0, 0x0982)}`,
  colorClear: bn(0x09B8, 0x09CD, 0x09AC, 0x099A, 0x09CD, 0x099B),
  colorGreen: bn(0x09B8, 0x09AC, 0x09C1, 0x099C),
  colorBlue: bn(0x09A8, 0x09C0, 0x09B2),
  colorBronze: bn(0x09AC, 0x09CD, 0x09B0, 0x09CB, 0x099E, 0x09CD, 0x099C),
  colorGray: bn(0x09A7, 0x09C2, 0x09B8, 0x09B0),
  colorBlack: bn(0x0995, 0x09BE, 0x09B2, 0x09CB),
  colorFrosted: bn(0x09AB, 0x09CD, 0x09B0, 0x09B8, 0x09CD, 0x099F, 0x09C7, 0x09A1),
  deadbolt: bn(0x09A1, 0x09C7, 0x09A1, 0x09AC, 0x09CB, 0x09B2, 0x09CD, 0x099F),
  knob: `${bn(0x09A8, 0x09AC)} ${B.lock}`,
  generic: B.sadharon
};

const i18nJs = "window.I18N = " + JSON.stringify(i18n, null, 2) + ";\n";

const root = path.join(__dirname, "..");
fs.writeFileSync(path.join(root, "index.html"), html, "utf8");
fs.writeFileSync(path.join(root, "js", "i18n.js"), i18nJs, "utf8");
console.log("Wrote index.html and js/i18n.js");
