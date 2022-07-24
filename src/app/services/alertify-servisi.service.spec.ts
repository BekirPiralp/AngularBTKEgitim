import { TestBed } from '@angular/core/testing';

import { AlertifyServisiService } from './alertify-servisi.service';

describe('AlertifyServisiService', () => {
  let service: AlertifyServisiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertifyServisiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
