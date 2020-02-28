const Controller = require('./Controller');

class MailController {
  constructor(Service) {
    this.service = Service;
  }

  async sendMail(request, response) {
    await Controller.handleRequest(request, response, this.service.sendMail);
  }
}

module.exports = MailController;
