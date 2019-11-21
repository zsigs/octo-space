const renderSignupForm = (request, response, next) => {
  response.render("signup");
};

module.exports = {
  renderSignupForm,
};