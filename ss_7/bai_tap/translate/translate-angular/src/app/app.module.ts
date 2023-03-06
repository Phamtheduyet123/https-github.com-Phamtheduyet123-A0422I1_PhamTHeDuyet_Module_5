import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DectionaryPageComponent } from './Dictionary/dectionary-page/dectionary-page.component';
import { DetailComponent } from './Dictionary/detail/detail.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    DectionaryPageComponent,
    DetailComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
      AppRoutingModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
