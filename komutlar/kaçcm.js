const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
    message.channel.send({
        embed: {
            color: 0xD97634,
            description: "**Ulan ne sap�k adams�n bir de iman edip namaz k�lacaks�n �lkemizin haline bak ! **"
        }
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['p'],
    permLevel: 0
};

exports.help = {
    name: 'ka�cm',
    description: 'kedileri g�sterir.',
    usage: 'ka�cm'
};
