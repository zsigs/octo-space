require("dotenv").config();
const {mongooseConnect} = require("./src/resources")
axios = require("axios");
const OMDbAPI = process.env.OMDb
let mainURL = `http://www.omdbapi.com/?apikey=${OMDbAPI}`

mongooseConnect()

// Make a request for a user with a given ID
axios.get(`${mainURL}&type=movie`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })