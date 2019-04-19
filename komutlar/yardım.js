const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendCode('GENEL KOMUTLAR\n8ball: Bota Evet-Hayır Cevaplı sorular sormanıza yarar.\natasözü: Rastgele atasözü verir.\navatar: Profil fotoğrafınızı büyük bir biçimde verir.\nbilgi: Bot hakkında bilgi verir.\nbotdestek: Botun kurucularına destek mesajı gönderir.\ndavet: Botu kendi sunucunuza davet edersiniz.\ndöviz: Döviz kurlarını gösterir.\nYÖNETİM KOMUTLARI\nban: Sunucunuzdan istediğiniz bir kişiyi engellemeye yarar.\nçekiliş: Sunucunuzda çekiliş başlatmanıza yarar.\nBOT Admin Komutları\ndmduyuru: Bütün bot kullanıcılarına özel mesaj gönderir.\n');
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription('**GENEL KOMUTLAR**\n**8ball:** Bota Evet-Hayır Cevaplı sorular sormanıza yarar.\n**atasözü:** Rastgele atasözü verir.\n**avatar:** Profil fotoğrafınızı büyük bir biçimde verir.\n**bilgi:** Bot hakkında bilgi verir.\n**botdestek:** Botun kurucularına destek mesajı gönderir.\n**davet:** Botu kendi sunucunuza davet edersiniz.\n**döviz:** Döviz kurlarını gösterir.\n**YÖNETİM KOMUTLARI**\n**ban:** Sunucunuzdan istediğiniz bir kişiyi engellemeye yarar.\n**çekiliş:** Sunucunuzda çekiliş başlatmanıza yarar.\n**BOT Admin Komutları**\n**dmduyuru:** Bütün bot kullanıcılarına özel mesaj gönderir.\n');
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.sendCode('GENEL KOMUTLAR\n8ball: Bota Evet-Hayır Cevaplı sorular sormanıza yarar.\natasözü: Rastgele atasözü verir.\navatar: Profil fotoğrafınızı büyük bir biçimde verir.\nbilgi: Bot hakkında bilgi verir.\nbotdestek: Botun kurucularına destek mesajı gönderir.\ndavet: Botu kendi sunucunuza davet edersiniz.\ndöviz: Döviz kurlarını gösterir.\nYÖNETİM KOMUTLARI\nban: Sunucunuzdan istediğiniz bir kişiyi engellemeye yarar.\nçekiliş: Sunucunuzda çekiliş başlatmanıza yarar.\nBOT Admin Komutları\ndmduyuru: Bütün bot kullanıcılarına özel mesaj gönderir.\n');
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
