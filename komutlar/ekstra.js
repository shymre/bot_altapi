const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
    const duration = moment.duration(client.uptime).format(" D [g�n], H [saat], m [dakika], s [saniye]");
    msg.channel.sendCode("asciidoc", `? Ki�isel komutlar | Not:Komutlar vt! ile baslar	
� mc�d�l  :: Istediniz Yaziyi Minecraft Basarisina Dondurur.	
� hastebin :: Yazdin Yaziyi hastebin cevirir.		
� ailemiz  :: Bot Kac Sunucuda Oldunu Gosterir.		
� random�ifre :: Kafadan Sifre Verir		
� komutlar :: T�m komutlar� listeler.
� ping     :: Botun pingini g�sterir.
� duyuru   :: Sunucunuzda duyuru yapman�z� sa�lar.
� avatar   :: Etiketlediginiz Kisinin Avatarini Gosterir
� istatistik :: Bot Istatistik Gosterir.
� random�ifre :: Rondom Sifre Verir.
� seviye-sistemi :: Seviyeni Gosterir.
    Sayfa 1 / 3 | Yap�mc�m: ! ????????????xChairs#4713`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'ekstra',
    description: 'T�m komutlar� listeler. �sterseniz bir komut hakk�nda yard�m eder..',
    usage: 'ekstra'
};