const express = require('express');
const router = express.Router();
const { getHome, getAbout } = require('../controllers');

router.get('/', getHome);
router.get('/about', getAbout);

module.exports = router;