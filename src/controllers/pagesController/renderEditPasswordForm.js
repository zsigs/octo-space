const renderEditPasswordForm = (request, respones, next) => {
  respones.render('user/editPassword');
};

module.exports = {
  renderEditPasswordForm
}