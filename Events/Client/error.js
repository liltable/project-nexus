const { Client, EmbedBuilder, Colors } = require("discord.js");
const { inspect } = require("util");
const client = require("../../");
module.exports = {
  name: "error",
  /**
   *
   */
  async execute(error, origin) {
    const channel = client.channels.cache.get(client.config.logs);
    channel.send({
      embeds: [
        new EmbedBuilder()
          .setColor(Colors.Red)
          .setDescription(
            `> An error has occurred.\n> Command: \`${error}\`\n> Name: ${error["name"]}\n> Message: ${error["message"]}\n> Origin: ${origin}`
          )
          .setFields({
            name: "Stack:",
            value: `\`\`\`js\n${error["stack"]}\n\`\`\``,
            inline: true,
          }),
      ],
    });

    console.log(`${error}`);
  },
};
