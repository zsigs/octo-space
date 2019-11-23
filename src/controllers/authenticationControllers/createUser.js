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
    if (existingUsers.length) {
      response.render('authentication/signup', {
        errorMessage : 'Username already in use'
      });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const newUserHashPass = bcrypt.hashSync(newUserObject.password, salt);
      User.create({
        email : newUserObject.email,
        username : newUserObject.username,
        password : newUserHashPass,
      })
      .then(newUser => {
<<<<<<< HEAD
        console.log(newUser);
        response.redirect('/');
=======
        console.log('New user in DB: ', newUser);
        response.redirect("/");
>>>>>>> creating-users
      })
      .catch(err => {
        console.log('Error registering user to DB: ', err);
        response.render('signup', {
          errorMessage : 'Error registering user to database',
        });
      });
    };
  });
};

module.exports = {
  createUser,
};