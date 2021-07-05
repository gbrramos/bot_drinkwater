const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'ODQ5NDI4ODI0MzUzMDEzNzkx.YLbCPQ.OZEvxW0nEA0ThIguyb0gBX7Qx4w';
client.login(token);


client.on('ready', () => {
    console.log('Drinkwater: Estou Online!');
    h = new Date();
    var i = 0;
    while (i <= 5) {
        hora = h.getHours();
        minuto = h.getUTCMinutes();
        if (minuto < 10) {
            minuto = '0' + minuto;
        }
        fullHour = hora + ":" + minuto;
        // console.log(fullHour);
        if (fullHour == '11:00' || fullHour == '13:30' || fullHour == '14:00' || fullHour == '14:30' || fullHour == '15:00' || fullHour == '16:00') {
            x = true;
            while(x == true){
                client.channels.cache.get(`854132041002778665`).send('Vai beber água mamaco');
                x = false;
            }
            i = i + 1;
        }
    }
});
