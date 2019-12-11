const { User, Follow } = require('../../models');

const renderProfile = (request, response, next) => {
  const { username } = request.params;
  let showEdit = false;
  let canFollow = true;
  console.log('username: ', username);
  User.findOne({ username })
    .then(res => {
      searchedUser = res.username;
      searchedEmail = res.email;
      id = res._id
      console.log("id: ", id)
      showEdit = searchedUser == request.session.user.username ? true : false;
      Follow.findOne({ followerId: request.session.user._id, followingId: id }).then(following => {
        console.log(following);
        if (following){
          canFollow = false
        }
        response.render('user/profile', {
          searchedUser,
          searchedEmail,
          showEdit,
          canFollow
        });
      });
    })
    .catch(err => {
      console.log(err);
      response.redirect(`/octo/${request.session.user.username}`);
    });
};

module.exports = { renderProfile };
