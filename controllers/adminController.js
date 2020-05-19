const Quiz = require("../models/Quiz");
const CurrentQuiz = require("../models/CurrentQuiz");
const Question = require("../models/Question");
// Create or Edit a  Quiz
exports.addQuiz = async (req, res) => {
  try {
    // Check if quiz contains an _id field
    if (req.body._id) {
      // Update the quiz
      const newQuiz = await Quiz.findByIdAndUpdate(req.body._id, {
        startTime: new Date(req.body.startTime),
        endTime: new Date(req.body.endTime),
        description: req.body.description,
        instruction: req.body.instruction,
        isEnable: req.body.isEnable,
      });

      res.json({
        quizEditSuccess: "Quiz edited Successfully!",
        newQuiz,
      });
    } else {
      // Create a new quiz
      const newQuiz = await new Quiz({
        startTime: new Date(req.body.startTime),
        endTime: new Date(req.body.endTime),
        questions: req.body.questions,
        description: req.body.description || "",
        instruction: req.body.instruction || "",
      }).save();

      res.json({
        quizSubmissionSuccess: "Quiz Submission Successful!",
        newQuiz,
      });
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get quizzes
exports.getQuizzes = async (req, res) => {
  const quizzes = await Quiz.find({ isEnable: 1 })
    .sort({ startTime: -1 })
    .limit(5);

  res.json(quizzes);
};

// Set current quiz
// a quiz will be present in req.body
// req.body._id will give the id of the quiz
exports.setCurrentQuiz = async (req, res) => {
  const currentQuiz = await CurrentQuiz.findOne();

  // Update it's currentQuizId if req.body has an _id property
  if (req.body._id) {
    currentQuiz["currentQuizId"] = req.body._id;
    currentQuiz.save();
  }
  res.json({ message: "Current Quiz Changed Successfully!" });
};
