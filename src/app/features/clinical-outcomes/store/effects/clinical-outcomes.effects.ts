import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ClinicalActions from '../actions/clinical-outcomes.actions';
import { ClinicalOutcomesService } from '../../services/clinical-outcomes.service';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class ClinicalOutcomesEffects {
  constructor(
    private actions$: Actions,
    private service: ClinicalOutcomesService
  ) {}

  loadTimeInRange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClinicalActions.loadTimeInRange),
      switchMap(() =>
        this.service
          .getTimeInRange()
          .pipe(map((data) => ClinicalActions.loadTimeInRangeSuccess({ data })))
      )
    )
  );

  loadGMI$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClinicalActions.loadGMI),
      switchMap(() =>
        this.service
          .getGMI()
          .pipe(map((data) => ClinicalActions.loadGMISuccess({ data })))
      )
    )
  );

  loadMetadata$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClinicalActions.loadMetadata),
      switchMap(() =>
        this.service
          .getMetadata()
          .pipe(map((data) => ClinicalActions.loadMetadataSuccess({ data })))
      )
    )
  );
}
