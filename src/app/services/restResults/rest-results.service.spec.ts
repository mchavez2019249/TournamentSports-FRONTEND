import { TestBed } from '@angular/core/testing';

import { RestResultsService } from './rest-results.service';

describe('RestResultsService', () => {
  let service: RestResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
