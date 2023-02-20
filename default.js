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
  Menu: new ButtonBuilder()
    .setCustomId("menu")
    .setLabel("Main Menu")
    .setStyle(ButtonStyle.Success),
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

module.exports = { DefaultButtons, DefaultEmbeds, LogTypes };
