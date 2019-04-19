import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycurrentweatherComponent } from './displaycurrentweather.component';

describe('DisplaycurrentweatherComponent', () => {
  let component: DisplaycurrentweatherComponent;
  let fixture: ComponentFixture<DisplaycurrentweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaycurrentweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycurrentweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
