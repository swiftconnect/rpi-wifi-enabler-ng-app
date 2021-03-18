import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditZigComponent } from './edit-zig.component';

describe('EditZigComponent', () => {
  let component: EditZigComponent;
  let fixture: ComponentFixture<EditZigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditZigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditZigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
