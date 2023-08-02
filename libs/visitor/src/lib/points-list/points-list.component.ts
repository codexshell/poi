import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PointsActions, PointsSelectors, PointsEntity } from '@poi/points';

@Component({
  selector: 'poi-points-list',
  templateUrl: './points-list.component.html',
  styleUrls: ['./points-list.component.css'],
})
export class PointsListComponent implements OnInit {
  points$ = this.store.select(PointsSelectors.selectAllPoints);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(PointsActions.initPoints());
  }

  selectPoint(point: PointsEntity) {
    this.store.dispatch(PointsActions.selectPoint({ pointId: point.id }));
  }
}
