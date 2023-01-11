const { Weapon } = require("../../Classes/items");
module.exports = {
  data: new Weapon()
    .setBaseDamage(10)
    .setColor("Red")
    .setDescription("Testing sword.")
    .setName("Test Sword")
    .setValue(5)
    .setGrade("F")
    .setId("testsword")
    .addAlias("ts")
    .setEnchantable(false),
};
