var request = require('request');
const { assert, expect } = require('chai');

var options = {
  'method': 'GET',
  'url': 'https://criptoya.com/api/buenbit/dai/ars',
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
  buenBit.ARS.compra =parseFloat( resp.totalAsk);
  buenBit.ARS.venta = parseFloat(resp.totalBid);
  
  console.log("BuenBit ARS precio Compra Total: " + buenBit.ARS.compra);
  console.log("BuenBit ARS precio Venta Total " + buenBit.ARS.venta);

  expect(buenBit.ARS.venta).to.be.greaterThan(124);
 });