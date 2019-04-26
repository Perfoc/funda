const Discord = require('discord.js');
exports.run = function(client, message) {
    message.channel.send("O Kadar gelişmedik dostum. Eğer istersen **Perfo#2814** kullanıcı adlı kişiye ulaşabilirsiniz.");
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['avatarım'],
  permLevel: 0 
};

exports.help = {
  name: 'sponsor', 
  description: 'Funda BOT için sponsorları gösterir.',
  usage: 'sponsor'
};
