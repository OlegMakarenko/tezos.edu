const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const port = 7071;

var path = require('path');
global.appRoot = path.resolve(__dirname);


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(global.appRoot + '/public'));


require('./routes')(app);

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});

