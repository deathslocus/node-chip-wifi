## C.H.I.P Wifi thing

# Purpose

This module uses hostapd and dnsmasq to create a wifi access point and dhcp server. It's been designed with the C.H.I.P (https://getchip.com/) in mind. 

# Usage

```javascript
var chipwifi = require('chip-wifi');

var network = new chipwifi({
   ssid: 'MYNETWORK', //optional
   pass: 'PASSWORD1', //optional
   routerIp: '192.168.49.1', //optional
   dhcpRange: '192.168.49.2,192.168.49.254,12h', //optional
   interface: 'wlan1'
});
network.start();
```
