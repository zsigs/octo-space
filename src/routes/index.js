const {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  renderOnboarding,
  createUser,
  loginUser,
  userLoggedIn,
  logoutUser,
  confirmUser,
  parseOnboarding,
} = require('../controllers');

const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log(req.session)
  next()
})

router.get("/", renderHome);
router.get("/login", renderLoginForm);
router.post("/login", loginUser);
router.get("/signup", renderSignupForm);
router.post("/signup", createUser);
router.get('/logout', logoutUser);
router.get('/confirm/:verificationId', confirmUser);
router.get('/onboarding', renderOnboarding);
router.post('/onboarding', parseOnboarding);

module.exports = {
  router
};
