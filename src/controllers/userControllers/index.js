const { parseOnboarding } = require("./parseOnboarding");
const { createUser } = require('./createUser');
const { loginUser } = require('./loginUser');
const { logoutUser } = require('./logoutUser');
const { userLoggedIn } = require('./userLoggedIn');
const { confirmUser } = require('./confirmUser');
const { editUser } = require('./editUser');
const { editPassword } = require('./editPassword')
const { handleFollow } = require('./handleFollow')

module.exports = {
  createUser,
  loginUser,
  userLoggedIn,
  logoutUser,
  confirmUser,
  editUser,
  parseOnboarding,
  editPassword,
  handleFollow,
};
