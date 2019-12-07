const { User } = require('../../models');

const renderProfile = (request, response, next) => {
  const { username } = request.params;
  let showEdit = false
  console.log('username: ', username);
  User.findOne({ username })
    .then(res => {
      searchedUser = res.username;
      searchedEmail = res.email;
      showEdit = searchedUser == request.session.user.username ? true : false
      response.render('user/profile', { searchedUser, searchedEmail, showEdit });
    })
    .catch(err => {
      console.log(err);
      response.redirect(`/octo/${request.session.user.username}`);
    });
};

module.exports = { renderProfile };
