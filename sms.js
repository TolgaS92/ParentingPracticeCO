require('dotenv').config();
// require(‘dotenv’).load();
const sms = () => {
 console.log(process.env.TWILIO_ACCOUNT_SID);
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
    /* const accountSid = 'ACd00ec84090b687fc61fc0a004439951d';
    const authToken = 'e92008b63ea5f872f59432fa56a78f9e'; */
  const client = require('twilio')(accountSid, authToken);
//   var twilio = require('twilio');
// var twilio = require(‘twilio’)(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_TOKEN);
  var numbersToMessage = ['+17203656996'];
  //rob , '+17204251946'
  numbersToMessage.forEach(function (number) {
    var message = client.messages
      .create({
        body: 'Time to log your childs sleep chart!',
        from: '+17326075490',
        to: number,
      })
      .then((message) => console.log(message.status))
      .done();
  });
};
module.exports = sms;
