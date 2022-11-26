const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarý :warning:', '`uyar` adlý komutu özel mesajlarda kullanamazsýn.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'logs');
  if (!modlog) return message.reply('`logs` kanalýný bulamýyorum.');
  if (reason.length < 1) return message.reply('Uyarý sebebini yazmalýsýn.');
  if (message.mentions.users.size < 1) return message.reply('Kimi uyaracaðýný yazmalýsýn.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .addField('Eylem:', 'Uyarý verme')
  .addField('Kullanýcý:', `${user.username}#${user.discriminator}`)
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
  description: 'Ýstediðiniz kiþiyi uyarýr.',
  usage: 'uyar [kullanýcý] [sebep]'
};
