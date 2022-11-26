const Discord = require('discord.js');
exports.run = function (client, message, args) {
    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xD97634)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField(':warning: Uyar� :warning:', '`temizle` adl� komutu �zel mesajlarda kullanamazs�n.')
        return message.author.sendEmbed(ozelmesajuyari);
    }
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
        const botunmesajyonet = new Discord.RichEmbed()
            .setColor(0xD97634)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField(':warning: Uyar� :warning:', 'Mesajlar� silebilmem i�in `Mesajlar� Y�net` yetkisine sahip olmal�y�m.')
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
        .addField('Sonu�:', `Ba�ar�l�`)
    return message.channel.sendEmbed(sohbetsilindi);
    console.log("Sohbet " + message.member + " taraf�ndan silindi!");
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'temizle',
    description: 'Belirlenen miktar mesaj� siler.',
    usage: 'temizle <temizlenecek mesaj say�s�>'
};
