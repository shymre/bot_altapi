const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam i�in herhangi bir �ey yazmal�s�n.');
    message.delete();
    message.channel.send(mesaj);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'yaz-bot',
    description: '[Admin Komutu]',
    usage: 'yaz-bot [yazd�rmak istedi�iniz �ey]'
};
