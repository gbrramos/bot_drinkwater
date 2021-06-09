const Discord = require('discord.js');
const client = new Discord.Client();
client.login('ODQ5NDI4ODI0MzUzMDEzNzkx.YLbCPQ.i3xOC3aPiMJBCZB_9P8KhR9ZPE8');


client.on('ready',() => {
    new Discord.Message(client,'Teste','notifications');
});


client.on('message', msg => {
    if (msg.content === '!ping'){
        msg.channel.send('@here, pong!');
    }
});

