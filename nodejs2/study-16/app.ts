//Trabalhando com Typescript e transpilação (conversão de uma linguagem para outra)
//Otimização e Desenvolvimento

//Instalação do typescript
//npm install typescript -g 
//touch app.ts  (criar o arquivo app.ts para escrever código typescript)

interface Pessoa {
	nome: string
}

function Ola(pessoa: Pessoa){
	return "Olá, " + pessoa.nome;
}

//Tem que passar do tipo pessoa
//Ola(5);

Ola({ nome: "Ueder Cardoso" }); //Não dá erro porque passa um objeto do tipo pessoa

//Para transpilar o código, use "tsc app.ts"

