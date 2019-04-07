const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (message, bot) => {
  if (!message.args[0]) return message.channel.send("Tag eklemek için: `" + prefix + "tag <tag adı> <tagın metini>`");
  let tags = message.guild.tags
  if (Object.keys(tags).length > 100) return send("**Sunucu başına maksimum etiket sayısını aştınız: 100, önce birkaç tane sil**")

  message.suffix = nu.clean(message.suffix)
  message.args.forEach((arg, i) => message.args[i] = nu.clean(arg))

  if (tags[message.args[0]]) return message.channel.send("**The tag `" + message.args[1] + "` already exists**");
  if (!message.args[1]) return message.channel.send(`Tag ismini giriniz.`);
  let r = message.suffix.split(" ");
  r = r.slice(1)
  let text = r.join(" ");
  tags[message.args[0]] = {
    owner: message.author.id,
    text: text,
    created: (new Date()).getTime(),
    used: 0
  };
  message.channel.send("**Adding the tag `" + message.args[0] + "`**.")
  return bot.config.setTags(message.guild.id, tags)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'tag',
  description: 'Sunucuya Tag Eklemenize Yarar.',
  usage: 'tag'
};
