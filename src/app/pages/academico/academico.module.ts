import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcademicoPageRoutingModule } from './academico-routing.module';

import { AcademicoPage } from './academico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademicoPageRoutingModule
  ],
  declarations: [AcademicoPage]
})
export class AcademicoPageModule {}
