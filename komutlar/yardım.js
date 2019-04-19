const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
    'GENEL KOMUTLAR'
    '8ball: Bota Evet-Hayır Cevaplı sorular sormanıza yarar.'
    'atasözü: Rastgele atasözü verir.'
    'avatar: Profil fotoğrafınızı büyük bir biçimde verir.'
    'bilgi: Bot hakkında bilgi verir.'
    'botdestek: Botun kurucularına destek mesajı gönderir.'
    'davet: Botu kendi sunucunuza davet edersiniz.'
    'döviz: Döviz kurlarını gösterir.'
    'YÖNETİM KOMUTLARI'
    'ban: Sunucunuzdan istediğiniz bir kişiyi engellemeye yarar.'
    'çekiliş: Sunucunuzda çekiliş başlatmanıza yarar.'
    'BOT Admin Komutları'
    'dmduyuru: Bütün bot kullanıcılarına özel mesaj gönderir.';
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
name: 'yardım',
description: 'Komutları ve ne işe yaradaklarını gösterir.',
usage: 'yardım'
};
