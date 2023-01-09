const { AutocompleteInteraction, Client } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {AutocompleteInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) return;
    if (!interaction.isAutocomplete()) return;

    try {
      command.autocomplete(interaction, client);
    } catch (err) {
      console.log(err);
    }
  },
};
