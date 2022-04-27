const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let newEmail = email.replace('.@.', '');
  let domain = newEmail.split('@');
  return domain[1];
}

module.exports = {
  getEmailDomain
};
