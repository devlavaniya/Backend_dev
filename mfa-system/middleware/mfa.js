const jwt = require('jsonwebtoken');

const mfaMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    const otp = req.headers['x-otp'];

    if (!token || !otp) return res.status(401).json({ message: 'Missing token or OTP' });

    try {
        const decoded = jwt.verify(token, 'SECRET_KEY');
        if (otp !== '123456') return res.status(401).json({ message: 'Invalid OTP' });
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = mfaMiddleware;