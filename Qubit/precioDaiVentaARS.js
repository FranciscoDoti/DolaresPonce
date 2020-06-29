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
  qubit.ARS.venta = parseFloat(resp.totalBid);
  
  console.log("qubit ARS precio Venta Total: " + qubit.ARS.venta);
 

  //expect(satoshiTango.ARS.compra).to.be.below(119);
    expect(qubit.ARS.venta).to.be.greaterThan(124);
 });