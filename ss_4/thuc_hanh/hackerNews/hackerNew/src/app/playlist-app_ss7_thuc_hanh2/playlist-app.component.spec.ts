import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistAppComponent } from './playlist-app.component';

describe('PlaylistAppComponent', () => {
  let component: PlaylistAppComponent;
  let fixture: ComponentFixture<PlaylistAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
