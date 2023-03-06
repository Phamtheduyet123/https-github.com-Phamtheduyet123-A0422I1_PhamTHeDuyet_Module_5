import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../../model/customer/icustomer";
import {CustomerServiceService} from "../../Service/service-customer/customer-service.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customer1:ICustomer[]=[];
  constructor(private customer:CustomerServiceService) {
  }

  ngOnInit(): void {
    this.customer1=this.customer.getAll();
  }
  deleteByName(customer:ICustomer){
    this.customer.delete(customer);
  }
}
