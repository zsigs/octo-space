const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  userWhoLiked : {
    type : Schema.Types.ObjectId,
  },
  likedPost : {
    type : Schema.Types.ObjectId,
  },
  likedType : {
    type : String,
  }
});

const Like = mongoose.model('Like', likeSchema);

module.exports = {
  Like,
};