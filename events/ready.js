const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
    console.log('>> Oynuyor k�sm� ba�ar�yla g�ncellendi. <<');
    console.log(`${prefix}yard�m + ${client.guilds.size} sunucu + ${client.users.size} kullan�c�`);
    console.log('>> Bot Haz�r Giri� Yap�ld�! <<');

    var Games = [

        " KAYA 1",




    ];

    setInterval(function () {

        var random = Math.floor(Math.random() * (Games.length - 0 + 1) + 0);

        client.user.setGame(Games[random], `https://www.twitch.tv/troyunculuk`)
    }, 2 * 2500);

};