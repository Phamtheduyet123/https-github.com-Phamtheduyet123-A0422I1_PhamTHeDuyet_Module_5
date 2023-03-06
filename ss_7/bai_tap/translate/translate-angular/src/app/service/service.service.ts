import { Injectable } from '@angular/core';
import {Translate} from "../translate";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  translate:Translate[]=[];
  constructor() {
    this.translate=[{
      id:1,
      nameViet:"Xin chao",
      nameUsUk:"Hello",
      decription:"khi ban muon bat chuyen voi mot nguoi"
    }
    ,
      {
        id:2,
        nameViet:"Ban bao nhieu tuoi",
        nameUsUk:"How young are you?",
        decription:"khi ban muon hoi tuoi cua 1 nguoi"
      }
      ,
      {
        id:3,
        nameViet:"Ban lam gi vao ngay hom nay",
        nameUsUk:"What do you do today?",
        decription:"khi ban muon hoi 1 nguoi xem hom nay ho se lam gi"
      }]
  }
  getAll() {
    return this.translate
  }
  findById(id:number):Translate{
    return this.translate.filter(element=>element.id===id)[0];
  }
}
