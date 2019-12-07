const { Like, User, EmailVerification, follow } = require('./userModels');
const { Movie, Song, ResearchPaper, News, Book } = require('./contentModels');

module.exports = {
  Like,
  User,
  EmailVerification,
  Movie,
  Song,
  ResearchPaper,
  News,
  Book,
  follow,
};
