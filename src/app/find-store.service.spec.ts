import { TestBed } from '@angular/core/testing';

import { FindStoreService } from './find-store.service';

describe('FindStoreService', () => {
  let service: FindStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
