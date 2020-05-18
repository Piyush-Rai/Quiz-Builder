const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { USER_LEVEL } = require("../constants/accessLevel");

const userSchema = new Schema({
  googleId: String,
  name: String,
  email: String,
  semester: Number,
  questionResponse: {
    type: Schema.Types.ObjectId,
    ref: "QuestionResponse",
  },
  quizHistory: {
    type: Schema.Types.ObjectId,
    ref: "QuizHistory",
  },
  lastSubmission: String,
  accessLevel: {
    type: Number,
    default: USER_LEVEL,
  },
});

module.exports = mongoose.model("User", userSchema);
