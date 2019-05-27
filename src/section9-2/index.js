const path = require('path');
const fs = require('fs');
const util = require('util');

// fs.readFile(path.join(__dirname, 'sample.txt'), 'utf8', (err, data) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     fs.writeFile(path.join(__dirname, 'sample-copy.txt'), data, 'utf8', err => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }
//         console.log('OK');
//     });
// });

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readFile(path.join(__dirname, 'sample.txt'), 'utf-8').then();
