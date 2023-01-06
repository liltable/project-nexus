const {
  ChatInputCommandInteraction,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
const { SystemEmbeds } = require("../../embeds");

module.exports = {
  name: "start",
  description: "Enroll in Project Nexus.",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    const Buttons = {
      Begin: new ButtonBuilder()
        .setCustomId("start")
        .setLabel("Start")
        .setStyle(ButtonStyle.Success),
    };

    return interaction.reply({
      embeds: [SystemEmbeds.Start],
      components: [new ActionRowBuilder().setComponents(Buttons.Begin)],
      ephemeral: true,
    });
  },
};
