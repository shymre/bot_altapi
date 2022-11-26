const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField(':warning: Uyar� :warning:', '`sunucubilgi` adl� komutu �zel mesajlarda kullanamazs�n.')
        return message.author.sendEmbed(ozelmesajuyari);
    }
    if (message.channel.type !== 'dm') {
        const sunucubilgi = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .addField('Sunucu Ad�:', message.guild.name)
            .addField('Sunucu ID:', message.guild.id)
            .addField('Ana kanal:', message.guild.defaultChannel)
            .addField('Sunucu B�lgesi:', message.guild.region)
            .addField('�ye say�s�:', message.guild.memberCount)
            .addField('Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
            .addField('Kanal say�s�:', message.guild.channels.size)
            .addField('Olu�turulma tarihi:', message.guild.createdAt)
        return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
    permLevel: 0
};

exports.help = {
    name: 'sunucubilgi',
    description: 'Sunucu hakk�nda bilgi verir.',
    usage: 'sunucubilgi'
};
