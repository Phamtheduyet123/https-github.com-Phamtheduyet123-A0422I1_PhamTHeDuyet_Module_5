import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color:string="blue";
  changColor(taget:any){
    this.color = taget.value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
