const { Colors, EmbedBuilder } = require("discord.js");
const { NexusPFP } = require("./Images/Client/url");

module.exports = {
  SystemEmbeds: {
    Start: new EmbedBuilder()
      .setColor(Colors.Blue)
      .setTitle(`Nexus 〣 New Beginnings`)
      .setThumbnail(`${NexusPFP}`).setDescription(`**Welcome to Project Nexus!**
      
      `),
  },
  Formatting: {
    Border: "〣",
  },
};
