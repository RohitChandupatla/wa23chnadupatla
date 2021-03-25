var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    let ch=Math.floor(Math.random()*100)
  res.render('compute', {result: 'log function applied to'+ch+'is'+Math.log(ch)});
});

module.exports = router;
