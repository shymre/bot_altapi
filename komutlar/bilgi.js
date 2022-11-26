const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
    if (message.channel.type !== 'dm') {
        const ozelmesajkontrol = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setDescription('�zel Mesajlar�na Bilgi Mesaj�m� Att�m! :postbox: ');
        message.channel.sendEmbed(ozelmesajkontrol)
    }
    const pingozel = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription('**03.01.2018 Tarihinde xChairs#4713 Taraf�ndan Yap�lm��t�r. Di�er B�t�n Bilgiler ��in vt!komutlar**');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakk�nda', 'bot hakk�nda', 'bothakk�nda'],
    permLevel: 0
};

exports.help = {
    name: 'bilgi',
    description: 'Bot ile ilgili bilgi verir.',
    usage: 'bilgi'
};
