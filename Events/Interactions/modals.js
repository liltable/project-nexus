const {
  ModalSubmitInteraction,
  EmbedBuilder,
  Colors,
  Client,
} = require("discord.js");
const ms = require("ms");
const { DefaultEmbeds } = require("../../default");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {ModalSubmitInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    if (!interaction.isModalSubmit()) return;
    const Modal = await client.modals.get(interaction.customId);

    if (!Modal) {
      setTimeout(() => {
        if (!interaction.replied || !interaction.deferred) {
          return interaction.reply({
            embeds: [DefaultEmbeds.UnknownModal],
            ephemeral: true,
          });
        }
      }, ms("5s"));
    }

    Modal.execute(interaction, client).catch((e) => {
      console.log(
        `Failed to execute modal ${interaction.customId} with user ${interaction.user.username}.`
      );
      setTimeout(() => {
        console.log(e);
      }, ms("3s"));
    });
  },
};
