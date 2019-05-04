const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
    message.delete();
    const embed = new Discord.RichEmbed()
        .setColor("#9700ff")
        .setAuthor('✅ Sunucu adı: ' + message.guild.name, message.guild.userURL)
        .setThumbnail(message.guild.iconURL)
        .addField('✅ **Varsayılan rol:**', message.guild.defaultRole, true)
        .addField('✅ **Tüm Roller:**', message.guild.roles.map(role => role.name).join(', '), true)
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
