var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.post('/', function (req, res, next) {
  console.log(req.body);
  res.status(200).send('todo ok');
  var name = req.body.name;
  var email = req.body.email;
  var emailMessage = req.body.message;

  console.log('* [example 1.1] sending test email');
 
   
  var send = require('gmail-send')({
    user: 'contactindirabriggiler@gmail.com',
    pass: 'indira09!',
    to:   'ibriggiler@gmail.com',
    subject: name,
    text:    email,         // Plain text
    html:    '<p>' + name + '</p>' + '<p>' + email + '</p>' +   '<p>' + emailMessage + '</p>'        // HTML
  }); 
  
  send();

})

app.listen(4000, function () {
  console.log('esta corriendo el servidor');
})