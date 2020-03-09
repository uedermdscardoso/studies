import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  //Componentes são diretivas com templates
  //Directivas são componentes sem templates

  //Alterar a cor da fonte
  //A variável myFontColor está fazendo property binding de color
  @HostBinding('style.color') myFontColor: string; // Para propriedade

  constructor(private elementRef: ElementRef) {
    let color = '';
    //Pega uma cor aleatória
    switch(Math.floor(Math.random() * 4)){
      case 0: color = 'red'; break; 
      case 1: color = 'green'; break;
      case 2: color = 'orange'; break; 
      case 3: color = 'blue'; break;
    }

    //tag que está aplicada
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

  //Para evento de click
  //Fica escutando onde for colocado o seletor e recebe o evento de click
  @HostListener('click') myClick(){
    //alert('Olá');
    this.myFontColor = 'white';
  }


}
