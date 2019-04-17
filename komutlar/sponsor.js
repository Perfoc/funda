const Discord = require('discord.js');
exports.run = function(client, message) {
    message.channel.send("Funda BOT için sponsor oldu: " + `https://memoryhackers.org`);
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
