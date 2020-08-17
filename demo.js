const prompt = require('prompt-sync')();

//import { ASP } from './aspjs.js';
const ASP = require('./aspjs.js').ASP;

ASP.overwrite({

    input: prompt,
    output: console.log

});

/*
ASP.run(
    ['print',
     ['progn',
      [[
          '+',
          1,
          [
              '*',
              5,
              10
          ]
      ]]]]);
*/
ASP.run([
    'print',
    [
        'read',
        'name'
    ]]
);
