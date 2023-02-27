import { Component, OnInit } from '@angular/core';
import {IFacility} from "../../model/facility/ifacility";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facility:IFacility={name:"Villa",
    area:200,
    cost:1000000,
    maxpeople:6,
    rentType:"Day",
    description:"Co ho boi",
    areaPool:"25"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
