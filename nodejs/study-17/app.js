//Trabalhando testes com jasmine e nodejs
//Automatiação de testes

//npm install jasmine -g

//Para inicializar/iniciar o jasmine, execute no prompt "jasmine init"
//Será criado a pasta spec que padrão para testes e o arquivo jasmine.json que tem todas as configurações básicas para o jasmine rodar os testes;

var Elevador = {
	andar: 0, 
	subir: function(){
		this.andar++; 
	},
	descer: function(){
		this.andar--;
	}
}
module.exports = Elevador;

//Criar arquivo de testes e fica na pasta de spec como padrão e com nome "(nome-do-arquivo-para-testar)-spec.js"