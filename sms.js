require("dotenv").config();
const sms = () => {


  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  var numbersToMessage = ["+17203656996"];
  //rob , "+17204251946"

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
