const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyar� :warning:', '`uyar` adl� komutu �zel mesajlarda kullanamazs�n.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'logs');
  if (!modlog) return message.reply('`logs` kanal�n� bulam�yorum.');
  if (reason.length < 1) return message.reply('Uyar� sebebini yazmal�s�n.');
  if (message.mentions.users.size < 1) return message.reply('Kimi uyaraca��n� yazmal�s�n.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .addField('Eylem:', 'Uyar� verme')
  .addField('Kullan�c�:', `${user.username}#${user.discriminator}`)
  .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'uyar',
  description: '�stedi�iniz ki�iyi uyar�r.',
  usage: 'uyar [kullan�c�] [sebep]'
};
