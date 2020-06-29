var request = require('request');
const { assert, expect } = require('chai');

var options = {
  'method': 'GET',
  'url': 'https://criptoya.com/api/satoshitango/dai/ars',
  'headers': {
    
  }
};

var satoshiTango= {
    ARS: {
        compra: '',
        venta: ''
    },
    USD: {
        compra: '',
        venta:''
    }
};



 request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  var resp = JSON.parse(response.body);
  satoshiTango.ARS.compra =parseFloat( resp.totalAsk);
  satoshiTango.ARS.venta = parseFloat(resp.totalBid);
  
  console.log("satoshiTango ARS precio Compra Total: " + satoshiTango.ARS.compra);
 

  expect(satoshiTango.ARS.compra).to.be.below(119);
//  expect(buenBit.ARS.venta).to.be.greaterThan(124);
 });