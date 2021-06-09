const Discord = require('discord.js');
const client = new Discord.Client();
client.login('token');


client.on('ready',() => {
    new Discord.Message(client,'Teste','notifications');
});


client.on('message', msg => {
    if (msg.content === '!ping'){
        msg.channel.send('@here, pong!');
    }
});

