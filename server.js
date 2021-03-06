var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/dist'));

// app.get('/', (req, res) => {
//     res.send({ "status": "success"});
// })

// Catch all 
app.all("*", function(req, res, next) {
    res.sendFile(path.resolve("./client/dist/index.html"))
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
})