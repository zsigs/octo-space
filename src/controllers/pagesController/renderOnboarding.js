const { User } = require('../../models');

const renderOnboarding = async (request, response, next) => {
  const currentUser = request.session.user

  // if (currentUser.onboarded) {
  //   response.redirect("/");
  //   return ;
  // };

  const updatedUser = await User.findByIdAndUpdate(
    currentUser._id,
    { onboarded : true },
    { new : true }
  );
  
  request.session.user = updatedUser;

  response.render('onboarding');
};

module.exports = {
  renderOnboarding
};