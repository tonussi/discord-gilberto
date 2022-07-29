// Discord.js bot
const Discord = require('discord.js');

const client = new Discord.Client();

const viterp = require("./BibleCommandInterpreter");
const citerp = require("./CommentaryCommandInterpreter");
const sinter = require("./BibleVerseSentiment")

const bci = new viterp.BibleCommandInterpreter();
const cci = new citerp.CommentaryCommandInterpreter();
const bvs = new sinter.BibleVerseSentiment();

const hexutil = require("./ColorHexUtil");

const bch = require("./BotCommandsHelper");

const versions = require("./BibleVersionEnum");
const cmtversions = require("./CommentaryVersionEnum");

const constants = require("./BibleConstants");

client.on('ready', () => {
    client.user.setActivity(bch.config.ACTIVITY, { type: 'WATCHING' });
});

client.on('message', msg => {
    if (!msg.content.startsWith(bch.config.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(bch.config.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');

    if (command === 'bv') {
        let versesParsed = bci.parseRef(args);
        let osis = cci.getOsis(args);
        let embed = buildVerseRichEmbed(versesParsed);
        return msg.reply(embed);
    } else if (command === 'bd') {
        let detail = bci.parseDetail(args).getEditionDescrition();
        let embed = buildDiscordRichEmbed(detail);
        return msg.reply(embed);
    } else if (command === 'bc') {
        let versesParsed = cci.parseRef(args);
        let embed = buildCommentaryRichEmbed(versesParsed);
        return msg.reply(embed);
    } else if (command === 'cd') {
        let detail = cci.parseDetail(args).getEditionDescrition();
        let embed = buildDiscordRichEmbed(detail);
        return msg.reply(embed);
    } else if (command === 'bs') {
        let parsedArgs = bci.parseWords(args);
        if (!parsedArgs) {
            return msg.reply("Não providenciou nada para procurar");
        }
        let parsedVerses = bci.searchArgsByBookNumberAndBibleBook(parsedArgs.tokens, parsedArgs.book_number, parsedArgs.bible_book);
        let embed = buildSearchRichEmbed(parsedVerses);
        return msg.reply(embed);
    } else if (command === 'q') {
        let results = bvs.perform(args);
        let bible_book = bci.getBibleById("acf");
        let parsedVerses = bci.searchArgsByBibleBook(results.tokens, bible_book);
        let embed = buildSearchRichEmbed(parsedVerses);
        return msg.reply(embed);
    } else if (command === 'hen') return msg.reply(bch.config.HELP.en);
    else if (command === 'hpt') return msg.reply(bch.config.HELP.pt);
    else if (command === 'iv') return msg.reply(bch.config.INVITE);
    else if (command === 'c') return msg.reply(bch.config.COMMANDS);
    else if (command === 'a') return msg.reply(getAllVersionsAndCmt());
    else if (command === 'refs') return msg.reply(getAllRefPtBrFormat());
    else return;
});

function getAllRefPtBrFormat() {
    let aux = "**Refs Bíblicas // Biblical Refs (PT-BR FORMAT)**\n\n";

    Object.keys(constants.refs.ptbr).forEach(key => {
        aux += `${String(key)} `;
    });

    return buildDiscordRichEmbed(aux);
}

function getAllVersionsAndCmt() {
    let aux = "**Versões Bíblicas // Biblical Verses**\n\n";

    Object.keys(versions.BibleVersionEnum).forEach(key => {
        aux += `${String(key)}\n`;
    });

    aux += "**\nComentários Bíblicos // Biblical Commentaries**\n\n";

    Object.keys(cmtversions.CommentaryVersionEnum).forEach(key => {
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
        return buildDiscordRichEmbed("Something went wrong, maybe you have to change the parameters.");
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
            "Something went wrong, maybe you have to change the parameters.\n" +
            "Algo de errado ocorreu, talvéz tente melhorar os argumentos ou muda-los."
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
            "Something went wrong, maybe you have to change the parameters.\n" +
            "Algo de errado ocorreu, talvéz tente melhorar os argumentos ou muda-los."
        );
    }
}

function buildDiscordRichEmbed(text) {
    let embed = new Discord.MessageEmbed();
    embed.setColor(hexutil.generateHexColor());
    if (text.length < 2048) {
        embed.setDescription(text);
    } else {
        embed.setDescription("Try reducing the request, because you exceed the length limit.");
    }
    return embed;
}

client.login(process.env.TOKEN);
