const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
    message.delete();
    const embed = new Discord.RichEmbed()
        .setColor("#9700ff")
        .setAuthor(':white_check_mark: **Sunucu adı:** ' + message.guild.name, message.guild.userURL)
        .setThumbnail(message.guild.iconURL)
        .addField(':white_check_mark: **Varsayılan rol:**', message.guild.defaultRole, true)
        .addField(':white_check_mark: **Tüm Roller:**', message.guild.roles.map(role => role.name).join(', '), true)
        .setTimestamp()
    message.channel.send({
        embed
    });
    message.react(':white_check_mark:')
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'roller',
    description: 'Sunucudaki rolleri söyler.',
    usage: 'roller'
};
