const { User } = require('./user');
const { Like } = require('./like');
const { EmailVerification } = require('./emailVerification');
const { follow } = require('./follow')

module.exports = {
  User,
  Like,
  EmailVerification,
  follow
};
