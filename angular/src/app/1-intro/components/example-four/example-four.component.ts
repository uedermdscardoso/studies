import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example-four',
  templateUrl: './example-four.component.html',
  styleUrls: ['./example-four.component.css']
})
export class ExampleFourComponent implements OnInit {

  name = "Vitor";

  @ViewChild('myElement') myElement: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.myElement);
  }

}
