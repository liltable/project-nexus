const {
  ApplicationCommandOptionType,
  AutocompleteInteraction,
  ChatInputCommandInteraction,
  Client,
} = require("discord.js");
const client = require("../../");
const { getItemsArray } = require("../../functions");

const { Item } = require("../../Classes/items");
module.exports = {
  name: "get-info",
  description: "Returns the info of an item.",
  options: [
    {
      name: "search",
      description: "Input a search term.",
      type: ApplicationCommandOptionType.String,
      required: true,
      autocomplete: true,
    },
  ],
  /**
   *
   * @param {AutocompleteInteraction} interaction
   * @param {client} client
   */
  async autocomplete(interaction, client) {
    const FocusedOption = interaction.options.getFocused(true);
    if (FocusedOption.name !== "search") return;
    const choices = (await getItemsArray()).map((item) => item.name);
    const filtered = choices.filter((choice) =>
      choice.startsWith(FocusedOption.value)
    );
    await interaction.respond(
      filtered.map((choice) => ({ name: choice, value: choice }))
    );
  },
  async execute(interaction) {
    const client = require("../../");
    const Option = interaction.options.getString("search", true);
    const Item = await client.items.find(
      /**
       *
       * @param {Item} item
       * @returns
       */
      (item) =>
        item.id === Option ||
        item.name === Option ||
        item.aliases.includes(Option)
    );

    await interaction.reply({ embeds: [Item.formatAsEmbed()] });
  },
};
