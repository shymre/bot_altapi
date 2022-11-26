const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
    message.channel.send({
        embed: {
            author: {
                name: "Genel S�r�m : 1.7 - Yap�lan de�i�iklikler",
                icon_url: "https://i.hizliresim.com/GyPnL6.png"
            },
            color: 0xD97634,
            description: "**- Sistem yenilendi **"
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
    name: 'de�i�iklikler',
    description: 'De�i�iklikleri g�sterir.',
    usage: 'de�i�iklikler'
};
