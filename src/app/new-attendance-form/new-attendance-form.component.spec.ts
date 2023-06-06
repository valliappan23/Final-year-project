import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAttendanceFormComponent } from './new-attendance-form.component';

describe('NewAttendanceFormComponent', () => {
  let component: NewAttendanceFormComponent;
  let fixture: ComponentFixture<NewAttendanceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAttendanceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAttendanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
