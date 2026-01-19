const  express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello developer');
})

app.get('/user', (req, res) => {
    res.send('User route');
})

app.get('/admin', (req, res) => {
    res.send('Admin route');
})

app.get('/guest', (req, res) => {
    res.send('Guest route');
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})