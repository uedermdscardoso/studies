//Trabalhando com templates e acesso ao banco de dados usando express e nodejs

var express = require('express'); //Módulo express
var path = require('path');

var app = express();
 
app.use('/static',express.static('public'));

app.set('views',path.join(__dirname, 'views')); //Associando qual pasta terá as páginas de visualização
app.set('view engine', 'jade'); //Definindo a engine para renderizar a views


app.get('/', function(req, res){
	//Usa index.jade onde não precisa abrir e fechar tags
	res.render('index', { 'author': "Ueder Cardoso"}); //Renderiza a página index.jade

});

app.listen(3000, function(){
	console.log("App rodando na porta 3000");
});


//-------------------
//Precisa de módulos e configurações para poder manipular com banco
/*var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser'); //é uma middleware que vai ajudar a receber dados do cliente 
app.use(bodyParser.json()); //Que receba um json e consiga interpretar
app.use(bodyParser.urlencoded({ //Possa pegar os dados da url
	extended: true
}));

//Criando rotas do que ficar repetindo "app"
app.route('/banco') //Vai funciona somente na rota banco
	.get(function(req, resp){
		listar(resp);
	})
	.post(function(req, resp){
		var pessoas = { nome: "Rafael Sander"}
		inserir(pessoas, function(){
			listar(resp);
		});
	}) */

//Listar dados mysql
/*function listar(resp){
	MongoClient.connect("mongodb://localhost:3306/node_treinamento", function(err, db){
		//Ordernar crescente pelo próprio nome
		db.collection('pessoas').find().sort({nome: 1}).toArray(function(err, result){
			resp.render('banco', {'data': result});
		});
	});
}*/


//Inserir dados 
/*function inserir(obj, callback){
	MongoClient.connect("mongodb://localhost:3306/node_treinamento", function(err,db){
		//Ordernar crescente pelo próprio nome
		db.collection('pessoas').insertOne(obj, function(err, result){
			callback(); //Chamar a função de callback que seria a listagem novamente
		});
	})
}*/