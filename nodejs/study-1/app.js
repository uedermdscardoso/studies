//Mostrando Hello World
for(var i=0; i<10; i++){
	value = i + 1;
	console.log(value+': Hello World!');
}

//Importando o módulo cachorro que está no arquivo separado. 
var ModuloCachorro = require('./cachorro');
console.log("A idade do cachorro, que se chama "+ModuloCachorro.nome+", é "+ModuloCachorro.idade);
ModuloCachorro.latir();

require('./cachorro').latir(); //Também pode fazer desse jeito (chamando direto)

/* 
	--> nodemon
	--> é um utilitário que executa automaticamente os arquivos javascriot ao salvar sem precisar ficando executando o comando "node app.js"
	--> Monitorar qualquer alteração no código da aplicação e automaticamente reiniciar o node.  
	--> npm install -g nodemon     (install)
	--> nodemon app.js
*/