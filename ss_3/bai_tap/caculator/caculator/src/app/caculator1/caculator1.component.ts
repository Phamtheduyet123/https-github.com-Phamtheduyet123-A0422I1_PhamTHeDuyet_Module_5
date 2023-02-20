import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator1',
  templateUrl: './caculator1.component.html',
  styleUrls: ['./caculator1.component.css']
})
export class Caculator1Component implements OnInit {
  number1:number=0;
  number2:number=0;
  result:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  plus(number1:string,number2:string,cal:string){
    this.number1 = parseInt(number1);
    this.number2 = parseInt(number2);
    if(cal=='+'){
      this.result=this.number1+this.number2;
    }
    if(cal=='-'){
      this.result=this.number1-this.number2;
    }
    if(cal=='*'){
      this.result=this.number1*this.number2;
    }
    if(cal=='/'){
      this.result=this.number1/this.number2;
    }
  }
}
