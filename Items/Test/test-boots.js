const { Boots } = require("../../Classes/item");

module.exports = {
  data: new Boots()
    .setDefaultDefense(10)
    .setDefaultDurability(75)
    .setGrade("F")
    .setId("test-boots")
    .addAlias("tb")
    .setName("Test Boots")
    .setDescription("Testing boots.")
    .setValue(50),
};