import { Component, OnInit } from '@angular/core';
import {LoHang} from "../../model/lo-hang";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SanPham} from "../../model/san-pham";
import {LoHangService} from "../../service/LoHang/lo-hang.service";
import {SanPhamService} from "../../service/SanPham/san-pham.service";
import {ToastrService} from "ngx-toastr";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-create-lo-hang',
  templateUrl: './create-lo-hang.component.html',
  styleUrls: ['./create-lo-hang.component.css']
})
export class CreateLoHangComponent implements OnInit {
  loHangForm: FormGroup;
  sanPham:SanPham[]=[];
  loHang:LoHang={};
  constructor(private loHangService:LoHangService,
              private sanPhamService:SanPhamService,
              private toast:ToastrService,
              private router:Router) {
    this.buildForm();
    this.sanPhamService.getAll().subscribe(next=>{
            this.sanPham=next;
    },error => {

    },()=>{
    })
  }

  ngOnInit(): void {

  }
  buildForm(){
    this.loHangForm=new FormGroup({
      maLoHhang:new FormControl('',[Validators.required,Validators.pattern("^LH-\\d{4}$")]),
      sanPham:new FormControl('',[Validators.required]),
      soLuong:new FormControl('',[Validators.required,Validators.min(1)]),
      ngayNhapHang:new FormControl('',[Validators.required]),
      ngayXuatHang:new FormControl('',[Validators.required]),
      ngayHetHan:new FormControl('',[Validators.required])
    })
  }

  submit() {
  this.loHang=this.loHangForm.value
  this.loHangService.createLoHang(this.loHang).subscribe(next=>{
    this.toast.success("Thêm mới thành công");
  },error => {
    this.toast.success("Thêm mới That bai ");
  },()=>{
    this.router.navigateByUrl("");
  })
  }
}
