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
    if (!Command) {
      setTimeout(() => {
        if (!Command) {
          setTimeout(() => {
            if (!interaction.replied || !interaction.deferred) {
              return interaction.reply({
                embeds: [DefaultEmbeds.UnknownCommand],
                ephemeral: true,
              });
            }
          }, ms("1s"));
        }
      }, ms("2s"));
    }

    Command.execute(interaction, client).catch((e) => {
      console.log(`> Failed to execute command ${Command.name}.`);
      setTimeout(() => {
        console.log(e);
      }, ms("3s"));
    });
  },
};
