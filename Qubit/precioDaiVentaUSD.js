var request = require('request');
const { assert, expect } = require('chai');

var options = {
  'method': 'GET',
  'url': 'https://criptoya.com/api/qubit/dai/usd',
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
  qubit.USD.venta = parseFloat(resp.totalBid);
  
  console.log("qubit USD precio Venta Total: " + qubit.USD.venta);
  

  expect(qubit.USD.venta).to.be.greaterThan(1.06);
 });