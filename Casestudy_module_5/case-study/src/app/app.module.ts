import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewCustomerComponent } from './customer/new-customer/new-customer.component';
import {FormsModule} from "@angular/forms";
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractCustomerComponent } from './contract/contract-customer/contract-customer.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    FacilityListComponent,
    FacilityEditComponent,
    FacilityCreateComponent,
    ContractCreateComponent,
    ContractCustomerComponent,
    BodyComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
