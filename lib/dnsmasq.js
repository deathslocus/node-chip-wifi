var exec = require('child_process');
var exports = {};
var fs = require('fs');
var initd = require('initd');

var configFile = '/etc/dnsmasq.conf';

function Dnsmasq(options){
   this.options = options;  
   if(options){
      fs.writeFileSync(configFile, parseConfig(options), 'utf-8');
   }
}

Dnsmasq.prototype.start = function(){
   initd.restart('dnsmasq').on('close', function(code){
      if(code !== 0) return console.log("Dnsmasq failed to restart");
      console.log("Dnsmasq restarted");
   });
}

Dnsmasq.prototype.stop = function(){
   initd.stop('dnsmasq').on('close', function(code){
      if(code !== 0) return console.log("Dnsmasq failed to stop");
      console.log("Dnsmasq stopped");
   });
}

var parseConfig = function(config){
   var write = '';
   for(var k in config){
      write += k + '=' + config[k] + '\n';
   }
   return write;
}

module.exports = Dnsmasq;
