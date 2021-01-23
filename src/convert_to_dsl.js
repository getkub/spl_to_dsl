#!/usr/bin/env node

var spl_parser= 'spl_parser.peg';

var fs = require('fs');
var pegjs = require('pegjs');

var inFile = process.argv.slice(2);
// console.log('inFile: ', inFile[0]);

fs.readFile(inFile[0], (err, data) => {
    if (err) throw err;
  });


fs.readFile(spl_parser, 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }

    var parser = pegjs.buildParser(data);
    var inSPL = fs.readFileSync(inFile[0],'utf8')
    //console.log('Input Query: => ');
    //console.log(JSON.stringify(inSPL, null, 2));
    //console.log("\r\n");
    var result1 = parser.parse(inSPL);
    //console.log('Output DSL Query: => ');
    //console.log("\r\n");
    console.log(JSON.stringify(result1[0], null, 2));
    console.log("\r\n");

});
