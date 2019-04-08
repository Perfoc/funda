const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
	"**__TURA__**",
	"**__YAZI__**"
];

exports.run = function(client, message) {
	
	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
	
	if (cevap === "**__YAZI__**") {
		
		 const embedyazı = new Discord.RichEmbed()
		.setColor(0xf4b942)
		//.setDescription()
		.setThumbnail("https://image.prntscr.com/image/nSAgGoOmTii10YWD34WEZg.png")
		message.channel.send(embedyazı);
		
	} else if (cevap === "**__TURA__**") {
		
		const embedtura = new Discord.RichEmbed()
		.setColor(0xf4b942)
		//.setDescription()
		.setThumbnail("https://image.prntscr.com/image/EHWJ3FtPSHus-h-ABhYy8g.png")
		message.channel.send(embedtura);
		
	}
		

};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yazıtura', 
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};
