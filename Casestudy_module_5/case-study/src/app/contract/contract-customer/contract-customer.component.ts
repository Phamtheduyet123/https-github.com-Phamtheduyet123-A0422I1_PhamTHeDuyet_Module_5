import { Component, OnInit } from '@angular/core';
import {IContract} from "../../model/contract/icontract";

@Component({
  selector: 'app-contract-customer',
  templateUrl: './contract-customer.component.html',
  styleUrls: ['./contract-customer.component.css']
})
export class ContractCustomerComponent implements OnInit {
  contractCustomer:IContract={
    soHopDong:123,
    ngayBatDau:new Date(2023,3,12),
    ngayKetThuc:new Date(2023,3,13),
    soTienCoc:500000,
    tongThanhToan:1000000
  }
  constructor() { }

  ngOnInit(): void {
  }

}
