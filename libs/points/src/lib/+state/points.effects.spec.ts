import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as PointsActions from './points.actions';
import { PointsEffects } from './points.effects';

describe('PointsEffects', () => {
  let actions: Observable<Action>;
  let effects: PointsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        PointsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(PointsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: PointsActions.initPoints() });

      const expected = hot('-a-|', {
        a: PointsActions.loadPointsSuccess({ points: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
