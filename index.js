const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();

const bch = require('./BotCommandsHelper');

const commandsManager = require('./CommandsManager');

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

  const handlerFunction = commandsManager.actions[command];

  const answer = await handlerFunction(args);

  if (!answer) return;

  return msg.reply(answer);
});

client.login(process.env.TOKEN);
