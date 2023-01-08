const {
  ChatInputCommandInteraction,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Client,
} = require("discord.js");
const { SystemEmbeds } = require("../../embeds");

module.exports = {
  name: "start",
  description: "Enroll in Project Nexus.",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const Buttons = {
      Begin: new ButtonBuilder()
        .setCustomId("start")
        .setLabel("Start")
        .setStyle(ButtonStyle.Success),
    };

    await interaction.reply({
      embeds: [SystemEmbeds.Start],
      components: [new ActionRowBuilder().setComponents(Buttons.Begin)],
      ephemeral: true,
    });
    return client.messages.set(
      (await interaction.fetchReply()).id,
      interaction.user.id
    );
  },
};
