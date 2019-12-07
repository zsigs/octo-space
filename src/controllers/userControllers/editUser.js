const { User, EmailVerification } = require('../../models');
const { sendMail } = require('../../resources');

const editUser = async (request, response, next) => {
  console.log(request.session);
  const currentUser = request.session.user;
  const { email, username } = request.body;
  const usernameExists = await User.find({ username });
  const emailExists = await User.find({ email });
  console.log('users:', usernameExists.length);

  if (currentUser.email == email && usernameExists == 0) {
    const updatedUser = await User.findByIdAndUpdate(
      currentUser._id,
      {
        $set: {
          username
        }
      },
      { new: true }
    );
    request.session.user = updatedUser;
    console.log(updatedUser);
    response.redirect(`/octo/${username}`);
    return;
  }

  if (currentUser.username == username && emailExists == 0) {
    const updatedUser = await User.findByIdAndUpdate(
      currentUser._id,
      {
        $set: {
          email,
          confirmed: false
        }
      },
      { new: true }
    );
    const newEmailverification = await EmailVerification.create({
      userId: currentUser._id
    });
    sendMail(
      email,
      'Please confirm your new email',
      `http://127.0.0.1:3000/confirm/${newEmailverification._id}`
    );
    request.session.user = updatedUser;
    console.log(updatedUser);
    response.redirect(`/octo/${username}`);
    return;
  }

  if (usernameExists == 0 && emailExists == 0) {
    const updatedUser = await User.findByIdAndUpdate(
      currentUser._id,
      {
        $set: {
          username,
          email,
          confirmed: false
        }
      },
      { new: true }
    );
    const newEmailverification = await EmailVerification.create({
      userId: currentUser._id
    });
    sendMail(
      email,
      'Please confirm your new email',
      `http://127.0.0.1:3000/confirm/${newEmailverification._id}`
    );
    request.session.user = updatedUser;
    console.log(updatedUser);
    response.redirect(`/octo/${username}`);
    return;
  }
  response.render('user/editUser', {
    errorMessage: 'Invalid credentials',
    username: currentUser.username,
    email: currentUser.email
  });
};

module.exports = { editUser };
