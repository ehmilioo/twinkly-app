const Twinkly = require('./node_modules/twinkly-api/twinkly-api.js');
const twinkly = new Twinkly('');

twinkly.setMode("movie");

function log(String){
  console.log(String);
}