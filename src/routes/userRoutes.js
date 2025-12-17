
const express = require('express');
const controller = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/me', auth, controller.getProfile);

module.exports = router;
