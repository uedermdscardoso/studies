import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  name = '';

  //Injeção de dependências
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { 
    //this.name = this.activatedRoute.snapshot.params['name'];

    //Observando as mudanças da URL
    this.activatedRoute.params.subscribe(
      (params) => {
        this.name = params['name'];
      }
    );
  }

  ngOnInit() {
    //this.router.navigate(['/courses/jquery']); //Navegando pelo código
  }

}
