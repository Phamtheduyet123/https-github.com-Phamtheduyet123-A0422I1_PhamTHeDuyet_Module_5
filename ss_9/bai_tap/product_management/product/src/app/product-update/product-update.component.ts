import { Component, OnInit } from '@angular/core';
import {Category} from "../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../model/product";
import {ServiceCategoryService} from "../service/category/service-category.service";
import {ServiceProductService} from "../service/product/service-product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  categorys:Category[]=[];
  productForm:FormGroup;
  product:Product={};
  constructor(private serviceCategory:ServiceCategoryService,
              private service:ServiceProductService,private router:Router,
              private toast:ToastrService,
              private activeRouter:ActivatedRoute) {
    this.activeRouter.paramMap.subscribe(next=>{
      const id=next.get('id');
      console.log(id)
      if(id!=null){
        this.service.findById(parseInt(id)).subscribe(next => {
          this.product= next;
          console.log(this.product)
          this.buildForm();
          this.serviceCategory.getAll().subscribe(next=>{
            this.categorys=next;
          },error => {

          },()=>{

          });
        });
      }
    })

  }

  ngOnInit(): void {
  }
  buildForm(){
    this.productForm=new FormGroup({
      id:new FormControl(this.product.id),
      name:new FormControl(this.product.name),
      price:new FormControl(this.product.price),
      description:new FormControl(this.product.description),
      category:new FormControl(this.product.category)
    })
  }
  submit() {
    this.productForm.value;
    this.service.updateProduct(this.productForm.value).subscribe(next=>{
      next.put(this.productForm.value);
    },error => {
      this.toast.success("Update That Bai")
    },()=>{
    });
    this.toast.success("Update thành công");
    this.router.navigateByUrl("");
  }
  campareFn(t1:any,t2:any){
    return t1.name == t2.name && t1.id == t2.id;
  }
}
