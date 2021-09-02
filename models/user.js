var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose"); // for storing username and password(hash formate)

var User = new Schema({
  college: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  mobile: {
    type: Number,
  },
  score: {
    type: Number,
    default: 0,
  },

  admin: {
    type: Boolean,
    default: false,
  },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);
