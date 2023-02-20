const { EmbedBuilder } = require("@discordjs/builders");
const { ButtonInteraction, Colors, Client } = require("discord.js");

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
      .setTitle(`Nexus | Menu`);

    interaction.reply({ embeds: [Embed] });
  },
};
