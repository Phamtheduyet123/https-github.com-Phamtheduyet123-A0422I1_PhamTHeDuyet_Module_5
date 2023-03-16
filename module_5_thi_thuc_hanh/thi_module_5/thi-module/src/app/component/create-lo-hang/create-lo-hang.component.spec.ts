import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoHangComponent } from './create-lo-hang.component';

describe('CreateLoHangComponent', () => {
  let component: CreateLoHangComponent;
  let fixture: ComponentFixture<CreateLoHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLoHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLoHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
