var colors=require('colors');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

module.exports = function(string,action,area) {
if(!action){
  action='debug'
}
if(!area){
  area='working'
}



  console.log((action+'@'+area)[action]+': '+JSON.stringify(string));
}
