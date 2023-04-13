// module/stu/user/index.js
const userController = require('./user.controller');
const userService = require('./user.service');
const userRepository = require('./user.repository');

module.exports = {
  userController,
  userService,
  userRepository,
};
