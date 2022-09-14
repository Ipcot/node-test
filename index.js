// const Calc = require('calc-js').Calc;

// const path = require('path');
// // const fs = require('fs');
// const fs = require('fs').promises;
// const http = require('http');

const morgan = require('morgan')
const express = require('express');
const app = express();
const PORT = 8081;

// app.get('/home', (req, res) => {
//     res.send('get request');
// });

// app.post('/home', (req, res) => {
//     res.send('post request');
// });

// app.delete('/home', (req, res) => {
//     res.send('delete request');
// });

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(morgan('tiny'))

// app.use((req, res, next) => {
//     // res.send('use request');
//     // res.redirect('https://google.com')
//     // res.json({javaScript: 'object'})
//     console.log(`${req.method} ${req.originalUrl}, ${new Date().toString()}` )
//     next();
// });

// app.post('/home', (req, res) => {
//     console.log(req.body);
//     res.json({javascript: 'object', body: req.body});
// });

app.post('/home', (req, res) => {
    if(!req.body.goit) {
        return res.status(400).json({status: 'goit parametr is require'})
    }
    console.log(req.body);
    res.json({javascript: 'objectobject', body: req.body});
});

app.listen(PORT, (err) =>  {
    if(err) {
console.error('Error at server launch:', err);
    }
    console.log(`Server works at port ${PORT}`);
});




// const {getCurrentDate} = require('./dateUtiles');

// console.log(getCurrentDate(), 'get current date');
// console.log(__filename);
// console.log(__dirname);
// console.log(process.argv);
// const [,, a, b] = process.argv;

// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

// console.log(path.resolve('dateUtiles.js'))

// fs.readFile('./data.txt', 'utf8', (error, data) => {
// if(error) {
// console.error(error)
// }
// console.log(data);
// });

// fs.readFile(path.resolve('./data.txt'), 'utf8').then(data => {console.log(data)}).catch(err => console.error)

// (async () => {
//     const data = await fs.readFile(path.resolve('./data.txt'), 'utf8')
//     console.log(data)
// })();



// const PORT = 8081;

// const requestHandler = async (request, response) => {
    
//         const manifest = await fs.readFile('./package.json', 'utf8');
//         response.writeHead(200, {'Content-type': 'text/json'});
//         response.end(manifest);
    

// }


// const server = http.createServer(requestHandler);

// server.listen(PORT, (err) => {
//     if(err) {
//         console.error('Erroe at server', err);
//     }
//     console.log(`server srart at port ${PORT}`)
// });