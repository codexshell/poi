import { createAction, props } from '@ngrx/store';
import { PointsEntity } from './points.models';

export const initPoints = createAction('[Points Page] Init');

export const loadPointsSuccess = createAction(
  '[Points/API] Load Points Success',
  props<{ points: PointsEntity[] }>()
);

export const loadPointsFailure = createAction(
  '[Points/API] Load Points Failure',
  props<{ error: any }>()
);

export const selectPoint = createAction(
  '[Points/API] Select Point',
  props<{ pointId: string | number }>()
);
