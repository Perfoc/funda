const Discord = require('discord.js')
const os = require('os')
var speedTest = require('speedtest-net');

exports.run = (client, message) => {
  var osType = os.type();

  if (osType === 'Darwin') osType = 'macOS'
  else if (osType === 'Windows') osType = 'Windows'
  else if (osType === 'Linux') osType = 'Linux'
  else if (osType === 'Ubuntu') osType = 'Ubuntu'
  else osType = os.type();
  message.channel.send("Bu işlem bir kaç saniye sürebilir.");
    var test = speedTest({maxTime: 5000});
    test.on('data', data => {
const embed = new Discord.RichEmbed()
.setColor(0x36393F)
.setTitle('**SpeedTest Sonuçlar**')
.addField('**Anlık İstatistikler**', `İndirme: **${data.speeds.download}**
Yükleme: **${data.speeds.upload}**`)
.addField('**Nolmal Olarak Ölçülen İstatistikler**', `İndirme: **${data.speeds.originalDownload}**
Yükleme: **${data.speeds.originalUpload}**`)
.addField('**Pingler**', `Discord API Pingi: **${client.ping}**
Speedtestde Ölçülen Ping: **${data.server.ping}**`)
.addField('**Diğer Bilgiler**', `İnternet Portunun IP'sı: **DDoS Saldırısı Olabileceğinden Dolayı Kapatılmıştır**
İşletim Sistemi: **${osType}**
İnternet Sağlayıcısı: **${data.client.isp}**
Host: **${data.server.host}**
Lokasyon: **${data.server.country}**,**${data.client.country}**
Sağlayıcı Lokasyonu: **${data.server.location}**
Sağlayıcı Sponsoru: **${data.server.sponsor}**
Komutu Çalıştıran: **${message.author.username}**`)
  message.channel.send(embed)
});

    test.on('error', err => {
  console.log(err);
});
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'speedtest',
  description: 'İnternet hızınızı kontrol eder.',
  usage: 'speedtest'
};
