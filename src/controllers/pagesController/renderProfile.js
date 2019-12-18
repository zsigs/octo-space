const {
  User,
  Follow,
  Like,
  Movie,
  Song,
  ResearchPaper,
  News,
  Book
} = require('../../models');

const renderProfile = (request, response, next) => {
  const { username } = request.params;
  let showEdit = false;
  let canFollow = true;
  let MOVIES = [],
    SONGS = [],
    PAPERS = [],
    NEWS = [],
    BOOKS = [];
  console.log('username: ', username);
  User.findOne({ username })
    .then(res => {
      searchedUser = res.username;
      searchedEmail = res.email;
      id = res._id;
      console.log('id: ', id);
      showEdit = searchedUser == request.session.user.username ? true : false;
      Like.find({ userWhoLiked: request.session.user._id }).then(myLikes => {
        for (like of myLikes) {
          console.log('post: ', like.likedPost);
          Movie.findOne({ _id: like.likedPost }).then(movie => {
            MOVIES.push(movie);
          });
          Song.findOne({ _id: like.likedPost }).then(song => {
            SONGS.push(song);
          });
          ResearchPaper.findOne({ _id: like.likedPost }).then(paper => {
            PAPERS.push(paper);
          });
          News.findOne({ _id: like.likedPost }).then(news => {
            NEWS.push(news);
          });
          Book.findOne({ _id: like.likedPost }).then(book => {
            BOOKS.push(books);
          });
        }

        Follow.findOne({
          followerId: request.session.user._id,
          followingId: id
        }).then(following => {
          console.log(following);
          if (following) {
            canFollow = false;
          }
          response.render('user/profile', {
            searchedUser,
            searchedEmail,
            showEdit,
            canFollow,
            // myLikes,
            MOVIES,
            SONGS,
            PAPERS,
            NEWS,
            BOOKS
          });
        });
      });
    })
    .catch(err => {
      console.log(err);
      response.redirect(`/octo/${request.session.user.username}`);
    });
};

module.exports = { renderProfile };
