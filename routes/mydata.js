var express = require('express');
var router = express.Router();
var ch=0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Rohit Reddy Chandupatla' });
});


module.exports = router;