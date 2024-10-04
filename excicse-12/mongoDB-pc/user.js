const mongoose = require("mongoose");

const userSchama = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    validate: {
      validator: (v) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(v);
      },
      message: (prop) => `Invalid message ${prop.v}`,
    },
  },
  password: {
    type: String,
    require: true,
    minlength: [6, "password is to short"],
  },
  roles: {
    type: [String],
    require: true,
    default: ["STUDENT"],
  },
  accountStatus: {
    type: String,
    enum: ["PANDING", "ACTIVE", "REJECTED"],
    default: "PANDING",
    require: true,
  },
});

const User = mongoose.model("register", userSchama);
module.exports = User;
