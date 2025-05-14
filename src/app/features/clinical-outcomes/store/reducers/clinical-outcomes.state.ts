import { TimeInRange } from '../../models/time-in-range.model';
import { GMI } from '../../models/gmi.model';
import { Metadata } from '../../models/metadata.model';

export interface ClinicalOutcomesState {
  timeInRange: TimeInRange[];
  gmi: GMI | null;
  metadata: Metadata | null;
}

export const initialState: ClinicalOutcomesState = {
  timeInRange: [],
  gmi: null,
  metadata: null,
};
