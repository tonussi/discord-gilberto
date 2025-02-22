const chapters = {
  1: [
    31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38,
    18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43, 36, 30,
    23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26,
  ],
  2: [
    22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25,
    26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31,
    43, 38,
  ],
  3: [
    17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37,
    27, 24, 33, 44, 23, 55, 46, 34,
  ],
  4: [
    54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 32, 22,
    29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13,
  ],
  5: [
    46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22, 21,
    20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12,
  ],
  6: [
    18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51,
    9, 45, 34, 16, 33,
  ],
  7: [
    36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30,
    48, 25,
  ],
  8: [22, 23, 18, 22],
  9: [
    28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24,
    42, 15, 23, 29, 22, 44, 25, 12, 25, 11, 31, 13,
  ],
  10: [
    27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33, 43,
    26, 22, 51, 39, 25,
  ],
  11: [
    53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21,
    43, 29, 53,
  ],
  12: [
    18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37, 37,
    21, 26, 20, 37, 20, 30,
  ],
  13: [
    54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 29, 43, 27, 17, 19,
    8, 30, 19, 32, 31, 31, 32, 34, 21, 30,
  ],
  14: [
    17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34, 11,
    37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23,
  ],
  15: [11, 70, 13, 24, 17, 22, 28, 36, 15, 44],
  16: [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31],
  17: [22, 23, 15, 17, 14, 14, 10, 17, 32, 3],
  18: [
    22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29,
    29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41,
    30, 24, 34, 17,
  ],
  19: [
    6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13,
    31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17,
    13, 11, 5, 26, 17, 11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11, 11, 17, 12,
    8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 12, 20, 72, 13, 19,
    16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11, 13, 12, 9, 9, 5, 8,
    28, 22, 35, 45, 48, 43, 13, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8,
    9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 13, 10, 7, 12, 15,
    21, 10, 20, 14, 9, 6,
  ],
  20: [
    33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29,
    30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31,
  ],
  21: [18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14],
  22: [17, 17, 11, 16, 16, 13, 13, 14],
  23: [
    31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6,
    17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8,
    31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14,
    21, 22, 11, 12, 19, 12, 25, 24,
  ],
  24: [
    19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15,
    18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28,
    18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34,
  ],
  25: [22, 22, 66, 22, 22],
  26: [
    28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14,
    49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23,
    29, 49, 26, 20, 27, 31, 25, 24, 23, 35,
  ],
  27: [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13],
  28: [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9],
  29: [20, 32, 21],
  30: [15, 16, 15, 13, 27, 14, 17, 14, 15],
  31: [21],
  32: [17, 10, 10, 11],
  33: [16, 13, 12, 13, 15, 16, 20],
  34: [15, 13, 19],
  35: [17, 20, 19],
  36: [18, 15, 20],
  37: [15, 23],
  38: [21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21],
  39: [14, 17, 18, 6],
  40: [
    25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30,
    34, 46, 46, 39, 51, 46, 75, 66, 20,
  ],
  41: [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20],
  42: [
    80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48,
    47, 38, 71, 56, 53,
  ],
  43: [
    51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42,
    31, 25,
  ],
  44: [
    26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 41,
    38, 40, 30, 35, 27, 27, 32, 44, 31,
  ],
  45: [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27],
  46: [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24],
  47: [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14],
  48: [24, 21, 29, 31, 26, 18],
  49: [23, 22, 21, 32, 33, 24],
  50: [30, 30, 21, 23],
  51: [29, 23, 25, 18],
  52: [10, 20, 13, 18, 28],
  53: [12, 17, 18],
  54: [20, 15, 16, 16, 25, 21],
  55: [18, 26, 17, 22],
  56: [16, 15, 15],
  57: [25],
  58: [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25],
  59: [27, 26, 18, 17, 20],
  60: [25, 25, 22, 19, 14],
  61: [21, 22, 18],
  62: [10, 29, 24, 21, 21],
  63: [13],
  64: [15],
  65: [25],
  66: [
    20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21,
    15, 27, 21,
  ],
};

