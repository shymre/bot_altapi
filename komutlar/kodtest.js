const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            color: 0xD97634,
            description: "Fixlenmek üzere fýrýna yollandý , token çalým ihtimaline karþý bir süreliðine devre dýþý."
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
    description: 'Kod denemek için kullanýlýr.',
    usage: 'kodtest [kod]'
};
