import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PointsEntity } from './+state/points.models';

@Injectable({
  providedIn: 'root',
})
export class PointsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<PointsEntity[]> {
    return this.http.get<PointsEntity[]>('assets/points.json');
  }
}
