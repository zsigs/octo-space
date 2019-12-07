const {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  renderProfile,
  renderEditForm
} = require('./pagesController');

const {
  createUser,
  loginUser,
  userLoggedIn,
  logoutUser,
  confirmUser,
  editUser
} = require('./userControllers');

module.exports = {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  createUser,
  loginUser,
  userLoggedIn,
  logoutUser,
  confirmUser,
  renderProfile,
  renderEditForm,
  editUser
};
