const { renderHome , renderSignupForm , renderLoginForm } = require("./pagesController");
const { createUser , loginUser , logoutUser } = require("./authenticationControllers");

module.exports = {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  createUser,
  loginUser,
  logoutUser,
};