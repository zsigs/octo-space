const { User, Follow } = require('../../models');

const handleFollow = async (request, response, next) => {
  let currentUsername = request.session.user['username'];
  let { userFollow } = request.body;
  // console.log('request: ');
  // console.log(userFollow);

  let toFollow = await User.findOne({ username: userFollow });
  let current = await User.findOne({ username: currentUsername });
  // console.log(toFollow);
  // console.log(current);
  let completeFollow = await Follow.create({
    followerId: current._id,
    followingId: toFollow._id
  });
  response.send('ok');
};

module.exports = {
  handleFollow
};
