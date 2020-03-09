import { Component, OnInit, OnDestroy, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-example-three',
  templateUrl: './example-three.component.html',
  styleUrls: ['./example-three.component.css']
})
export class ExampleThreeComponent implements OnInit, OnDestroy {

  name = "Vitor Souza";

  //Receber dados do nosso componente - Input()
  @Input('name') nomeExterno; 
  @Input() className;

  //Receber eventos do nosso componente
  @Output() myClick = new EventEmitter();
  
  constructor() { }

  //Quando inicializa o componente
  ngOnInit() {
    console.log('inicializado');
  }

  //Quando o componente é destruído (é removido da tela)
  ngOnDestroy(){
    console.log('removido'); 
  }

  callClick(){
    this.myClick.emit(123); //Emitir valor
  }

  //Recebe handle click
  handleClick(event){
    console.log(event);
  }

 // ---------------------------------------
  
  //Fazer two way data binding com @Input e @Output
  @Input() nameTest;
  @Output() nameTestChange = new EventEmitter();

  onChangeNameTest(){
    this.nameTestChange.emit(this.nameTest);
  }
}