const labels = {
  Genesis: 1,
  Gênesis: 1,
  Gên: 1,
  Gen: 1,
  gen: 1,
  Exodus: 2,
  Êxodo: 2,
  Êx: 2,
  Ex: 2,
  ex: 2,
  Exod: 2,
  exod: 2,
  Leviticus: 3,
  Lev: 3,
  lev: 3,
  Numbers: 4,
  Números: 4,
  Num: 4,
  num: 4,
  Deuteronomy: 5,
  Deuteronômio: 5,
  Deut: 5,
  deut: 5,
  Dt: 5,
  dt: 5,
  Joshua: 6,
  Josué: 6,
  Josh: 6,
  josh: 6,
  Judges: 7,
  Juízes: 7,
  Judg: 7,
  judg: 7,
  Ruth: 8,
  Rute: 8,
  Rut: 8,
  rut: 8,
  '1 Samuel': 9,
  '1 Sam': 9,
  '1Sam': 9,
  '1 sam': 9,
  '1sam': 9,
  '2 Samuel': 10,
  '2Sam': 10,
  '2sam': 10,
  '2 Sam': 10,
  '2 sam': 10,
  '1 Kings': 11,
  '1 Reis': 11,
  '1 reis': 11,
  '1Reis': 11,
  '1reis': 11,
  '1Kgs': 11,
  '1 Kgs': 11,
  '2 Kings': 12,
  '2 Reis': 12,
  '2Reis': 12,
  '2reis': 12,
  '2 reis': 12,
  '2Kgs': 12,
  '2 Kgs': 12,
  '1 Chronicles': 13,
  '1 Crônicas': 13,
  '1Crô': 13,
  '1 crô': 13,
  '1 Cro': 13,
  '1 cro': 13,
  '1cro': 13,
  '1Chr': 13,
  '1chr': 13,
  '2 Chronicles': 14,
  '2 Crônicas': 13,
  '2Crô': 13,
  '2 crô': 13,
  '2 Cro': 13,
  '2 cro': 13,
  '2Chr': 14,
  '2chr': 14,
  Ezra: 15,
  Esdras: 15,
  Esd: 15,
  esd: 15,
  Ez: 15,
  ez: 15,
  Nehemiah: 16,
  Neh: 16,
  Esther: 17,
  Éster: 17,
  Esth: 17,
  Job: 18,
  Psalms: 19,
  Ps: 19,
  Proverbs: 20,
  Prov: 20,
  Ecclesiastes: 21,
  Eccl: 21,
  'The Song of Solomon': 22,
  Song: 22,
  Isaiah: 23,
  Isa: 23,
  Jeremiah: 24,
  Jer: 24,
  Lamentations: 25,
  Lam: 25,
  Ezekiel: 26,
  Ezek: 26,
  Daniel: 27,
  Dan: 27,
  Hosea: 28,
  Hos: 28,
  Joel: 29,
  Joe: 29,
  Amos: 30,
  Am: 30,
  Obadiah: 31,
  Obad: 31,
  Jonah: 32,
  Micah: 33,
  Mic: 33,
  Nahum: 34,
  Nah: 34,
  Habakkuk: 35,
  Hab: 35,
  Zephaniah: 36,
  Zeph: 36,
  Haggai: 37,
  Hag: 37,
  Zechariah: 38,
  Zech: 38,
  Malachi: 39,
  Mal: 39,
  Matthew: 40,
  Mateus: 40,
  matthew: 40,
  mateus: 40,
  Mat: 40,
  mat: 40,
  Matt: 40,
  matt: 40,
  mt: 40,
  Mark: 41,
  Marcos: 41,
  mark: 41,
  marcos: 41,
  Mar: 41,
  Mk: 41,
  mk: 41,
  Mc: 41,
  mc: 41,
  Luke: 42,
  Lucas: 42,
  luke: 42,
  lucas: 42,
  Lc: 42,
  Lk: 42,
  lc: 42,
  lk: 42,
  John: 43,
  João: 43,
  john: 43,
  joão: 43,
  Jn: 43,
  Jo: 43,
  jn: 43,
  jo: 43,
  Acts: 44,
  Atos: 44,
  acts: 44,
  atos: 44,
  At: 44,
  at: 44,
  Ac: 44,
  ac: 44,
  Romans: 45,
  Romanos: 45,
  romans: 45,
  romanos: 45,
  Rm: 45,
  rm: 45,
  Rom: 45,
  rom: 45,
  '1 Corinthians': 46,
  '1 Coríntios': 46,
  '1 corinthians': 46,
  '1 coríntios': 46,
  '1corinthians': 46,
  '1coríntios': 46,
  '1 Cor': 46,
  '1Cor': 46,
  '1cor': 46,
  '1 Co': 46,
  '1 co': 46,
  '1co': 46,
  '2 Corinthians': 47,
  '2 Coríntios': 47,
  '2 corinthians': 47,
  '2 coríntios': 47,
  '2corinthians': 47,
  '2coríntios': 47,
  '2 Cor': 47,
  '2Cor': 47,
  '2cor': 47,
  '2 Co': 47,
  '2 co': 47,
  '2co': 47,
  Galatians: 48,
  Gálatas: 48,
  galatians: 48,
  gálatas: 48,
  Gál: 48,
  gál: 48,
  Gal: 48,
  gal: 48,
  Ga: 48,
  ga: 48,
  Ephesians: 49,
  Efésios: 49,
  ephesians: 49,
  efésios: 49,
  Ef: 49,
  ef: 49,
  Ep: 49,
  ep: 49,
  Eph: 49,
  eph: 49,
  Philippians: 50,
  Filipenses: 50,
  Phil: 50,
  Colossians: 51,
  Colossenses: 51,
  colossians: 51,
  colossenses: 51,
  Col: 51,
  col: 51,
  Co: 51,
  co: 51,
  '1 Thessalonians': 52,
  '1Thess': 52,
  '1thess': 52,
  '1 Thess': 52,
  '1 thess': 52,
  '1 Tessalonicenses': 52,
  '1 thessalonians': 52,
  '1 tessalonicenses': 52,
  '1thessalonians': 52,
  '1tessalonicenses': 52,
  '1 Th': 52,
  '1 th': 52,
  '1th': 52,
  '1 The': 52,
  '1 the': 52,
  '1the': 52,
  '1 Tes': 52,
  '1Tes': 52,
  '1tes': 52,
  '1Te': 52,
  '1te': 52,
  '2 Thessalonians': 53,
  '2Thess': 53,
  '2thess': 53,
  '2 Thess': 53,
  '2 thess': 53,
  '2 Tessalonicenses': 53,
  '2 thessalonians': 53,
  '2 tessalonicenses': 53,
  '2thessalonians': 53,
  '2tessalonicenses': 53,
  '2 Th': 53,
  '2 th': 53,
  '2th': 53,
  '2 The': 53,
  '2 the': 53,
  '2the': 53,
  '2 Tes': 53,
  '2Tes': 53,
  '2tes': 53,
  '2Te': 53,
  '2te': 53,
  '1 Timothy': 54,
  '1 Timóteo': 54,
  '1 timothy': 54,
  '1 timóteo': 54,
  '1timothy': 54,
  '1timóteo': 54,
  '1 Ti': 54,
  '1 ti': 54,
  '1 Tim': 54,
  '1 tim': 54,
  '1Tim': 54,
  '1tim': 54,
  '1 Tm': 54,
  '1 tm': 54,
  '1tm': 54,
  '1TI': 54,
  '1tI': 54,
  '2 Timothy': 55,
  '2 Timóteo': 55,
  '2 timothy': 55,
  '2 timóteo': 55,
  '2timothy': 55,
  '2timóteo': 55,
  '2 Ti': 55,
  '2 ti': 55,
  '2 Tim': 55,
  '2 tim': 55,
  '2Tim': 55,
  '2tim': 55,
  '2 Tm': 55,
  '2 tm': 55,
  '2tm': 55,
  '2TI': 55,
  '2tI': 55,
  Titus: 56,
  Tito: 56,
  titus: 56,
  tito: 56,
  Tu: 56,
  tu: 56,
  To: 56,
  to: 56,
  Philemon: 57,
  Filemon: 57,
  philemon: 57,
  filemon: 57,
  Phlm: 57,
  phlm: 57,
  Hebrews: 58,
  Hebreus: 58,
  hebrews: 58,
  hebreus: 58,
  He: 58,
  he: 58,
  Heb: 58,
  heb: 58,
  James: 59,
  Tiago: 59,
  james: 59,
  tiago: 59,
  Jas: 59,
  jas: 59,
  '1 Peter': 60,
  '1Peter': 60,
  '1 Pedro': 60,
  '1Pedro': 60,
  '1 Pet': 60,
  '1 pet': 60,
  '1Pet': 60,
  '1pet': 60,
  'I Peter': 60,
  IPeter: 60,
  'I Pedro': 60,
  IPedro: 60,
  'I Pet': 60,
  'I pet': 60,
  IPet: 60,
  Ipet: 60,
  '2 Peter': 61,
  '2Peter': 61,
  '2 Pedro': 61,
  '2Pedro': 61,
  '2 Pet': 61,
  '2 pet': 61,
  '2Pet': 61,
  '2pet': 61,
  'II Peter': 61,
  IIPeter: 61,
  'II Pedro': 61,
  IIPedro: 61,
  'II Pet': 61,
  'II pet': 61,
  IIPet: 61,
  IIpet: 61,
  '1 John': 62,
  '1John': 62,
  '1 João': 62,
  'I John': 62,
  IJohn: 62,
  'I João': 62,
  '2 John': 63,
  '2John': 63,
  '2 João': 63,
  'II John': 63,
  IIJohn: 63,
  'II João': 63,
  '3 John': 64,
  '3John': 64,
  '3 João': 64,
  'III John': 64,
  IIIJohn: 64,
  'III João': 64,
  Jude: 65,
  Judas: 65,
  jude: 65,
  judas: 65,
  Jd: 65,
  jd: 65,
  Ju: 65,
  ju: 65,
  Revelation: 66,
  Apocalipse: 66,
  revelation: 66,
  apocalipse: 66,
  Re: 66,
  Rev: 66,
  rev: 66,
  re: 66,
  Ap: 66,
  Apo: 66,
  ap: 66,
  apo: 66,
};

