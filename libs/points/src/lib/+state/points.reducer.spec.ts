import { Action } from '@ngrx/store';

import * as PointsActions from './points.actions';
import { PointsEntity } from './points.models';
import {
  PointsState,
  initialPointsState,
  pointsReducer,
} from './points.reducer';

describe('Points Reducer', () => {
  const createPointsEntity = (id: string, name = ''): PointsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Points actions', () => {
    it('loadPointsSuccess should return the list of known Points', () => {
      const points = [
        createPointsEntity('PRODUCT-AAA'),
        createPointsEntity('PRODUCT-zzz'),
      ];
      const action = PointsActions.loadPointsSuccess({ points });

      const result: PointsState = pointsReducer(initialPointsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = pointsReducer(initialPointsState, action);

      expect(result).toBe(initialPointsState);
    });
  });
});
