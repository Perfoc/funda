const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send('GENEL KOMUTLAR');
  message.channel.send('8ball: Bota Evet-Hayır Cevaplı sorular sormanıza yarar.');
  message.channel.send('atasözü: Rastgele atasözü verir.');
  message.channel.send('avatar: Profil fotoğrafınızı büyük bir biçimde verir.');
  message.channel.send('bilgi: Bot hakkında bilgi verir.');
  message.channel.send('botdestek: Botun kurucularına destek mesajı gönderir.');
  message.channel.send('davet: Botu kendi sunucunuza davet edersiniz.');
  message.channel.send('döviz: Döviz kurlarını gösterir.');
  message.channel.send('YÖNETİM KOMUTLARI');
  message.channel.send('ban: Sunucunuzdan istediğiniz bir kişiyi engellemeye yarar.');
  message.channel.send('çekiliş: Sunucunuzda çekiliş başlatmanıza yarar.');
  message.channel.send('BOT Admin Komutları');
  message.channel.send('dmduyuru: Bütün bot kullanıcılarına özel mesaj gönderir.');
};
	
    }
  }

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