const books = {
  0: 'Nothing Found',
  1: 'Genesis // Gênesis',
  2: 'Exodus // Êxodo',
  3: 'Leviticus // Levítico',
  4: 'Numbers // Números',
  5: 'Deuteronomy // Deuteronómio',
  6: 'Joshua // Josué',
  7: 'Judges // Juízes',
  8: 'Ruth // Rute',
  9: '1 Samuel',
  10: '2 Samuel',
  11: '1 Kings // Reis',
  12: '2 Kings // Reis',
  13: '1 Chronicles // Crônicas',
  14: '2 Chronicles // Crônicas',
  15: 'Ezra // Esdras',
  16: 'Nehemiah // Neemias',
  17: 'Esther // Ester',
  18: 'Job // Jó',
  19: 'Psalms // Salmos',
  20: 'Proverbs // Provérbios',
  21: 'Ecclesiastes // Eclesiastes',
  22: 'Song of Songs // Cânticos dos Cânticos',
  23: 'Isaiah // Isaías',
  24: 'Jeremiah // Jeremias',
  25: 'Lamentations // Lamentações',
  26: 'Ezekiel // Ezequiel',
  27: 'Daniel',
  28: 'Hosea // Oseias',
  29: 'Joel',
  30: 'Amos // Amós',
  31: 'Obadiah // Obadias',
  32: 'Jonah // Jonas',
  33: 'Micah // Miqueias',
  34: 'Nahum // Naum',
  35: 'Habakkuk // Habacuque',
  36: 'Zephaniah // Sofonias',
  37: 'Haggai // Ageu',
  38: 'Zechariah // Zacarias',
  39: 'Malachi // Malaquias',
  40: 'Matthew // Mateus',
  41: 'Mark // Marcos',
  42: 'Luke // Lucas',
  43: 'John // João',
  44: 'Acts // Atos',
  45: 'Romans // Romanos',
  46: '1 Corinthians // Coríntios',
  47: '2 Corinthians // Coríntios',
  48: 'Galatians // Gálatas',
  49: 'Ephesians // Efésios',
  50: 'Philippians // Filipenses',
  51: 'Colossians // Colossenses',
  52: '1 Thessalonians // Tessalonicenses',
  53: '2 Thessalonians // Tessalonicenses',
  54: '1 Timothy // Timóteo',
  55: '2 Timothy // Timóteo',
  56: 'Titus // Tito',
  57: 'Philemon // Filemon',
  58: 'Hebrews // Hebreus',
  59: 'James // Tiago',
  60: '1 Peter // Pedro',
  61: '2 Peter // Pedro',
  62: '1 John // João',
  63: '2 John // João',
  64: '3 John // João',
  65: 'Jude // Judas',
  66: 'Revelation // Apocalipse',
};

