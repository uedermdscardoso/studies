//Trabalhando cluster com nodejs
//Cluster - Separar a aplicação em vários processos menores para suportar a quantidade de usuário que está requisitando

var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length; //pega números de cepus que a máquina tem 
//O módulo os pega todas as informações do sistema operacional atual

if(cluster.isMaster){ //Se o nosso processamento é principal (aquele que iniciou a aplicação)
	//Divide em outros processos que é o nosso cluster
	for(var i=0; i<numCPUs; i++){
		cluster.fork();
	}

	//Certos eventos forem emitidos
	//Quando tiver online, recebe o worker que é responsável pelo nosso cluster
	cluster.on('online', (worker) => {
		console.log(`worker ${worker.process.pid} is online`);
	});

	//Quando tiver escutando/pronto
	cluster.on('listening', (address) => {
		console.log('worker is listenning');
	});

	//Quando deu algum problema
	cluster.on('exit', (worker, code, signal) => {
		console.log('worker ${worker.process.pid} died');
	})
} else {
	//Pequeno servidor http para quando o processo não é principal
	//Quando acessar o servidor após executar o nosso, irá conectar em um determinado processo
	//Teria vários processos diferentes atendendo vários clientes ao invés de único processo
	http.createServer((req,res) => {
		res.writeHead(200);
		res.end(`process ${process.pid} says hello`); //Encerra a conexão
	}).listen(8000); 
}