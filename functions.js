async function loadFiles(dirName) {
  const { glob } = require("glob");
  const { promisify } = require("util");
  const proGlob = promisify(glob);

  const Files = await proGlob(
    `${process.cwd().replace(/\\/g, "/")}/${dirName}/**/*.js`
  );
  Files.forEach((file) => delete require.cache[require.resolve(file)]);
  return Files;
}
/**
 *
 * @param {Client} client
 * @returns
 */
async function loadEvents(client) {
  const ascii = require("ascii-table");
  const table = new ascii().setHeading("Events:", "Status:");

  await client.events.clear();

  const Files = await loadFiles("Events");
  if (Files.length !== 0) {
    Files.forEach((file) => {
      const event = require(file);
      const execute = (...args) => event.execute(...args, client);
      client.events.set;
      event.name, execute;

      if (event.rest) {
        if (event.once) client.execute(event.name, execute);
        else client.rest.on(event.name, execute);
      } else {
        if (event.once) client.once(event.name, execute);
        else client.on(event.name, execute);
      }

      table.addRow(event.name, "🟩");
    });
  } else table.addRow(`BLANK`, "🟠");

  return console.log(
    table.toString(),
    `\n> Successfully loaded ${Files.length} event(s).`
  );
}

/**
 *
 * @param {Client} client
 * @returns
 */
async function loadCommands(client) {
  const ascii = require("ascii-table");
  const table = new ascii().setHeading("Commands:", "Permission:", "Status:");

  await client.commands.clear();
  let CommandsArray = [];

  const Files = await loadFiles("Commands");
  if (Files.length !== 0) {
    Files.forEach((file) => {
      const command = require(file);
      if (!command.name) return table.addRow("UNDEFINED", "🔴");
      client.commands.set(command.name, command);
      CommandsArray.push(command);

      table.addRow(command.name, "🟩");
    });
  } else return table.addRow("BLANK", "🟠");

  client.application.commands.set(CommandsArray);

  client.guilds.cache.forEach(async (guild) => {
    if (!guild.members.fetch(client.ownerId)) {
      g.commands.cache.delete(CommandsArray);
      guild.leave();
      console.log(`> Owner not found. Left ${guild.name}.`);
    } else {
      guild.commands.cache.set(CommandsArray);
      console.log(`> Loaded commands for ${guild.name}.`);
    }
  });

  return console.log(
    table.toString(),
    `\n>  Successfully loaded ${CommandsArray.length} command(s).`
  );
}

const { Client } = require("discord.js");
const { Item } = require("./Classes/item");
/**
 *
 * @param {Client} client
 * @returns
 */

async function loadWebClient() {
  const express = require("express");
  const app = express();
  const port = 3000;
  app.listen(port, () => {
    console.log(`> Loaded web client.`);
  });
  app.get("/", (req, res) => {
    res.send("Loaded web client.");
  });
}
function getClientTime() {
  const time =
    new Date(Date.now()).getHours() +
    ":" +
    new Date(Date.now()).getMinutes() +
    ":" +
    new Date(Date.now()).getSeconds();
  return time;
}
/**
 *
 * @param {Client} client
 * @returns
 */
async function loadButtons(client) {
  const ascii = require("ascii-table");
  const table = new ascii().setHeading("Button:", "Status");
  const Files = await loadFiles("Buttons");

  await client.buttons.clear();
  const Buttons = [];
  if (Files.length !== 0) {
    Files.forEach((file) => {
      const button = require(file);
      if (!button.id) return table.addRow("INVALID", "🟥");
      table.addRow(button.id, "🟩");
      client.buttons.set(button.id, button);
      Buttons.push(button);
    });
  } else table.addRow("BLANK.", "🟠");
  console.log(
    table.toString(),
    `\n> Successfully loaded ${Buttons.length} buttons.`
  );
}
/**
 *
 * @param {Client} client
 * @returns
 */
async function loadModals(client) {
  await client.modals.clear();
  const ascii = require("ascii-table");
  const table = new ascii().setHeading("Modal:", "Status:");
  const Modals = [];
  const Files = await loadFiles("Modals");
  if (Files.length !== 0) {
    Files.forEach((file) => {
      const modal = require(file);
      if (!modal.id) return table.addRow("UNDEFINED", "🟥");

      table.addRow(modal.id, "🟩");
      client.modals.set(modal.id, modal);
      Modals.push(modal);
    });
  } else return table.addRow("Blank.", "🟠");
  console.log(
    table.toString(),
    `\n> Successfully loaded ${Modals.length} modals.`
  );
}
/**
 *
 * @param {Client} client
 * @returns
 */
async function loadSelectMenus(client) {
  await client.selectMenus.clear();
  const ascii = require("ascii-table");
  const table = new ascii().setHeading("Menus:", "Status:");
  const Menus = [];
  const Files = await loadFiles("Menus");
  if (Files.length !== 0) {
    Files.forEach((file) => {
      const menu = require(file);
      if (!menu.id) return table.addRow("UNDEFINED", "🟥");
      else table.addRow(menu.id, "🟩");
      client.selectMenus.set(menu.id, menu);
      Menus.push(menu);
    });
  } else return table.addRow("Blank.", "🟥");
  console.log(
    table.toString(),
    `\n> Successfully loaded ${Menus.length} select-menus.`
  );
}
/**
 *
 * @param {Client} client
 * @returns
 */
async function loadItems(client) {
  await client.items.clear();
  const ascii = require("ascii-table");
  const table = new ascii().setHeading("Items:", "Status:");
  const Items = [];
  const Files = await loadFiles("Items");
  if (Files.length !== 0) {
    Files.forEach((file) => {
      const item = require(file);
      const { data } = item;
      if (!data.id) return table.addRow("UNDEFINED", "🟥");
      if (!data.name) return table.addRow(data.id, "NO NAME");
      else table.addRow(data.name, "🟩");
      Items.push(data);
      client.items.set(item.data.id, data);
    });
  } else table.addRow("Blank.", "🟥");
  return console.log(
    table.toString(),
    `\n> Successfully loaded ${Items.length} items.`
  );
}

module.exports = {
  loadEvents,
  loadCommands,
  loadFiles,
  loadWebClient,
  getClientTime,
  loadButtons,
  loadModals,
  loadSelectMenus,
  loadItems,
};
