const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
  sb = message.content.substring(5)
         message.channel.send("**Kedilerimi ar�yorum bekle ...**").then((msg) =>
				gis('cat').then(function logResults(results) {
					results = results.slice(0, 20)
					img = results[Math.floor(Math.random() * results.length)]
					if (img === undefined) {
						msg.edit("```Vov ben bir �eyler bulamad�m !```")
						return
					}
					msg.edit(img)
				}).catch(function(err) {
					console.log(err);
					msg.edit("```Yine bulamad�m !```")
				}));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'kedi',
  description: 'kedileri g�sterir.',
  usage: 'kedi'
};
