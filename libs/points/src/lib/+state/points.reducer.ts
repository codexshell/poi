import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as PointsActions from './points.actions';
import { PointsEntity } from './points.models';

export const POINTS_FEATURE_KEY = 'points';

export interface PointsState extends EntityState<PointsEntity> {
  selectedId?: string | number; // which Points record has been selected
  loaded: boolean; // has the Points list been loaded
  error?: string | null; // last known error (if any)
}

export interface PointsPartialState {
  readonly [POINTS_FEATURE_KEY]: PointsState;
}

export const pointsAdapter: EntityAdapter<PointsEntity> =
  createEntityAdapter<PointsEntity>();

export const initialPointsState: PointsState = pointsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialPointsState,
  on(PointsActions.initPoints, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PointsActions.loadPointsSuccess, (state, { points }) =>
    pointsAdapter.setAll(points, { ...state, loaded: true })
  ),
  on(PointsActions.loadPointsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(PointsActions.selectPoint, (state, { pointId }) => ({
    ...state,
    selectedId: pointId,
  }))
);

export function pointsReducer(state: PointsState | undefined, action: Action) {
  return reducer(state, action);
}
