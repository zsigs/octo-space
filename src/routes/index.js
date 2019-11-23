const { renderHome , renderSignupForm , renderLoginForm , createUser , loginUser , logoutUser } = require("../controllers");

const express = require('express');
const router = express.Router();

router.use((request, response, next) => {
  console.log(request.session);
  next();
});

router.get("/", renderHome);
router.get("/login", renderLoginForm);
router.post("/login", loginUser);
router.get("/signup", renderSignupForm);
router.post("/signup", createUser);
router.get('/logout', logoutUser);

module.exports = {
  router,
};