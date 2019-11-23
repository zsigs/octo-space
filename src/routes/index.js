const {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  createUser,
  loginUser,
  userLoggedIn
} = require('../controllers');

const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log(req.session)
  next()
})

router.get('/', userLoggedIn, renderHome);
router.get('/login', renderLoginForm);
router.post('/login', loginUser);
router.get('/signup', userLoggedIn, renderSignupForm);
router.post('/signup', createUser);

module.exports = {
  router
};
