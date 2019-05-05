const Discord = require('discord.js');
client.on('message', message => {
  if (message.content.startsWith("?virüs")) {
      if(!message.author.id === '') return;
    if (message.author.bot) return
         message.delete();
           let args = message.content.split(' ').slice(1);

                 let virusname = args.join('Aktarma işlemi, iptal edildi!');
               if (virusname < 1) {
                   return message.channel.send("Lütfen, bir isim belirtiniz!");
               }
               message.channel.send({embed: new Discord.RichEmbed().setTitle(virusname + " hazırlanmakta!").setColor(0x808080)}).then(function(m) {
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 1%').setColor(0x808080)})
           }, 1000)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 2%').setColor(0x808080)})
           }, 2000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 3%').setColor(0x808080)})
           }, 3000)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 4%').setColor(0x808080)})
           }, 4000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 28%').setColor(0x808080)})
           }, 5000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 35%').setColor(0x808080)})
           }, 6000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 78%').setColor(0x808080)})
           }, 7000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 80%').setColor(0x808080)})
           }, 8000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 86%').setColor(0x808080)})
           }, 9000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 89%').setColor(0x808080)})
           }, 10000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 90%').setColor(0x808080)})
           }, 11000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 95%').setColor(0x808080)})
           }, 12000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 96%').setColor(0x808080)})
           }, 13000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 97%').setColor(0x808080)})
           }, 14000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor 98%').setColor(0x808080)})
           }, 15000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 99%').setColor(0x808080)})
           }, 16000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 100%').setColor(0x808080)})
           }, 17000)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs için aktarma işlemi başlatılıyor!').setColor(0x808080)})
           }, 18000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs için dosyalar hazırlanıyor!').setColor(0x808080)})
           }, 19000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('Dosya, aktarılıyor: ' + virusname + ".exe").setColor(0x808080)})
           }, 22000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 5sn.').setColor(0x808080)})
           }, 25000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 4sn.').setColor(0x808080)})
           }, 26000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 3sn.').setColor(0x808080)})
           }, 27000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 2sn.').setColor(0x808080)})
           }, 28000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 1sn.').setColor(0x808080)})
           }, 29000)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('Virüs, ekleniyor!').setColor(0x808080)})
         }, 30000)
            setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('Virüs, eklendi!').setColor(0x808080)})
         }, 31000)
            setTimeout(function() {
             m.delete()
         }, 32000)
           setTimeout(function() {
             message.channel.send('**Virüs, sızdırıldı!**')
         }, 33000)
            setTimeout(function() {
           message.channel.send('**Sunucuya Sızılıyor...!**')
         }, 33000)
          setTimeout(function() {
            message.channel.send('**Sunucu Bilgileri Ele Geçirildi...**')
          }, 99999)

         setTimeout(function() {
           message.channel.send('**Sunucu Üyelerinin Bilgileri Ele Geçiriliyor...**')
         }, 99999)

        setTimeout(function() {
          message.channel.send('**Üye Bilgileri Ele Geçirildi...**')
        }, 99999)

       setTimeout(function() {
         message.channel.send('**Üyelerin İP Adresi Alınıyor...**')
       }, 99999)

      setTimeout(function() {
        message.channel.send('**Sistemlerine Sızılıyor**')
      }, 99999)

     setTimeout(function() {
       message.channel.send('**Sisteme Sızıldı...**')
     }, 99999)

    setTimeout(function() {
      message.channel.send('**Bilgiler Pays a Atılıyor...**')
    }, 99999)

   setTimeout(function() {
     message.channel.send('**Bilgiler Atıldı...**')
   }, 99999)
  })
       }
});

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'virüs', 
  description: 'Şaka amaçlı bir virüs kodudur.',
  usage: 'virüs'
};
