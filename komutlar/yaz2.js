const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 2
};

exports.help = {
  name: 'yaz2',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz2 [yazdırmak istediğiniz şey]'
};
