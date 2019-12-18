const { Like } = require('../../models');

const handleLike = async (request, response, next) => {
  const likedPostId = request.body.likedPostId;
  const dataType = request.body.infoType;
  const likerId = request.session.user._id;


  const likesInDB = await Like.find({
    userWhoLiked: likerId,
    likedPost: likedPostId,
    likedType: dataType,
  });

  if (likesInDB.length) {
    for (like of likesInDB) {
      await Like.findByIdAndDelete(like._id);
    };
  } else {
    await Like.create({
      userWhoLiked: likerId,
      likedPost: likedPostId,
      likedType: dataType,
    });
  };

  console.log("like");

};

module.exports = {
  handleLike,
};