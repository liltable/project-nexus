const {
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  Colors,
} = require("discord.js");

const DefaultButtons = {
  Exit: new ButtonBuilder()
    .setCustomId("exit")
    .setLabel("❌")
    .setStyle(ButtonStyle.Danger),
};
const DefaultEmbeds = {
  UnknownMember: new EmbedBuilder()
    .setColor(Colors.Red)
    .setDescription(`> :no_entry_sign: Unknown server member.`),
  UnknownChannel: new EmbedBuilder()
    .setColor(Colors.Red)
    .setDescription(`> :no_entry_sign: Unknown server channel.`),
  InvalidPermissions: new EmbedBuilder()
    .setColor(Colors["Red"])
    .setDescription(`> :no_entry_sign: Invalid permissions.`),
  UnknownButton: new EmbedBuilder()
    .setColor(Colors["Red"])
    .setDescription(`> :no_entry_sign: Unknown client button.`),
  PermsRequired: new EmbedBuilder()
    ["setColor"](Colors.Red)
    ["setDescription"](`> :no_entry_sign: Missing required permissions.`),
  UnknownRole: new EmbedBuilder()
    .setColor(Colors.Red)
    .setDescription(`> :no_entry_sign: Unknown server role.`),
  UnknownWarn: new EmbedBuilder()
    .setColor(Colors.Red)
    .setDescription(`> :no_entry_sign: Unknown warning.`),
  UnknownEvent: new EmbedBuilder()
    .setColor(Colors.Red)
    .setDescription(`> :no_entry_sign: Unknown event.`),
  UnknownMenu: new EmbedBuilder()
    .setColor(Colors.Red)
    .setDescription(`> :no_entry_sign: Unknown select-menu.`),
  UnknownModal: new EmbedBuilder()
    .setColor(Colors.Red)
    .setDescription(`> :no_entry_sign: Unknown modal.`),
  UnknownCommand: new EmbedBuilder()
    .setColor(Colors.Red)
    .setDescription(`> :no_entry_sign: Unknown command.`),
  UnknownItem: new EmbedBuilder()
    .setColor(Colors.Red)
    .setDescription(`> :no_entry_sign: Unknown item.`),
};

const LogTypes = {
  ChannelLogs: "channel",
  ServerLogs: "server",
  MemberLogs: "member",
  RoleLogs: "roles",
  StaffLogs: "staff",
  MessageLogs: "message",
};

class Item {
  constructor() {
    this.aliases = [];
    this.id = null;
    this.name = null;
    this.description = null;
    this.grade = null;
    this.value = null;
    this.type = null;
  }
  setName(n) {
    this.name = n;
    return this;
  }
  setDescription(d) {
    this.description = d;
    return this;
  }
  addAliases(a) {
    this.aliases.push(a);
    return this;
  }
  setID(id) {
    this.id = id;
    return this;
  }
  setGrade(g) {
    if (g === "F" || "D" || "C" || "B" || "A" || "AA" || "AAA" || "S" || "SS") {
      this.grade = g;
    }
    return this;
  }
  setValue(v) {
    this.value = v;
    return this;
  }
  setType(t) {
    if (
      t === "Weapon" ||
      "Helmet" ||
      "Chestplate" ||
      "Boots" ||
      "Backpack" ||
      "Accessory" ||
      "Fragment" ||
      "Artifact"
    ) {
      this.type = t;
    }
    return this;
  }
}

class Weapon extends Item {
  constructor() {
    super();
  }
}
module.exports = { DefaultButtons, DefaultEmbeds, LogTypes, Item };
