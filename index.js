const { Client, Collection } = require("discord.js");
const ms = require("ms");
const {
  loadEvents,
  loadWebClient,
  getClientTime,
  loadButtons,
  loadModals,
  loadSelectMenus,
  loadItems,
} = require("./functions");
const { connect, set } = require("mongoose");

const client = new Client({ intents: 32767 });
client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();
client.buttons = new Collection();
client.modals = new Collection();
client.colors = require("discord.js").Colors;
client.selectMenus = new Collection();
client.messages = new Collection();
client.items = new Collection();

var startClient = true;

if (startClient) {
  client.login(client.config.token);
  set("strictQuery", true);
  connect(client.config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log(`> Client connected to cloud storage.`);
  });
}
console.log(`> Starting client at ${getClientTime()}.`);
loadEvents(client);
loadButtons(client);
loadModals(client);
loadWebClient();
loadSelectMenus(client);
loadItems(client);

setTimeout(() => {
  if (!client.isReady())
    return console.log(`> Failed to login after five seconds.`);
}, ms("5s"));

module.exports = client;
