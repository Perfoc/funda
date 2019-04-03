const Discord = require('discord.js');
exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('`fulltemizle` komutu sadece sunucularda kullanılabilir.');
  }
  let mesajsayisi = -1;
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send('Sohbetin Tamamını Temizledim')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil', 'fulltemizle', 'temizle'],
  permLevel: 2
};

exports.help = {
  name: 'fulltemizle',
  description: 'Mesajların Tamamını Siler.',
  usage: 'fulltemizle'
};
