const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendCode('asciidoc', `= Komut Listesi =\n\n[Komut hakkında bilgi için ${ayarlar.prefix}yardım <komut adı>]\n\n${client.commands.map(c => `${ayarlar.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('GENEL KOMUTLAR');
    .setDescription('8ball: Bota Evet-Hayır Cevaplı sorular sormanıza yarar.');
    .setDescription('atasözü: Rastgele atasözü verir.');
    .setDescription('avatar: Profil fotoğrafınızı büyük bir biçimde verir.');
    .setDescription('bilgi: Bot hakkında bilgi verir.');
    .setDescription('botdestek: Botun kurucularına destek mesajı gönderir.');
    .setDescription('davet: Botu kendi sunucunuza davet edersiniz.');
    .setDescription('döviz: Döviz kurlarını gösterir.');
    .setDescription('YÖNETİM KOMUTLARI');
    .setDescription('ban: Sunucunuzdan istediğiniz bir kişiyi engellemeye yarar.');
    .setDescription('çekiliş: Sunucunuzda çekiliş başlatmanıza yarar.');
    .setDescription(': ');
    .setDescription('BOT Admin Komutları');
    .setDescription('dmduyuru: Bütün bot kullanıcılarına özel mesaj gönderir.');
    
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
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
