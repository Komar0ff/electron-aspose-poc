const path = require('path');
console.log( path.resolve("."));

var java = require('java');
var javaLangSystem = java.import('java.lang.System');

javaLangSystem.out.printlnSync('Hello World');
