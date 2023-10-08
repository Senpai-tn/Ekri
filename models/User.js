const { model, Schema } = require("mongoose");
const userSchema = new Schema({
  email: {},
  password: {},
  uid: {},
  firstName: {},
  lastName: {},
  promo: {},
  tel: {},

  role: { type: String, enum: ["a", "b"] },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
  blockedTo: { type: Date, default: null },
});

const User = model("users", userSchema);
module.exports = User;
