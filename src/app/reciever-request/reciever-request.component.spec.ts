import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieverRequestComponent } from './reciever-request.component';

describe('RecieverRequestComponent', () => {
  let component: RecieverRequestComponent;
  let fixture: ComponentFixture<RecieverRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecieverRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecieverRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
