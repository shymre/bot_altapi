const Discord = require('discord.js');
const client = new Discord.Client();
var dogNames = require('dog-names');

exports.run = (client, message) => {
    name = dogNames.allRandom()
    message.channel.send(name)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['p'],
    permLevel: 0
};

exports.help = {
    name: 'k?pekad?',
    description: 'k?pek?i g?sterir.',
    usage: 'k?pekad?'
};
