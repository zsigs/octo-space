const { Movie, Song, ResearchPaper, News, Book } = require('../../models');

const renderHome = async (request, response) => {
  let currentUsername = null;

  if (request.session.user) {
    currentUsername = request.session.user['username'];
  }

  let movies = []
  let songs = []
  let books = []
  let news = []
  let researchPapers = []

  if ( request.session.user ) {
    currentUsername = request.session.user["username"];
    movies = await Movie.find({
      genre : { $elemMatch : { $in : request.session.user["movieInterests"] } }
    });
    songs = await Song.find({
      genre : { $elemMatch : { $in : request.session.user["songInterests"] } }
    });
    books = await Book.find({
      genre : { $elemMatch : { $in : request.session.user["bookInterests"] } }
    });
    news = await News.find({
      category : { $elemMatch : { $in : request.session.user["articleInterests"] } }
    });
    researchPapers = await ResearchPaper.find({
      category : { $elemMatch : { $in : request.session.user["articleInterests"] } }
    });
  } else {
    movies = await Movie.find({ }).limit(10);
    songs = await Song.find({ }).limit(10);
    books = await Book.find({ }).limit(10);
    news = await News.find({ }).limit(10);
    researchPapers = await ResearchPaper.find({ }).limit(10);
  }

  const feed = {
    movies,
    songs,
    books,
    news,
    researchPapers
  };

  const topics = [
    "Sustainability",
    "Technology",
    "History",
    "Education",
    "Science",
    "Sports",
    "Politics",
  ];

  const data = {
    topics,
    feed,
    currentUsername
  };

  response.render('home', data);
};

module.exports = {
  renderHome
};
