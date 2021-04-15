require("dotenv").config();
// require('dotenv').load();
<<<<<<< HEAD


=======
>>>>>>> ef5f1ddb1bf2edd519dc9de4f6acb20accee5f5b
const sms = () => {
  console.log("itworks");
  console.log(process.env.TWILIO_ACCOUNT_SID);
//   const accountSid = process.env.TWILIO_ACCOUNT_SID;
//   const authToken = process.env.TWILIO_AUTH_TOKEN;\
    const accountSid = 'ACd00ec84090b687fc61fc0a004439951d';
    const authToken = '96aab27b7bff485bdbdec5eab5a4d28b';
  const client = require("twilio")(accountSid, authToken);
<<<<<<< HEAD

//   var twilio = require("twilio");
// var twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_TOKEN);

=======
//   var twilio = require("twilio");
// var twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_TOKEN);
>>>>>>> ef5f1ddb1bf2edd519dc9de4f6acb20accee5f5b
  var numbersToMessage = ["+17203656996", "+17204251946"];
  console.log("thisworks too");
  numbersToMessage.forEach(function (number) {
    var message = client.messages
      .create({
        body: "Time to log your childs sleep chart!",
        from: "+17326075490",
        to: number,
      })
      .then((message) => console.log(message.status))
      .done();
  });
};
module.exports = sms;