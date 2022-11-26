const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
    message.channel.sendMessage('Botun yeniden baþlatýlmasýna onay veriyorsanýz 30 saniye içinde evet yazýn.')
        .then(() => {
            message.channel.awaitMessages(response => response.content === "evet", {
                max: 1,
                time: 30000,
                errors: ['time'],
            })
                .then((collected) => {
                    message.channel.sendMessage(`Bot yeniden baþlatýlýyor...`).then(message => {
                        console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden baþlatýlýyor...`)
                        process.exit(1);
                    }).catch(console.error)
                })
                .catch(() => {
                    message.channel.sendMessage('Yeniden baþlatma iþlemi iptal edildi.');
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
    description: 'Botu yeniden baþlatýr.',
    usage: 'reboot'
};