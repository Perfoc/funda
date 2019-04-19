const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
	.setDescription('Özel Mesajları Kontrol Et');
    
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
	message.author.sendCode('GENEL KOMUTLAR');
    message.author.sendCode('8ball: Bota Evet-Hayır Cevaplı sorular sormanıza yarar.');
    message.author.sendCode('atasözü: Rastgele atasözü verir.');
    message.author.sendCode('avatar: Profil fotoğrafınızı büyük bir biçimde verir.');
    message.author.sendCode('bilgi: Bot hakkında bilgi verir.');
    message.author.sendCode('botdestek: Botun kurucularına destek mesajı gönderir.');
    message.author.sendCode('davet: Botu kendi sunucunuza davet edersiniz.');
    message.author.sendCode('döviz: Döviz kurlarını gösterir.');
    message.author.sendCode('YÖNETİM KOMUTLARI');
    message.author.sendCode('ban: Sunucunuzdan istediğiniz bir kişiyi engellemeye yarar.');
    message.author.sendCode('çekiliş: Sunucunuzda çekiliş başlatmanıza yarar.');
    message.author.sendCode('BOT Admin Komutları');
    message.author.sendCode('dmduyuru: Bütün bot kullanıcılarına özel mesaj gönderir.');
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
