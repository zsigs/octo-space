const renderEditForm = (request, response, next ) => {
  response.render('user/editUser')
}

module.exports = { renderEditForm }