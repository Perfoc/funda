const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix, con) => {
  let target = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;

  con.query(`SELECT * FROM xp WHERE id = '${target.id}'`, (err, rows) => {
    if(err) throw err;

    if(!rows[0]) return message.channel.send("Bu kullanıcının kayıtlı XP'si yok!");

    let xp = rows[0].xp

    var XPEE = new Discord.RichEmbed()
    .setTitle("__***Toplam XP***__")

    .addField("------------------------------------------",
              "Toplam XP Miktarı: " + "__**" + xp + "**__" + "\n" +
              "-----------------------------------------", true)

    .setColor("0x#FF0000")

    message.channel.send(XPEE);
  });
}

module.exports.help = {
    name: "xp"
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'xp',
  description: 'XP Miktarını gösterir.',
  usage: 'xp'
};
