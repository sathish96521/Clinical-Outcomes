import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TimeInRange } from '../models/time-in-range.model';
import { GMI } from '../models/gmi.model';
import { Metadata } from '../models/metadata.model';

@Injectable({ providedIn: 'root' })
export class ClinicalOutcomesService {
  getTimeInRange() {
    return of([
      { label: '70-180 mg/dL', value: 65 },
      { label: '<70 mg/dL', value: 10 },
      { label: '>180 mg/dL', value: 25 },
    ]);
  }

  getGMI() {
    return of({ below: 10, target: 70, above: 20 });
  }

  getMetadata() {
    return of({
      activePatients: 120,
      reportingPeriod: '01 Jan 2024 - 31 Jan 2024',
      lastUpdated: new Date().toLocaleString(),
    });
  }
}
