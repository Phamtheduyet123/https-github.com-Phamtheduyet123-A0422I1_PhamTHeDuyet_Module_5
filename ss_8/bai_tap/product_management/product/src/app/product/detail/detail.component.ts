import { Component, OnInit } from '@angular/core';
import {ServiceProductService} from "../../service/product/service-product.service";
import {Product} from "../../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  products:Product={};
  product:Product={};
  constructor(private service:ServiceProductService,
              private activeRouter:ActivatedRoute,
              private toast:ToastrService,
              private router:Router) {
    this.activeRouter.paramMap.subscribe(next=>{
      console.log(next);
      const id = next.get('id');
      if(id!=null){
        this.service.findById(parseInt(id)).subscribe(next=>{
          this.products=next;
          console.log(this.products)
        });
      }

    });
  }

  ngOnInit(): void {
  }

  deleteIt(products: Product) {
    this.product=products;
  }

  delete(id: number) {
    this.service.deleteById(id).subscribe(next=>{
    },error => {
      this.toast.success("Delete That Bai")
    },()=>{
    });
    this.toast.success("Delete thành công");
    this.router.navigateByUrl("");
  }
}
