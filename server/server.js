/// Creating a very basic Express Server
/// run using "node server/server.js"

const path      = require ('path');
const express   = require ('express');

/// Create the app
var app        = express();

/// Serving static files in Express
const publicPath = path.join (__dirname, '../public');
app.use (express.static(publicPath));

app.listen (3000, () => {
    console.log ("Server is up on port 3000");
});

/// Add this to enable reading app
module.exports.app = app;
