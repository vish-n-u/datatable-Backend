const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  data: {
    type: Map,
    required: true,
  },
});

module.exports = mongoose.model("products", productSchema);
