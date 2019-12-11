window.onload = function paageSetUp() {
  if (document.querySelector('#follow-btn')) {
    document.querySelector('#follow-btn').onclick = handleFollowUnfollow;
  }
};

function handleFollowUnfollow() {
  let userFollow = document.querySelector('#follow-btn');
  userFollow = userFollow.dataset.userFollow;
  console.log('hellow orld');
  console.log(userFollow);
  axios.post('/follow', {
    userFollow
  });
}
