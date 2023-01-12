class Enemy {
  constructor() {
    this.name = null;
    this.description = null;
    this.level = null;
    this.id = null;
    this.hp = null;
    this.attacks = [];
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
   * @param {Number} hp
   */
  setDefaultHP(hp) {
    this.hp = hp;
    return this;
  }
  addNormalAttack(a) {
    this.attacks.push(a);
    return this;
  }
  getRandomAttack() {
    const Random = Math.random(1, this.attacks.length);
    return this.attacks[Random];
  }
}

class Boss extends Enemy {
  constructor() {
    super();
    this.specials = [];
  }
  addSpecialAttack(a) {
    this.specials.push(a);
    return this;
  }
  getRandomSpecial() {
    const Random = Math.random(1, this.specials.length);
    return this.specials[Random];
  }
}

module.exports = {
  Enemy,
  Boss,
};
