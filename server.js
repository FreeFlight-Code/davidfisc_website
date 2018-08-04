var express    = require('express')
var serveIndex = require('serve-index')
var router = express.Router();
var path = ('path')


var app = express();

app.use('/', express.static(__dirname + '/Home'));
app.get('/', (req, res, next)=>{
    res.sendFile(__dirname + ('/index.html'));
})

const foodfinder = require('./FoodFinder/server')
// console.log(foodfinder)
// Listen
let port = 80;
app.listen(port, console.log(`listening on port ${port}`))