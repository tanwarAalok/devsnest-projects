var express = require('express');
var path = require("path");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/file/:name', function (req, res, next) {
  res.sendFile(path.join(__dirname,'../', 'public/images',req.params.name));
});

module.exports = router;
