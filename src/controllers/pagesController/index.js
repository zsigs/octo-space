const { renderHome } = require('./renderHome');
const { renderSignupForm } = require('./renderSignupForm');
const { renderLoginForm } = require('./renderLoginForm');
const { renderOnboarding } = require('./renderOnboarding');
const { renderProfile } = require('./renderProfile');
const { renderEditForm } = require('./renderEditForm')
const { renderTopicSection } = require('./renderTopicSection');
const { renderEditPasswordForm } = require('./renderEditPasswordForm')


module.exports = {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  renderOnboarding,
  renderProfile,
  renderEditForm,
  renderTopicSection,
  renderEditPasswordForm
};