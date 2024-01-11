import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionInfoComponent } from './action-info/action-info.component';

const routes: Routes = [
  { path: 'action-report', component: ActionInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
