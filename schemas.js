const { Schema, model } = require("mongoose");

const NexusStorage = new Schema({
  PlayerID: String,
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
        Name: String,
        Description: String,
        Reward: Number,
      },
    ],
    Titles: {
      Unlocked: [
        {
          Name: String,
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
  },
});

module.exports = {
  DB: model("projnex", NexusStorage),
};
