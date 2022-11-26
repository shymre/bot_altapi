const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let guild = message.guild
    let yetki = guild.channels.find('name', 'yetki');
    if (!yetki) return message.reply('`yetki` kanal�n� bulam�yorum.');
    let user = message.mentions.users.first();
    if (reason.length < 1) return message.reply('Yetki sebebini yazmal�s�n.');
    if (message.mentions.users.size < 1) return message.reply('Kimi yetki etce�ini yazmal�s�n.').catch(console.error);
    const embed = new Discord.RichEmbed()
        .setColor(0xD97634)
        .setThumbnail("https://i.hizliresim.com/mJ20o2.jpg")
        .setTimestamp()
        .addField('Eylesm:', 'Terfi Ettirildi')
        .addField('Kullan�c�:', `${user.username}#${user.discriminator} (${user.id})`)
        .addField('Yes:', `${message.author.username}#${message.author.discriminator}`)
        .addField('Sebeps', reason);

    return guild.channels.get(terfiler.id).sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say', 's�yle'],
    permLevel: 2
};

exports.help = {
    name: 'yetki',
    description: 'Kullan�c�y� terfi ettirir.',
    usage: 'yetki [kullan�c�]'
};