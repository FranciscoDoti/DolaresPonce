var request = require('request');
const { assert, expect } = require('chai');

var options = {
  'method': 'GET',
  'url': 'https://criptoya.com/api/ripio/dai/usd',
  'headers': {
    
  }
};

var ripio= {
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
  ripio.USD.venta = parseFloat(resp.totalBid);
  
  console.log("ripio USD precio Venta Total: " + ripio.USD.venta);
  

  expect(ripio.USD.venta).to.be.greaterThan(1.06);
 });