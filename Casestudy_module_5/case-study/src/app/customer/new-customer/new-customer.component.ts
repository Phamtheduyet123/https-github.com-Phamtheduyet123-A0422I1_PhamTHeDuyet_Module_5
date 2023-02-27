import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../model/customer/icustomer";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
