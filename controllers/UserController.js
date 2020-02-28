const Controller = require('./Controller');

class UserController {
  constructor(Service) {
    this.service = Service;
  }

  async createUser(request, response) {
    await Controller.handleRequest(request, response, this.service.createUser);
  }

  async loginUser(request, response) {
    await Controller.handleRequest(request, response, this.service.loginUser);
  }

  async logoutUser(request, response) {
    await Controller.handleRequest(request, response, this.service.logoutUser);
  }
}

module.exports = UserController;
