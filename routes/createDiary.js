var express = require('express');
var router = express.Router();


/* POST createDiary listing. */

router.post('/', function (req, res, next) {
    console.log("Called createDiary with " + JSON.stringify(req.body));
    res.sendStatus(200);
});

module.exports = router;