var express = require('express');
var router = express.Router();
var fs = require('fs');
var content= null;
fs.readFile('content/ISORequest.xml','utf8',function(err,data){
  console.log(err);
  content = data;
});
/* GET users listing. */

router.post('/', function (req, res, next) {
    console.log("The body of the req " + JSON.stringify(req.body));

    res.header("Content-Type", "application/xml");
    res.send(content);
  });
module.exports = router;
