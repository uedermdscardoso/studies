import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './1-intro/components/example-eleven/courses-list/courses-list.component';
import { BloqueadorGuard } from './1-intro/guards/bloqueador.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';

const routes: Routes = [
  {
    path: 'courses',
    children: [
      {
        path: ':name',
        component: CoursesListComponent,
        canDeactivate: [BloqueadorGuard],
        //canActivate: [BloqueadorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
