const Discord = require('discord.js');

const cevaplar = [
    "Evet!",
    "Hayır!",
    "Bilemedim, tekrar sor."
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    message.channel.send(cevap)

};  

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
