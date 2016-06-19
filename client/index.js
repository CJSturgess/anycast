var request = require('request');

var ip = '';

request('http://' + ip, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});