const { User } = require('../../models');
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
    console.log(existingUsers);
    if (existingUsers.length) {
      response.render('authentication/signup', {
        errorMessage : 'Username already in use'
      });
    } else {
      newUserHashPass = bcrypt.hashSync(newUserObject.password, 10);
      User.create({
        email : newUserObject.email,
        username : newUserObject.username,
        password : newUserHashPass,
      })
      .then(newUser => {
        console.log(newUser);
        response.redirect('/');
      })
      .catch(err => {
        console.log('Error registering user to DB: ', err);
        response.render('signup', {
          errorMessage : 'Error registering user to database',
        });
      });
    };
  })
};

module.exports = {
  createUser,
};