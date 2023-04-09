const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
  intents: [
      GatewayIntentBits.Guilds,
  ]
})
var bot = new Discord.Client ();

client.on ("Message"), message => {
if (message.content === "ping") {
message.reply ("pong");
}
client.login ("FuckingToken");
};