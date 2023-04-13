const express = require('express');
const router = express.Router();
const { userController } = require('../modules/user');
const verifyToken = require('../middeware/verifytoken.middleware');

/**
 * Create User - POST
 * Expected request body:
 * - fullname STRING mandatory
 * - email STRING mandatory
 * - username STRING mandatory
 * - password STRING mandatory
 * - userlelvel NUMBER 
 * - usergroup NUMBER
 */
router.post('/auth/signup', userController.createUser);

router.post('/auth/sigin', userController.authenticateUser);

router.get('/user/userlist', verifyToken, userController.retrieveUsers);


module.exports = router;