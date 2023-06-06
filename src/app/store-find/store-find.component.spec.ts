import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFindComponent } from './store-find.component';

describe('StoreFindComponent', () => {
  let component: StoreFindComponent;
  let fixture: ComponentFixture<StoreFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreFindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
