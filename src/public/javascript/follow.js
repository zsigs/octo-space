window.onload = function paageSetUp() {
  if (document.querySelector('#follow-btn')) {
    document.querySelector('#follow-btn').onclick = handleFollow;
  } else if (document.querySelector('#unfollow-btn')) {
    document.querySelector('#unfollow-btn').onclick = handleUnfollow;
  }
};

async function handleFollow() {
  let userFollow = document.querySelector('#follow-btn');
  userFollow = userFollow.dataset.userFollow;
  console.log(userFollow);
  const followPost = await axios.post('/follow', {
    userFollow
  })
  window.location.pathname = `/octo/${userFollow}`;
}

function handleUnfollow() {
  let userUnfollow = document.querySelector('#unfollow-btn');
  userUnfollow = userUnfollow.dataset.userUnfollow;
  console.log(userUnfollow);
  axios.post('/unfollow', {
    userUnfollow
  });
}