const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'**Çıkan Sayı: 1**', '**Çıkan Sayı: 2**', '**Çıkan Sayı: 3**', '**Çıkan Sayı: 4**', '**Çıkan Sayı: 5**', '**Çıkan Sayı: 6**', '**Çıkan Sayı: 7**', '**Çıkan Sayı: 8**', '**Çıkan Sayı: 9**', '**Çıkan Sayı: 10**', 
];
var sayiver = Math.floor(Math.random()*Random.length);
const sayi= new Discord.RichEmbed()
.setDescription(`${Random[sayiver]}`)
.setColor(0xe2ff00)
.setTimestamp()
message.channel.send(sayi)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'sayıver',
description: 'Bot size 1-100 Arası Rastgele Bir Sayı Verir.',
usage: 'sayıver'
};
