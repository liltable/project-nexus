const { AttackTypes } = require("../Types/attack-types");

class Attack {
  constructor() {
    this.name = null;
    this.description = null;
    this.type = null;
    this.requiredLevel = 0;
    this.lowestdmg = null;
    this.highestdmg = null;
    this.damage = Math.ceil(Math.random(this.lowestdmg, this.highestdmg));
    this.critperecent = null;
    this.criticalDamage = Math.floor(this.damage * this.critperecent);
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
   * @param  {AttackTypes} t
   */
  setType(t) {
    this.type = t;
    return this;
  }
  /**
   *
   * @param {Number} l
   */
  setRequiredLevel(l) {
    this.requiredLevel = l;
    return this;
  }
  /**
   *
   * @param {Number} d
   */
  setLowestDamage(d) {
    this.lowestdmg = d;
    return this;
  }
  /**
   *
   * @param {Number} d
   */
  setHighestDamage(d) {
    this.highestdmg = d;
    return this;
  }
  /**
   *
   * @param {Number} d
   */
  setCriticalPercent(p) {
    this.critperecent = 1 + +`0.${p}`;
    return this;
  }
  getDamage() {
    return this.damage;
  }
}

module.exports = { Attack };
