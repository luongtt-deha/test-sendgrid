const Service = require('./Service');

class UserService {
  /**
   * Create user
   * This can only be done by the logged in user.
   *
   * body User Created user object
   * no response value expected for this operation
   * */
  static createUser({ body }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(body));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Logs user into the system
   *
   * username String The user name for login
   * password String The password for login in clear text
   * returns String
   * */
  static loginUser({ username, password }) {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Logs out current logged in user session
   *
   * no response value expected for this operation
   * */
  static logoutUser() {
    return new Promise(
      async (resolve) => {
        try {
          resolve(Service.successResponse(''));
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

module.exports = UserService;
