const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");


module.exports = {
    name: 'davet',
    usage: '',
    category: "",
    description: ``,
    async execute(client, message, args) {
const embed = new MessageEmbed()
.setTitle("Tomoe - Davet")
.setDescription("Aşağıda ki butonlardan beni ekleyebilirsin!")
.setColor("RED")
.setFooter("Tomoe")

const row = new MessageActionRow()
.addComponents(
new MessageButton()
.setLabel("Destek Sunucusu")
.setURL("https://discord.gg/nVRH3pzp2q")
.setStyle("LINK"),
 new MessageButton()
.setLabel("Beni Davet Et!")
.setURL("https://discord.com/api/oauth2/authorize?client_id=1076612294378786836&permissions=8&scope=bot")
.setStyle("LINK"))
message.channel.send({embeds: [embed], components: [row]})
}
}
