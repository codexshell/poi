import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as PointsActions from './points.actions';
import * as PointsFeature from './points.reducer';

@Injectable()
export class PointsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PointsActions.initPoints),
      switchMap(() => of(PointsActions.loadPointsSuccess({ points: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(PointsActions.loadPointsFailure({ error }));
      })
    )
  );
}
