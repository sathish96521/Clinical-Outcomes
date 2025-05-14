import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'clinical-outcomes', loadChildren: () => import('./features/clinical-outcomes/clinical-outcomes.module').then(m => m.ClinicalOutcomesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
