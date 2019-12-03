const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const researchPaperSchema = new Schema({
  title : {
    type : String,
    required : true,
  },
  category : {
    type : String,
    required : true,
  },
  author : {
    type : String,
  },
  url : {
    type : String,
    required : true,
  },
  numPages : {
    type : Number,
  },
});

const ResearchPaper = mongoose.model("ResearchPaper", researchPaperSchema);

module.exports = {
  ResearchPaper,
};