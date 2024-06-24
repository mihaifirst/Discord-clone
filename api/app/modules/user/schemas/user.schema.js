const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
  // status: {
  //   type: String,
  //   enum: StatusEnum,
  // },
  servers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Server",
  }],
});

const usersCollection = mongoose.model("User", userSchema);
module.exports = usersCollection;

