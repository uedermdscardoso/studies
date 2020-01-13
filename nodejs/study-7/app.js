//Trabalhando com protocolo HTTP com nodejs

var http = require('http'); //Módulo http
var fs = require('fs'); 
var url = require('url');

//First example
/*var server = http.createServer(function(req, resp){
	fs.readFile(__dirname + path, function(err, data){
		resp.writeHead(200, {'Content-Type': 'text/html'});
		resp.write(data); 	
		resp.end();
	});
});*/

//Second example
var server = http.createServer(function(req, resp){
	
	var url_parts = url.parse(req.url); 
	var path = url_parts.pathname;

	fs.readFile(__dirname + path, function(err, data){
		if(err){
			resp.writeHead(404, {'Content-Type': 'text/html'});
			resp.write('Not found');
		} else {
			resp.writeHead(200, {'Content-Type': 'text/html'});
			resp.write(data); 
		}
		
		resp.end();
	});

});

server.listen(3000);

//funções auxilixares
function createFile(fileName, content){
	fs.writeFile(fileName, content, function(err){
		if(err) return console.log(err);
		console.log('Arquivo criado com sucesso!!!');
	}); 
};

function readFile(fileName){
	fs.readFile(fileName, function(err, data){
		if(err) return console.log(err);
		console.log("Conteúdo do arquivo: "+data);
	})
}