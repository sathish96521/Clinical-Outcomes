import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TimeInRange } from './models/time-in-range.model';
import { GMI } from './models/gmi.model';
import { Metadata } from './models/metadata.model';
import * as ClinicalActions from './store/actions/clinical-outcomes.actions';
import * as ClinicalSelectors from './store/selectors/clinical-outcomes.selectors';

@Component({
  selector: 'app-clinical-outcomes',
  templateUrl: './clinical-outcomes.component.html',
  styleUrls: ['./clinical-outcomes.component.scss'],
})
export class ClinicalOutcomesComponent implements OnInit {
  timeInRange$!: Observable<TimeInRange[]>;
  gmi$!: Observable<GMI | null>;
  metadata$!: Observable<Metadata | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ClinicalActions.loadTimeInRange());
    this.store.dispatch(ClinicalActions.loadGMI());
    this.store.dispatch(ClinicalActions.loadMetadata());

    this.timeInRange$ = this.store.select(ClinicalSelectors.selectTimeInRange);
    this.gmi$ = this.store.select(ClinicalSelectors.selectGMI);
    this.metadata$ = this.store.select(ClinicalSelectors.selectMetadata);
  }
}
