var exports = {};
var interface = require('./lib/interface');
var dnsmasq = require('./lib/dnsmasq');
var hostapdjs = require('hostapdjs');
var uuid = require('uuid');

function ChipWifi(config){
   this.config = config;
}

ChipWifi.prototype.start = function(cb){
   var config = this.config;

   var ssid = config.ssid || randomSSID(8); 
   var pass = config.pass || randomSSID(10);

   var routerIp = config.routerIp || '192.168.49.1';
   var dhcpRange = config.dhcpRange || '192.168.49.2,192.168.49.254,12h';

   this.host = new hostapdjs({
      interface: config.interface,
      ssid: ssid,
      wpa_passphrase: pass
   });

   this.dhcp = new dnsmasq({
      'address': '/#/' + routerIp,
      'interface': config.interface,
      'dhcp-range': dhcpRange
   });
   
   interface.setup(config.interface, routerIp);

   this.dhcp.start();
   this.host.start();

   this.ssid = ssid;
   this.pass = pass;
   cb(null, getInfo());
}

ChipWifi.prototype.stop = function(){
   this.dhcp.stop();
   this.host.stop();
}

ChipWifi.prototype.getInfo = function(){
   return {ssid: this.ssid, pass: this.pass};
}

var randomSSID = function(len){
   var id = uuid.v4();
   return new Buffer(id).toString('base64').substring(0, len);
}

module.exports = ChipWifi;
