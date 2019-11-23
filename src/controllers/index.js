const { renderHome , renderSignupForm , renderLoginForm } = require('./pagesController');
const { createUser , loginUser } = require('./authenticationControllers');

module.exports = {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  createUser,
  loginUser,
};