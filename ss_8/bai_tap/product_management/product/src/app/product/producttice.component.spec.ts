import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductticeComponent } from './producttice.component';

describe('ProductticeComponent', () => {
  let component: ProductticeComponent;
  let fixture: ComponentFixture<ProductticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
