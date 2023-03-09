const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken);


const orderCreated = function() {
  client.messages
  .create({
    body: 'Your order is being prepared',
    to: process.env.CLIENT_PH_NUM, // Text this number
    from: process.env.TWILLIO_PH_NUM, // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
};

orderCreated();


const orderReady = function() {
  client.messages
  .create({
    body: 'your order is ready for pick up',
    to: process.env.CLIENT_PH_NUM, // Text this number
    from: process.env.TWILLIO_PH_NUM, // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
};

