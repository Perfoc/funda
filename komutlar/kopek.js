const Social = require("../structures/Social.js");
const { get } = require("snekfetch");

class kopek extends Social {
  constructor(...args) {
    super(...args, {
      name: "köpek",
      description: "Rastgele köpek resmi verir.",
      category: "Hayvanlar",
      usage: "köpek",
      extended: "Bu komut sayesinde güzel köpekleri görebilirsin.",
      cost: 5,
      cooldown: 10,
      aliases: ["köpek"],
      loadingString: "<a:typing:397490442469376001> **{{displayName}}** köpek çağırdı...",
      botPerms: ["EMBED_LINKS"]
    });
  }

  async run(message, args, level, loadingMessage) {
    const { body } = await get(args[0] ? `https://dog.ceo/api/breed/${args[0]}/images/random` : "https://dog.ceo/api/breeds/image/random");
    await loadingMessage.edit({
      embed: {
        "title": "Resim yüklenmediği esnada buraya tıklayınız.",
        "url": body.message,
        "color": 6192321,
        "image": {
          "url": body.message
        }
      }
    });

  }
}

module.exports = Dog;
