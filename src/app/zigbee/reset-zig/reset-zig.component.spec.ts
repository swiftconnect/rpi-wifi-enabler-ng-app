import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetZigComponent } from './reset-zig.component';

describe('ResetZigComponent', () => {
  let component: ResetZigComponent;
  let fixture: ComponentFixture<ResetZigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetZigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetZigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
