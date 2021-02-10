const express = require("express");

const router = express.Router();

// HOME: IM USELESS
router.get("/home", (request, response) => {
  console.log(
    "🚀 ~ file: useless.js ~ line 7 ~ router.get ~ request",
    request.whatever
  );

  response.json({ message: "HELLO" });
});

module.exports = router;
