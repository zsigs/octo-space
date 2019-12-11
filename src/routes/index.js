const {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  renderOnboarding,
  createUser,
  loginUser,
  userLoggedIn,
  logoutUser,
  confirmUser,
  parseOnboarding,
  renderProfile,
  renderEditForm,
  editUser,
  renderTopicSection,
  renderEditPasswordForm,
  editPassword,
  handleFollow,
  handleLike,
} = require('../controllers');

const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log(req.session);
  next();
});

router.get('/', renderHome);
router.get('/login', renderLoginForm);
router.post('/login', loginUser);
router.get('/signup', renderSignupForm);
router.post('/signup', createUser);
router.get('/logout', userLoggedIn, logoutUser);
router.get('/confirm/:verificationId', confirmUser);
router.get('/onboarding', userLoggedIn, renderOnboarding);
router.post('/onboarding', parseOnboarding);
router.get('/octo/:username', renderProfile);
router.get('/topics/:topic', renderTopicSection);
router.get('/octo/:username/edit', renderEditForm);
router.post('/update-user', editUser);
router.get('/octo/:username/edit-password', renderEditPasswordForm);
router.post('/update-password', editPassword);
router.post('/follow', handleFollow);
router.post('/like', handleLike);


module.exports = {
  router
};
