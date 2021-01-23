#!/usr/bin/env node

var spl_parser= 'spl_parser.peg';

var fs = require('fs');
var pegjs = require('pegjs');

fs.readFile(spl_parser, 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }

    var parser = pegjs.buildParser(data);
    var result1 = parser.parse('key=value | stats count(a) by group1, group2');
    console.log(JSON.stringify(result1[0], null, 2));

});
