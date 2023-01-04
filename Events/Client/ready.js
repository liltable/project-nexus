const { ActivityType, Client } = require("discord.js");
const { loadCommands } = require("../../functions");

module.exports = {
  name: "ready",
  once: true,
  /**
   *
   * @param {Client} client
   */
  async execute(client) {
    console.log(`> Successfully logged in using account ${client.user.tag}.`);

    await client.user.setActivity(`a secret project...`, {
      type: ActivityType.Playing,
    });
    await client.user.setPresence({ status: "idle" });
    loadCommands(client);
  },
};
