var request = require('request');
const { assert, expect } = require('chai');

var options = {
  'method': 'GET',
  'url': 'https://criptoya.com/api/dolar',
  'headers': {
    
  }
};

var dolar= {
    "oficial": "",
    "solidario":"",
    "mep": "",
    "ccl": "",
    "blue": "",
}



 request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  var resp = JSON.parse(response.body);
  dolar.blue =parseFloat( resp.blue);
  
  
  console.log("Dolar blue compra:  " + dolar.blue);
  

  expect(dolar.blue).to.be.greaterThan(128,5);
//  expect(buenBit.ARS.venta).to.be.greaterThan(124);
 });