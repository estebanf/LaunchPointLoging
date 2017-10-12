var express = require('express');
var router = express.Router();

/* GET users listing. */

router.post('/', function (req, res, next) {
    res.header("Content-Type", "text/plain");
    res.send ("<ACORD><Status>\n" +
        "<StatusCd>0</StatusCd>\n" +
        "<StatusDesc>Success</StatusDesc>\n" +
        "</Status><SignonRs>\n" +
        "<Status>\n" +
        "<StatusCd>0</StatusCd>\n" +
        "<StatusDesc>Signon was successful</StatusDesc>\n" +
        "</Status>\n" +
        "<CustId>\n" +
        "<SPName>LP</SPName>\n" +
        "<CustLoginId>11111</CustLoginId>\n" +
        "</CustId>\n" +
        "<ClientDt>2017-09-21T16:21:53</ClientDt>\n" +
        "<CustLangPref>enUS</CustLangPref>\n" +
        "<ClientApp>\n" +
        "<Org>DHP</Org>\n" +
        "<Name>XML_UAT</Name>\n" +
        "<Version>1</Version>\n" +
        "</ClientApp>\n" +
        "<ServerDt>2017-09-21T12:22:02.384-04:00</ServerDt>\n" +
        "<Language>en-US</Language>\n" +
        "</SignonRs><ClaimsSvcRs><Status>\n" +
        "<StatusCd>0</StatusCd>\n" +
        "</Status><RqUID>1111111</RqUID><ClaimInvestigationAddRs><RqUID>1111111</RqUID><TransactionResponseDt/><CurCd>en-US</CurCd><MsgStatus><MsgStatusCd>ResponsePending</MsgStatusCd></MsgStatus></ClaimInvestigationAddRs></ClaimsSvcRs></ACORD>");

    //res.sendStatus(200);
});

module.exports = router;