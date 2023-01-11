const { Boots } = require("../../Classes/items");

module.exports = {
  data: new Boots()
    .setDefaultDefense(10)
    .setDefaultDurability(75)
    .setGrade("F")
    .setId("testboots")
    .addAlias("tb")
    .setName("Test Boots")
    .setDescription("Testing boots.")
    .setValue(50)
    .setColor("White")
    .setEnchantable(true),
};
