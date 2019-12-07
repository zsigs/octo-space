const { 
  Movie,
  Song,
  ResearchPaper,
  News,
  Book
} = require('../../models');

const renderHome = async (request, response) => {
  const movies = await Movie.find({ });
  const songs = await Song.find({ });
  const books = await Book.find({ });
  const news = await News.find({ });
  const researchPapers = await ResearchPaper.find({ });

  const feed = {
    movies,
    songs,
    books,
    news,
    researchPapers,
  };

  const currentUsername = request.session.user["username"];

  const data = {
    feed,
    currentUsername,
  };

  console.log(feed);

  response.render('home', data);
};


module.exports = {
  renderHome,
};