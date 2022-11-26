const Discord = require("discord.js")
exports.run = (bot, message) => {
    const guildArray = bot.guilds.array()
    while (guildArray.length) {
        const embed = new Discord.RichEmbed();
        const guilds = guildArray.splice(0, 25);
        for (const guild of guilds) {
            embed.addField(`**${guild.name}** - �YE SAYISI : **${guild.memberCount}**`, guild.id);
            embed.setColor('#D97634')
            embed.setTitle('Ailemiz')
            embed.setDescription(`B�y�k bir ailedeyiz !. Ailemde **${bot.guilds.size}** kadar sunucu var !`)
        }
        message.channel.send({ embed: embed });
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['s', 'konu�', 'sohbet', 'ask'],
    permLevel: 0
};

exports.help = {
    name: "ailemiz",
    description: "Shows all the servers the bot is in.",
    usage: "ailemiz"
};