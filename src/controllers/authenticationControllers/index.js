const { createUser } = require('./createUser');
const { loginUser } = require('./loginUser');
const { logoutUser } = require('./logoutUser');
const { userLoggedIn } = require('./userLoggedIn');

module.exports = {
  createUser,
  loginUser,
  userLoggedIn,
  logoutUser,
};
