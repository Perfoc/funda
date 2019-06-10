const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {
	let profil = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));
		if(!profil[message.guild.id]) {
			const embed = new Discord.RichEmbed()
				.setDescription(`Ayarlanmayan şeyi sıfırlayamazsın!`)
				.setColor("RANDOM")
				.setTimestamp()
			message.channel.send({embed})
			return
		}
		delete profil[message.guild.id]
		fs.writeFile("./sayac.json", JSON.stringify(profil), (err) => {
			console.log(err)
		})
		const embed = new Discord.RichEmbed()
			.setDescription(`Sayaç başarıyla sıfırlandı!`)
			.setColor("RANDOM")
			.setTimestamp()
		message.channel.send({embed})
		return
	}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["skapat"],
  permLevel: 2
};

exports.help = {
  name: 'Sayaç Kapat',
  kategori: "admin",
  description: 'Slots oyunu oynar',
  usage: 'sayaçsıfırla'
};
