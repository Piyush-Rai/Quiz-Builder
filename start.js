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

// start the app
const app = require("./app");
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
