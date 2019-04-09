if (message.content === '?profile') {
      let botembed = new Discord.RichEmbed()
                .setTitle("**__Kullanıcı Profili__**")
                .setTimestamp(new Date())
                .setColor("#4286f4")
                .setFooter("Exolia", `${bot.user.avatarURL}`)
                .setThumbnail(`${message.author.avatarURL}`)
                .addField("Username :", `${message.author.username}`, inline = true)
                .addField("Exolytes :", "|---|", inline = true)
                .addField("Played Time :", "|---|", inline = true)
                .addField("Faction :", "Armada", inline = true);
       if (shouldResponseTo(message)) {
           message.delete()
           return message.channel.send(botembed);
       }
    }
