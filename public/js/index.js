var socket = io();

socket.on ('connect', () => {
    console.log ("Connected to server");

    socket.emit('createMessage', {
        from: "Andrew",
        text: "What's up"
    });
});

socket.on ('disconnect', () => {
    console.log ("Disconnected from server");
});

socket.on ('newMessage', function (message) {
    console.log ('New message:', message);
});
