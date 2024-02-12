const { default: mongoose } = require("mongoose");
const mogoonse = require("mongoose");

const UserSchema = new mogoonse.Schema({
  name: String,
  email: String,
  age: Number,
  fecha: String
});

const Usemodel = mongoose.model("users", UserSchema);

module.exports = Usemodel;