const refs = {
  ptbr: {
    Gênesis: 1,
    Gen: 1,
    Êxodo: 2,
    Exo: 2,
    Levítico: 3,
    Lev: 3,
    Números: 4,
    Num: 4,
    Deuteronómio: 5,
    Deu: 5,
    Josué: 6,
    Jos: 6,
    Juízes: 7,
    Jui: 7,
    Rute: 8,
    '1Samuel': 9,
    '1Sa': 9,
    '2Samuel': 10,
    '2Sa': 10,
    '1Reis': 11,
    '1Re': 11,
    '2Reis': 12,
    '2Re': 12,
    '1Crônicas': 13,
    '1Cr': 13,
    '2Crônicas': 14,
    '2Cr': 14,
    Esdras: 15,
    Esd: 15,
    Neemias: 16,
    Nee: 16,
    Ester: 17,
    Est: 17,
    Jó: 18,
    Jo: 18,
    Salmos: 19,
    Sal: 19,
    Provérbios: 20,
    Pro: 20,
    Eclesiastes: 21,
    Ecl: 21,
    Cânticos: 22,
    Can: 22,
    Isaías: 23,
    Isa: 23,
    Jeremias: 24,
    Jer: 24,
    Lamentações: 25,
    Lam: 25,
    Ezequiel: 26,
    Eze: 26,
    Daniel: 27,
    Dan: 27,
    Oseias: 28,
    Ose: 28,
    Joel: 29,
    Joe: 29,
    Amós: 30,
    Am: 30,
    Obadias: 31,
    Oba: 31,
    Jonas: 32,
    Jon: 32,
    Miqueias: 33,
    Miq: 33,
    Naum: 34,
    Nau: 34,
    Habacuque: 35,
    Hab: 35,
    Sofonias: 36,
    Sof: 36,
    Ageu: 37,
    Age: 37,
    Zacarias: 38,
    Zac: 38,
    Malaquias: 39,
    Mal: 39,
    Mateus: 40,
    Mat: 40,
    Marcos: 41,
    Mar: 41,
    Lucas: 42,
    Luc: 42,
    João: 43,
    Atos: 44,
    Ato: 44,
    Romanos: 45,
    Rom: 45,
    '1Coríntios': 46,
    ICoríntios: 46,
    '1 Coríntios': 46,
    'I Coríntios': 46,
    '1Co': 46,
    '2Coríntios': 47,
    ICoríntios: 47,
    '2 Coríntios': 47,
    'I Coríntios': 47,
    '2Co': 47,
    Gálatas: 48,
    Gal: 48,
    Efésios: 49,
    Efe: 49,
    Filipenses: 50,
    Fil: 50,
    Colossenses: 51,
    Col: 51,
    '1Tessalonicenses': 52,
    ITessalonicenses: 52,
    '1 Tessalonicenses': 52,
    'I Tessalonicenses': 52,
    '1Tes': 52,
    '2Tessalonicenses': 53,
    IITessalonicenses: 53,
    '2 Tessalonicenses': 53,
    'II Tessalonicenses': 53,
    '2Tes': 53,
    '1Timóteo': 54,
    ITimóteo: 54,
    '1 Timóteo': 54,
    'I Timóteo': 54,
    '1Tim': 54,
    '2Timóteo': 55,
    ITimóteo: 55,
    '2 Timóteo': 55,
    'I Timóteo': 55,
    '2Tim': 55,
    Tito: 56,
    Ti: 56,
    Filemon: 57,
    Fil: 57,
    Hebreus: 58,
    Heb: 58,
    Tiago: 59,
    Tia: 59,
    '1Pedro': 60,
    '1 Pedro': 60,
    '1Pe': 60,
    '2Pedro': 61,
    '2 Pedro': 61,
    '2 Pe': 61,
    '1João': 62,
    '1 João': 62,
    '1Jo': 62,
    '2João': 63,
    '2 João': 63,
    '2Jo': 63,
    '3João': 64,
    '3 João': 64,
    '3Jo': 64,
    Judas: 65,
    Jud: 65,
    Apocalipse: 66,
    Apo: 66,
  },
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
  getRandomVerse: function () {
    let book_number = getRandomInt(1, 66);
    let chapter_number = getRandomInt(0, chapters[book_number].length);
    let verses_quantity = chapters[book_number][chapter_number];
    let verse_number = getRandomInt(1, verses_quantity);
    return { bn: book_number, cn: chapter_number, vn: verse_number };
  },
  getVersesQuantity: function (book_number, chapter_number) {
    return chapters[book_number][chapter_number];
  },
  getSearchableBookNameById: function (id) {
    return refs.ptbr[id];
  },
  getBookNameById: function (id) {
    return labels[id];
  },
  getBookTitleById: function (id) {
    return books[id];
  },
  refs: refs,
};
