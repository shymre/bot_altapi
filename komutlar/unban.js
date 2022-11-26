const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField(':warning: Uyar� :warning:', '`unban` adl� komutu �zel mesajlarda kullanamazs�n.')
        return message.author.sendEmbed(ozelmesajuyari);
    }
    let guild = message.guild
    let reason = args.slice(1).join(' ');
    client.unbanReason = reason;
    client.unbanAuth = message.author;
    let user = args[0];
    let modlog = guild.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('`mod-log` kanal�n� bulam�yorum.');
    if (reason.length < 1) return message.reply('Ban kald�rma sebebini yazmal�s�n.');
    if (!user) return message.reply('Ban� kald�r�lacak ki�inin ID numaras�n� yazmal�s�n.').catch(console.error);
    message.guild.unban(user);

    const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .addField('Eylem:', 'Ban kald�rma')
        .addField('Kullan�c�:', `${user.username}#${user.discriminator} (${user.id})`)
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
    name: 'unban',
    description: '�stedi�iniz ki�inin ban�n� kald�r�r.',
    usage: 'unban [kullan�c�] [sebep]'
};
