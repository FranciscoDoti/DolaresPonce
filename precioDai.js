var request = require('request');
const { assert, expect, AssertionError } = require('chai');
const argv = require('minimist')(process.argv.slice(2));


var options = {
    'method': 'GET',
    'url': 'https://criptoya.com/api/buenbit/dai/ars',
    'headers': {

    }
}

var buenBit = {
    ARS: {
        compra: '',
        venta: ''
    },
    USD: {
        compra: '',
        venta: ''
    }
}


request(options, async function (error, response) {
    if (error) throw new Error(error);
    var resp = await JSON.parse(response.body);
    buenBit.ARS.compra = await parseFloat(resp.totalAsk);
    buenBit.ARS.venta = await parseFloat(resp.totalBid);
    await console.log("BuenBit ARS precio Compra Total: " + buenBit.ARS.compra);
    await console.log("BuenBit ARS precio Venta Total " + buenBit.ARS.venta);

    switch (argv.tipoOperacion) {
        case 'COMPRA': {
            if (buenBit.ARS.compra > argv.montoBarrera){
                throw new AssertionError("El valor para la compra no está debajo del valor esperado")
            }
            break;
        };
        case 'VENTA': {
             expect(buenBit.ARS.venta,  "El valor para la venta no está por encima del valor esperado").to.be.greaterThan(argv.montoBarrera);
            break;
        }
    }
    }
);



