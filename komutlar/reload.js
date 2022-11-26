exports.run = (client, message, args) => {
    let command;
    if (client.commands.has(args[0])) {
        command = args[0];
    } else if (client.aliases.has(args[0])) {
        command = client.aliases.get(args[0]);
    }
    if (!command) {
        return message.channel.sendMessage("`" + args[0] + "` ad�nda bir komut yok.");
    } else {
        message.channel.sendMessage("`" + command + "` adl� komut yeniden ba�lat�l�yor...")
            .then(m => {
                client.reload(command)
                    .then(() => {
                        m.edit("`" + command + "` adl� komut ba�ar�yla yeniden ba�lat�ld�.");
                    })
                    .catch(e => {
                        m.edit(`Komut yeniden ba�lat�l�rken bir hata olu�tu: ${command}\n\`\`\`${e.stack}\`\`\``);
                    });
            });
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['r'],
    permLevel: 4
};

exports.help = {
    name: 'reload',
    description: '�stedi�iniz bir komutu yeniden ba�lat�r.',
    usage: 'reload <komut ad�>'
};
