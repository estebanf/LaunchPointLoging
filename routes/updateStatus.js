var express = require('express');
var router = express.Router();

/* POST updateStatus listing. */

router.post('/', function (req, res, next) {
    console.log("Called updateStatus with " + JSON.stringify(req.body));
    res.sendStatus(200);
});

module.exports = router;