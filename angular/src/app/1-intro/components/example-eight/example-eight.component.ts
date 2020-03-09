import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-eight',
  templateUrl: './example-eight.component.html',
  styleUrls: ['./example-eight.component.css']
})
export class ExampleEightComponent implements OnInit {

  // :host  - Usando para estilizar o elemento que contém o componente
  // ::ng-deep - Permite estilizar por fora os elementos internos de um componente

  name = "Pablo Vitar"; 

  constructor() { }

  ngOnInit() {
  }

}
