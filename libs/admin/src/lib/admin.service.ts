import { Injectable } from '@angular/core';

import { PointsEntity } from '@poi/points';
import { StorageService } from '@poi/points';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private storageService: StorageService) {}

  getStatistics(points: PointsEntity[]): number[] {
    return points.map((point) => {
      const stat = this.storageService.get(point) ?? 0;
      return +stat;
    });
  }
}
