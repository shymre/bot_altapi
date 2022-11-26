const Discord = require('discord.js');
exports.run = function (client, message, args) {
    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xD97634)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField(':warning: Uyarý :warning:', '`temizle` adlý komutu özel mesajlarda kullanamazsýn.')
        return message.author.sendEmbed(ozelmesajuyari);
    }
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
        const botunmesajyonet = new Discord.RichEmbed()
            .setColor(0xD97634)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField(':warning: Uyarý :warning:', 'Mesajlarý silebilmem için `Mesajlarý Yönet` yetkisine sahip olmalýyým.')
        return message.author.sendEmbed(botunmesajyonet);
    }
    let messagecount = parseInt(args.join(' '));
    message.channel.fetchMessages({
        limit: messagecount
    }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
        .setColor(0xD97634)
        .setTimestamp()
        .addField('Eylem:', 'Sohbet silme')
        .addField('Yetkili:', message.author.username)
        .addField('Sonuç:', `Baþarýlý`)
    return message.channel.sendEmbed(sohbetsilindi);
    console.log("Sohbet " + message.member + " tarafýndan silindi!");
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'temizle',
    description: 'Belirlenen miktar mesajý siler.',
    usage: 'temizle <temizlenecek mesaj sayýsý>'
};
