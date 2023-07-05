const express = require('express')
const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {

    var peso = Number(req.body.peso);
    var altura = Number(req.body.altura);
    var resultado = Number(peso / (altura * altura))
    res.send('<h2>Tu IMC es: ' + resultado + '</h2>');
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
