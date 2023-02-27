import {Component, Input, OnInit} from '@angular/core';
import {IRatingUnit} from "./irating-unit";

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
 @Input() number:number;
 // background_color='#808080';
 color='white';

 arr:IRatingUnit[]=[{number:1,back_color:'#808080'},{number:2,back_color:'#808080'},{number:3,back_color:'#808080'},{number:4,back_color:'#808080'},{number:5,back_color:'#808080'},{number:6,back_color:'#808080'},{number:7,back_color:'#808080'},{number:8,back_color:'#808080'},{number:9,back_color:'#808080'},{number:10,back_color:'#808080'}]
  constructor() { }

  ngOnInit(): void {
  }
  display(number1:number){
   this.number=number1;
    for (let i = 0; i <10 ; i++) {
      if(i<number1){
        this.arr[i].back_color='red';
      }else {
        this.arr[i].back_color='#808080';
      }
    }
  }
}
