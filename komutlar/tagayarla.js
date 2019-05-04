const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanmak için `Yönetici` yetkiniz olması lazım')
  let tag = args.slice(0).join(' ');
  if (!tag) return message.channel.send('**Bir tag girmelisin!**\n**NOT:** Taglarda boşluk bulunmaz.')
  db.set(`tags_${message.guild.id}`, tag)
  message.channel.send('Tag başarıyla `'+ tag +'` olarak ayarlandı!\n**NOT:** Taglarda boşluk bulunmaz.')
   }   


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tagayarla',
  description: 'tagayarla',
  usage: 'tagayarla'
};
