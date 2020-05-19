const Question = require("../models/Question");

exports.addQuestions = async (req, res) => {
  console.log(req.body.docs);
  const questions = await Question.collection.insert(req.body.docs);

  res.json({
    quesSubmissionSuccess: "Question Submission Successful!",
    data: questions.ops,
  });
};

exports.editQuestion = async (req, res) => {
  const newQues = await Question.findByIdAndUpdate(req.body._id, {
    text: req.body.text,
    choices: req.body.choices,
    correctAnsIndex: req.body.correctAnsIndex,
    ansDescription: req.body.ansDescription,
    tag: req.body.tag,
    isEnable: req.body.isEnable,
  });

  res.json({
    quizEditSuccess: "Quiz edited Successfully!",
    newQues,
  });
};
