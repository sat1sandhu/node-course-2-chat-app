/// Creating a very basic Express Server
/// run using "node server/server.js"

const path      = require ('path');
const http      = require ('http');
const express   = require ('express');
const socketIO  = require ('socket.io');

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
    socket.emit ('newMessage', {
          from: 'Admin',
          text: 'Welcome to the chat app',
          createdAt: new Date().getTime()
    });

    /// This is to inform other user that a new user has joined
    socket.broadcast.emit ('newMessage', {
          from: 'Admin',
          text: "New user joined",
          createdAt: new Date().getTime()
    });

    socket.on ('createMessage', (message) => {
        console.log ("Received Message: ", message);
        io.emit ('newMessage', {
              from: message.from,
              text: message.text,
              createdAt: new Date().getTime()
        });
        // socket.broadcast.emit ('newMessage', {
        //       from: message.from,
        //       text: message.text,
        //       createdAt: new Date().getTime()
        // });
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
