//Fazendo uma sala de bate papo básico usando nodejs e socket.io

//npm init    (criar arquivo package.json)
//npm install socket.io --save
//npm install http-server -g
//http-server   (executar o servidor http)

var io = require('socket.io')(4000);

io.on('connection', (socket) => {
	console.log('Novo usuário conectado.');

	//Fica esperando uma mensagem
	socket.on('client-message', (data) => {
		
		//emit - Só enviaria uma mensagem para o próprio cliente que enviou a mensagem para o 'client-message'
		//socket.emit('',null);

		//broadcast.emit - envia para todos os clientes conectados menos você mesmo
		//socket.broadcast.emit('', null);

		//Enviar a resposta do servidor para o client
		io.sockets.emit('server-message', data);

		//console.log(data);
	});
	//Se você executar este comando "socket.emit('client_message','texto')" no console do navegador, a mensagem será imprimida no prompt
});
