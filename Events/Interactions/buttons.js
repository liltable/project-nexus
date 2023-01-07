const {
  ButtonInteraction,
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
   * @param {ButtonInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    if (!interaction.isButton()) return;
    let Button = await client.buttons.get(interaction.customId);
    if (!Button) return;

    const Message = await client.messages.get(interaction.message.id);
    if (Message) {
      if (Message !== interaction.user.id)
        return interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setColor(Colors.Red)
              .setDescription(`> This is not your button menu.`),
          ],
          ephemeral: true,
        });
    }

    try {
      Button.execute(interaction, client);
    } catch (err) {
      console.log(err);
    }
  },
};
