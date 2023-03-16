import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoHangComponent } from './list-lo-hang.component';

describe('ListLoHangComponent', () => {
  let component: ListLoHangComponent;
  let fixture: ComponentFixture<ListLoHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLoHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLoHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
