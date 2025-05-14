import { TestBed } from '@angular/core/testing';

import { ClinicalOutcomesService } from './clinical-outcomes.service';

describe('ClinicalOutcomesService', () => {
  let service: ClinicalOutcomesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicalOutcomesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
