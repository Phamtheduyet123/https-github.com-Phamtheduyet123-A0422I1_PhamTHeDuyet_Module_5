import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoHang} from "../../model/lo-hang";

@Injectable({
  providedIn: 'root'
})
export class LoHangService {
url="http://localhost:3000/loHang";
  constructor(private HttpClient:HttpClient) { }
  getAll():Observable<LoHang[]>{
      return this.HttpClient.get<LoHang[]>("http://localhost:3000/loHang")
  }
  createLoHang(loHang:any):Observable<any>{
      return this.HttpClient.post("http://localhost:3000/loHang",loHang);
  }
 deleteByID(id:number):Observable<LoHang>{
      return this.HttpClient.delete("http://localhost:3000/loHang/"+id);
 }
  findByNameAndSanPham(name:string):Observable<LoHang[]>{
    return  this.HttpClient.get<LoHang[]>(`${this.url}?_sort=id,name &_order=asc,desc&maLoHhang_like=${name}`);
 }
}
