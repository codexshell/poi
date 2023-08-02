import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, tap } from 'rxjs';

import { PointsService } from '../points.service';
import * as PointsActions from './points.actions';
import * as PointsFeature from './points.reducer';
import { StorageService } from '../storage.service';

@Injectable()
export class PointsEffects {
  private actions$ = inject(Actions);
  private pointsService = inject(PointsService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PointsActions.initPoints),
      switchMap(() => this.pointsService.getAll()),
      switchMap((points) => of(PointsActions.loadPointsSuccess({ points }))),
      catchError((error) => {
        console.error('Error', error);
        return of(PointsActions.loadPointsFailure({ error }));
      })
    )
  );

  visit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PointsActions.visitPoint),
      switchMap(({ point }) => {
        this.storage.save(point);
        return of(PointsActions.visitPointSuccess());
      }),
      catchError((error) => {
        console.log('Error', error);
        return of(PointsActions.visitPointFailure({ error }));
      })
    )
  );

  constructor(private storage: StorageService) {}
}
