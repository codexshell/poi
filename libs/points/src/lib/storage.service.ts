import { Injectable } from '@angular/core';
import { PointsEntity } from './+state/points.models';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  /**
   * Save a visit to localStorage, hence incrementing it's stats
   *
   * @param point - PointsEntity
   */
  save(point: PointsEntity) {
    const pointKey = `${point.name}`;
    const stat = localStorage.getItem(pointKey);
    const total = stat ? Number(stat) + 1 : 1;
    localStorage.setItem(pointKey, total.toString());
  }

  /**
   * Get a visit's stats from localStorage
   *
   * @param point - PointsEntity
   */
  get(point: PointsEntity) {
    return localStorage.getItem(`${point.name}`);
  }
}
