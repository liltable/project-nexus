const { EmbedBuilder } = require("@discordjs/builders");
const {
  ChatInputCommandInteraction,
  ApplicationCommandOptionType,
  Client,
} = require("discord.js");

module.exports = {
  name: "quick-button",
  description: "Executes a button interaction.",
  options: [
    {
      name: "id",
      description: "The ID of the button.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const ID = interaction.options.getString("id", true);

    const Button = client.buttons.get(ID);
    if (!Button)
      return interaction.reply({
        embeds: [
          new EmbedBuilder().setDescription(
            `> :no_entry_sign: No button found.`
          ),
        ],
        ephemeral: true,
      });

    await Button.execute(interaction, client);
  },
};
