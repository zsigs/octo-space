const { User } = require('../../models');

const userLoggedIn = (request, response, next) => {
  if (request.session.user) {
    next();
  } else {
    response.redirect('/');
  }
};

module.exports = {
  userLoggedIn
};
