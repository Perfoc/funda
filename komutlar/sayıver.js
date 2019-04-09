const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'**Çıkan Sayı: 1**', '**Çıkan Sayı: 2**', '**Çıkan Sayı: 3**', '**Çıkan Sayı: 4**', '**Çıkan Sayı: 5**', '**Çıkan Sayı: 6**', '**Çıkan Sayı: 7**', '**Çıkan Sayı: 8**', '**Çıkan Sayı: 9**', '**Çıkan Sayı: 10**',
'**Çıkan Sayı: 11**', '**Çıkan Sayı: 12**', '**Çıkan Sayı: 13**', '**Çıkan Sayı: 14**', '**Çıkan Sayı: 15**', '**Çıkan Sayı: 16**', '**Çıkan Sayı: 17**', '**Çıkan Sayı: 18**', '**Çıkan Sayı: 19**', '**Çıkan Sayı: 20**', 
'**Çıkan Sayı: 21**', '**Çıkan Sayı: 22**', '**Çıkan Sayı: 23**', '**Çıkan Sayı: 24**', '**Çıkan Sayı: 25**', '**Çıkan Sayı: 26**', '**Çıkan Sayı: 27**', '**Çıkan Sayı: 28**', '**Çıkan Sayı: 29**', '**Çıkan Sayı: 30**',
'**Çıkan Sayı: 31**', '**Çıkan Sayı: 32**', '**Çıkan Sayı: 33**', '**Çıkan Sayı: 34**', '**Çıkan Sayı: 35**', '**Çıkan Sayı: 36**', '**Çıkan Sayı: 37**', '**Çıkan Sayı: 38**', '**Çıkan Sayı: 39**', '**Çıkan Sayı: 40**',
'**Çıkan Sayı: 41**', '**Çıkan Sayı: 42**', '**Çıkan Sayı: 43**', '**Çıkan Sayı: 44**', '**Çıkan Sayı: 45**', '**Çıkan Sayı: 46**', '**Çıkan Sayı: 47**', '**Çıkan Sayı: 48**', '**Çıkan Sayı: 49**', '**Çıkan Sayı: 50**',
'**Çıkan Sayı: 51**', '**Çıkan Sayı: 52**', '**Çıkan Sayı: 53**', '**Çıkan Sayı: 54**', '**Çıkan Sayı: 55**', '**Çıkan Sayı: 56**', '**Çıkan Sayı: 57**', '**Çıkan Sayı: 58**', '**Çıkan Sayı: 59**', '**Çıkan Sayı: 60**',
'**Çıkan Sayı: 61**', '**Çıkan Sayı: 62**', '**Çıkan Sayı: 63**', '**Çıkan Sayı: 64**', '**Çıkan Sayı: 65**', '**Çıkan Sayı: 66**', '**Çıkan Sayı: 67**', '**Çıkan Sayı: 68**', '**Çıkan Sayı: 69**', '**Çıkan Sayı: 70**',
'**Çıkan Sayı: 71**', '**Çıkan Sayı: 72**', '**Çıkan Sayı: 73**', '**Çıkan Sayı: 74**', '**Çıkan Sayı: 75**', '**Çıkan Sayı: 76**', '**Çıkan Sayı: 77**', '**Çıkan Sayı: 78**', '**Çıkan Sayı: 79**', '**Çıkan Sayı: 80**',
'**Çıkan Sayı: 81**', '**Çıkan Sayı: 82**', '**Çıkan Sayı: 83**', '**Çıkan Sayı: 84**', '**Çıkan Sayı: 85**', '**Çıkan Sayı: 86**', '**Çıkan Sayı: 87**', '**Çıkan Sayı: 88**', '**Çıkan Sayı: 89**', '**Çıkan Sayı: 90**',
'**Çıkan Sayı: 91**', '**Çıkan Sayı: 92**', '**Çıkan Sayı: 93**', '**Çıkan Sayı: 94**', '**Çıkan Sayı: 95**', '**Çıkan Sayı: 96**', '**Çıkan Sayı: 97**', '**Çıkan Sayı: 98**', '**Çıkan Sayı: 99**', '**Çıkan Sayı: 100**',
];
var sayiver = Math.floor(Math.random()*Random.length);
const sayi= new Discord.RichEmbed()
.setDescription(`${Random[sayiver]}`)
.setColor(0xe2ff00)
//.setTimestamp()
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
