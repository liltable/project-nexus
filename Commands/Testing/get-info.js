const {
  ChatInputCommandInteraction,
  ApplicationCommandOptionType,
} = require("discord.js");
const client = require("../../");
const { DefaultEmbeds } = require("../../default");
module.exports = {
  name: "get-info",
  description: "Returns the info of an item.",
  options: [
    {
      name: "search",
      description: "Input a search term.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {client} client
   */
  async execute(interaction, client) {},
};
