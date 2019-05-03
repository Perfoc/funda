const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const Pornsearch = require('pornsearch')
    const bargs =  message.content.split(' ');
    const searchString = bargs.slice(1).join(' ')
    if (!message.channel.nsfw) return message.reply("Bu komutu sadece `nsfw` kanallarında kullanabilirsiniz!");
    if(!searchString)return message.reply('Aramak istediğin kelimeyi yazmalısın.')
Pornsearch.search(searchString)
.gifs()
.then(gifs => message.channel.send({embed:{
    color: 0xff0000,
    description: `**GIF ${gifs[0].title}**`,
    image: {
        url: gifs[0].url
    }

}}))
Pornsearch.search(searchString)
.videos()
.then(videos => message.channel.send({embed:{
    author: {
        name: message.author.tag,
        icon_url: message.author.avatarURL
    },
    color: 0xff0000,
    title: `*Video* `+ videos[0].title,
    description: videos[0].url,
    image: {
        url: videos[0].thumb
    }
}}))



}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ara', 'pornhub', 'porn', 'hub', 'tube', 'search'],
  permLevel: 0
}

module.exports.help = {
    name: "pornhub",
    description: "İstediğiniz kelimeyi pornhub adresinden arar.",
    usage: "pornhub [Aramak istediğin kelime]"
}
