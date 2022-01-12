var express = require('express');
var router = express.Router();


 // All actual paths start with "/todos"
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;

var skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);