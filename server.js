// server.js
// là où commence votre application node

// initiation du  projet
var express = require('express');
var app = express();

// activer CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// pour que votre API soit testable à distance par FCC
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // certains anciens navigateurs s'engorgent sur 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// votre premier point de terminaison d'API...
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// écoutez les demandes :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});