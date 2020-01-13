//Sincronia e assincronia

var fs = require('fs'); //file system

/*console.time('Assincrono');
var counter = 0; 
for(var i = 0; i < 1000; i++){
	fs.readFile('my_file.txt', function(err, data){
		if(err){
			return console.error(err);
		}
		counter++; 
		console.log(counter+" - Assincrono: "+data.toString());
		if(counter === 1000){
			console.timeEnd('Assincrono'); //Finalizar o contador de tempo
		}
	});
}*/
//Com assincronia, a execução demorou em 175,506 ms (milisegundos)

console.time('Sincronia');
for(var i=0; i < 1000; i++){
	var data = fs.readFileSync('my_file.txt');
	console.log('Sincronia: '+data);
}
console.timeEnd('Sincronia');
//Console sincronia, a execução demorou em 317,661 ms (milisegundos)