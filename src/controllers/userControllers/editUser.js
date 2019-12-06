const { User } = require('../../models');

const editUser = async (request, response, next) => {
  console.log(request.session);
  const currentUser = request.session.user;
  const { email, username } = request.body;
  const usernameExists = await User.find({ username });
  const emailExists = await User.find({ email });
  console.log('users:', usernameExists.length);

  if ( usernameExists == 0 && emailExists == 0) {
    const updatedUser = await User.findByIdAndUpdate(
      currentUser._id,
      {
        $set: {
          email,
          username
        }
      },
      { new: true }
    );
    request.session.user = updatedUser;
    console.log(updatedUser);
    response.redirect(`/octo/${username}`);
    return
  }
    response.render('user/editUser', {errorMessage: "Invalid credentials", username: currentUser.username, email: currentUser.email })
  
};

module.exports = { editUser };
