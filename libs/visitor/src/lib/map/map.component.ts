import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { PointsSelectors } from '@poi/points';

@Component({
  selector: 'poi-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  points$ = this.store.select(PointsSelectors.selectEntity);

  constructor(private store: Store) {}
}
