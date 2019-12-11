const handleUnfollow = (request, response, next) =>{
  console.log("unfollowing")
  response.send('ok')
}

module.exports = {
  handleUnfollow,
}