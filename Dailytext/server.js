const express = require("express");
const { getExpectedTwilioSignature } = require("twilio/lib/webhooks/webhooks");
const app = express();
const sms = require("../sms");
require('dotenv').config();
// var twilio = require('twilio');

const PORT = process.env.PORT || 3002;

var now = new Date();
var millisTill8 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 0, 0, 0) - now;
console.log(millisTill8);
if (millisTill8 < 0) {
    console.log("if statement works");
     millisTill8 += 86400000; // it's after 10am, try 10am tomorrow.
}
setTimeout(function(){sms()}, millisTill8);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
