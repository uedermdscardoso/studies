//Trabalhando com Otimização e desenvolvimento usando JsHint
//JsHint ajuda se está faltando algum caracter esquecido como vírgula, etc.

//Precisar jshint, para usá-lo
//npm install jshint -g

//Se executar o comando "jshint app.js", considera o arquivo app.js e verifica o código o que pode ser melhorado.
//Como nesse exemplo, pede trocar '==' por '==='
//undefined, null, array vazio são falses no javacript
//O triplo igual considera o tipo e o valor na comparação (só retorna verdadeiro como valor for nulo)
function main(a, b){ 
	if(b)
		return a === null; //E a falta do ponto e vírgula
}
/*function main(a, b){ 
	if(b)
		return a == null
}*/

// jshint.com/docs/options/ para configurar o jshint
//Quando habilita 'curly' para true, está considerando que precisa fechar while, for com chaves independente se tenha uma linha ou não
// --> jshint app.js --config ./config.js   (executar com config.js)
//examplo correto embaixo:
/*function main(a, b){ 
	if(b){
			return a === null;
	}
}*/