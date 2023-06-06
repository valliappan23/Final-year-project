import { TestBed } from '@angular/core/testing';

import { ServerJsService } from './server.js.service';

describe('ServerJsService', () => {
  let service: ServerJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
