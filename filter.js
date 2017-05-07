#!/usr/bin/env node
//
// var Transform = require('stream').Transform;
//
// var stream1 = new Transform();
// stream1._transform = function(chunk, encoding, done) {
//   this.push(chunk.toString() + 's1\r\n');
//   done();
// };
//
// module.exports = stream1;
//
// process.stdin.pipe(stream1).pipe(process.stdout);

// *** FIRST TRY ****
const fs = require('fs');
let dic = fs.readFileSync('project.dic', 'utf8').split('\n').map(word => word.replace("\r","")).filter(word => word);

var data = "";
//process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if(chunk){
      data += chunk;
  }
  console.log("new chunk");
});

process.stdin.on('end', () => {
  console.log("word data: " + data);
  let filteredWords = data.split('\n').filter(word => !dic.includes(word)).filter(word => word);
  filteredWords.forEach((filteredWord) => console.log(filteredWord));
});

//***********' SAMPLE CODE ***************

// process.stdin.setEncoding('utf8');
//
// process.stdin.on('readable', () => {
//   var chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}`);
//   }
// });
//
// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });
