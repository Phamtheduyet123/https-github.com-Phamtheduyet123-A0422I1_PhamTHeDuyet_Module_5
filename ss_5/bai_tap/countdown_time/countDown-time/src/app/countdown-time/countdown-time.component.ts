import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-time',
  templateUrl: './countdown-time.component.html',
  styleUrls: ['./countdown-time.component.css']
})
export class CountdownTimeComponent implements OnInit {
  number:number=30;
  stop:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  start(a:any){
    this.stop=true;
    this.number=parseInt(a);
    let interval = setInterval(() => {
      this.number = +this.number - 1;
      if (this.number == 0 || !this.stop) {
        clearInterval(interval);
      }
    }, 1000);
  }
  stop1(){
    this.stop=false;
  }
  reset(){
    this.number=30;
    this.stop=false;
  }
}
// let interval = setInterval(() => {
//   this.number = this.number--;
//   if (this.progress == 0) {
//     clearInterval(interval);
//   }
// }, 1000);
