import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademicoPage } from './academico.page';

const routes: Routes = [
  {
    path: '',
    component: AcademicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademicoPageRoutingModule {}
