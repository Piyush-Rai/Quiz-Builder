const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const currentQuizSchema = new Schema({
  currentQuizId: {
    type: Schema.Types.ObjectId,
    ref: "Quiz",
  },
});

module.exports = mongoose.model("CurrentQuiz", currentQuizSchema);
