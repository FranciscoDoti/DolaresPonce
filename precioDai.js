var request = require('request');
const { assert, expect } = require('chai');
const argv = require('minimist')(process.argv.slice(2));


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
  var resp = JSON.parse(response.body);
  buenBit.ARS.compra =parseFloat( resp.totalAsk);
  buenBit.ARS.venta = parseFloat(resp.totalBid);
  
  console.log("BuenBit ARS precio Compra Total: " + buenBit.ARS.compra);
  console.log("BuenBit ARS precio Venta Total " + buenBit.ARS.venta);

  switch(argv.tipoOperacion){
    case 'COMPRA' : {
        expect(buenBit.ARS.compra).to.be.below(argv.montoBarrera);
        break;
      };
    case 'VENTA' : {
        expect(buenBit.ARS.venta).to.be.greaterThan(argv.montoBarrera);
        break;
  }


    }
});