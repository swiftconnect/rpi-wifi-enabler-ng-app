import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavBleComponent } from './fav-ble.component';

describe('FavBleComponent', () => {
  let component: FavBleComponent;
  let fixture: ComponentFixture<FavBleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavBleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavBleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
