var request = require('request');
const { assert, expect } = require('chai');

var options = {
  'method': 'GET',
  'url': 'https://criptoya.com/api/buenbit/dai/usd',
  'headers': {
    
  }
};

var buenBit= {
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
  buenBit.USD.venta =parseFloat( resp.totalBid);
  
  console.log("BuenBit USD precio Venta Total: " + buenBit.USD.venta);
  

  expect(buenBit.USD.venta).to.be.greaterThan(1.06);
 });