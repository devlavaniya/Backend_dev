const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/activityDB', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
    let user = await User.findOne({ name: req.body.name });
    if (!user) user = new User({ name: req.body.name });
    user.loginTimes.push(new Date());
    await user.save();
    res.send('Logged in');
});

app.post('/logout', async (req, res) => {
    const user = await User.findOne({ name: req.body.name });
    user.logoutTimes.push(new Date());
    await user.save();
    res.send('Logged out');
});

app.listen(3000, () => console.log('Server running on port 3000'));