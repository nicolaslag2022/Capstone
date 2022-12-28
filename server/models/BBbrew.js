const mongoose = require("mongoose");

const brewPairingsSchema = new mongoose.Schema({
  meat: {
    type: String,
    required: true,
    enum: ["Beef", "Chicken", "Fish", "Pork"]
  },

  beer: {
    type: [String],
    required: true
  }
});

const brewPairings = mongoose.model("Brew", brewPairingsSchema);

module.exports = brewPairings;
