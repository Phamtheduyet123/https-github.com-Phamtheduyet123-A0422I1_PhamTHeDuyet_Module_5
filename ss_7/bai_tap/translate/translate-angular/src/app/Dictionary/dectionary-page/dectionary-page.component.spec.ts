import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DectionaryPageComponent } from './dectionary-page.component';

describe('DectionaryPageComponent', () => {
  let component: DectionaryPageComponent;
  let fixture: ComponentFixture<DectionaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DectionaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DectionaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
