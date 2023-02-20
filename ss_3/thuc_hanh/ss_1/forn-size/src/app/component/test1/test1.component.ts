import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  title:string="Student0422i1";
  fontSize = 14;
  changeFontSizeValue(fontSize) {
    this.fontSize = fontSize;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
