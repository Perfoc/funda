const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
':one:',
':two:',
':three:',
':four:',
':five:',
':six:',
];
var zaratt = Math.floor(Math.random()*Random.length);
const zarat= new Discord.RichEmbed()
//.setColor(0xe2ff00)
message.channel.send(zarat)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'zarat',
description: 'Zar atmaya yarar. (1 ve 6 arası)',
usage: 'zatat'
};
