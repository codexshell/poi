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

export const visitPoint = createAction(
  '[Points/API] Visit Point',
  props<{ point: PointsEntity }>()
);

export const visitPointSuccess = createAction(
  '[Points/API] Visit Point Success'
);

export const visitPointFailure = createAction(
  '[Points/API] Visit Point Failure',
  props<{ error: any }>()
);
