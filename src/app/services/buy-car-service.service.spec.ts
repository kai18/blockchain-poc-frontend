import { TestBed, inject } from '@angular/core/testing';

import { BuyCarServiceService } from './buy-car-service.service';

describe('BuyCarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyCarServiceService]
    });
  });

  it('should be created', inject([BuyCarServiceService], (service: BuyCarServiceService) => {
    expect(service).toBeTruthy();
  }));
});
