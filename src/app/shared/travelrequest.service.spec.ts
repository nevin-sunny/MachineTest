import { TestBed } from '@angular/core/testing';

import { TravelrequestService } from './travelrequest.service';

describe('TravelrequestService', () => {
  let service: TravelrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
