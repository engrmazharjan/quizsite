const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const optionSchema = new Schema({
  A: {
    type: String,
  },
  B: {
    type: String,
  },
  C: {
    type: String,
  },
  D: {
    type: String,
  },
});

const quizSchema = new Schema(
  {
    quizname: {
      type: String,
    },
    qusans: [
      {
        qustion: {
          type: String,
          required: true,
        },
        answer: {
          type: String,
          required: true,
        },
        options: [optionSchema],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Quizs = mongoose.model("quiz", quizSchema);

module.exports = Quizs;
