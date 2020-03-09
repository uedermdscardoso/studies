import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  group
} from '@angular/animations';


// void => * , * => void ou :enter e :leave significa que está entrando e saindo no DOM  

@Component({
  selector: 'app-example-sixteen',
  templateUrl: './example-sixteen.component.html',
  styleUrls: ['./example-sixteen.component.css'],
  animations: [
    trigger('btnState', [ //Ativo e inativo
      state('inactive',style({
        backgroundColor: "gray",
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: 'green',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('100ms ease-in')), //Transição do inativo para o ativo
      transition('active => inactive', animate('100ms ease-out')) // Inactive por ser substituído por * para indicar qualquer state
    ]),

    trigger('listState',[
      state('in',style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('void => *', [ // :enter //Entrando na lista
        style({transform: 'translateX(-50%)'}),
        animate(300)
      ]), // void - está anexado ao dom
      /*transition('* => void', [ // :leave //Saindo da lista
        animate(300, style({
          transform: 'translateX(30%)',
          opacity: 0
        }))
      ])*/
      transition(':leave', [ // :leave //Saindo da lista
        animate(800, keyframes([
          style({ backgroundColor: 'red', offset: 0 }), // offset sinaliza quando aplicará a cor do background
          style({ width: '50%', offset: 0.5 }),
          style({ transform: 'translateX(30%)', opacity: 0, offset: 1 }),
        ]))
      ])
    ]),

    trigger('listOpen',[ //Abrir e fechar a lista
      state('open', style({
        height: '*', // A altura é calculada automaticamente pelo angular
        fontSize: 16
      })),
      state('closed', style({
        height: 0
      })),
      transition('closed => open',animate('800ms cubic-bezier(0.600,-0.550,0.265, 1.550)')), //Mais efeitos curva bezier https://easings.net/
      transition('open => closed', [
        group([ //Execução paralela de animações
          animate('800ms ease', style({ fontSize: 0 })),
          animate('800ms cubic-bezier(0.600,-0.550,0.265, 1.550)', style({
            height: 0
          }))
        ])
      ])
    ])
  ]
})
export class ExampleSixteenComponent implements OnInit {

  //Trabalhando com animações

  myState = 'active';

  myList = [];

  myListState = 'open';

  constructor() { }

  ngOnInit() {
  }

  toggleState(){
    this.insertItem();
    this.myState = this.myState === 'active' ? 'inactive' : 'active';
  }

  insertItem(){
    this.myList.push(this.myList.length);
  }

  removeItem(index){
    this.myList.splice(index, 1);
  }

  toggleListState(){
    this.myListState = this.myListState === 'open' ? 'closed' : 'open';
  }


  //Executando funções
  animationStart(event){ //Executa quando inicia a animação
    console.log('start',event);
  }

  animationEnd(event){ //Executa quando termina a animação
    console.log('end',event);
  }
}
