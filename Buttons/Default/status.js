const { ButtonInteraction, Client, EmbedBuilder } = require("discord.js");
const { DB } = require("../../schemas");

module.exports = {
  id: "status",
  back: "start",
  /**
   *
   * @param {ButtonInteraction} interaction
   * @param { Client } client
   */
  async execute(interaction, client) {
    const Player = await DB.findOne({ PlayerID: interaction.user.id });
    const Embed = new EmbedBuilder()
      .setAuthor({
        iconURL: interaction.user.avatarURL(),
        name: interaction.user.username + "#" + interaction.user.discriminator,
      })
      .setTitle("Nexus | Status");
  },
};
