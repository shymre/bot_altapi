exports.run = (client, message, args) => {
    var command = args[0];
    message.channel.sendMessage("`" + command + "` adl� komut y�kleniyor...")
        .then(m => {
            client.load(command)
                .then(() => {
                    m.edit("`" + command + "` adl� komut ba�ar�yla y�klendi.");
                })
                .catch(e => {
                    m.edit(`Komut y�klenirken bir hata olu�tu: ${command}\n\`\`\`${e.stack}\`\`\``);
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
    description: 'Yeni eklenen komutu y�kler.',
    usage: 'load <komut ad�>'
};
