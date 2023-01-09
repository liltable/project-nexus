const {
  ApplicationCommandOptionType,
  AutocompleteInteraction,
  ChatInputCommandInteraction,
  Client,
} = require("discord.js");
const client = require("../../");
const Items = [];
client.items.forEach((item) => Items.push({ name: item.name, value: item.id }));
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
      choices: Items,
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
    const choices = await client.items.map((item) => {
      return item.id;
    });
    const filtered = choices.filter((choice) =>
      choice.startsWith(FocusedOption.value)
    );
    await interaction.respond(
      filtered.map((choice) => ({ name: choice, value: choice }))
    );
  },
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const Option = interaction.options.getString("search", true);
    const Item = await client.items.find((item) => item.id === Option);

    return interaction.reply({ content: `${Item}` });
  },
};
