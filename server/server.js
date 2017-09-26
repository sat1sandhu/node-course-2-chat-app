/// Creating a very basic Express Server
/// run using "node server/server.js"

const path      = require ('path');
const http      = require ('http');
const express   = require ('express');
const socketIO  = require ('socket.io');
const {generateMessage, generateLocationMessage} = require ('./utils/message');

/// Serving static files in Express
const publicPath = path.join (__dirname, '../public');
const port = process.env.PORT || 3000;

/// Create the app
var app        = express();
var server     = http.createServer(app);
var io         = socketIO (server);

app.use (express.static(publicPath));

io.on ('connection', (socket) => {
    console.log ("New user connected");

    /// This is sent to user who just connected
    socket.emit ('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    /// This is to inform other user that a new user has joined
    socket.broadcast.emit ('newMessage', generateMessage('Admin', "New user joined"));


    socket.on ('createMessage', (message, callback) => {
        console.log ("Received Message: ", message);
        io.emit ('newMessage', generateMessage(message.from, message.text));
        callback();
    });

    socket.on ('createLocationMessage', (coords) => {
        io.emit ('newLocationMessage', generateLocationMessage ('Admin', coords.latitude, coords.longitude));
    });

    socket.on ('disconnect', () => {
        console.log ("User was disconnected");
    });
});

server.listen (port, () => {
    console.log (`Server is up on port ${port}`);
});

/// Add this to enable reading app
module.exports.app = app;
