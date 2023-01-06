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
    if (!Button) {
      setTimeout(() => {
        if (!Button) {
          setTimeout(() => {
            if (!interaction.replied || !interaction.deferred) {
              return interaction.reply({
                embeds: [DefaultEmbeds.UnknownButton],
                ephemeral: true,
              });
            }
          }, ms("1s"));
        }
      }, ms("2s"));
    }

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

    Button.execute(interaction, client).catch((e) => {
      console.log(`Failed to execute button ${interaction.customId}.`);
      return setTimeout(() => {
        console.log(e);
      }, ms("3s"));
    });
  },
};
