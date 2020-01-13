//Trabalhando com eventos
var EventEmitter = require('events'); 

var emitter = new EventEmitter(); 

emitter.on('my_event', function(number){
	console.log('My event '+number);
})

emitter.on('my_second_event', function(){
	console.log('My second event');
});

emitter.emit('my_event',123); 
//emitter.emit('my_second_event');

//Criando objeto cachorro
class Cachorro extends EventEmitter{
	latir(){
		console.log('Au au au');
	}
	comer(){
		console.log('Comendo...');
	}
}
var Rex = new Cachorro(); 
//Rex.on('pessoa_no_portao', Rex.latir); //Executa duas vezes
//Rex.on('pessoa_no_portao', Rex.comer); //Executa três vez
Rex.once('pessoa_no_portao', Rex.latir); //once executa apenas uma vez e executa o removeListener automaticamente

Rex.emit('pessoa_no_portao');
Rex.emit('pessoa_no_portao');
//Rex.removeListener('pessoa_no_portao', Rex.latir); //Ao remover o event, cancela o evento. Passar o método latir para parar de executar porque um evento pode executar mais que um método/função. 
Rex.emit('pessoa_no_portao');