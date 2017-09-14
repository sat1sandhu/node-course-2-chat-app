var socket = io();

socket.on ('connect', () => {
    console.log ("Connected to server");

    // socket.on ('newUser', function (message) {
    //       console.log('newUser', message);
    // });
});

socket.on ('disconnect', () => {
    console.log ("Disconnected from server");
});

socket.on ('newMessage', function (message) {
    console.log ('New message:', message);
});

socket.on ('newUserJoined', function (message) {
    console.log ('newUserJoined', message);
});
