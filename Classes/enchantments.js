class Enchantments {
  constructor() {
    this.name = null;
    this.description = null;
    this.id = null;
    this.type = null;
    this.minlvl = 0;
    this.level = 0;
  }
  /**
   *
   * @param {String} n
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
   * @param {String} id
   */
  setID(id) {
    this.id = id;
    return this;
  }
  /**
   *
   * @param {Number} lvl
   */
  setMinLevel(lvl) {
    this.minlvl = lvl;
    return this;
  }
  /**
   *
   * @param {Number} lvl
   * @returns
   */
  setLevel(lvl) {
    this.level = lvl;
    return this;
  }
}

module.exports = {
  Enchantments,
};
