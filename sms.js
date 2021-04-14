// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
//get numbers from the database
//do it at 8pm 
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

//run code in terminal using node sms.js