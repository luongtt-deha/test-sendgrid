const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const mailConfig = require('../config/mailer');
const Service = require('./Service');
const mailUtils = require('../utils/mailer');

const mailer = nodemailer.createTransport(sgTransport(mailConfig));

class MailService {
  /**
   * Send a mail
   *
   * body Mail Mail address need to send message
   * no response value expected for this operation
   * */
  static sendMail({ body }) {
    return new Promise(
      async (resolve) => {
        try {
          console.log(mailConfig);
          const mail = mailUtils.generateTestMail(body.to);
          await mailer.sendMail(mail);
          resolve(Service.successResponse({
            message: 'Email sent!',
          }));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }
}

module.exports = MailService;
