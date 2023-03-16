import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SanPham} from "../../model/san-pham";

@Injectable({
  providedIn: 'root'
})
export class SanPhamService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<SanPham[]>{
      return this.httpClient.get<SanPham[]>("http://localhost:3000/sanPham/");
  }

}
