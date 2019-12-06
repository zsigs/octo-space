const editUser = (request, response, next) => {
  console.log("cheguei aqui")
  console.log(request.body);
  const { username } = request.session.user
  response.redirect(`/octo/${username}`)
};

module.exports = { editUser };
