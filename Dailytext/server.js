const express = require("express");
const app = express();
const sms = require("../sms");
require('dotenv').config();

const PORT = process.env.PORT || 3002;

var now = new Date();
var millisTill8 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 0, 0, 0) - now;
console.log(millisTill8);
if (millisTill8 < 0) {
   
     millisTill8 += 86400000; // it's after 8am, try 8am tomorrow.
}
setTimeout(function(){sms()}, millisTill8);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
