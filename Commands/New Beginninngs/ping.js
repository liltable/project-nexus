const { EmbedBuilder } = require("@discordjs/builders");
const { ChatInputCommandInteraction, Colors, Client } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Returns the client's latency.",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    return interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(Colors.Blue)
          .setDescription(
            `> ◜:satellite: Client latency: ${
              client.ws.ping
            }ms\n> ◟ ⌚ Uptime: <t:${parseInt(client.readyTimestamp / 1000)}:R>`
          ),
      ],
      ephemeral: true,
    });
  },
};
