import { TestBed } from '@angular/core/testing';

import { CashmachinesService } from './cashmachines.service';

describe('CashmachinesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CashmachinesService = TestBed.get(CashmachinesService);
    expect(service).toBeTruthy();
  });
});
