import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcityComponent } from './inputcity.component';

describe('InputcityComponent', () => {
  let component: InputcityComponent;
  let fixture: ComponentFixture<InputcityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputcityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
