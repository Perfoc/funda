const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'**Acele ile menzil alınmaz.**',
'**Ayağını yorganına göre uzat**',
'**Damlaya damlaya göl olur.**',
'**Eğilen baş kesilmez. **',
'**Eğri otur , doğru konuş. **',
'**Elden gelen övün olmaz , o da vaktinde gelmez. **',
'**El elin eşeğini türkü çağırarak arar. **',
'**Elin ağzı torba değil ki büzesin **',
'**Gelen gideni aratır**',
'**İki karpuz bir kotuğa sığmaz. **',
'**İki el bir baş içindir. **',
'**İşleyen demir pas tutmaz. **',
'**Karnı tok it gölgede yatar. **',
'**Mal canın yongasıdır. **',
'**Parayı veren düdüğü çalar. **',
];
var atasozuver = Math.floor(Math.random()*Random.length);
const atasozu= new Discord.RichEmbed()
.setDescription(`${Random[atasozuver]}`)
.setColor(0xe2ff00)
.setTimestamp()
message.channel.send(atasozu)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'atasözü',
description: 'Bot size rastgele atasözü gönderir',
usage: 'atasözü'
};