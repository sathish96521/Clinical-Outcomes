import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TimeInRangeChartComponent } from './features/clinical-outcomes/components/time-in-range-chart/time-in-range-chart.component';
import { StoreModule } from '@ngrx/store';
import { clinicalOutcomesReducer } from './features/clinical-outcomes/store/reducers/clinical-outcomes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ClinicalOutcomesModule } from '../app/features/clinical-outcomes/clinical-outcomes.module';

// StoreModule.forRoot({
//   clinicalOutcomes: clinicalOutcomesReducer,
// }),
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClinicalOutcomesModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
