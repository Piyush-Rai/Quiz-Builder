const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const quizController = require("../controllers/quizController");
const questionController = require("../controllers/questionController");

router.get("/welcome", (req, res) => {
  res.send("set up done");
});

//questions route
router.post("/api/question/new", questionController.addQuestions);

router.post("/api/question/edit", questionController.editQuestion);

// quiz routes

router.get("/api/quiz/current", quizController.getCurrentQuiz);

router.post("/api/admin/setCurrentQuiz", adminController.setCurrentQuiz);

router.post("/api/admin/quiz/new", adminController.addQuiz);

router.get("/api/admin/quiz", adminController.getQuizzes);

module.exports = router;
