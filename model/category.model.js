const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  vals: {
    required: true,
    type: Array,
  },
  valTypes: {
    required: true,
    type: Map,
  },
});

module.exports = mongoose.model("categories", categorySchema);
