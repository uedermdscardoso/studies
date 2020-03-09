import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-thirteen',
  templateUrl: './example-thirteen.component.html',
  styleUrls: ['./example-thirteen.component.css']
})
export class ExampleThirteenComponent implements OnInit {

  //Trabalhando com pipes
  //Pipe - Recebe os dados, processa os dados e retorna uma saída 
  //pipes são como filtros que pegam dados e retornar o processado/formatado
  
  title = "Trabalhando com os pipes"

  constructor() { }

  ngOnInit() {
  }

}
