import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBleComponent } from './show-ble.component';

describe('ShowBleComponent', () => {
  let component: ShowBleComponent;
  let fixture: ComponentFixture<ShowBleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
