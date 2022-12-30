const mongoose = require("mongoose");

const brewPairingsSchema = new mongoose.Schema({
  pairing: {
    type: String,
    required: true,
    enum: ["beefapa", "chickenlager", "fishpilsner", "porkgerlager"]
  },
  userchoice: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const brewPairings = mongoose.model("Brew", brewPairingsSchema);

module.exports = brewPairings;
