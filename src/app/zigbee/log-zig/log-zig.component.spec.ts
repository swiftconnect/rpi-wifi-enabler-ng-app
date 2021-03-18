import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogZigComponent } from './log-zig.component';

describe('LogZigComponent', () => {
  let component: LogZigComponent;
  let fixture: ComponentFixture<LogZigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogZigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogZigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
