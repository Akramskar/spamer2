const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("539502830118109185")
setInterval(function() {
channel.send(`spin`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
