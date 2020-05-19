const CurrentQuiz = require("../models/CurrentQuiz");

// Returns the list of questions for the current Quiz
exports.getCurrentQuiz = async (req, res) => {
  // get the current Quiz object
  let currentQuiz = await CurrentQuiz.findOne().populate([
    {
      path: "currentQuizId",
      model: "Quiz",
      populate: {
        path: "questions",
        model: "Question",
      },
    },
  ]);

  const currentTime = new Date().getTime();
  const quizStartTime = new Date(currentQuiz.currentQuizId.startTime).getTime();

  // Return empty array if quiz is yet to start
  if (currentTime < quizStartTime) return res.json([]);

  const questions = currentQuiz.currentQuizId.questions;
  res.json(questions);
};
