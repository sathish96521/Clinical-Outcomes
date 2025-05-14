import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClinicalOutcomesState } from '../reducers/clinical-outcomes.state';

export const selectClinicalOutcomesState =
  createFeatureSelector<ClinicalOutcomesState>('clinicalOutcomes');

export const selectTimeInRange = createSelector(
  selectClinicalOutcomesState,
  (state) => state.timeInRange
);
export const selectGMI = createSelector(
  selectClinicalOutcomesState,
  (state) => state.gmi
  // console.log('selectGMI', selectGMI);
);
// console.log('selectGMI', selectGMI);
export const selectMetadata = createSelector(
  selectClinicalOutcomesState,
  (state) => state.metadata
);
