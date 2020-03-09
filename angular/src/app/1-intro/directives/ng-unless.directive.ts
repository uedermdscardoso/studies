import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngUnless]'
})
export class NgUnlessDirective {

  // Input - Receber os atributos que são colocados no componente
  // TemplateRef - Trabalha com o template que está aplicando a nossa diretiva
  // ViewContainerRef - Trabalha com o conteúdo do elemento

  //Pegando valor do atributo ngUnless definido no componente
  @Input() set ngUnless(condition: boolean){
    if(!condition){
      //Acessamos o container do nosso componente e inserismo a template
      this.viewContainerRef.createEmbeddedView(this.templateRef); // TemplateRef - template do elemento (que inseriu a diretiva)
    } else {
      this.viewContainerRef.clear(); //Pega a view e limpa todo o conteúdo
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
