const expect = require ('expect');

var {generateMessage, generateLocationMessage} = require ('./message');

describe ('generateMessage', () => {
    it ('Should generate correct message object', () => {

          var from = 'Jen';
          var text = 'Some message';
          var message = generateMessage (from, text);
          //console.log ("message = ", message);
          //var a = [5,6];
          //expect(a.length).toBe(2);
          //expect(message.from).toBe(from);
          //expect('message').toExist();
          expect(message.createdAt).toBeA('number');
          expect(message).toInclude({from,text});
    });
});

describe ('generateLocationMessage', () => {
    it ('Should generate correct location object', () => {
          var from = 'Jen';
          var latitude = 12.3;
          var longitude = 88.6;
          var url = "https://www.google.com/maps?q=12.3,88.6";
          var message  = generateLocationMessage (from, latitude, longitude);

          //console.log (message);

          expect (message.createdAt).toBeA('number');
          expect (message).toInclude({from, url});
    });
});
