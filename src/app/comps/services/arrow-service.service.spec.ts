import { TestBed } from '@angular/core/testing';

import { ArrowServiceService } from './arrow-service.service';

describe('ArrowServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrowServiceService = TestBed.get(ArrowServiceService);
    expect(service).toBeTruthy();
  });
});
