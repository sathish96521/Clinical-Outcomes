import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicalOutcomesComponent } from './clinical-outcomes.component';

const routes: Routes = [{ path: '', component: ClinicalOutcomesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicalOutcomesRoutingModule { }
