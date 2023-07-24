var exec = require('cordova/exec');

// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'mathCalculater', 'coolMethod', [arg0]);
// };

module.exports.add = function ( arg0,success,error )
{ 
    exec(success , error, 'mathCalculator', 'add', [arg0]);
}


module.exports.substract = function ( arg0,success,error )
{ 
    exec(success , error, 'mathCalculator', 'substract', [arg0]);
}