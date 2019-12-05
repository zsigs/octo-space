const {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  renderOnboarding,
} = require('./pagesController');

const {
  createUser,
  loginUser,
  userLoggedIn,
  logoutUser,
  confirmUser,
} = require('./authenticationControllers');

const {
  parseOnboarding,
} = require('./userControllers');

module.exports = {
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
};