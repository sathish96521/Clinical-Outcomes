import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicalOutcomesComponent } from './clinical-outcomes.component';
import { TimeInRangeChartComponent } from './components/time-in-range-chart/TimeInRangeChartComponent';
import { GmiChartComponent } from './components/gmi-chart/gmi-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { clinicalOutcomesReducer } from './store/reducers/clinical-outcomes.reducer';
import { ClinicalOutcomesEffects } from './store/effects/clinical-outcomes.effects';

@NgModule({
  declarations: [
    ClinicalOutcomesComponent,
    TimeInRangeChartComponent,
    GmiChartComponent,
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    StoreModule.forFeature('clinicalOutcomes', clinicalOutcomesReducer),
    EffectsModule.forFeature([ClinicalOutcomesEffects]),
  ],
  exports: [ClinicalOutcomesComponent],
})
export class ClinicalOutcomesModule {}
