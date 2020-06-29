var request = require('request');
const { assert, expect } = require('chai');

var options = {
  'method': 'GET',
  'url': 'https://criptoya.com/api/ripio/dai/ars',
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
  ripio.ARS.venta = parseFloat(resp.totalBid);
  
  console.log("ripio ARS precio Venta Total: " + ripio.ARS.venta);
 

  //expect(satoshiTango.ARS.compra).to.be.below(119);
    expect(ripio.ARS.venta).to.be.greaterThan(124);
 });