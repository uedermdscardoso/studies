import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-seventeen',
  templateUrl: './example-seventeen.component.html',
  styleUrls: ['./example-seventeen.component.css']
})
export class ExampleSeventeenComponent implements OnInit {

  /*
    > Trabalhando com internalização
    
    - Exibição de datas, números, porcentagens e moedas;
    - Tradução de textos;
    - Tratamento da forma plural de palavras;
    - Tratamento de texto alternativo.
  
    ng xi18n --output-path locale --out-file textos.xlf        --Criar arquuivo para tradução
    -- --output-path  o local onde será salvo
    -- --out-file   nome do arquivo

    ng serve --configuration=pt    define que linguagem será subido no servidor
  */

  numeroPessoas = 0; 

  genero = 'f';
  
  constructor() { }

  ngOnInit() {
  }

}
