const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactusSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    country: {
      type: String,
      default: "",
    },
    subject: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const contact = mongoose.model("Contactus", contactusSchema);

module.exports = contact;
