const viterp = require('./BibleCommandInterpreter');
const citerp = require('./CommentaryCommandInterpreter');
const sinter = require('./BibleVerseSentiment');
const {
  buildSearchRichEmbed,
  prepareVersesToContext,
  buildDiscordRichEmbed,
  buildVerseRichEmbed,
  getAllVersionsAndCmt,
  getAllRefPtBrFormat,
  buildCommentaryRichEmbed,
} = require('./Lib');
const { explainContext } = require('./GoogleGeminiApi');

const bch = require('./BotCommandsHelper');
const bci = new viterp.BibleCommandInterpreter();
const cci = new citerp.CommentaryCommandInterpreter();
const bvs = new sinter.BibleVerseSentiment();

const handleExplain = async (args) => {
  const versesParsed = bci.parseRef(args);
  const osis = cci.getOsis(args);
  const versesContext = prepareVersesToContext(versesParsed);
  const analysis = await explainContext(`${osis} ${versesContext}`);
  const embed = buildDiscordRichEmbed(analysis);
  return embed;
};

const handleBv = (args) => {
  const versesParsed = bci.parseRef(args);
  const osis = cci.getOsis(args); // NOSONAR
  const embed = buildVerseRichEmbed(versesParsed);
  return embed;
};

const handleBd = (args) => {
  const detail = bci.parseDetail(args).getEditionDescrition();
  const embed = buildDiscordRichEmbed(detail);
  return embed;
};

const handleBc = (args) => {
  const versesParsed = cci.parseRef(args);
  const embed = buildCommentaryRichEmbed(versesParsed);
  return embed;
};

const handleCd = () => {
  const detail = cci.parseDetail(args).getEditionDescrition();
  const embed = buildDiscordRichEmbed(detail);
  return embed;
};

const handleBs = () => {
  const parsedArgs = bci.parseWords(args);
  if (!parsedArgs) {
    return msg.reply('Não providenciou nada para procurar');
  }
  const parsedVerses = bci.searchArgsByBookNumberAndBibleBook(
    parsedArgs.tokens,
    parsedArgs.book_number,
    parsedArgs.bible_book
  );
  const embed = buildSearchRichEmbed(parsedVerses);
  return embed;
};

const handleQ = () => {
  const results = bvs.perform(args);
  const bibleBook = bci.getBibleById('acf');
  const parsedVerses = bci.searchArgsByBibleBook(results.tokens, bibleBook);
  const embed = buildSearchRichEmbed(parsedVerses);
  return embed;
};

const handleHen = () => {
  return bch.config.HELP.en;
};

const handleHpt = () => {
  return bch.config.HELP.pt;
};

const handleIv = () => {
  return bch.config.INVITE;
};

const handleC = () => {
  return bch.config.COMMANDS;
};

const handleA = () => {
  return getAllVersionsAndCmt();
};

const handleRefs = () => {
  return getAllRefPtBrFormat();
};

const actions = {
  explain: handleExplain,
  bv: handleBv,
  bd: handleBd,
  bc: handleBc,
  cd: handleCd,
  bs: handleBs,
  q: handleQ,
  hen: handleHen,
  hpt: handleHpt,
  iv: handleIv,
  c: handleC,
  a: handleA,
  refs: handleRefs,
};

module.exports.actions = actions;
