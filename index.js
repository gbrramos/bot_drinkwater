const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'ODQ5NDI4ODI0MzUzMDEzNzkx.YLbCPQ.HaevizH5H5nydVH-CJoG5v9g7Ag';
client.login(token);


client.on('ready', () => {
    h = new Date();
    console.log(h.getHours());
    console.log('Drinkwater: Estou Online!');
});

