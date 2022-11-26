const Discord = require('discord.js');
exports.run = (client, msg, args) => {
    if (!msg.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(msg.author.username, msg.author.avatarURL)
            .addField(':warning: Uyar� :warning:', '`kick` adl� komutu �zel mesajlarda kullanamazs�n.')
        return msg.author.sendEmbed(ozelmesajuyari);
    }
    let guild = msg.guild
    let reason = args.slice(1).join(' ');
    let user = msg.mentions.users.first();
    let modlog = guild.channels.find('name', 'mod-log');
    if (!modlog) return msg.reply('`mod-log` kanal�n� bulam�yorum.');
    if (reason.length < 1) return msg.reply('Sunucudan atma sebebini yazmal�s�n.');
    if (msg.mentions.users.size < 1) return msg.reply('Kimi sunucudan ataca��n� yazmal�s�n.').catch(console.error);

    if (!msg.guild.member(user).kickable) return msg.reply('Yetkilileri sunucudan atamam.');
    msg.guild.member(user).kick();

    const embed = new Discord.RichEmbed()
        .setColor(0xD97634)
        .setTimestamp()
        .setAuthor(msg.author.username, msg.author.avatarURL)
        .addField('Eylem:', 'Sunucudan atma')
        .addField('Kullan�c�:', `${user.username}#${user.discriminator} (${user.id})`)
        .addField('Yetkili:', `${msg.author.username}#${msg.author.discriminator}`)
        .addField('Sebep', reason);
    return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['at'],
    permLevel: 2
};

exports.help = {
    name: 'kick',
    description: '�stedi�iniz ki�iyi sunucudan atar.',
    usage: 'kick [kullan�c�] [sebep]'
};
