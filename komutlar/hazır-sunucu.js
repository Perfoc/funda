const Discord = require('discord.js');


exports.run = (client, message, args) => {
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut girişi').setDescription('Mod-Log kurulsun mu?.').setFooter('Bu eylemi onaylıyorsan "Evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'Evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
        message.guild.createChannel(`mod-log`);
        message.channel.send(`mod-log kanalını oluşturdum. Artık bot kusursuz bir biçimde çalışabilir.`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'mod-log',
  description: 'Bot Sizin için gerekli kanalları kurar.',
  usage: 'mod-log'
};
