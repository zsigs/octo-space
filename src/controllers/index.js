const {
  renderHome,
  renderSignupForm,
  renderLoginForm
} = require('./pagesController');

const {
  createUser,
  loginUser,
  userLoggedIn,
  logoutUser,
  confirmUser,
} = require('./authenticationControllers');

module.exports = {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  createUser,
  loginUser,
  userLoggedIn,
  logoutUser,
  confirmUser,
};