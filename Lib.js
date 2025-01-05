const hexutil = require('./ColorHexUtil');

const versions = require('./BibleVersionEnum');
const cmtversions = require('./CommentaryVersionEnum');

const constants = require('./BibleConstants');

const Discord = require('discord.js');

function prepareVersesToContext(versesParsed) {
  return versesParsed.map((v) => `${v.scripture}\n`);
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
  if (!text) return;
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

module.exports = {
  prepareVersesToContext,
  getAllRefPtBrFormat,
  getAllVersionsAndCmt,
  buildSearchRichEmbed,
  buildCommentaryRichEmbed,
  buildVerseRichEmbed,
  buildDiscordRichEmbed,
};
