const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  description: String,
});

module.exports = mongoose.model("Quiz", quizSchema);
