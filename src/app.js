const express = require('express');
const app = express();
app.use(express.json());

const authLogin = require('./routes/authLogin');
app.use('/api/post/auth',authLogin);

const createUser = require('./routes/createUser');
app.use('/user',createUser);

const createGroup = require('./routes/createGroup');
app.use('/group',createGroup);

const createExpense = require('./routes/createExpense');
app.use('/group/:group_id',createExpense);

module.exports = app;