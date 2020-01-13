describe("Elevador", function(){
	var Elevador = require('../app.js');
	
	//Cada caso de teste
	it("deve estar no andar 0", function(){
		expect(Elevador.andar).toBe(0); //Eu espero que o valor do elevador.andar seja zero 
	});

	it("deve ir ao andar 1", function(){
		Elevador.subir();
		expect(Elevador.andar).toBe(1); //Eu espero que o valor do elevador.andar seja 1
	});

	it("deve voltar ao andar 0", function(){
		Elevador.descer(); 
		expect(Elevador.andar).toBe(3);
	});

});
//Existe três testes. Apenas o último falha e exibe o que deve ser feito
