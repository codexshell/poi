import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { PointsModule } from '@poi/points';

import { PointsListComponent } from './points-list/points-list.component';
import { VisitorComponent } from './visitor/visitor.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forChild([
      {
        path: '',
        component: VisitorComponent,
      },
    ]),
    PointsModule,
    GoogleMapsModule,
  ],
  declarations: [VisitorComponent, PointsListComponent],
})
export class VisitorModule {}
