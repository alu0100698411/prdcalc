
var assert = chai.assert;

suite('Pruebas para los tokens', function(){

  test('Pruebas funcion string', function(){
    var input = "var a = b;";
    var esperado = "[{\"type\":\"ID\",\"value\":\"var\",\"from\":0,\"to\":3},{\"type\":\"ID\",\"value\":\"a\",\"from\":4,\"to\":5},{\"type\":\"=\",\"value\":\"=\",\"from\":6,\"to\":7},{\"type\":\"ID\",\"value\":\"b\",\"from\":8,\"to\":9},{\"type\":\";\",\"value\":\";\",\"from\":9,\"to\":10}]";
	var resultado = JSON.stringify(tokens(input));

	assert.equal(esperado, resultado);
  });
});
