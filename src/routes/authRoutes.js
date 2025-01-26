const express = require('express');
const authController = require('../controllers/authController');
const validateInput = require('../middleware/validateInput');

const router = express.Router();

router.post('/register', validateInput.validateRegisterInput, authController.register);
router.post('/login', authController.login);

module.exports = router;