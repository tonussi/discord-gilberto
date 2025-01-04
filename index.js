// Discord.js bot
const Discord = require('discord.js');
const { GoogleGenerativeAI } = require('@google/generative-ai');

require('dotenv').config();

const client = new Discord.Client();

const viterp = require('./BibleCommandInterpreter');
const citerp = require('./CommentaryCommandInterpreter');
const sinter = require('./BibleVerseSentiment');

const bci = new viterp.BibleCommandInterpreter();
const cci = new citerp.CommentaryCommandInterpreter();
const bvs = new sinter.BibleVerseSentiment();

const hexutil = require('./ColorHexUtil');

const bch = require('./BotCommandsHelper');

const versions = require('./BibleVersionEnum');
const cmtversions = require('./CommentaryVersionEnum');

const constants = require('./BibleConstants');

const RANDOM_ACTIVITY =
  bch.config.ACTIVITIES[
    Math.floor(Math.random() * bch.config.ACTIVITIES.length)
  ];

client.on('ready', () => {
  client.user.setActivity(RANDOM_ACTIVITY, { type: 'CUSTOM' });
});

client.on('message', async (msg) => {
  if (!msg.content.startsWith(bch.config.PREFIX) || !msg.guild) return;
  const command = msg.content.split(' ')[0].substr(bch.config.PREFIX.length);
  const args = msg.content.split(' ').slice(1).join(' ');
  let analysis,
    versesParsed,
    detail,
    osis,
    embed,
    parsedArgs,
    results,
    versesContext,
    bibleBook;

  if (command === 'explain') {
    versesParsed = bci.parseRef(args);
    osis = cci.getOsis(args);
    versesContext = prepareVersesToContext(versesParsed);
    analysis = await explainContext(`${osis} ${versesContext}`);
    embed = buildDiscordRichEmbed(analysis);
  } else if (command === 'bv') {
    versesParsed = bci.parseRef(args);
    osis = cci.getOsis(args);
    embed = buildVerseRichEmbed(versesParsed);
    return msg.reply(embed);
  } else if (command === 'bd') {
    detail = bci.parseDetail(args).getEditionDescrition();
    embed = buildDiscordRichEmbed(detail);
    return msg.reply(embed);
  } else if (command === 'bc') {
    versesParsed = cci.parseRef(args);
    embed = buildCommentaryRichEmbed(versesParsed);
    return msg.reply(embed);
  } else if (command === 'cd') {
    detail = cci.parseDetail(args).getEditionDescrition();
    embed = buildDiscordRichEmbed(detail);
    return msg.reply(embed);
  } else if (command === 'bs') {
    parsedArgs = bci.parseWords(args);
    if (!parsedArgs) {
      return msg.reply('Não providenciou nada para procurar');
    }
    parsedVerses = bci.searchArgsByBookNumberAndBibleBook(
      parsedArgs.tokens,
      parsedArgs.book_number,
      parsedArgs.bible_book
    );
    embed = buildSearchRichEmbed(parsedVerses);
    return msg.reply(embed);
  } else if (command === 'q') {
    results = bvs.perform(args);
    bibleBook = bci.getBibleById('acf');
    parsedVerses = bci.searchArgsByBibleBook(results.tokens, bibleBook);
    embed = buildSearchRichEmbed(parsedVerses);
    return msg.reply(embed);
  } else if (command === 'hen') return msg.reply(bch.config.HELP.en);
  else if (command === 'hpt') return msg.reply(bch.config.HELP.pt);
  else if (command === 'iv') return msg.reply(bch.config.INVITE);
  else if (command === 'c') return msg.reply(bch.config.COMMANDS);
  else if (command === 'a') return msg.reply(getAllVersionsAndCmt());
  else if (command === 'refs') return msg.reply(getAllRefPtBrFormat());
  else return;
});

function prepareVersesToContext(versesParsed) {
  return versesParsed.map((v) => `${v.scripture}\n`);
}

async function explainContext(context) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI);
  const model = genAI.getGenerativeModel({
    systemInstruction: 'Você é especialista em Bíblia, seu nome é Gilberto.',
    model: 'gemini-1.5-flash',
  });

  const prompt = `Por favor, explique esses versos Bíblicos aqui \
    here: ${context}. Mantenha simples, explicando em um máximo de 1000 caracteres.`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

function getAllRefPtBrFormat() {
  let aux = '**Refs Bíblicas // Biblical Refs (PT-BR FORMAT)**\n\n';

  Object.keys(constants.refs.ptbr).forEach((key) => {
    aux += `${String(key)} `;
  });

  return buildDiscordRichEmbed(aux);
}

function getAllVersionsAndCmt() {
  let aux = '**Versões Bíblicas // Biblical Verses**\n\n';

  Object.keys(versions.BibleVersionEnum).forEach((key) => {
    aux += `${String(key)}\n`;
  });

  aux += '**\nComentários Bíblicos // Biblical Commentaries**\n\n';

  Object.keys(cmtversions.CommentaryVersionEnum).forEach((key) => {
    aux += `${String(key)}\n`;
  });

  return buildDiscordRichEmbed(aux);
}

function buildSearchRichEmbed(versesParsed) {
  let aux = '';
  if (versesParsed) {
    for (let index = 0; index < versesParsed.length; index++) {
      const element = versesParsed[index];
      aux += `\n\n${element.getVerseRef()}\n${element.getScripture()}`;
      if (index === 7) {
        break;
      }
    }
    return buildDiscordRichEmbed(aux);
  } else {
    return buildDiscordRichEmbed(
      'Something went wrong, maybe you have to change the parameters.'
    );
  }
}

function buildCommentaryRichEmbed(commentariesParsed) {
  let aux = '';
  if (commentariesParsed) {
    for (let index = 0; index < commentariesParsed.length; index++) {
      const element = commentariesParsed[index];
      aux += `\n\n${element.getVerseRef()}\n${element.getData()}`;
      if (index === 7) {
        break;
      }
    }
    return buildDiscordRichEmbed(aux);
  } else {
    return buildDiscordRichEmbed(
      'Something went wrong, maybe you have to change the parameters.\n' +
        'Algo de errado ocorreu, talvéz tente melhorar os argumentos ou muda-los.'
    );
  }
}

function buildVerseRichEmbed(versesParsed) {
  let aux = '';
  if (versesParsed) {
    for (let index = 0; index < versesParsed.length; index++) {
      const element = versesParsed[index];
      aux += `\n\n${element.getVerseRef()}\n${element.getScripture()}`;
      if (index === 7) {
        break;
      }
    }
    return buildDiscordRichEmbed(aux);
  } else {
    return buildDiscordRichEmbed(
      'Something went wrong, maybe you have to change the parameters.\n' +
        'Algo de errado ocorreu, talvéz tente melhorar os argumentos ou muda-los.'
    );
  }
}

function buildDiscordRichEmbed(text) {
  let embed = new Discord.MessageEmbed();
  embed.setColor(hexutil.generateHexColor());
  if (text.length < 2048) {
    embed.setDescription(text);
  } else {
    embed.setDescription(
      'Try reducing the request, because you exceed the length limit.'
    );
  }
  return embed;
}

client.login(process.env.TOKEN);
