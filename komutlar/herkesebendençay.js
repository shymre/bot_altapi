const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField('**E�lence Komutlar� �zel Mesajlarda Kullan�lamaz!**')
        return message.author.sendEmbed(ozelmesajuyari);
    }
    if (message.channel.type !== 'dm') {
        const sunucubilgi = new Discord.RichEmbed()
            .setAuthor('Koca Y�rekli ' + message.author.username + 'Herkese �ay Ald�!')
            .setColor(3447003)
            .setTimestamp()
            .setDescription('')
            .setImage(`https://images-ext-2.discordapp.net/external/Cch33UkRxcy5CstqP5Cvt6q52z6QPsT9tNNHeWXPmUM/http/i.hizliresim.com/PMQ7od.gif`)
        return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'herkesebenden�ay',
    description: 'Herkese �ay Verir',
    usage: 'herkesebenden�ay'
};
