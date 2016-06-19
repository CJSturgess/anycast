var app = require('express')();
var http = require('http').Server(app);
var os = require('os');

app.get('/', function (req, res) {
    res.send(os.hostname());
});

http.listen(3000, function() {
    console.log(os.hostname() + ' listening on 3000.');
});