const mongoose = require("mongoose");

const serverSchema = mongoose.Schema({
  name: {
    type: String,
  },
});

const serversCollection =  mongoose.model("Server", serverSchema);
module.exports = serversCollection;