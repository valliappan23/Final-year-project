import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermaangementComponent } from './usermaangement.component';

describe('UsermaangementComponent', () => {
  let component: UsermaangementComponent;
  let fixture: ComponentFixture<UsermaangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermaangementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermaangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
