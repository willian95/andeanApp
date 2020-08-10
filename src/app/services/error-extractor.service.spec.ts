import { TestBed } from '@angular/core/testing';

import { ErrorExtractorService } from './error-extractor.service';

describe('ErrorExtractorService', () => {
  let service: ErrorExtractorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorExtractorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
