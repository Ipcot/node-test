// const Calc = require('calc-js').Calc;

const path = require('path');
// const fs = require('fs');
const fs = require('fs').promises;


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

(async () => {
    const data = await fs.readFile(path.resolve('./data.txt'), 'utf8')
    console.log(data)
})();