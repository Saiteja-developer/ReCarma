const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/", async (req, res) => {
  // Touch MongoDB (very lightweight)
  const count = await User.countDocuments();

  res.json({
    status: "ok",
    usersCount: count,
    timestamp: new Date()
  });
});

module.exports = router;
