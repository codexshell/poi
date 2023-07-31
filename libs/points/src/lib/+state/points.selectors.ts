import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  POINTS_FEATURE_KEY,
  PointsState,
  pointsAdapter,
} from './points.reducer';

// Lookup the 'Points' feature state managed by NgRx
export const selectPointsState =
  createFeatureSelector<PointsState>(POINTS_FEATURE_KEY);

const { selectAll, selectEntities } = pointsAdapter.getSelectors();

export const selectPointsLoaded = createSelector(
  selectPointsState,
  (state: PointsState) => state.loaded
);

export const selectPointsError = createSelector(
  selectPointsState,
  (state: PointsState) => state.error
);

export const selectAllPoints = createSelector(
  selectPointsState,
  (state: PointsState) => selectAll(state)
);

export const selectPointsEntities = createSelector(
  selectPointsState,
  (state: PointsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectPointsState,
  (state: PointsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectPointsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
