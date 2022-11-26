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
        message.channel.sendMessage("`" + command + "` adl� komut devre d��� b�rak�l�yor...")
            .then(m => {
                client.unload(command)
                    .then(() => {
                        m.edit("`" + command + "` adl� komut ba�ar�yla devre d��� b�rak�ld�.");
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
    aliases: ['u'],
    permLevel: 4
};

exports.help = {
    name: 'unload',
    description: '�stedi�iniz bir komutu devre d��� b�rak�r.',
    usage: 'unload <komut ad�>'
};
