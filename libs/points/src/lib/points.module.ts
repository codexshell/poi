import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPoints from './+state/points.reducer';
import { PointsEffects } from './+state/points.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromPoints.POINTS_FEATURE_KEY,
      fromPoints.pointsReducer
    ),
    EffectsModule.forFeature([PointsEffects]),
  ],
})
export class PointsModule {}
