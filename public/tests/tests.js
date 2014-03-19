
var assert = chai.assert;

suite('Pruebas unitarias para Predictive Recursive Descent Parser', function() {
  
    test('Captacion del header', function() {
        var tokens = lexer('[HOLA]');
		assert.equal(tokens[0].type,'header');
    });
    
});



