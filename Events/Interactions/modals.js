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

    if (!Modal) return;

    try {
      Modal.execute(interaction, client);
    } catch (err) {
      console.log(err);
    }
  },
};
