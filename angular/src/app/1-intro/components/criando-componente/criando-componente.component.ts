import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from '../../services/alunos.service';
import { ProjectService } from '../../services/project.service';
import { Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-criando-componente',
  templateUrl: './criando-componente.component.html',
  styleUrls: ['./criando-componente.component.css']
})
export class CriandoComponenteComponent implements OnInit, OnDestroy {

  title: string; 
  
  person: {}; 

  isVisible: boolean = true; 
  myValue: number = 1; 
  items: any = []; 
  image: string = "image.png";

  name: "Ueder Cardoso"; 

  students: any = [];
  projects: any = [];
  
  //Primeiro exemplo de remoção a cada inscrição
  projects2: any = []; //Para BehaviorSubject
  mySubscription: Subscription;

  //Segundo exemplo de remoção de múltiplas inscrições
  isAlive: boolean = true;

  constructor(
    private studentService: StudentService, //Injetando Serviço
    private projectService: ProjectService
  ) {
    this.title = "Título";
    
    this.person = {
      name: "Pedro",
      idade: "19", 
      materials: [
        {
          name: "Carro"
        }, 
        {
          name: "Violão"
        }
      ]
    };

    for(let i=0; i<5; i++){
      this.items.push({
        name: `Item ${i}`
      });
    }

    this.students = this.studentService.getStudents();
    
    this.projectService.getProjectsByFullName("angular").subscribe(
      (projects) => {
        //console.log(projects);
        this.projects = projects['items'];
      }, 
      (err) => {
        alert(err);
      }
    );

  }

  /*
  //Primeiro exemplo de remoção a cada inscrição
  ngOnInit() {
    this.getProjects2('angular');
    this.mySubscription = this.projectService.projects2.subscribe(
      (projects) => { 
        this.projects2 = projects
        console.log('Com BehaviorSubject: projects2');
        console.log(this.projects2);
      }
    );
  }

  ngOnDestroy(){
    //Remove as inscrições que foram feitas no componente antes de ser destruído
    //As inscrições ficam na memória quando estas não são removidas e o componente é destruído
    this.mySubscription.unsubscribe();
  }
  */

  //Segundo exemplo de remoção de múltiplas inscrições
  ngOnInit() { 
    this.getProjects2('angular');
    
    //Agora, remove todas as inscrições quando o componente é destruído
    this.projectService.projects2
    .pipe(
      takeWhile(() => this.isAlive) 
    )
    .subscribe(
      (projects) => { 
       this.projects2 = projects
        console.log('Com BehaviorSubject: projects2');
        console.log(this.projects2);
      }
    );
  }

  ngOnDestroy(){
    //Para exclusão de múltiplas inscrições
    this.isAlive = false;
  }

  handleClick(){
    alert('clicado');
    console.log('clicado');
  }

  //Usando BehaviorSubject
  getProjects2(name: string){
    this.projectService.getProjects2(name);
  }

}
