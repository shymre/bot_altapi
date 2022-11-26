const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let guild = message.guild
    let duyurular = guild.channels.find('name', 'duyurular');
    if (!duyurular) return message.reply('`duyurular` kanal�n� bulam�yorum.');
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Bir �ey yazmad�n�z.');
    message.delete();
    const embed = new Discord.RichEmbed()
        .setColor(0xD97634)
        .setDescription(`:anchor: **T�m Herkese Duyurulur ;**\n${mesaj}`)
    return guild.channels.get(duyurular.id).sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['duyuru', 'duyuruyap'],
    permLevel: 0
};

exports.help = {
    name: 'duyuruyap',
    description: 'Sunucuda Duyuru yapman�z� sa�lar.',
    usage: 'duyuruyap [yaz�]'
};