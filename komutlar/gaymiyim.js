const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'**Evet Gaysin!**',
'**Sen Gay Olamazsın!**',
'**Bilemedim, tekrar sor.**',
];
var cevapver = Math.floor(Math.random()*Random.length);
const cevap= new Discord.RichEmbed()
.setDescription(`${Random[cevapver]}`)
.setColor(0xe2ff00)
.setTimestamp()
message.channel.send(cevap)

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'gaymiyim', 
  description: 'Gay olup olmadığınızı söyler.',
  usage: 'gaymiyim'
};
