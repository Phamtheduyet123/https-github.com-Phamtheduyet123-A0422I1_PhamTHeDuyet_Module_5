import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  register:FormGroup;
  form:Form[]=[];
  constructor() {
    this.register = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.pattern("^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      confirmPassword:new FormControl('',[Validators.required,Validators.minLength(6)]),
      country: new FormControl(),
      age: new FormControl('',[Validators.min(18)]),
      gender:new FormControl(),
      phone:new FormControl('',[Validators.pattern("^(\\(+84|0)\\d{9}$")])
    },[this.confirmPassword])
  }

  ngOnInit(): void {
  }
  confirmPassword(form:any){
    let confirmPass=form.controls.confirmPassword.value;
    if(confirmPass == form.controls.password.value){
      return null;
    }
    else {
      return { "invalidconfirmPassword":true};
    }

  }
  Register() {
  this.form.push(this.register.value);
  console.log(this.form);
    console.log(this.register);
  }
}
