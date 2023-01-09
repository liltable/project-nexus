const { Schema, model } = require("mongoose");

const NexusStorage = new Schema({
  PlayerID: { type: String, required: true },
  Stats: {
    Defense: { type: Number, default: 10 },
    Attack: { type: Number, default: 10 },
    Health: { type: Number, default: 100 },
    MP: { type: Number, default: 100 },
  },
  Progression: {
    Level: { type: Number, default: 1 },
    XP: { type: Number, default: 0 },
  },
  Profile: {
    Achievements: [
      {
        Name: { type: String, required: true },
        Description: String,
        Reward: Number,
      },
    ],
    Titles: {
      Unlocked: [
        {
          Name: { type: String, required: true },
          Description: String,
          Equipped: { type: Boolean, default: false, enum: [false, true] },
        },
      ],
    },
  },
  Reputation: {
    Bounty: {
      Total: { type: Number, default: 0 },
      Individuals: [
        {
          Amount: { type: Number, required: true },
          IssuerID: { type: String, required: true },
          Reason: { type: String, required: false, default: "None." },
        },
      ],
    },
    Stars: { type: Number, default: 0 },
  },
  Inventory: [
    {
      ID: { type: String, required: true },
      Aliases: { type: Array, required: false, default: [] },
      Name: { type: String, required: true },
      Description: { type: String, required: false },
      Grade: {
        Value: String,
        default: "F",
        enum: ["F", "D", "C", "B", "A", "AA", "AAA", "S", "SS"],
      },
      Value: { type: Number, required: false, default: 10 },
      Type: {
        type: String,
        enum: [
          "Weapon",
          "Helmet",
          "Chestplate",
          "Boots",
          "Backpack",
          "Accessory",
          "Fragment",
          "Artifact",
        ],
        required: true,
      },
    },
  ],
});

const FightStorage = new Schema({
  FightID: { type: String, required: true },
  AttackerID: { type: String, required: true },
  DefenderID: { type: String, required: true },
  Turn: {
    player: { type: String, required: true, enum: ["Attacker", "Defender"] },
    number: { type: Number, required: true, default: 1 },
  },
  Winner: {
    type: String,
    required: true,
    enum: ["Attacker", "Defender", "Unresolved"],
    default: "Unresolved",
  },
});

module.exports = {
  DB: model("projnex", NexusStorage),
  Fights: model("projnexfights", FightStorage),
};
