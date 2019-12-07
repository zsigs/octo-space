const { User } = require('../../models');
const bcrypt = require('bcrypt');
const editPassword = (request, response, next) => {
  const { username, _id } = request.session.user;
  console.log(request.body);
  newPassword = request.body;
  if (newPassword['new-password'] != newPassword['new-password-confirm']) {
    response.render('user/editPassword', {
      errorMessage: 'Password confirmation does not match password'
    });
    return null;
  } else {
    const salt = bcrypt.genSaltSync(10);
    const newUserHashPass = bcrypt.hashSync(newPassword['new-password'], salt);

    User.findByIdAndUpdate(
      _id,
      {
        $set: {
          password: newUserHashPass
        }
      },
      { new: true }
    ).then(updatedUser => {
      request.session.user = updatedUser;
      response.redirect(`/octo/${username}`);
    })
  }

};

module.exports = {
  editPassword
};
