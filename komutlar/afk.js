const Discord = require('discord.js');
exports.run = (client, message, args) =>{
    const setStatus = message.content.split(' ');

    if(setStatus[1] === 'aktif'){
        client.user.setAFK(true);
        message.channel.send("Durumunuz afk olarak ayarlandı!");
    }

    else if(setStatus[1] === 'deaktif'){
        client.user.setAFK(false);
        message.channel.send(`${message.author} artık AFK değil. Hoş geldin dostum.`);
    }

    else if(!setStatus[1] || setStatus[1] === undefined){
        message.channel.send("Mevcut durum olarak `aktif` veya `deaktif` seçmediniz!");
    }

    else{
        message.channel.send("Mevcut durum olarak aktif veya deaktif seçmediniz!");
    }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk'],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'AFK kaldığınızı belirtmenize yarar.',
  usage: 'afk <aktf-deafktif>'
};
