const mongoose = require("mongoose");

const brewPairingsSchema = new mongoose.Schema({
  userchoice: {
    type: String
    //validate: /^[A-Za-z0-9 ]*$/
  },
  pairing: [String]
});

const brewPairings = mongoose.model("Brew", brewPairingsSchema);

module.exports = brewPairings;
