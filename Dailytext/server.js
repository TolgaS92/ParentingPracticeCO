const express = require("express");
const app = express();
const sms = require("../sms");
require('dotenv').config();

const PORT = process.env.PORT || 3002;

// function test() {
//     var date = new Date();
//     if(date.getDate()==1 && date.getHours()+1 >= 5 && date.getMinutes()+1 >= 8) {
//         sms();
//         clearInterval();
//     }
//     console.log('it works');
// }

// test();

//daily milliseconds 86400000

setInterval(() => {
    //add database call 

    //when a number comes in from database check if it has a + and a 1, if true run function, else add + or 1 or both
    //send everyday at 8pm MST
    //check to see if it is 8pm then reset it
    // var now = new Date();
    // var millisTill8 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 0, 0, 0) - now;
    // if (millisTill8 < 0) {
    //      millisTill8 += 86400000; // it's after 8pm, try 8pm tomorrow.
    // }
    // setTimeout(sms(), millisTill8);
    var date = new Date();
    if (date.getDay()==1 && date.getHours()+1 >= 6){
        sms();
        console.log('it works');
    };
}, 1000 );

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
