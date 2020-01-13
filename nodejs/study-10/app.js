//Trabalhando streaming com nodejs (vídeos)
//Streaming distribui em vários pacotes pequenos para os clientes e pode ser usados para vídeos, filmes e sons que estão consumidos na web

var fs = require('fs');
var http = require('http'); 
var url = require('url');
var path = require('path');

//Com streaming
var server = http.createServer((req, res) => {
	if(req.url !== '/movie.mp4'){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end('<video src="http://localhost:3000/movie.mp4" controls></video>'); 
	} else {
		
		//Encontrar o arquivo
		var file = path.resolve(__dirname, "movie.mp4");
		
		//Pegar o range que está requisitando do vídeo (qual período que está requisitando)
		var range = req.headers.range; 
		
		//Pegar as posições que o usuário está requisitando
		var positions = range.replace('bytes=',"").split("-"); //Substituiu "/bytes=/" por "bytes="

		var start = parseInt(positions[0],10); 

		fs.stat(file, (err, stats) => {
			var total = stats.size; //Total do arquivo

			//Posição final do arquivo
			var end = positions[1] ? parseInt(positions[1],10) : total - 1;
			
			//A quantidade/parte/pedaço que será enviado
			var chunkSize = (end - start) + 1;

			//content-
			res.writeHead(200, {
				"Content-Range": "bytes " + start + "-" + end + "/" + total,
				"Accept-Ranges": "bytes",
				"Content-length": chunkSize,
				"Content-Type": "video/mp4"
			});

			var stream = fs.createReadStream(file, { start: start, end: end})
				.on('open', () => {
					stream.pipe(res); 
					//Está enviando dados sem parar. Por isso não fechar conexão.
				})
				.on('error', (err) => {
					res.end(err); //finaliza a conexão com o navegador
				}); 
		});
	}
});

//Sem streaming
var server2 = http.createServer((req,res) => {
	if(req.url !== '/movie.mp4'){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end('<video src="http://localhost:3001/movie.mp4" controls></video>'); 
	} else {
		var file = path.resolve(__dirname, "movie.mp4");

		fs.readFile(file, (err, content) => {
			if(err){
				err.writeHead(500);
				res.end(); //Finaliza a conexão
			} else {
				res.writeHead(200, {"Content-Type": "video/mp4"});
				res.end(content);
			}
		});
	}
});

server.listen(3000); //Com Streaming
server2.listen(3001); //Sem Streaming
