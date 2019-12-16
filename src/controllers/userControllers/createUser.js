const { User , EmailVerification } = require('../../models');
const { sendMail } = require('../../resources');
const bcrypt = require('bcrypt')

const createUser = (request, response, next) => {
  const newUserObject = request.body;

  if (newUserObject.password != newUserObject.passwordConfirm) {
    response.render('authentication/signup', {
      errorMessage : 'Password confirmation does not match password',
    });
    return null;
  };

  User.find({ username : newUserObject.username })
  .then(existingUsers => {
    if (existingUsers.length) {
      response.render('authentication/signup', {
        errorMessage : 'Username already in use'
      });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const newUserHashPass = bcrypt.hashSync(newUserObject.password, salt);
      User.create({
        confirmed : false,
        onboarded : false,
        email : newUserObject.email,
        username : newUserObject.username,
        password : newUserHashPass,
      })
      .then(newUser => {
        console.log('New user in DB: ', newUser);
        EmailVerification.create({
          userId : newUser._id,
        })
        .then(verificator => {
          sendMail(
            newUser.email,
            "Confirm your email",
            `http://127.0.0.1:3000/confirm/${verificator._id}`
          );
        });
        response.redirect("/");
      })
      .catch(err => {
        console.log('Error registering user to DB: ', err);
        response.render('authentication/signup', {
          errorMessage : 'Error registering user to database',
        });
      });
    };
  });
};

module.exports = {
  createUser,
};