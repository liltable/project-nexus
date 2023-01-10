class Item {
  constructor() {
    this.name = null;
    this.description = null;
    this.aliases = [];
    this.grade = null;
    this.value = 10;
    this.id = null;
  }
  /**
   *
   * @param {String} id
   */
  setId(id) {
    this.id = id;
    return this;
  }
  /**
   *
   * @param {String} n
   * @returns
   */
  setName(n) {
    this.name = n;
    return this;
  }
  /**
   *
   * @param {String} d
   */
  setDescription(d) {
    this.description = d;
    return this;
  }
  /**
   *
   * @param {String} a
   */
  addAlias(a) {
    this.aliases.push(a);
    return this;
  }
  /**
   *
   * @param {Number} v
   */
  setValue(v) {
    this.value = v;
    return this;
  }
  /**
   *
   * @param {String} g
   */
  setGrade(g) {
    if (["F", "D", "C", "B", "A", "AA", "AAA", "S", "SS"].includes(g)) {
      this.grade = g;
      return this;
    }
  }
}

class Weapon extends Item {
  constructor() {
    super();
    this.type = "Weapon";
    this.damage = null;
    this.level = 1;
  }
  /**
   *
   * @param {Number} d
   */
  setBaseDamage(d) {
    this.damage = d;
    return this;
  }
  levelUp() {
    this.level++;
    return this;
  }
}

class Helmet extends Item {
  constructor() {
    super();
    this.type = "Helmet";
    this.level = 1;
    this.durability = 100 * +this.level;
    this.defense = 10 * +this.durability;
  }
  /**
   *
   * @param {Number} d
   */
  setDefaultDefense(d) {
    this.d = d;
    return this;
  }
  /**
   *
   * @param {Number} d
   */
  setDefaultDurability(d) {
    this.durability = d;
    return this;
  }
  levelUp() {
    this.level++;
    return this;
  }
}
class Chestplate extends Item {
  constructor() {
    super();
    this.type = "Helmet";
    this.level = 1;
    this.durability = 100 * +this.level;
    this.defense = 10 * +this.durability;
  }
  /**
   *
   * @param {Number} d
   */
  setDefaultDefense(d) {
    this.d = d;
    return this;
  }
  /**
   *
   * @param {Number} d
   */
  setDefaultDurability(d) {
    this.durability = d;
    return this;
  }
  levelUp() {
    this.level++;
    return this;
  }
}
class Boots extends Item {
  constructor() {
    super();
    this.type = "Helmet";
    this.level = 1;
    this.durability = 100 * +this.level;
    this.defense = 10 * +this.durability;
  }
  /**
   *
   * @param {Number} d
   */
  setDefaultDefense(d) {
    this.defense = d;
    return this;
  }
  /**
   *
   * @param {Number} d
   */
  setDefaultDurability(d) {
    this.durability = d;
    return this;
  }
  levelUp() {
    this.level++;
    return this;
  }
}

module.exports = {
  Item,
  Weapon,
  Boots,
  Chestplate,
  Helmet,
};
