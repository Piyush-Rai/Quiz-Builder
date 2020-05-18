const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
router.get("/welcome", (req, res) => {
  res.send("set up done");
});

module.exports = router;
