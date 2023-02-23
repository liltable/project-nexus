const { EmbedBuilder } = require("@discordjs/builders");
const { ButtonInteraction, ActionRowBuilder } = require("discord.js");
const { DefaultButtons } = require("../../default");
const { DB } = require("../../schemas");

module.exports = {
  id: "inventory",
  back: "start",
  /**
   *
   * @param {ButtonInteraction} interaction
   */
  async execute(interaction) {
    const Player = await DB.findOne({ PlayerID: interaction.user.id });
    const Embed = new EmbedBuilder()
      .setAuthor({
        iconURL: interaction.user.avatarURL(),
        name: interaction.user.username + "#" + interaction.user.discriminator,
      })
      .setTitle("Nexus | Inventory");

    const Inventory = [];
    if (Player.Inventory.length > 0) {
      Player.Inventory.forEach((item) => {
        Inventory.push(`> ${item.Amount} **${item.Name}** (${item.Grade})`);
      });
      Embed.setDescription(Inventory.join(`\n`).toString());
    } else {
      Embed.setDescription(`> Your inventory is very much empty.`);
    }

    return interaction.reply({
      embeds: [Embed],
      ephemeral: true,
    });
  },
};
