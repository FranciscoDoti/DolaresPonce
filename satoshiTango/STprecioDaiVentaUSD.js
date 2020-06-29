var request = require('request');
const { assert, expect } = require('chai');

var options = {
  'method': 'GET',
  'url': 'https://criptoya.com/api/satoshitango/dai/usd',
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
  satoshiTango.USD.venta = parseFloat(resp.totalBid);
  
  console.log("satoshiTango USD precio Venta Total: " + satoshiTango.USD.venta);
  

  expect(satoshiTango.USD.venta).to.be.greaterThan(1.06);
 });