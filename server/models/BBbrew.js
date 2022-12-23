const mongoose = require("mongoose");

const brewPairings = new mongoose.Schema({
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

const brewPairings = mongoose.model("Brew", brewPairings);

module.exports = Brew;
