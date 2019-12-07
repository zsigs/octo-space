const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: {
    type : String,
  },
  category: {
    type : Array,
  },
  mediaType: {
    type : String,
  },
  publicationDate: {
    type : Date,
  },
  url: {
    type : String,
  },
  firstParagraph: {
    type : String,
  },
  coverImg: {
    type : String,
  },
  source: {
    type : String
},  })


const News = mongoose.model("News", newsSchema);

module.exports = {
  News,
}