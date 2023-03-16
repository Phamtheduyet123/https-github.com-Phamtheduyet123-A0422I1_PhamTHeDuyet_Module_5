import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ListLoHangComponent } from './component/list-lo-hang/list-lo-hang.component';
import { CreateLoHangComponent } from './component/create-lo-hang/create-lo-hang.component';

@NgModule({
  declarations: [
    AppComponent,
    ListLoHangComponent,
    CreateLoHangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(({
      positionClass:'toast-top-center',
      timeOut:3000
    }))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
