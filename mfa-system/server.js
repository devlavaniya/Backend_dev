const express = require('express');
const bodyParser = require('body-parser');
const protectedRoutes = require('./routes/protected');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

app.get('/login', (req, res) => {
    const token = jwt.sign({ name: 'Deepika' }, 'SECRET_KEY', { expiresIn: '1h' });
    res.json({ token, otp: '123456' });
});

app.use('/api', protectedRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));