exports.run = async (client, msg, args) => {
    let ask=[
      "**Aşkölçer:** %0 Gösteriyor. **Sonuç:** Sevmiyorsun.",  
      "**Aşkölçer:** %3 Gösteriyor. **Sonuç:** Sevmiyorsun.",
      "**Aşkölçer:** %6 Gösteriyor. **Sonuç:** Sevmiyorsun.",
      "**Aşkölçer:** %9 Gösteriyor. **Sonuç:** Sevmiyorsun.",
      "**Aşkölçer:** %12 Gösteriyor. **Sonuç:** Sevmiyorsun.",
      "**Aşkölçer:** %18 Gösteriyor. **Sonuç:** Kısmen Sevmiyorsun.",
      "**Aşkölçer:** %20 Gösteriyor. **Sonuç:** Kısmen Sevmiyorsun.",
      "**Aşkölçer:** %23 Gösteriyor. **Sonuç:** Kısmen Sevmiyorsun.",
      "**Aşkölçer:** %26 Gösteriyor. **Sonuç:** Kısmen Sevmiyorsun.",
      "**Aşkölçer:** %29 Gösteriyor. **Sonuç:** Kısmen Sevmiyorsun.",
      "**Aşkölçer:** %30 Gösteriyor. **Sonuç:** Kısmen Sevmiyorsun.",
      "**Aşkölçer:** %40 Gösteriyor. **Sonuç:** Biraz Seviyorsun.",
      "**Aşkölçer:** %50 Gösteriyor. **Sonuç:** Biraz Seviyorsun.",
      "**Aşkölçer:** %60 Gösteriyor. **Sonuç:** Biraz Seviyorsun.",
      "**Aşkölçer:** %70 Gösteriyor. **Sonuç:** Seviyorsun.",
      "**Aşkölçer:** %73 Gösteriyor. **Sonuç:** Seviyorsun.",
      "**Aşkölçer:** %76 Gösteriyor. **Sonuç:** Seviyorsun.",
      "**Aşkölçer:** %79 Gösteriyor. **Sonuç:** Seviyorsun.",
      "**Aşkölçer:** %82 Gösteriyor. **Sonuç:** Aşıksın.",
      "**Aşkölçer:** %85 Gösteriyor. **Sonuç:** Aşıksın.",
      "**Aşkölçer:** %88 Gösteriyor. **Sonuç:** Aşıksın.",
      "**Aşkölçer:** %90 Gösteriyor. **Sonuç:** Çok Aşıksın.",
      "**Aşkölçer:** %91 Gösteriyor. **Sonuç:** Çok Aşıksın.",
      "**Aşkölçer:** %92 Gösteriyor. **Sonuç:** Çok Aşıksın.",
      "**Aşkölçer:** %93 Gösteriyor. **Sonuç:** Çok Aşıksın.",
      "**Aşkölçer:** %94 Gösteriyor. **Sonuç:** Aşkından deli olmuşsun.",
      "**Aşkölçer:** %95 Gösteriyor. **Sonuç:** Aşkından deli olmuşsun.",
      "**Aşkölçer:** %96 Gösteriyor. **Sonuç:** Aşkından deli olmuşsun.",
      "**Aşkölçer:** %97 Gösteriyor. **Sonuç:** Aşkından deli olmuşsun.",
      "**Aşkölçer:** %98 Gösteriyor. **Sonuç:** Aşkından deli olmuşsun.",
      "**Aşkölçer:** %99 Gösteriyor. **Sonuç:** Aşkından deli olmuşsun.",
      "**Aşkölçer:** %100 Gösteriyor. **Sonuç:** Onun için ölürsün bile!",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (':no_entry_sign: Kimi Seviyorsun?')
  }});
  
  
  
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }
  
  
  }
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
  
  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }
