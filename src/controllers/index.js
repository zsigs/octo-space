const {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  renderOnboarding,
  renderProfile,
  renderEditForm,
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
