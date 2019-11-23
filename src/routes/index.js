<<<<<<< HEAD
const { renderHome , renderSignupForm , renderLoginForm , createUser , loginUser } = require('../controllers');
=======
const { renderHome , renderSignupForm , renderLoginForm , createUser , loginUser , logoutUser } = require("../controllers");
>>>>>>> creating-users

const express = require('express');
const router = express.Router();

<<<<<<< HEAD
router.get('/', renderHome);
router.get('/login', renderLoginForm);
router.post('/login', loginUser);
router.get('/signup', renderSignupForm);
router.post('/signup', createUser);
=======
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
>>>>>>> creating-users

module.exports = {
  router,
};