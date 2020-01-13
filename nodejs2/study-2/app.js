//npm - node package manager

/* 
	--> npm init      (iniciar package.json)
	--> npm install --save promise
	--> npm i jasmine  --  npm i jasmine -S   (S = save)
	-- save é responsável por salvar no arquivo package.json
	
	--npm install jasmine --save-dev   --   npm i jasmine -D (D = save-dev)
	-- save-dev é reponsável por adicionar as dependências como dependências do desenvolvimento
	-- jasmine é usado para testes

	--npm run create_file   (executa o script create_file)
	--npm run ping_log   (executa o script ping_log)
*/

//Sobre o package.json
//scripts é para automatização de tarefas
//"^8.0.3" O circunflexo significa neste caso que a versão sempre permanecesário no 8 e somente alterá nos últimos números da versão
//Circunflexo e til permite baixar outro módulo caso foi atualizado
//Outras formas: ">8.0.3", ">=8.0.3", "<=8.0.3", "<8.0.3","~8.0.3"
//O ideal é deixar os três número fixos (sem circunflexo)


var promise = require('promise');