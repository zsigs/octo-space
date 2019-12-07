const { User } = require('../../models')

const parseOnboarding = async (request, response, next) => {
  const currentUser = request.session.user;

  console.log(request.body) 

  let articleInterests = request.body.article;
  let songInterests = request.body.song;
  let bookInterests = request.body.book;
  let movieInterests = request.body.movie;

  if (! articleInterests) {
    articleInterests = [];
  };

  if (! songInterests) {
    songInterests = [];
  };

  if (! bookInterests) {
    bookInterests = [];
  };

  if (! movieInterests) {
    movieInterests = [];
  };

  const updatedUser = await User.findByIdAndUpdate(
    currentUser._id,
    {
      articleInterests,
      songInterests,
      bookInterests,
      movieInterests,
    },
    {
      new : true
    },
  );

  request.session.user = updatedUser;
  console.log(updatedUser);

  response.redirect('/');
};

module.exports = {
  parseOnboarding,
};