import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

//Para tipar a requisição
interface GitHubResponse{
  incomplete_results: boolean,
  items: any[],
  total_count: number
}

//Injeção de dependências
//Injectable indica ao angular que a classe terá comportamentos necessários para que possam ser injetados
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects2 = new BehaviorSubject<any[]>([]); //Valor sendo alterado a cada requisição feita

  constructor(
    private http: HttpClient
  ) { }

  
  getProjects(name: string){
    return this.http.get<GitHubResponse>(`https://api.github.com/search/repositories?q=${name}`);
  };

  getProjects2(name: string){
    return this.http.get<GitHubResponse>(`https://api.github.com/search/repositories?q=${name}`)
        .subscribe(
          (projs) => {
            this.projects2.next(projs.items);
          },
          (err) => {
            alert(err);
          }
        );
  };

  getProjectsByName(name: string){
    const url = 'https://api.github.com/search/repositories';
    const params = new HttpParams().set('q',name); //A cada, cria um objeto

    //HttpParam é um objeto imutável.
    //const params2 = params.set('q', text); //Não funcionaria se fizesse a atribuição

    return this.http.get<GitHubResponse>(url,{ params });
  };

  getProjectsByFullName(name: string){
    const url = 'https://api.github.com/search/repositories';
    const params = new HttpParams().set('q',name); //A cada, cria um objeto

    //HttpParam e HttpHeader são objetos imutáveis.

    const headers = new HttpHeaders().set('Content-Type','text/html');

    //this.http.post<GitHubResponse>(url,{ body },{ params, headers });

    return this.http.get<GitHubResponse>(url,{ params, headers });
  };

}
