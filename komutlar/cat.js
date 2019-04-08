const Social = require("../../structures/Social.js");
const { get } = require("snekfetch");
const { version } = require("../../package.json");

class kedi extends Social {
  constructor(...args) {
    super(...args, {
      name: "kedi",
      description: "Rastgele kedi resmi verir.",
      category: "Animals",
      usage: "kedi",
      extended: "Bu komut sayesinde güzel kedileri görebilirsin.",
      cost: 5,
      cooldown: 10,
      aliases: ["kedi"],
      loadingString: "<a:typing:397490442469376001> **{{displayName}}** kedi çağırdı.",
      botPerms: ["EMBED_LINKS"]
    });
  }

  async run(message, args, level, loadingMessage) {
    const { body } = await get("https://api.weeb.sh/images/random?type=animal_cat")
      .set("Yetki", `Wolke ${process.env.WEEBSH}`)
      .set("Kullanıcı", `Misaki/${version}/${this.client.user.id === "396323622953680910" ? "Production" : "Development"}`);

    await loadingMessage.edit({
      embed: {
        "title": "Resim yüklenmediği esnada buraya tıklayınız.",
        "url": body.url,
        "color": 6192321,
        "image": {
          "url": body.url
        }
      }
    });
  }
}

module.exports = Cat;