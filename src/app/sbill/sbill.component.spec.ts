import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbillComponent } from './sbill.component';

describe('SbillComponent', () => {
  let component: SbillComponent;
  let fixture: ComponentFixture<SbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
