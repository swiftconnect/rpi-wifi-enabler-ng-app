import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WifisetupComponent } from './wifisetup.component';

describe('WifisetupComponent', () => {
  let component: WifisetupComponent;
  let fixture: ComponentFixture<WifisetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifisetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifisetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
