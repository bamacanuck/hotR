//
const bodyParser = require('body-parser');
//
const express = require('express');
//
const path = require ('path');

const app = express();
var PORT = process.env.PORT || 8080;

// app.get('/', function (req, res) {
//   res.send('server test success')
// });


// =============================================

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json())

require('./app/routing/html-routes.js')(app);

app.listen(PORT, function () {
    console.log("app \"listening\" on port: " + PORT);
});