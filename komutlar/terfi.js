const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let guild = message.guild
    let terfiler = guild.channels.find('name', 'terfiler');
    if (!terfiler) return message.reply('`terfiler` kanalýný bulamýyorum.');
    let user = message.mentions.users.first();
    if (reason.length < 1) return message.reply('Terfi sebebini yazmalýsýn.');
    if (message.mentions.users.size < 1) return message.reply('Kimi terfi etceðini yazmalýsýn.').catch(console.error);
    const embed = new Discord.RichEmbed()
        .setColor(0xD97634)
        .setThumbnail("https://i.hizliresim.com/mJ20o2.jpg")
        .setTimestamp()
        .addField('Eylem:', 'Terfi Ettirildi')
        .addField('Kullanýcý:', `${user.username}#${user.discriminator} (${user.id})`)
        .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
        .addField('Sebep', reason);

    return guild.channels.get(terfiler.id).sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say', 'söyle'],
    permLevel: 2
};

exports.help = {
    name: 'terfi',
    description: 'Kullanýcýyý terfi ettirir.',
    usage: 'terfi [kullanýcý]'
};