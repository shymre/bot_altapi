const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut y�klenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Y�klenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
        msg.reply('**Aleyk�m selam**');
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'aq') {
        msg.reply('**Argo Kelime Kullanma**');
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sik') {
        msg.reply('**Argo Kelime Kullanma**');
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sikerim') {
        msg.reply('**Argo Kelime Kullanma**');
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'amk') {
        msg.reply('**Argo Kelime Kullanma**');
    }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'siktirgit') {
        msg.reply('**Argo Kelime Kullanma**');
    }
    if (msg.content === 'selam�n aleyk�m') {
        msg.reply('ve aleyk�m selam');
    }

    if (msg.content === 'bye bye') {
        msg.reply('su gibi git su gibi gel');
    }

    if (msg.content === 'g�nayd�n') {
        msg.reply('sana da g�nayd�n');
    }

    if (msg.content === 'herkese g�nayd�n') {
        msg.reply('yepyeni bir g�ne merhaba :)');
    }

    if (msg.content === 'iyi geceler') {
        msg.reply('sana da iyi geceler');
    }

    if (msg.content === 'sa') {
        msg.reply('**Sunucuda Argo Kelime Kullanma**');
    }

    if (msg.content === 'iyi ak�amlar') {
        msg.reply('sana da iyi ak�amlar');
    }

    if (msg.content === 'selam�n aleyk�m') {
        msg.reply('ve aleyk�m selam');
    }

    if (msg.content === 'g�le g�le') {
        msg.reply('sana da g�le g�le');
    }

});

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
