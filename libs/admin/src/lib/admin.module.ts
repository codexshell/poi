import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';

import { AdminComponent } from './admin.component';
import { PointsModule } from '@poi/points';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
      },
    ]),
    PointsModule,
    NgChartsModule,
  ],
  declarations: [AdminComponent],
})
export class AdminModule {}
