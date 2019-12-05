const parseOnboarding = (request, response, next) => {
  const interests = request.body;
  console.log(interests);

  response.render('/');
};

module.exports = {
  parseOnboarding,
};