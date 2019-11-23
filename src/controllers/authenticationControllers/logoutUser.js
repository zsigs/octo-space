const logoutUser = (request, response, next) => {
  delete(request.session);
  response.redirect('/');
};

module.exports = {
  logoutUser,
};