const expect = require ('expect');

var {generateMessage} = require ('./message');

describe ('generateMessage', () => {
    it ('Should generate correct message object', () => {

          var from = 'Jen';
          var text = 'Some message';
          var message = generateMessage (from, text);
          console.log ("message = ", message);
          //var a = [5,6];
          //expect(a.length).toBe(2);
          //expect(message.from).toBe(from);
          //expect('message').toExist();
          expect(message.createdAt).toBeA('number');
          expect(message).toInclude({from,text});


    });

});
