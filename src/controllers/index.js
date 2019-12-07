const {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  renderOnboarding,
  renderTopicSection,
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
  renderTopicSection,
  createUser,
  loginUser,
  userLoggedIn,
  logoutUser,
  confirmUser,
  parseOnboarding,
};