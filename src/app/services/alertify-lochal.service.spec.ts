import { TestBed } from '@angular/core/testing';

import { AlertifyLochalService } from './alertify-lochal.service';

describe('AlertifyLochalService', () => {
  let service: AlertifyLochalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertifyLochalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
