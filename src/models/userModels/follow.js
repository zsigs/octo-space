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
});

followSchema.index({ followerId: 1, followingId: 1 }, { unique: true });

const Follow = mongoose.model('follow', followSchema);

module.exports = {
  Follow
};
