const renderProfile = ( request, response, next ) => {
  const {username, email} = request.session.user
  response.render('user/profile', {username, email});
}

module.exports = { renderProfile }