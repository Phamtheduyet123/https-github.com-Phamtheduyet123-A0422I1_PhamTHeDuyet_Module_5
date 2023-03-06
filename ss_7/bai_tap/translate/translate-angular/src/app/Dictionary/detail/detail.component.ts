import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Translate} from "../../translate";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  translate1:Translate={};
  constructor(private serviceService:ServiceService,
              private router:Router,
              private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next=>{
      const id=next.get('id');
      if(id!=null){
        this.translate1=this.serviceService.findById(parseInt(id));
      }
    },error => {

    },()=>{

    });
  }

  ngOnInit(): void {
  }

  returnPage() {
  this.router.navigate(['/page']);
  }
}
