//Trabalhando com promises e arquivos

var fs = require('fs'),
	promise = require('promise');


//Encapsulada dentro de uma promise
function read(file){
	//Aqui, está prometendo que a função readFile executará em algum momento
	return new Promise(function(fulFill, reject){
		fs.readFile(file, function(err, data){
			if(err){
				reject();
			}
			fulFill(data.toString());
		})		
	});
}
/* 
	Promises são basicamente promessas, ou seja, 
	algo será realizado no futuro e não sabemos 
	quando vai acontecer
*/ 

read('my_file.txt')
.then((data) => {
	console.log(data);

	return '1111111'; //Valor que está retornado no then de baixo
})
.then(data => {
	console.log(data);
	return '2222222'; 
})
.then(data => {
	console.log(data); 
	return '33333333';
})

//Exemplo do callback hell
/*read('my_file.txt', function(data1, callback1){
	console.log(data1);
	//Isso forma um 'callback hell' que perde legibilidade quando se tem muitos callbacks
	callback1('111111', function(data2, callback2){
		console.log(data2);
		callback2('222222', function(data3, callcback3){
			console.log(data3);
			callback3('3333333',function(data4, callback4){
				console.log(data4);
			});
		});
	});
});*/