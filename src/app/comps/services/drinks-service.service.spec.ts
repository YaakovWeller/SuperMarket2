import { TestBed } from '@angular/core/testing';

import { DrinksServiceService } from './drinks-service.service';

describe('DrinksServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrinksServiceService = TestBed.get(DrinksServiceService);
    expect(service).toBeTruthy();
  });
});
