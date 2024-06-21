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
  // status: {
  //   type: String,
  //   enum: StatusEnum,
  // },
});

const usersCollection = mongoose.model("User", userSchema);
module.exports = usersCollection;
