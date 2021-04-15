// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

var twilio = require('twilio');

var numbersToMessage = ["+17203656996", "+17204251946"]

numbersToMessage.forEach(function(number){
  var message = client.messages.create({
    body: 'Time to log your childs sleep chart!',
    from: '+17326075490',
    to: number
  })
  .then(message =>  console.log(message.status))
  .done();
});

