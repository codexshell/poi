/**
 * Interface for the 'Points' data
 */
export interface PointsEntity {
  id: string | number; // Primary ID
  name: string;
  lat: number;
  lng: number;
  description: string;
  imgUrl: string;
}
