const {
  AutocompleteInteraction,
  Client,
  InteractionType,
} = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {AutocompleteInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    if (!interaction.type === InteractionType.ApplicationCommandAutocomplete)
      return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
      command.autocomplete(interaction, client);
    } catch (err) {
      console.log(err);
    }
  },
};
