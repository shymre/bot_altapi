const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            color: 0xD97634,
            description: "Fixlenmek �zere f�r�na yolland� , token �al�m ihtimaline kar�� bir s�reli�ine devre d���."
        }
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'kodtest',
    description: 'Kod denemek i�in kullan�l�r.',
    usage: 'kodtest [kod]'
};
