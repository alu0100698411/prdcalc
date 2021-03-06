
var assert = chai.assert;

var assert = chai.assert;

suite('Pruebas para los tokens', function(){

  test('Pruebas funcion string', function(){
    var input = "var a = b;";
    var esperado = "[{\"type\":\"ID\",\"value\":\"var\",\"from\":0,\"to\":3},{\"type\":\"ID\",\"value\":\"a\",\"from\":4,\"to\":5},{\"type\":\"=\",\"value\":\"=\",\"from\":6,\"to\":7},{\"type\":\"ID\",\"value\":\"b\",\"from\":8,\"to\":9},{\"type\":\";\",\"value\":\";\",\"from\":9,\"to\":10}]";
	var resultado = JSON.stringify(input.tokens());

	assert.equal(esperado, resultado);
  });
  
  test('Error en la funcion string', function(){
    var input = "!!FALLO^^";
	var resultado = "Syntax error near '!!FALLO^^'";

    chai.expect(function () { input.tokens() }).to.throw(resultado);
  });
});

suite('Pruebas para el parser', function(){
  // CAMBIAR POR UN EJEMPLO MAS SIMPLE
  test('Ejemplo de codigo para el parser', function(){
	var input = "BEGIN\n      x = x + 1\nEND.";
	var result = window.parse(input);
	var esperado = "[\n    [\n        {\n            \"type\": \"=\",\n            \"left\": {\n                \"type\": \"ID\",\n                \"value\": \"x\"\n            },\n            \"right\": {\n                \"type\": \"+\",\n                \"left\": {\n                    \"type\": \"ID\",\n                    \"value\": \"x\"\n                },\n                \"right\": {\n                    \"type\": \"NUM\",\n                    \"value\": 1\n                }\n            }\n        }\n    ]\n]";

	var resultado, tree;
    try {
      tree = parse(input);
      resultado = JSON.stringify(tree, null, 4);
    } catch (e) {
      resultado = JSON.stringify(e, null, 4);
    }

	assert.equal(esperado, resultado);
  });
  
  test('Errores en el parser', function(){
  	var input = "a = 4*2!;";
	var esperado = "Syntax error near \'!;\'";

    chai.expect(function () { window.parse(input) }).to.throw(esperado);
  });

});


suite('Pruebas Unitarias para localStorage', function() {
	test('Soporte de localStorage (original)', function() {
		if(window.localStorage){
		  localStorage.original = "test";
		  assert.equal(localStorage.original, "test");
		  localStorage.removeItem("test");
		}
    });
	test('Soporte de localStorage (output)', function() {
		if(window.localStorage){
		  localStorage.output = "test";
		  assert.equal(localStorage.output, "test");
		  localStorage.removeItem("test");
		}
    });
});
