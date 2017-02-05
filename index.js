var exports = {};
var interface = require('./lib/interface');
var dnsmasq = require('./lib/dnsmasq');
var hostapdjs = require('hostapdjs');

var start = function(iface, ssid, pass){
   var routerIp = '192.168.49.1';
   var dhcpRange = '192.168.49.2,192.168.49.254,12h';

   var host = new hostapdjs({
      interface: iface,
      ssid: ssid,
      wpa_passphrase: pass
   });

   interface.setup(iface, routerIp);
   dnsmasq.start(iface, routerIp, dhcpRange);

   host.stop();
   host.updateConfig();
   host.start();

}

exports.start = start;

module.exports = exports;
