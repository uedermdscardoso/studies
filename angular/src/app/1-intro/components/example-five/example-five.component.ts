import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-example-five',
  templateUrl: './example-five.component.html',
  styleUrls: ['./example-five.component.css']
})
export class ExampleFiveComponent implements OnInit {

  //Usando DOMSanitizer - Permite a alteração do elemento

  myStyle = '';

  get mySafeStyle(){
    return this.sanitizer.bypassSecurityTrustStyle(this.myStyle); //Validando css
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
