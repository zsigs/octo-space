const renderEditPasswordForm = (request, respones, next) => {
  const currentUsername = request.session.user.username;
  console.log("USER: ", currentUsername)
  respones.render('user/editPassword', {currentUsername});
};

module.exports = {
  renderEditPasswordForm
};
