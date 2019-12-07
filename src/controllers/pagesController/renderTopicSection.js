const { 
  Movie,
  Song,
  ResearchPaper,
  News,
  Book
} = require('../../models');

const renderTopicSection = async (request, response, next) => {
  const topic = request.params.topic;

  // const songs = await Song.find({ });

  const movies = await Movie.find({
    genre : { $elemMatch : { $eq : topic } }
  }).limit(20);
  const books = await Book.find({
    genre : { $elemMatch : { $eq : topic } }
  }).limit(20);

  const news = await News.find({ 
    category : { $elemMatch : { $eq : topic } }
  }).limit(20);

  const researchPapers = await ResearchPaper.find({
    category : { $elemMatch : { $eq : topic } }
  }).limit(20);

  const feed = {
    // songs,
    movies,
    books,
    news,
    researchPapers,
  };

  console.log(news);
  response.render("section", feed);
};

module.exports = {
  renderTopicSection,
};