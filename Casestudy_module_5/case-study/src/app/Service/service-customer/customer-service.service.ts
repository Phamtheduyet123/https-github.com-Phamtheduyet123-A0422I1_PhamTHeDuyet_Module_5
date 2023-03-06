import { Injectable } from '@angular/core';
import {ICustomer} from "../../model/customer/icustomer";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  aloneCustomer:ICustomer={};
  customer:ICustomer[]=[{
    customer_name: 'Pham the duyet',
    date: new Date(2002,1,23),
    sex: true,
    cmnd: 123456789,
    phone: 12326933,
    email: 'duyetpham322@gmail.com',
    loai_khach: 'member',
    address: 'quang binh'
  },{
    customer_name: 'Phan Nhat Tuan',
    date: new Date(2002,2,9),
    sex: true,
    cmnd: 34534646874,
    phone: 132547657,
    email: 'Tuannguuyen@gmail.com',
    loai_khach: 'member',
    address: 'da nang'
  },
    {
      customer_name: 'Ngoc trinh',
      date: new Date(2002,9,16),
      sex: false,
      cmnd: 123253446,
      phone: 789780812,
      email: 'trinhngoc@gmail.com',
      loai_khach: 'member',
      address: 'quang tri'
    },
    {
      customer_name: 'Tran quang luan',
      date: new Date(2002,5,20),
      sex: true,
      cmnd: 1898731537,
      phone: 9567354845,
      email: 'luantq@gmail.com',
      loai_khach: 'member',
      address: 'quang nom'
    }];
  constructor() { }
  delete(customer:ICustomer){
    this.aloneCustomer=customer;
  }
  getAll() {
    return this.customer;
  }
}
