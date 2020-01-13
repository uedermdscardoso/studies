//Trabalhando websockets com nodejs
//Usando (socket.io para sockets

//npm init    (criar arquivo package.json)
//npm install socket.io --save
//npm install http-server -g
//http-server   (executar o servidor http)


//Trabalhar na porta 3000
var io = require('socket.io')(3000);

io.on('connection', (socket) => {
	console.log('Novo usuário conectado');

	//Fica esperando uma mensagem.
	socket.on('client_message', (data) => {
		console.log(data);
	})
	//Se você executar este comando "socket.emit('client_message','texto')" no console do navegador, a mensagem será imprimida no prompt
});

