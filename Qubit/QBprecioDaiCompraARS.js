var request = require('request');
const { assert, expect } = require('chai');

var options = {
  'method': 'GET',
  'url': 'https://criptoya.com/api/qubit/dai/ars',
  'headers': {
    
  }
};

var qubit= {
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
  qubit.ARS.compra =parseFloat( resp.totalAsk);
  qubit.ARS.venta = parseFloat(resp.totalBid);
  
  console.log("satoshiTango ARS precio Compra Total: " + qubit.ARS.compra);
 

  expect(qubit.ARS.compra).to.be.below(119);
//  expect(buenBit.ARS.venta).to.be.greaterThan(124);
 });