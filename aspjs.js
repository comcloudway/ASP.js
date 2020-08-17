/***
*
* 
*
***/

const ASP = {
    defaults: {
        output: console.log  
    },
    overwrite: (defaults) => {
        Object.assign(ASP.defaults, defaults);
    },
    run: (code) => {
        return ASP.resolve(code);
    },
    resolve: (cmd) => {
        if(!Array.isArray(cmd)) {
            cmd=[cmd];
        }

        switch(cmd[0]) {

            /*
              MATH
            */
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

            /*
              Console Output
            */
        case "print":
            ASP.defaults.output(ASP.resolve(cmd[1]));
            break;
        case "terpri":
            ASP.defaults.output('\n');
            break;

            /*
              Console Input
            */
        case "read":
            let q = cmd[1];
            if(!q) {
                q="";
            }
            return ASP.defaults.input(q);
            break;

            /*
              Extras
            */
        case "progn":
            if(cmd[1].length < 1 || cmd[1] == undefined) {
                throw "ERROR";
            }
            let ret;
            for(let c in cmd[1]) {
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

module.exports= {
    ASP
};
