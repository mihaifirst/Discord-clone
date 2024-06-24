const mongoose = require("mongoose");

const serverSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
  },
  //   channels: []
});

module.exports = mongoose.model("Server", serverSchema);
