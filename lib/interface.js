var exec = require('child_process').exec;
var exports = {};

var setup = function(interface, ip){
   ip += '/24';
   var command = [
      'ifconfig',
      interface,
      ip
   ].join(' ');

   exec(command, function(err, stdout, stderr){
      console.log(stdout);
      console.log(stderr);
   });
}

exports.setup = setup;
module.exports = exports;
