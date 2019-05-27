const path = require('path');
const fs = require('fs');

console.log(path.normalize('/section9/../index.js'));

console.log({ __filename, __dirname });

//同期処理
// const data = fs.readFileSync(__filename, 'utf8');
// fs.writeFileSync(path.join(__dirname, 'out.txt'), data, 'utf8');

//非同期処理
// fs.readFile(__filename, 'utf8', (err, data) => {
//     fs.writeFile(path.join(__dirname, 'out2.txt'), data, 'utf8', err => {
//         console.log(err);
//     });
// });

// ストリーム処理
// const reader = fs.createReadStream(__filename, 'utf8');
// const writer = fs.createWriteStream(path.join(__dirname, 'out3.txt'), 'utf8');

// reader.pipe(writer);
// reader.resume();

// ファイル読み書き 同期関数
// const data = fs.readFileSync(path.join(__dirname, 'sample.txt'), 'utf8');
// fs.writeFileSync(path.join(__dirname, 'sample-copy.txt'), data, 'utf8');
