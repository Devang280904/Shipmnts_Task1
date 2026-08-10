const express = require('express');
const router = express.Router();
const createExpense = require('../controllers/createExpense');
router.post('/expense',createExpense);
module.exports = router;