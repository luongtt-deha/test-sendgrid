const mailTypes = require('../constants/mailTypes');

module.exports.generateTestMail = function(toAddress) {
  return {
    ...mailTypes.TEST_MAIL,
    to: toAddress,
  };
};
