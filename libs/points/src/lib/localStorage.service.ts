import { Injectable } from '@angular/core';
import { PointsEntity } from './+state/points.models';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  /**
   * Save a visit to localStorage, hence incrementing it's count
   * 
   * @param point - A member of PointsEntity
   */
  save(point: PointsEntity) {
    const pointKey = `${point.name}`;
    const stat = localStorage.getItem(pointKey);
    const total = stat ? Number(stat) + 1 : 1;
    localStorage.setItem(pointKey, total.toString());
  }
}
