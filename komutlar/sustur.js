const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField(':warning: Uyarý :warning:', '`sustur` adlý komutu özel mesajlarda kullanamazsýn.')
        return message.author.sendEmbed(ozelmesajuyari);
    }
    let guild = message.guild
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = guild.channels.find('name', 'mod-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Susturulmuþ');
    if (!modlog) return message.reply('`mod-log` kanalýný bulamýyorum.').catch(console.error);
    if (!muteRole) return message.reply('`Susturulmuþ` adlý bir rol bulamýyorum.').catch(console.error);
    if (reason.length < 1) return message.reply('Susturma sebebini yazmalýsýn.').catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('Kimi susturacaðýný yazmalýsýn.').catch(console.error);
    const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setTimestamp()
        .addField('Eylem:', 'Susturma')
        .addField('Kullanýcý:', `${user.username}#${user.discriminator} (${user.id})`)
        .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
        .addField('Sebep', reason);

    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Gerekli izinlere sahip deðilim.').catch(console.error);

    if (message.guild.member(user).roles.has(muteRole.id)) {
        message.guild.member(user).removeRole(muteRole).then(() => {
            guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
        });
    } else {
        message.guild.member(user).addRole(muteRole).then(() => {
            guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
        });
    }

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'sustur',
    description: 'Ýstediðiniz kiþiyi  susturur.',
    usage: 'sustur [kullanýcý] [sebep]'
};
