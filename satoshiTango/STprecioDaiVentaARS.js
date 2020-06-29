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
  satoshiTango.ARS.venta = parseFloat(resp.totalBid);
  
  console.log("satoshiTango ARS precio Venta Total: " + satoshiTango.ARS.venta);
 

  //expect(satoshiTango.ARS.compra).to.be.below(119);
    expect(satoshiTango.ARS.venta).to.be.greaterThan(124);
 });