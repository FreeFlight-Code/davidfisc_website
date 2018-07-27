const express = require('express')

const app = express();

app.use(express.static(__dirname + '/Home'));

app.get('/', (req, res)=>{
    res.status(200).sendfile(__dirname + '/index.html')
})

let PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})
// var server = require('diet')
// var app = server()
// // Create Server Instance 1
// app.listen('http://localhost:3000')
// app.get('/', function($){
//     var ect = require('ect')({
//         root  : app.path+'/Home/',
//         cache : true,
//         watch : true,
//         ext   : '.html'
//     })

//     app.view('index', ect.render)

//     // file handler
//     var static  = require('diet-static')({ path: app.path+'/views/' });
//     app.view('file', static)
//     $.end('home');
// })
// app.get('/foodfinder', function($){
//     $.end(`foodfinder`)
// })
// app.missing(function($){
//     $.end('My Custom 404 Not Found Page')
// })
// // Create Server Instance 2
// // var foodfinder = server()
// // foodfinder.listen('http://localhost:3000/foodfinder')
// // foodfinder.get('/', function($){
// //     $.end('welcome to my mobile api')
// // })