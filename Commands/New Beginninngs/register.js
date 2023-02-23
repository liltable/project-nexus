const { ActionRowBuilder } = require("@discordjs/builders");
const { ChatInputCommandInteraction, ActionRow } = require("discord.js");
const { DefaultButtons } = require("../../default");
const { DB } = require("../../schemas");

module.exports = {
  name: "register",
  description: "Creates a Nexus profile!",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction) {
    const Player = await DB.findOne({ PlayerID: interaction.user.id });

    if (Player)
      await interaction.reply({
        content: "No duplicating accounts.",
        ephemeral: true,
      });
    else
      await DB.create({
        PlayerID: interaction.user.id,
        Profile: {
          Titles: {
            Unlocked: [
              {
                Name: "The Rising Star",
                Description: "Soon you will shine above the others.",
                Equipped: true,
              },
            ],
          },
        },
      });

    if (!interaction.replied) {
      return interaction.reply({
        content: "Success!",
        components: [
          new ActionRowBuilder().setComponents(DefaultButtons.Profile),
        ],
        ephemeral: true,
      });
    }
  },
};
