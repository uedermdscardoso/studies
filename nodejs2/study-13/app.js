//Trabalhando com express e middlewares

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


//middlewares são funções que tem acessos a objetos de requisição de respósta
//Eles podem fazer alteração ou algum processamento ali no meio entre receber a requisição e responde essa requisição ao cliente.

/*
	Tudo que jogar na pasta 'public', o nosso middleware acaba 
	enviando direto a requisição para o public dizendo que ali tem arquivos estáticos
*/
//Acessar arquivos estáticos
//app.use(express.static('public')); //Não precisa informar o 'static' na url
app.use('/static',express.static('public')); //Aqui precisa informar 'static' na url