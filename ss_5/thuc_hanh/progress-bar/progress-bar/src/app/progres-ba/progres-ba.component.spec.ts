import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresBaComponent } from './progres-ba.component';

describe('ProgresBaComponent', () => {
  let component: ProgresBaComponent;
  let fixture: ComponentFixture<ProgresBaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgresBaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresBaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
