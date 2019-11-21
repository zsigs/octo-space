const { renderHome , renderSignupForm } = require("./pagesController");
const { createUser } = require("./authenticationControllers");

module.exports = {
  renderHome,
  renderSignupForm,
  createUser,
};