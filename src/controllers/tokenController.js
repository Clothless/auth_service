const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

exports.validateToken = (req, res) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, secret);
        res.json({ valid: true, userId: decoded.userId });
    } catch (error) {
        res.status(401).json({ valid: false, message: 'Invalid token' });
    }
};