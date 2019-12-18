const { User, Follow } = require('../../models');
const handleUnfollow = (request, response, next) => {
  console.log('unfollowing');
  response.send('ok');
  let currentUser = request.session.user['_id'];
  let { userUnfollow } = request.body;
  console.log('current: ', currentUser);
  console.log('unfollow: ', userUnfollow);
  User.findOne({ username: userUnfollow }).then(user => {
    Follow.findOneAndRemove({
      followerId: currentUser,
      followingId: user._id
    }).then(res => console.log(`${res} \n\n\n\n\n`) )
  });
};

module.exports = {
  handleUnfollow
};
