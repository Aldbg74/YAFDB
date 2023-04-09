const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
  intents: [
      GatewayIntentBits.Guilds,
  ]
})

client.on ("Message"), message => {
if (message.content === "ping") {
message.reply ("pong");
}
client.login ("MTA5NDE2MjY5MzQ5MTAwNzUwOQ.GGq8TQ.j9tOKjECcl-6HZt5gbTgmOSkb32A51VBsjwDjw");
};