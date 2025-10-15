var express = require('express');
const AppController = require('../controllers/AppController');
const ContactController = require('../controllers/ContactController');
var router = express.Router();

/* GET home page. */
router.get('/', AppController.index);
router.post('/send/mail', ContactController.post);

module.exports = router;
