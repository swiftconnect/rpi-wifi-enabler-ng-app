import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowZigComponent } from './show-zig.component';

describe('ShowZigComponent', () => {
  let component: ShowZigComponent;
  let fixture: ComponentFixture<ShowZigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowZigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowZigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
