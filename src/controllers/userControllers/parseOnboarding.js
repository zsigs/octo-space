const { User } = require('../../models')

const parseOnboarding = async (request, response, next) => {
  const currentUser = request.session.user;
  const interests = Object.keys(request.body);

  const updatedUser = await User.findByIdAndUpdate(
    currentUser._id,
    { interests }, 
    { new : true },
  );

  request.session.user = updatedUser;
  console.log(updatedUser);

  response.redirect('/');
};

module.exports = {
  parseOnboarding,
};