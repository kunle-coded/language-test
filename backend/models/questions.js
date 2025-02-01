const { default: mongoose } = require("mongoose");

const questionSchema = new mongoose.Schema({
  id: Number,
  question: String,
  options: [String],
  answer: Number,
});

const Question = mongoose.model("Question", questionSchema);

module.exports = { Question };
