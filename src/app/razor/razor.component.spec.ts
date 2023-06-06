import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazorComponent } from './razor.component';

describe('RazorComponent', () => {
  let component: RazorComponent;
  let fixture: ComponentFixture<RazorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
