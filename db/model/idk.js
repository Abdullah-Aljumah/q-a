const mongoose = require("mongoose")

const idk = new mongoose.Schema({
  idk: { type: String },
});

module.exports = mongoose.model("idk", idk);
