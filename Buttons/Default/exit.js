const { ButtonInteraction } = require("discord.js");

module.exports = {
  id: "exit",
  /**
   *
   * @param {ButtonInteraction} interaction
   */
  async execute(interaction) {
    if (interaction.message && interaction.message.deletable) {
      await interaction.message.delete().catch((err) => {
        return interaction.reply({
          content:
            "Failed to delete message.\nIf the message is ephemeral, please click 'Dismiss Message.'",
          ephemeral: true,
        });
      });
    } else
      return interaction.reply({
        content: "Failed to delete message.",
        ephemeral: true,
      });
  },
};
