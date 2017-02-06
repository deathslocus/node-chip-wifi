## C.H.I.P Wifi hotspot

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
