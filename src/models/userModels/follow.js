const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followSchema = new Schema({
  followerId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  followingId: {
    type: Schema.Types.ObjectId,
    required: true
  }
})

const follow = mongoose.model('follow', followSchema);

module.exports = {
  follow,
}