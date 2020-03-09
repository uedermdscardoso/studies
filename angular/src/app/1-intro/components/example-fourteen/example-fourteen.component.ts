import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-example-fourteen',
  templateUrl: './example-fourteen.component.html',
  styleUrls: ['./example-fourteen.component.css']
})
export class ExampleFourteenComponent implements OnInit {

  //Trabalhando com formulários

  @ViewChild('myForm') templateForm;

  //Com two way data binding
  info = {
    nome: 'Pedro',
    idade: 21, 
    email: 'pedro@email.com',
    confirmaEmail: 'pedro@email.com'
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  onSubmit(myForm: NgForm){
    console.log(myForm);
  }

  getAddress(cep){
    this.http.get(`http://viacep.com.br/ws/${cep}/json`)
      .subscribe((address) => {
        /*const values = this.templateForm.value; 
        values.endereco.bairro = 'meu bairro';
        this.templateForm.setValue(values);*/
        
        //Só passa o que deseja alterar
        this.templateForm.form.patchValue(address); //Não precisa passar objeto inteiro para alterar
      });
  }

}
