const {
  renderHome,
  renderSignupForm,
  renderLoginForm
} = require('./pagesController');
const {
  createUser,
  loginUser,
  userLoggedIn
} = require('./authenticationControllers');

module.exports = {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  createUser,
  loginUser,
  userLoggedIn
};
