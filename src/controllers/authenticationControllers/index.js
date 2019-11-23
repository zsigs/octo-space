const { createUser } = require('./createUser');
const { loginUser } = require('./loginUser');
const { logoutUser } = require('./logoutUser');
const { userLoggedIn } = require('./userLoggedIn');
const { confirmUser } = require('./confirmUser');

module.exports = {
  createUser,
  loginUser,
  userLoggedIn,
  logoutUser,
  confirmUser,
};
