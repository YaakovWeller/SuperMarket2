import { TestBed } from '@angular/core/testing';

import { SnacksServiceService } from './snacks-service.service';

describe('SnacksServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnacksServiceService = TestBed.get(SnacksServiceService);
    expect(service).toBeTruthy();
  });
});
