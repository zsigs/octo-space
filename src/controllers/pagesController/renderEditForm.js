const renderEditForm = (request, response, next ) => {
  const { email, username} = request.session.user
  response.render('user/editUser', { email, username})
}

module.exports = { renderEditForm }