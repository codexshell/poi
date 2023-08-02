import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

import { PointsSelectors } from '@poi/points';

@Component({
  selector: 'poi-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  point$ = this.store.select(PointsSelectors.selectEntity);
  @ViewChild(MapInfoWindow) info: MapInfoWindow | undefined;

  constructor(private store: Store) {}

  showInfo(marker: MapMarker) {
    this.info?.open(marker);
  }
}
