//import { ASP } from './aspjs.js';
const ASP = require('./aspjs.js').ASP;

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
