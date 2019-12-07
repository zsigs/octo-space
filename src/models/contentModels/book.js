const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title : {
    type : String,
    required : true,
  },
  author : {
    type : String,
    required : true,
  },
  datePublished : {
    type : Date,
  },
  genre : {
    type : Array,
    required: true
  },
  numPages : {
    type : Number,
  },
  ISBN : {
    type : String,
  },
  plot : {
    type : String,
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = {
  Book,
};