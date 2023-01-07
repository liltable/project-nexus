const { EmbedBuilder } = require("@discordjs/builders");
const { SelectMenuInteraction, Client, Colors } = require("discord.js");
const e = require("express");
const ms = require("ms");
const { DefaultEmbeds } = require("../../default");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {SelectMenuInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    if (!interaction.isStringSelectMenu()) return;
    const Menu = client.selectMenus.get(interaction.customId);

    if (!Menu) return;

    try {
      Menu.execute(interaction, client);
    } catch (err) {
      console.log(err);
    }
  },
};
