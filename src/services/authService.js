const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../config/jwt');

exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

exports.generateToken = (userId) => {
    return jwt.sign({ userId }, secret, { expiresIn });
};