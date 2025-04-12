import { TestBed } from '@angular/core/testing';

import { SoftpayService } from './softpay.service';

describe('SoftpayService', () => {
  let service: SoftpayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftpayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
