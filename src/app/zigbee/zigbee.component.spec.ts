import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZigbeeComponent } from './zigbee.component';

describe('ZigbeeComponent', () => {
  let component: ZigbeeComponent;
  let fixture: ComponentFixture<ZigbeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZigbeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZigbeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
