var socket = io();

socket.on ('connect', () => {
    console.log ("Connected to server");
});

socket.on ('disconnect', () => {
    console.log ("Disconnected from server");
});

socket.on ('newMessage', function (message) {
    console.log ('New message:', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
});

socket.on ('newLocationMessage', function (message) {
    console.log ("message = ", message);
    var li = jQuery('<li></li>');
    var a  = jQuery('<a target="_blank">My current Location</a>');
    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);
    jQuery('#messages').append(li);
});


jQuery('#message-form').on ('submit', function (e) {
    e.preventDefault();
    var messageTextbox = jQuery('[name=message]');
    socket.emit('createMessage', {
          from: 'User',
          text: messageTextbox.val()
    }, function () {
          messageTextbox.val('');
    });
});

var locationButton = jQuery('#send-location');
locationButton.on ('click', function() {
      if (!navigator.geolocation){
          alert ('Geolocation is not supported by your Browser');
      }

      locationButton.attr('disabled', 'disabled').text('Pending...');

      navigator.geolocation.getCurrentPosition (function (position) {
            locationButton.removeAttr('disabled').text('Send Location');
            socket.emit ('createLocationMessage', {
                  latitude: position.coords.latitude,
                  longitude:position.coords.longitude
            });
      }, function () {
            locationButton.removeAttr('disabled').text('Send Location');
            alert ('Unable to fetch location');
      });
});
