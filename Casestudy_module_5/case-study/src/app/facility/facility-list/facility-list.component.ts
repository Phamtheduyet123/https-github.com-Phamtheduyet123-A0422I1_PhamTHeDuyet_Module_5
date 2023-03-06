import { Component, OnInit } from '@angular/core';
import {IFacility} from "../../model/facility/ifacility";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facility:IFacility[]=[{name:"Villa",
    area:450,
    cost:2000000,
    maxpeople:6,
    rentType:"Day",
    description:"Co ho boi",
    areaPool:"50"
  },
    {
      name:"Room",
      area:20,
      cost:500000,
      maxpeople:2,
      rentType:"Day",
      description:""
    },{
      name:"House",
      area:250,
      cost:1000000,
      maxpeople:4,
      rentType:"Day",
      description:"Co ho boi",
      areaPool:"25"
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
