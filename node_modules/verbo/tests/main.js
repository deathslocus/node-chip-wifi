var verb=require('../index.js');

verb("only string");


verb("string info","info");

verb("string info","info","area");

verb({json:true},"info","area");
