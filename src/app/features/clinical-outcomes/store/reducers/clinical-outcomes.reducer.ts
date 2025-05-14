import { createReducer, on } from '@ngrx/store';
import * as ClinicalActions from '../actions/clinical-outcomes.actions';
import { ClinicalOutcomesState } from './clinical-outcomes.state';

export const initialState: ClinicalOutcomesState = {
  timeInRange: [],
  gmi: null,
  metadata: null,
};

export const clinicalOutcomesReducer = createReducer(
  initialState,
  on(ClinicalActions.loadTimeInRangeSuccess, (state, { data }) => ({
    ...state,
    timeInRange: data,
  })),
  on(ClinicalActions.loadGMISuccess, (state, { data }) => ({
    ...state,
    gmi: data,
  })),
  on(ClinicalActions.loadMetadataSuccess, (state, { data }) => ({
    ...state,
    metadata: data,
  }))
);
