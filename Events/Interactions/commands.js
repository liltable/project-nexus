const {
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
  Colors,
} = require("discord.js");
const ms = require("ms");
const { DefaultEmbeds } = require("../../default");
module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction;
   * @param {Client} client;
   */
  async execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;
    let Command = await client.commands.get(interaction.commandName);
    if (!Command) return;

    try {
      Command.execute(interaction, client);
    } catch (err) {
      console.log(err);
    }
  },
};
