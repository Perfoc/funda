const Discord = require('discord.js');
exports.run = function(client, message) {
    message.channel.send("**GENEL KOMUTLAR**\n\n**8ball:** Bota Evet-Hayır Cevaplı sorular sormanıza yarar.\n**atasözü:** Rastgele atasözü verir.\n****bilgi:** Bot hakkında bilgi verir.\n**botdestek:** Botun kurucularına destek mesajı gönderir.\n**davet:** Botu kendi sunucunuza davet edersiniz.\n**döviz:** Döviz kurlarını gösterir.\n**emojiyazı:** Yazdırmak istediğiniz şeyi emojiler ile yazar.\n**google:** Googleda arama yapmanıza yarar.\n**havadurumu:** İstediğiniz ilin anlık olarak hava durumunuzu gösterir.\n**hesapla:** Matematiksel işlemler yapmanıza yarar.\n**istatistik:** Botun istatistiklerini gösterir.\n**kullanıcıbilgim:** Anlık olarak bilgilerinizi verir.\n**kısalt:** verdiğiniz linki kısaltmanıza yarar.\n**ping:** Sunucu ile olan pinginizi ölçer.\n**sayıver:** 1den 100e kadar rastgele bir sayı verir.\n**slots:** Slots oynamanıza yarar.\n**speedtest:** Speed Test sonuçlarınızı verir.\n**sponsor:** Botun sponsorlarını gösterir.\n**stresçarkı:** Stres çarkı döndermenize yarar.\n**sunucubilgi:** Yazdığınız sunucunun bilgilerini verir.\n**yardım:** Bot komutlarını ve ne işe yaradıklarını verir.\n**yaz:** Bota istediğiniz bir mesajı yazdırır.\n**yaz2:** Boya istediğiniz bir mesajı yazdırır.\n**yazıtura:** Yazı tura atmanıza yarar.\n**zarat:** Zar atmanıza yarar.\n**şifre:** Belirttiğiniz sayı uzunluğu kadar rastgele bir güçlü şifre oluşturur.\n**YÖNETİM KOMUTLARI**\n\n**ban:** Sunucunuzdan istediğiniz bir kişiyi engellemeye yarar.\n**çekiliş:** Sunucunuzda çekiliş başlatmanıza yarar.\n**fulltemizle:** Sunucudaki tüm mesajları siler.\n**kick:** Sunucunuzdan istediğiniz bir kişiyi atmanıza yarar.\n**kilit:** Hangi odada yazıldıysa verilen süre kadar(milisaniye) odayı kilitler.\n**sabitle:** Kanala yazılan son mesajı sabitlemeye yarar.\n**sustur:** Sunucunuzdan istediğiniz kişiyi susturmanıza yarar.\n**temizle:** Belirttiğiniz sayı kadar mesaj siler.\n**unban:** Sunucunuzdan engellenmiş bir kullanıcının engelini kaldırır.\n**uyar:** Sunucunuzdan istediğiniz bir kişiyi uyarmanıza yarar.\n**BOT Admin Komutları**\n\n**dmduyuru:** Bütün bot kullanıcılarına özel mesaj gönderir.\n**load:** Yeni eklenen bir komutu çalıştırmaya yarar.\n**reboot:** Botu yeniden başlatmaya yarar.\n**reload:** Düzenlenen komutu yeniden çalıştırmaya yarar.\n**yayınayarla:** Botun yayında yazısını ayarlanmasına yarar.\n");
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
