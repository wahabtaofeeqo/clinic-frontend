import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogComplainComponent } from './log-complain.component';

describe('LogComplainComponent', () => {
  let component: LogComplainComponent;
  let fixture: ComponentFixture<LogComplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogComplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
