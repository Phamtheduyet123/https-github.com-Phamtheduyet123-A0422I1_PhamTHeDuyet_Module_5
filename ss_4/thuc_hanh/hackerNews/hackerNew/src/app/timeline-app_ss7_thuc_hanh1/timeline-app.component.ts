import { Component, OnInit } from '@angular/core';
import {DateUntilService} from "../service_ss7_thuc_hanh1/date-until.service";

@Component({
  selector: 'app-timeline-app',
  templateUrl: './timeline-app.component.html',
  styleUrls: ['./timeline-app.component.css']
})
export class TimelineAppComponent implements OnInit {
  output = '';
  constructor(private dateUtilService: DateUntilService) { }

  ngOnInit(): void {
  }
  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
