import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitZigComponent } from './permit-zig.component';

describe('PermitZigComponent', () => {
  let component: PermitZigComponent;
  let fixture: ComponentFixture<PermitZigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitZigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitZigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
