const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  confirmed : {
    type : Boolean,
    required : true,
  },
  onboarded : {
    type : Boolean,
    required : true,
  },
  email : {
    type : String,
    required : true,
  },
  username : {
    type : String,
    required : true,
  },
  password : {
    type : String,
    required : true,
  },
  articleInterests : {
    type : Array,
  },
  songInterests : {
    type : Array,
  },
  bookInterests : {
    type : Array,
  },
  movieInterests : {
    type : Array,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};