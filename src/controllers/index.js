const {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  renderOnboarding,
  renderProfile,
  renderEditForm,
  renderTopicSection,
} = require('./pagesController');

const {
  createUser,
  loginUser,
  userLoggedIn,
  logoutUser,
  confirmUser,
  editUser
} = require('./userControllers');

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
  renderProfile,
  renderEditForm,
  editUser
};
