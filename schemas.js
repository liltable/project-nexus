const { Schema, model } = require("mongoose");

const NexusStorage = new Schema({
  PlayerID: { type: String, required: true },
  Activity: {
    type: String,
    default: "Idle",
    required: true,
    enum: ["Idle", "Fighting", "Traveling"],
  },
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
          Description: { type: String, required: true },
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
      Amount: { type: Number, default: 0, required: true },
      Aliases: { type: Array, required: false, default: [] },
      Name: { type: String, required: true },
      Description: { type: String, required: false },
      Equipped: { type: Boolean, default: false, enum: [false, true] },
      Durability: { type: Number, default: 100, required: true },
      Grade: {
        type: String,
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
      Enchantments: [
        {
          Name: { type: String, required: true },
          Description: { type: String, required: true },
          ID: { type: String, required: true },
          Type: {
            type: String,
            required: true,
            default: "Any",
            enum: ["Damage", "Defense", "Skill"],
          },
          MinLevel: {
            type: Number,
            required: false,
            default: 0,
          },
        },
      ],
    },
  ],
  Fights: {
    Wins: { type: Number, required: true, default: 0 },
    Losses: { type: Number, required: true, default: 0 },
  },
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
  Logs: { type: Array, required: true, default: [] },
});

module.exports = {
  DB: model("projnex", NexusStorage),
  Fights: model("projnexfights", FightStorage),
};
