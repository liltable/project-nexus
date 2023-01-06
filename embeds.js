const { Colors, EmbedBuilder } = require("discord.js");
const { NexusPFP } = require("./Images/Client/url");

module.exports = {
  SystemEmbeds: {
    Start: new EmbedBuilder()
      .setColor(Colors.Blue)
      .setAuthor({ iconURL: NexusPFP, name: "Project Nexus" })
      .setDescription(
        `> *After your generic global disaster that ruined most modern civilizations, Nexus was formed in order to keep the world barely functioning and alive. Any scraps of the previously highly advanced technology from the previous generation is highly valued and can be modified for any use. Generic dungeons with generic monsters started appearing in various places around the world. Shady traveling agencies quickly seized control of the remaining warp stations unstably linked to the remaining cities of the world. Your job is to simply stay alive and at the top of your game. The more people know and fear you, the more successful you are. The most powerful people in this new reality are the ones that aren't afraid to excersize their power. You start with practically nothing. It's your job to build your way up. Welcome to the new world.*\n\n\ **Welcome to Nexus!**`
      ),
  },
  Formatting: {
    Border: "︱",
  },
};
