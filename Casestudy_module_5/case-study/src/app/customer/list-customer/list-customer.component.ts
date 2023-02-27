import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../../model/customer/icustomer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  aloneCustomer:ICustomer={};
  customer: ICustomer = {
    customer_name: 'Pham the duyet',
    date: new Date(2002,1,23),
    sex: true,
    cmnd: 123456789,
    phone: 12326933,
    email: 'duyetpham322@gmail.com',
    loai_khach: 'member',
    address: 'da nang'
  }

  constructor() {
  }

  ngOnInit(): void {
  }
  deleteByName(customer:ICustomer){
    this.aloneCustomer=customer;
  }
}
