import { PointsEntity } from './points.models';
import {
  pointsAdapter,
  PointsPartialState,
  initialPointsState,
} from './points.reducer';
import * as PointsSelectors from './points.selectors';

describe('Points Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPointsId = (it: PointsEntity) => it.id;
  const createPointsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as PointsEntity);

  let state: PointsPartialState;

  beforeEach(() => {
    state = {
      points: pointsAdapter.setAll(
        [
          createPointsEntity('PRODUCT-AAA'),
          createPointsEntity('PRODUCT-BBB'),
          createPointsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialPointsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Points Selectors', () => {
    it('selectAllPoints() should return the list of Points', () => {
      const results = PointsSelectors.selectAllPoints(state);
      const selId = getPointsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = PointsSelectors.selectEntity(state) as PointsEntity;
      const selId = getPointsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectPointsLoaded() should return the current "loaded" status', () => {
      const result = PointsSelectors.selectPointsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectPointsError() should return the current "error" state', () => {
      const result = PointsSelectors.selectPointsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
