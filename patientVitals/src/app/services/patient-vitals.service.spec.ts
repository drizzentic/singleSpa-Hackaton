import { TestBed } from '@angular/core/testing';

import { PatientVitalsService } from './patient-vitals.service';

describe('patientVitalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientVitalsService = TestBed.get(PatientVitalsService);
    expect(service).toBeTruthy();
  });
});
