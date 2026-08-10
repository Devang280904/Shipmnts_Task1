const express = require('express');
const router = express.Router();
const createGroup =require('../controllers/createGroup');
router.post('/',createGroup);
module.exports = router;