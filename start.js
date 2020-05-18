const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/QUIZAPPLICATION", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("connected with db");
    // console.log(con.connections);
  });

// include the  models
require("./models/User");
require("./models/Question");
require("./models/Quiz");
require("./models/CurrentQuiz");
require("./models/QuestionResponse");
require("./models/QuizHistory");

// start the app
const app = require("./app");
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
