const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField(':warning: Uyarý :warning:', '`ban` adlý komutu özel mesajlarda kullanamazsýn.')
        return message.author.sendEmbed(ozelmesajuyari);
    }
    let guild = message.guild
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = guild.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('`mod-log` kanalýný bulamýyorum.');
    if (reason.length < 1) return message.reply('Ban sebebini yazmalýsýn.');
    if (message.mentions.users.size < 1) return message.reply('Kimi banlayacaðýný yazmalýsýn.').catch(console.error);

    if (!message.guild.member(user).bannable) return message.reply('Yetkilileri banlayamam.');
    message.guild.ban(user, 2);

    const embed = new Discord.RichEmbed()
        .setColor(0xD97634)
        .setTimestamp()
        .addField('Eylem:', 'Ban')
        .addField('Kullanýcý:', `${user.username}#${user.discriminator} (${user.id})`)
        .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
        .addField('Sebep', reason);
    return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'ban',
    description: 'Ýstediðiniz kiþiyi banlar.',
    usage: 'ban [kullanýcý] [sebep]'
};
