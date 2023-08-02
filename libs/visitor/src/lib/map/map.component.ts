import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

import { PointsActions, PointsEntity, PointsSelectors } from '@poi/points';

@Component({
  selector: 'poi-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  point$ = this.store.select(PointsSelectors.selectEntity);
  @ViewChild(MapInfoWindow) info: MapInfoWindow | undefined;

  constructor(private store: Store) {}

  showInfo(marker: MapMarker, point: PointsEntity) {
    this.info?.open(marker);
    this.store.dispatch(PointsActions.visitPoint({ point }));
  }
}
