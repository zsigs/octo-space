const { User } = require('../../models');

const editInterests = async (request, response, next) => {
  response.render('onboarding');
};

module.exports = {
  editInterests
};