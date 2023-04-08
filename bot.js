const Discord = require('discord.js');
const client = new Discord.Client();
intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
  ]

const prefix = '!';

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'hello') {
    message.reply('Bonjour mon ami, comment vas-tu aujourd\'hui ?');
  }
});

client.login('MTA5NDE2MjY5MzQ5MTAwNzUwOQ.G8TmNs.mpkacSeUc4DdJos24DbMGL7xStQEONau0pwmok');