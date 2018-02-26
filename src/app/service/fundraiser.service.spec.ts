import { TestBed, inject } from '@angular/core/testing';

import { FundraiserService } from './fundraiser.service';

describe('FundraiserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FundraiserService]
    });
  });

  it('should be created', inject([FundraiserService], (service: FundraiserService) => {
    expect(service).toBeTruthy();
  }));
});
