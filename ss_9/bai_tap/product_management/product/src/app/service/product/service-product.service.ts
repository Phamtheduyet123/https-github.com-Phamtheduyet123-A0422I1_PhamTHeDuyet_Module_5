import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../model/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {
  product:Product[]=[];
  constructor(private httpClient:HttpClient) {}
  getAll():Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:3000/products123/");
  }
  createProduct(product:any):Observable<any>{
    return this.httpClient.post<any>("http://localhost:3000/products123",product);
}
  updateProduct(product:any):Observable<any>{
    return this.httpClient.put<any>("http://localhost:3000/products123/"+product.id,product);
}
  findById(id:number):Observable<Product>{
    return this.httpClient.get("http://localhost:3000/products123/"+id);
  }
  deleteById(id:number):Observable<Product>{
    return this.httpClient.delete("http://localhost:3000/products123/"+id)
  }
}
