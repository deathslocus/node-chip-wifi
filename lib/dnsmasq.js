var exec = require('child_process');
var exports = {};

var start = function(interface, ip, dhcp_range){
   var command = [
      'dnsmasq',
      '-R',
      '-a',
      ip,
      '-i',
      interface,
      '-F',
      dhcp_range
   ].join(' ');

   exec(command, function(err, stdout, stderr){
      
   });
}

exports.start = start;
module.exports = exports;
