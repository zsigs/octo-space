const mongoose = require('mongoose');
const Schema = mongoose.Schema

const songSchema = new Schema({
  title : {
    type : String,
    required : true,
  },
  artist : {
    type : String,
    required : true,
  },
  duration : {
    type : String,
  },
  coverImgUrl : {
    type : String,
  },
  genre : {
    type : Array,
  },
  spotifyUrl : {
    type : String,
  },
});

const Song = mongoose.model("Song", songSchema);

module.exports = {
  Song,
}