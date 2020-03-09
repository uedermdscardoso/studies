import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  constructor() { }

  //ng new meu-app --prefix=tw_   - define o prefixo dos componentes 
  // --routing -- cria arquivos de rotas
  // --style=scss    Definindo o css
  // --style=sass
  // ng serve - inicia um servidor
  // ng serve -o   abre o navegador automaticamente
  // ng serve --port=4000    indica a porta
  // ng serve --host=0.0.0.0
  // ng serve --progress    será mais detalhado o processo de contrução da aplicação
  
  // g - generate
  // c - component
  // ng g c my-component    gera o arquivo de componente automaticamente
  // ng g s my-service         gera arquivo de serviço automaticamente
  // ng g p my-pipe   cria pipe automaticamente
  // ng g d my-directive     cria directive automaticamente
  // ng g g my-guard      cria guarda de rota automaticamente
  // ng g m my-module --routing     cria module automaticamente com rota
  // ng g class my-class      cria classe 
  // ng g enum my-enum    cria enum
  // ng g interface my-interface    cria interface
  
  // ng g library my-library --prefix=tw_   cria uma biblioteca para ser utilizada em outros projetos
    // -- Prepara para se tornar um pacote do npm

    //Pode criar outros projetos neste mesmo workspace
  // ng g aplication my-aplication      cria um projeto
  // ng serve      inicia projeto principal
  // ng serve my-aplication       inicia o projeto secundário my-application que foi criado
  
  // ng g universal --client-project my-application     define qual projeto será o app universal
  // universal apps são aplicações angular renderizadas no servidor

  // ng lint    verifica se o código foi escrito do padrão que foi definido nas configurações do linit

  //Os specs criados são para testes
  // ng test    realiza os testes unitários
  
  // e2e - Usamos a ferramenta protractor para teste no e2e  (protractortest.org)
  // Define onde deve ser clicado, digitado (como fosse um usuário)
  //ng e2e     executa os testes

  //ng build     gera o build para fazer o deploy no servidor  (build de desenvolvimento)
  //ng build --prod   gera build para produção 

  // ng g library nome-biblioteca
  // ng build --prod nome-biblioteca

  ngOnInit() {

  }

}
