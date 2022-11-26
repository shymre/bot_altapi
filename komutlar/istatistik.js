const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    msg.channel.sendCode("asciidoc", `= ÝSTATÝSTÝKLER =
• Bellek kullanýmý :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Çalýþma süresi   :: ${duration}
• Kullanýcýlar     :: ${3564}
• Sunucular        :: ${102}
• Kanallar         :: ${5897}
• Discord.JS sürüm :: v${Discord.version}
• Ping             :: ${client.ping}`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanýmlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
    permLevel: 0
};

exports.help = {
    name: 'istatistik',
    description: 'c',
    usage: 'istatistik'
};