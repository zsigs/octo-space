require("dotenv").config();
const axios = require("axios");
const randomeWords = require("random-words");
const { mongooseConnect } = require("./src/resources");
const { Movie } = require("./src/models");
const OMDbAPI = process.env.OMDb;
const mainURL = `http://www.omdbapi.com/?apikey=${OMDbAPI}`;

mongooseConnect();
function dumpIMDB(){
  const words = randomeWords(1000)
  // Make a request for a user with a given ID
  words.forEach( (word) => {
    
  axios
    .get(`${mainURL}&s=${word}`)
    .then(function(response) {
      response.data.Search.forEach(element => {
        Movie.find({ imdbId: element.imdbID }).then(searchResult => {
          if (searchResult.length == 0) {
            Movie.create({
              title: element.Title,
              type: element.Type,
              imdbId: element.imdbID,
              poster: element.Poster
            })
              .then(res => {
                console.log("succes!", res);
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            console.log(`Movie ${element.Title} already in DB`);
          }
        });
      });
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
  })
}

function getMoreMovieInfo(){
  Movie.find({ title: 'Iron Fist'})
  .then( (res) => {
    console.log(res[0].imdbId)
    axios
    .get(`${mainURL}&i=${res[0].imdbId}`)
    .then( movie => console.log(movie))
    .catch ( err => console.log(err))
  })
}
getMoreMovieInfo()