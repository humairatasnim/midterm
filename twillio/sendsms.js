const twilio = require('twilio');

const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // Your Account SID from www.twilio.com/console
const authToken = 'your_auth_token'; // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken);

const orderCreated = function() {
  client.messages
  .create({
    body: 'Hello from twilio-node',
    to: '+12345678901', // Text this number
    from: '+12345678901', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
};
// orderCreated();


const orderReady = function() {
  client.messages
  .create({
    body: 'Hello from twilio-node',
    to: '+12345678901', // Text this number
    from: '+12345678901', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
};
// orderReady();
