import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {Translate} from "../../translate";

@Component({
  selector: 'app-dectionary-page',
  templateUrl: './dectionary-page.component.html',
  styleUrls: ['./dectionary-page.component.css']
})
export class DectionaryPageComponent implements OnInit {
  translate:Translate[]=[];
  constructor(private serviceService:ServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.translate=this.serviceService.getAll();
  }
}
