import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  //Trabalhando com formulários reativos

  myForm: FormGroup; //Agrupamento de elementos
  myFormList: FormGroup;
  
  states = [
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Minas Gerais', sigla: 'MG' }
  ];

  constructor(
      private formBuilder: FormBuilder,
      private http: HttpClient
    ) { }

  ngOnInit() {
    /*this.myForm = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    /*this.myForm = this.formBuilder.group({
      nome: ['Pedro'], 
      email: []
    });*/

    //Com validação
    // valor, validator sincrono, validator assincrono
    const fb = this.formBuilder;

    //Criando form array
    this.myFormList = fb.group({
      fruits: fb.array([this.createFruit()])
    });

    this.myForm = fb.group({
      info: fb.group({
        nome: [null, [Validators.required, Validators.minLength(4), this.nameValidation], [this.userValidation.bind(this)]],
        idade: [null],
        email: [null, [Validators.required, Validators.email]],
        confirmaEmail: [null],
        genero: ['M'],
        empregado: [null,[Validators.pattern('true')]]
      }),
      endereco: fb.group({
        cep: [null],
        logradouro: [null],
        numero: [null],
        complemento: [null],
        bairro: [null],
        localidade: [null],
        uf: [null]
      })
    });

    //Verificando as alterações do status do formulário
    //this.myForm.valueChanges  //Para qualquer campo do formulário
    this.myForm.get('info.nome').valueChanges.subscribe( //Para o campo nome
      (value) => console.log('nome alterado: ', value) ); 
  
  }

  onSubmit(){
    console.log(this.myForm);
  }

  getAddress(){
    this.http.get(`http://viacep.com.br/ws/${ this.myForm.get('endereco.cep').value }/json`)
      .subscribe((address) => {
        this.myForm.patchValue(address); //Não precisa passar objeto inteiro para alterar
      });
  }

  setState(){
    const myState = { nome: 'Rio de Janeiro', sigla: 'RJ'};
    this.myForm.get('endereco.uf').setValue(myState);
  }

  compareStates(obj1, obj2){
    if(obj1 && obj2){
      return obj1.sigla === obj2.sigla;
    }
    return false;
  }

  //Validação personalizada
  nameValidation(control: FormControl){
    const value = control.value || '',
      errorMessage = `O nome deve começar com "j", mas começa com ${ value[0] }`;
    return value.toLowerCase()[0] === 'j' ? null : { invalidName: errorMessage };
  }

  //Validação Assincrona
  userValidation(control: FormControl){
    return this.http.get(`https:/api.github.com/users/${control.value}`)
      .pipe(
        map( response => {
          if(!response['message']){
            return { 'invalidMessage': 'username in use'};
          }
          return null;
        })
      );
  }

  addFruit(){
    const fruits = this.myFormList.get('fruits') as FormArray;
    fruits.push(this.createFruit());
  }

  removeFruit(index){
    const fruits = this.myFormList.get('fruits') as FormArray;
    fruits.removeAt(index);
  }

  //criando fruta
  createFruit(){
    return this.formBuilder.group({
      name: [null, Validators.required, Validators.minLength(4)],
      price: [null, Validators.required]
    });
  }

}
