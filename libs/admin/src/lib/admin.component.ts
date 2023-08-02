import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PointsActions, PointsEntity, PointsSelectors } from '@poi/points';
import { Subscription } from 'rxjs';
import { ChartDataset } from 'chart.js';

import { AdminService } from './admin.service';

@Component({
  selector: 'poi-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  dataSets: ChartDataset[] = [];
  labels: string[] = [];

  constructor(private store: Store, private adminService: AdminService) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select(PointsSelectors.selectAllPoints)
      .subscribe((points) => this.buildChart(points));
    this.store.dispatch(PointsActions.initPoints());
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private buildChart(points: PointsEntity[]) {
    this.labels = points.map((point) => point.name);
    this.dataSets = [
      {
        data: this.adminService.getStatistics(points),
      },
    ];
  }
}
