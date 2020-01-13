//Trabalhando com o servidor express com nodejs

//É necessário instalar alguns módulos
//npm i express jade mongodb body-parser --save

//Quando './' porque se refere ao caminho relativo
var express = require('express'); //Módulo express
var app = express();

app.get('/', function(req, res){
	res.send('Hello World!'); //Envia mensagem ao cliente
});

app.get('/abc/:id?', function(req, res){
	res.send('Hello World! '+req.params.id);
});

app.get(/((sh)|(x))amp(o{2}|u)/, function(req, res){
	res.send('Hello World!');
});

app.listen(3000, function(){
	console.log("App rodando na porta 3000");
});
