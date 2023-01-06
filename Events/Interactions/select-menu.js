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

    if (!Menu)
      setTimeout(() => {
        if (!interaction.replied || !interaction.deferred) {
          return interaction.reply({
            embeds: [DefaultEmbeds.UnknownMenu],
            ephemeral: true,
          });
        }
      }, ms("3s"));

    Menu.execute(interaction, client).catch((e) => {
      console.log(`> Failed to execute select-menu ${interaction.customId}.`);
      setTimeout(() => {
        console.log(e);
      }, ms("3s"));
    });
  },
};
