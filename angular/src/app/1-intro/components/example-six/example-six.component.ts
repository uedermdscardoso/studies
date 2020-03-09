import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-six',
  templateUrl: './example-six.component.html',
  styleUrls: ['./example-six.component.css']
})
export class ExampleSixComponent implements OnInit {

  text = "Example - Singular ngContent";

  constructor() { }

  ngOnInit() {
  }

}
