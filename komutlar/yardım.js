const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    //message.author.sendCode('asciidoc', `= Komut Listesi =\n\n[Komut hakkında bilgi için ${ayarlar.prefix}yardım <komut adı>]\n\n${client.commands.map(c => `${ayarlar.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**GENEL KOMUTLAR**\n\n**8ball:** Bota Evet-Hayır Cevaplı sorular sormanıza yarar.\n**atasözü:** Rastgele atasözü verir.\n****bilgi:** Bot hakkında bilgi verir.\n**botdestek:** Botun kurucularına destek mesajı gönderir.\n**davet:** Botu kendi sunucunuza davet edersiniz.\n**döviz:** Döviz kurlarını gösterir.\n**emojiyazı:** Yazdırmak istediğiniz şeyi emojiler ile yazar.\n**google:** Googleda arama yapmanıza yarar.\n**havadurumu:** İstediğiniz ilin anlık olarak hava durumunuzu gösterir.\n**hesapla:** Matematiksel işlemler yapmanıza yarar.\n**istatistik:** Botun istatistiklerini gösterir.\n**kullanıcıbilgim:** Anlık olarak bilgilerinizi verir.\n**kısalt:** verdiğiniz linki kısaltmanıza yarar.\n**ping:** Sunucu ile olan pinginizi ölçer.\n**sayıver:** 1'den 100'e kadar rastgele bir sayı verir.\n**slots:** Slots oynamanıza yarar.\n**speedtest:** Speed Test sonuçlarınızı verir.\n**sponsor:** Botun sponsorlarını gösterir.\n**stresçarkı:** Stres çarkı döndermenize yarar.\n**sunucubilgi:** Yazdığınız sunucunun bilgilerini verir.\n**yardım:** Bot komutlarını ve ne işe yaradıklarını verir.\n**yaz:** Bota istediğiniz bir mesajı yazdırır.\n**yaz2:** Boya istediğiniz bir mesajı yazdırır.\n**yazıtura:** Yazı tura atmanıza yarar.\n**zarat:** Zar atmanıza yarar.\n**şifre:** Belirttiğiniz sayı uzunluğu kadar rastgele bir güçlü şifre oluşturur.\n**YÖNETİM KOMUTLARI**\n\n**ban:** Sunucunuzdan istediğiniz bir kişiyi engellemeye yarar.\n**çekiliş:** Sunucunuzda çekiliş başlatmanıza yarar.\n**fulltemizle:** Sunucudaki tüm mesajları siler.\n**kick:** Sunucunuzdan istediğiniz bir kişiyi atmanıza yarar.\n**kilit:** Hangi odada yazıldıysa verilen süre kadar(milisaniye) odayı kilitler.\n**sabitle:** Kanala yazılan son mesajı sabitlemeye yarar.\n**sustur:** Sunucunuzdan istediğiniz kişiyi susturmanıza yarar.\n**temizle:** Belirttiğiniz sayı kadar mesaj siler.\n**unban:** Sunucunuzdan engellenmiş bir kullanıcının engelini kaldırır.\n**uyar:** Sunucunuzdan istediğiniz bir kişiyi uyarmanıza yarar.\n**BOT Admin Komutları**\n\n**dmduyuru:** Bütün bot kullanıcılarına özel mesaj gönderir.\n**load:** Yeni eklenen bir komutu çalıştırmaya yarar.\n**reboot:** Botu yeniden başlatmaya yarar.\n**reload:** Düzenlenen komutu yeniden çalıştırmaya yarar.\n**yayınayarla:** Botun "... Yayında" yazısını ayarlanmasına yarar.\n');
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      //message.author.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
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
