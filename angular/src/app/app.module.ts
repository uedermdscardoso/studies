import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChangeColorDirective } from './1-intro/directives/change-color.directive';
import { NgUnlessDirective } from './1-intro/directives/ng-unless.directive';

import { ReversePipe } from './1-intro/pipes/reverse.pipe';

import { AppComponent } from './app.component';
import { CriandoComponenteComponent } from './1-intro/components/criando-componente/criando-componente.component';
import { CommandsComponent } from './1-intro/components/commands/commands.component';
import { ExampleThreeComponent } from './1-intro/components/example-three/example-three.component';
import { ExampleFourComponent } from './1-intro/components/example-four/example-four.component';
import { ExampleFiveComponent } from './1-intro/components/example-five/example-five.component';
import { ExampleSixComponent } from './1-intro/components/example-six/example-six.component';
import { ExampleSevenComponent } from './1-intro/components/example-seven/example-seven.component';
import { ExampleEightComponent } from './1-intro/components/example-eight/example-eight.component';
import { ExampleNineComponent } from './1-intro/components/example-nine/example-nine.component';
import { ExampleTenComponent } from './1-intro/components/example-ten/example-ten.component';
import { ExampleElevenComponent } from './1-intro/components/example-eleven/example-eleven.component';
import { ExampleTwelveComponent } from './1-intro/components/example-twelve/example-twelve.component';
import { ExampleThirteenComponent } from './1-intro/components/example-thirteen/example-thirteen.component';
import { ExampleFourteenComponent } from './1-intro/components/example-fourteen/example-fourteen.component';
import { DataDrivenComponent } from './1-intro/components/example-fifteen/data-driven.component';
import { ExampleSixteenComponent } from './1-intro/components/example-sixteen/example-sixteen.component';
import { CoursesListComponent } from './1-intro/components/example-eleven/courses-list/courses-list.component';
import { ExampleSeventeenComponent } from './1-intro/components/example-seventeen/example-seventeen.component';

import { registerLocaleData } from '@angular/common'; //registrar dados de uma língua
import localeBR from '@angular/common/locales/pt'; //informações da linguagem

registerLocaleData(localeBR); //Registrando linguagem

@NgModule({
  declarations: [ //Declara os componentes e as diretivas
    AppComponent,
    CriandoComponenteComponent,
    CommandsComponent,
    ExampleThreeComponent,
    ExampleFourComponent,
    ExampleFiveComponent,
    ExampleSixComponent,
    ExampleSevenComponent,
    ExampleEightComponent,
    ExampleNineComponent,
    ExampleTenComponent,
    ChangeColorDirective,
    ExampleElevenComponent,
    NgUnlessDirective,
    ExampleTwelveComponent,
    ExampleThirteenComponent,
    ReversePipe,
    ExampleFourteenComponent,
    DataDrivenComponent,
    ExampleSixteenComponent,
    CoursesListComponent,
    ExampleSeventeenComponent
  ],
  imports: [ //Importa os módulos
    BrowserModule,
    AppRoutingModule, //Importar routing 
    FormsModule,
    ReactiveFormsModule, //Formulário reativo
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'} //Define a language tag
  ], //Importa os serviços
  bootstrap: [AppComponent] //O componente que será inicializado. Para inicializar a aplicação
})
export class AppModule { }
