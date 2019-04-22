const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  'Bot Perfo tarafından geliştirilmektedir',
  'Botumuzun özelliklerini öğrenmek için ?yardım komutunu kullanabilirsin.',
  '**ÖNEMLİ:** Botun kullanması için mod-log kanalı açın ve deneme için',
  '?mod-log komutunu kullanın.',
  '',
  `**Discord Sunucusu: ** https://discord.gg/xnSjkSk`
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'yardım | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})
//client.guilds.reduce((a, b) => a + b.memberCount, 10).toLocaleString()
