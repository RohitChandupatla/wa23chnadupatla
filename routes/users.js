var express = require('express');
var router = express.Router();
var ch=0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  ch=ch+1;
  res.send('User accesses are:'+ch);
});

module.exports = router;
