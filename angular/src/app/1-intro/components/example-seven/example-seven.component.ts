import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-seven',
  templateUrl: './example-seven.component.html',
  styleUrls: ['./example-seven.component.css']
})
export class ExampleSevenComponent implements OnInit {

  text = "Example - Multiple ngContents"; 
  
  constructor() { }

  ngOnInit() {
  }

}
