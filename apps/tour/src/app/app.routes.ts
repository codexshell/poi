import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'admin',
    loadChildren: () => import('@poi/admin').then((m) => m.AdminModule),
  },
  {
    path: 'tour',
    loadChildren: () => import('@poi/visitor').then((m) => m.VisitorModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tour',
  },
];
