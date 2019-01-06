const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("531140699928788997")
setInterval(function() {
channel.send(`Cat Cat cat Cat Cat Cat Cat Cat cat Cat Cat Cat Cat Cat Cat Cat cat Cat Cat`);
}, 30)
})

client.login(process.env.BOT_TOKEN);