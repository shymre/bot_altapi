exports.run = (client, message, args) => {
    let command;
    if (client.commands.has(args[0])) {
        command = args[0];
    } else if (client.aliases.has(args[0])) {
        command = client.aliases.get(args[0]);
    }
    if (!command) {
        return message.channel.sendMessage("`" + args[0] + "` adýnda bir komut yok.");
    } else {
        message.channel.sendMessage("`" + command + "` adlý komut devre dýþý býrakýlýyor...")
            .then(m => {
                client.unload(command)
                    .then(() => {
                        m.edit("`" + command + "` adlý komut baþarýyla devre dýþý býrakýldý.");
                    })
                    .catch(e => {
                        m.edit(`Komut yeniden baþlatýlýrken bir hata oluþtu: ${command}\n\`\`\`${e.stack}\`\`\``);
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
    description: 'Ýstediðiniz bir komutu devre dýþý býrakýr.',
    usage: 'unload <komut adý>'
};
