import { Component, OnInit } from '@angular/core';
import {LoHangService} from "../../service/LoHang/lo-hang.service";
import {SanPhamService} from "../../service/SanPham/san-pham.service";
import {LoHang} from "../../model/lo-hang";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {SanPham} from "../../model/san-pham";

@Component({
  selector: 'app-list-lo-hang',
  templateUrl: './list-lo-hang.component.html',
  styleUrls: ['./list-lo-hang.component.css']
})
export class ListLoHangComponent implements OnInit {
  loHang:LoHang[]=[];
  lohang:LoHang={};
  config: any;
  formSearch: FormGroup;
  constructor(private loHangService:LoHangService,
              private sanPhamService:SanPhamService,
              private toast:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.formSearch = new FormGroup({
      name: new FormControl(""),
    });
    this.loadPage();
    this.loHangService.getAll().subscribe(next=>{
      console.log(next);
      this.loHang=next;
      this.loadPage();
    },error => {

    },() =>{
    })
  }

  deleteIt(loHang: LoHang) {
    this.lohang=loHang;
  }
//   getSanPham(){
//   this.sanPhamService.getAll().subscribe(next=>{
// this.sanPham=next;
//   })
//   }
  delete(id: number) {
  this.loHangService.deleteByID(id).subscribe(next=>{
    document.getElementById("exampleModal").click();
    this.toast.success("Delete thành công");
  },error => {
    this.toast.success("Delete That Bai");
  },()=>{
    this.router.navigateByUrl("");
  })
  }
  loadPage(){
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.loHang.length
    }
  }
  pageChanged(event: number) {
    this.config.currentPage = event;
  }

  findByNameAndSanPham() {
  this.loHangService.findByNameAndSanPham(this.formSearch.value.name).subscribe(next=>{
    console.log(next);
    this.loHang=next;
    this.loadPage();
  })
  }

}
