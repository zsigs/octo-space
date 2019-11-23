<<<<<<< HEAD
const { renderHome , renderSignupForm , renderLoginForm } = require('./pagesController');
const { createUser , loginUser } = require('./authenticationControllers');
=======
const { renderHome , renderSignupForm , renderLoginForm } = require("./pagesController");
const { createUser , loginUser , logoutUser } = require("./authenticationControllers");
>>>>>>> creating-users

module.exports = {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  createUser,
  loginUser,
  logoutUser,
};