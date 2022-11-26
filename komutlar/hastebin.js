const hastebin = require('hastebin-gen');

exports.run = (client, msg, args) => {
	    let haste = args.slice(0).join(" ")
        let type = args.slice(1).join(" ")
        if (!args[0]) { return msg.channel.send(":x: Yav ne kadar �k�zs�n salak ben bo� dosyam� g�ndercem bak sana son kez diyorum yan�na kodunu yaz bir �eyler yaz i�te!") }
        hastebin(haste, type).then(r => {
            msg.channel.send(":white_check_mark: Tamamd�r ben halletim buyur linkin : " + r);
        }).catch(console.error);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'hastebin',
  description: 'Hastebin �evirir.',
  usage: 'hastebin [komut]'
};
