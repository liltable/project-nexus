const { EmbedBuilder } = require("@discordjs/builders");
const { default: aveta } = require("aveta");
const { ButtonInteraction, Client, ActionRowBuilder } = require("discord.js");
const { DefaultButtons } = require("../../default");
const { Formatting } = require("../../embeds");
const { DB } = require("../../schemas");

module.exports = {
  id: "profile",
  /**
   *
   * @param {ButtonInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const Player = await DB.findOne({ PlayerID: interaction.user.id });
    const Embed = new EmbedBuilder()
      .setAuthor({
        iconURL: interaction.user.avatarURL(),
        name: interaction.user.username + "#" + interaction.user.discriminator,
      })
      .setTitle(`Nexus | Profile`)
      .setDescription(
        `*${
          Player.Profile.Titles.Unlocked.find((title) => title.Equipped == true)
            .Name || "The Rising Star"
        }*`
      )
      .setFields(
        {
          name: "Progression:",
          value: `> Level: ${Player.Progression.Level}\n> XP: ${Player.Progression.XP}
        `,
          inline: true,
        },
        {
          name: "Reputation:",
          value: `> Bounty: ${Formatting.Coin} ${aveta(
            Player.Reputation.Bounty.Total,
            { lowercase: true, digits: 2 }
          )}`,
          inline: true,
        },
        {
          name: "Stats:",
          value: `> Attack: ${aveta(Player.Stats.Attack, {
            lowercase: true,
            digits: 2,
          })}\n> Defense: ${aveta(Player.Stats.Defense, {
            lowercase: true,
            digits: 2,
          })}\n> Health: ${aveta(Player.Stats.Health, {
            lowercase: true,
            digits: 2,
          })}\n> MP: ${aveta(Player.Stats.MP, { lowercase: true, digits: 2 })}`,
          inline: true,
        },
        {
          name: "Inventory:",
          value: `> Length: ${Player.Inventory.length}\n> Value: ${
            Formatting.Coin
          } ${Player.Inventory.reduce((total, item) => {
            return total + item.Value;
          }, 0)}`,
          inline: true,
        },
        {
          name: "Fights:",
          value: `> Wins: ${Player.Fights.Wins}\n> Losses: ${
            Player.Fights.Losses
          }\n> W/R Rate: ${
            Math.round((Player.Fights.Wins / Player.Fights.Losses) * 100) +
              "%" || "N/A"
          }`,
          inline: true,
        }
      );

    return interaction.reply({
      embeds: [Embed],
      ephemeral: true,
    });
  },
};
