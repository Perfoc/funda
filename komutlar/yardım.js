const Discord = require('discord.js');
exports.run = function(client, message) {
    message.channel.send("Komutları görmek için bu linke tıklayabilirsiniz -> https://kisa.link/funda");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
