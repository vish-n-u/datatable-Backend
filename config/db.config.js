const mongoose = require("mongoose");

async function createConnection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/masterCategory");
}
module.exports = createConnection