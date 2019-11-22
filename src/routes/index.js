const { renderHome , renderSignupForm , renderLoginForm , createUser , loginUser } = require("../controllers");

const express = require('express');
const router = express.Router();

router.get("/", renderHome);
router.get("/login", renderLoginForm);
router.post("/login", loginUser);
router.get("/signup", renderSignupForm);
router.post("/signup", createUser);

module.exports = {
  router,
};