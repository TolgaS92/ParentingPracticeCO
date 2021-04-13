// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
// require('dotenv').config();

const accountSid = 'ACd00ec84090b687fc61fc0a004439951d';
const authToken = '8dad2405ee326419e6a70285c466ca39';

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

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