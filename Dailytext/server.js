const express = require("express");
const app = express();
const sms = require("../sms");
require('dotenv').config();

const PORT = process.env.PORT || 8100;

setInterval(() => {
    //add database call 

    //when a number comes in from database check if it has a + and a 1, if true run function, else add + or 1 or both

    sms();
    //send everyday at 8pm MST
    //set for every one minute
    //check to see if it is 8pm then reset it
}, 1000);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
