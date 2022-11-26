exports.run = (client, message, args) => {
    var command = args[0];
    message.channel.sendMessage("`" + command + "` adlý komut yükleniyor...")
        .then(m => {
            client.load(command)
                .then(() => {
                    m.edit("`" + command + "` adlý komut baþarýyla yüklendi.");
                })
                .catch(e => {
                    m.edit(`Komut yüklenirken bir hata oluþtu: ${command}\n\`\`\`${e.stack}\`\`\``);
                });
        });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['l'],
    permLevel: 4
};

exports.help = {
    name: 'load',
    description: 'Yeni eklenen komutu yükler.',
    usage: 'load <komut adý>'
};
