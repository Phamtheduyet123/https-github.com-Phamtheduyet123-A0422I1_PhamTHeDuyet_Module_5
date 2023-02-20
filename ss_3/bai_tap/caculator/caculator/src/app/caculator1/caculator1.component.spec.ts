import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caculator1Component } from './caculator1.component';

describe('Caculator1Component', () => {
  let component: Caculator1Component;
  let fixture: ComponentFixture<Caculator1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caculator1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caculator1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
