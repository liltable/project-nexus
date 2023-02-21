const { EmbedBuilder } = require("@discordjs/builders");
const {
  ButtonInteraction,
  Colors,
  Client,
  ActionRow,
  ActionRowBuilder,
  ButtonBuilder,
} = require("discord.js");
const { DefaultButtons } = require("../../default");

module.exports = {
  id: "start",
  /**
   *
   * @param {ButtonInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction) {
    const Embed = new EmbedBuilder()
      .setAuthor({
        iconURL: interaction.user.avatarURL(),
        name: interaction.user.username + "#" + interaction.user.discriminator,
      })
      .setTitle(`Nexus | Menu`)
      .setDescription(
        `> The developers should've included a tutorial of some sorts here, but were too lazy. Here's the main menu.`
      );

    const Row = new ActionRowBuilder().setComponents(
      DefaultButtons.Profile,
      DefaultButtons.Status,
      DefaultButtons.Inventory,
      DefaultButtons.Exit
    );

    interaction.reply({ embeds: [Embed], components: [Row], ephemeral: true });
  },
};
