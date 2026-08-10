const express = require('express');
const app = express();
app.use(express.json());

const authLogin = require('./routes/authLogin');
app.use('/api/post/auth',authLogin);
module.exports = app;