import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineAppComponent } from './timeline-app.component';

describe('TimelineAppComponent', () => {
  let component: TimelineAppComponent;
  let fixture: ComponentFixture<TimelineAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
