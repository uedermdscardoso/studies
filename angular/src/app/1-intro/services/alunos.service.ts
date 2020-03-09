import { Injectable } from '@angular/core';

//Injeção de dependências
//Injectable indica ao angular que a classe terá comportamentos necessários para que possam ser injetados
@Injectable({
  providedIn: 'root' //Módulo raiz (app.module)
})
export class StudentService {

  students: any = [];

  constructor() { 

    this.students = [
      {
        name: "João",
        idade: 18
      },
      {
        name: "Vitor",
        idade: 23
      },
      {
        name: "Laura",
        idade: 21
      },
      {
        name: "Sofia",
        idade: 17
      }
    ];
  }

  
  getStudents(){
    return this.students;
  };

}
