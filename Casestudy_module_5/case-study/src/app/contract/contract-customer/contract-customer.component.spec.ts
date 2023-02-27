import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCustomerComponent } from './contract-customer.component';

describe('ContractCustomerComponent', () => {
  let component: ContractCustomerComponent;
  let fixture: ComponentFixture<ContractCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
