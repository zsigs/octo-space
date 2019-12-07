const {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  renderOnboarding,
  renderProfile,
  renderEditForm,
  renderTopicSection,
  renderEditPasswordForm
} = require('./pagesController');

const {
  createUser,
  loginUser,
  userLoggedIn,
  logoutUser,
  confirmUser,
  editUser,
  parseOnboarding,
  editPassword
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
  editUser,
  renderEditPasswordForm,
  editPassword
};
