import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate, CanActivate } from '@angular/router';
import { CoursesListComponent } from '../components/example-eleven/courses-list/courses-list.component';

@Injectable({
  providedIn: 'root'
})
export class BloqueadorGuard implements CanActivate, CanDeactivate<CoursesListComponent> {
  
  //ActivatedRouteSnapshot -- Verifica qual será a próxima rota
  //RouterStateSnapshot  -- Recebe o status da rota

  //CanDeactivate<CoursesListComponent> -- Informa o componente que está querendo sair

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    console.log(next, state);
    return false; //Não pode entrar na rota
  }

  //Pode sair (Permissão para sair)
  canDeactivate(
    component: CoursesListComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(component, next, state);
    return false; //Não consegue sair da rota
    //Permitindo que deixe a rota se for true
  }
}
