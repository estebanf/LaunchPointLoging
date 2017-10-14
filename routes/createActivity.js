var express = require('express');
var router = express.Router();


/* POST createActivity listing. */

router.post('/', function (req, res, next) {
    console.log("Called createActivity with " + JSON.stringify(req.body));
    res.sendStatus(200);
});


module.exports = router;