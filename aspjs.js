/***
*
* 
*
***/

const ASP = {
    defaults: {
        output: console.log  
    },
    run: (code) => {
        return ASP.resolve(code);
    },
    resolve: (cmd) => {
        if(!Array.isArray(cmd)) {
            cmd=[cmd];
        }

        switch(cmd[0]) {
        case "+":
            return (parseInt(ASP.resolve(cmd[1])) + parseInt(ASP.resolve(cmd[2])));
            break;
        case "-":
            return (parseInt(ASP.resolve(cmd[1])) + parseInt(ASP.resolve(cmd[2])));
            break;
        case "*":
            return (parseInt(ASP.resolve(cmd[1])) * parseInt(ASP.resolve(cmd[2])));
            break;
        case "/":
            return (parseInt(ASP.resolve(cmd[1])) / parseInt(ASP.resolve(cmd[2])));
            break;
        case "rem":
        case "mod":
            return (parseInt(ASP.resolve(cmd[1])) % parseInt(ASP.resolve(cmd[2])));
            break;
        case "print":
            ASP.defaults.output(ASP.resolve(cmd[1]));
            break;
        case "progn":
            if(cmd[1].length < 1 || cmd[1] == undefined) {
                throw "ERROR";
            }
            let ret;
            for(let c in cmd[1]) {
                console.log(cmd[1][c])
                console.log(c)
                console.log(cmd[1].length-1)
                if(c==cmd[1].length-1) {
                    return ASP.resolve(cmd[1][c]);
                } else {
                   ASP.resolve(cmd[1][c]);
                }
                return ret;
            }
            break;
        default:
            return cmd;
        }
    }
};

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
