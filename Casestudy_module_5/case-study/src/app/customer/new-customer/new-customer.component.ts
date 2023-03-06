import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../model/customer/icustomer";
import {CustomerServiceService} from "../../Service/service-customer/customer-service.service";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  createStudent:FormGroup;
  constructor(private customer:CustomerServiceService) {
  this.createStudent= new FormGroup({
    customer_name:new FormControl(),
    date:new FormControl('',[Validators.required,Validators.pattern("^")]),
    sex:new FormControl('',[Validators.required]),
    cmnd:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    loai_khach:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required])
  })
  }

  ngOnInit(): void {
  }

  Create() {
  this.customer.customer.push(this.createStudent.value);
  }
}
