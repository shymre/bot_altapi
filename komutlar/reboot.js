const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
    message.channel.sendMessage('Botun yeniden ba�lat�lmas�na onay veriyorsan�z 30 saniye i�inde evet yaz�n.')
        .then(() => {
            message.channel.awaitMessages(response => response.content === "evet", {
                max: 1,
                time: 30000,
                errors: ['time'],
            })
                .then((collected) => {
                    message.channel.sendMessage(`Bot yeniden ba�lat�l�yor...`).then(message => {
                        console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden ba�lat�l�yor...`)
                        process.exit(1);
                    }).catch(console.error)
                })
                .catch(() => {
                    message.channel.sendMessage('Yeniden ba�latma i�lemi iptal edildi.');
                });
        });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'reboot',
    description: 'Botu yeniden ba�lat�r.',
    usage: 'reboot'
};