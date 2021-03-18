import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBleComponent } from './edit-ble.component';

describe('EditBleComponent', () => {
  let component: EditBleComponent;
  let fixture: ComponentFixture<EditBleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
