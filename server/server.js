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

    socket.on ('disconnect', () => {
        console.log ("User was disconnected");
    });
});

server.listen (port, () => {
    console.log (`Server is up on port ${port}`);
});

/// Add this to enable reading app
module.exports.app = app;
