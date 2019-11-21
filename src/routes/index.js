const { renderHome , renderSignupForm } = require("../controllers");

const express = require('express');
const router = express.Router();

router.get("/", renderHome);
router.get("/signup", renderSignupForm);

module.exports = {
  router,
};