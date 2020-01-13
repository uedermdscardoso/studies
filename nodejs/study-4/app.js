//Manipular arquivo com nodejs

var fs = require('fs'); //Módulo fs (file system)

//Cria arquivo
//Sempre escreverá com arquivo novo com 'append'
/*fs.writeFile('my_file.txt', 'Ueder Cardoso', function(err){
	if(err){
		console.log(err);
	}

	console.log('Arquivo criado!');
});*/

//Adicionar o conteúdo no final do arquivo se existir
/*fs.appendFile('my_file.txt', ' 123', function(err){
	if(err){
		console.log(err);
	}
	console.log('Novo arquivo criado');
});*/

//Ler arquivo se existir 
//É função assíncrona
fs.readFile('my_file.txt', function(err, data){
	if(err){
		console.log(err);
	}
	console.log(data.toString());
});
//Exemplo abaixo está usando sincronia
//Atribue conteúdo na variável data e depois exibe com console.log
var data = fs.readFileSync('my_file.txt');
console.log(data.toString());

// * Existe versão sync que pode usar como 'readFileSync'

