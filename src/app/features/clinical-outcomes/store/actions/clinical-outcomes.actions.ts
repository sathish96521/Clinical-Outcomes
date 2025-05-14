import { createAction, props } from '@ngrx/store';
import { TimeInRange } from '../../models/time-in-range.model';
import { GMI } from '../../models/gmi.model';
import { Metadata } from '../../models/metadata.model';

export const loadTimeInRange = createAction(
  '[Clinical Outcomes] Load Time In Range'
);
export const loadTimeInRangeSuccess = createAction(
  '[Clinical Outcomes] Load Time In Range Success',
  props<{ data: TimeInRange[] }>()
);

export const loadGMI = createAction('[Clinical Outcomes] Load GMI');
export const loadGMISuccess = createAction(
  '[Clinical Outcomes] Load GMI Success',
  props<{ data: GMI }>()
);

export const loadMetadata = createAction('[Clinical Outcomes] Load Metadata');
export const loadMetadataSuccess = createAction(
  '[Clinical Outcomes] Load Metadata Success',
  props<{ data: Metadata }>()
);
