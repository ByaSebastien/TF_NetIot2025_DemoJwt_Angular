import { Routes } from '@angular/router';
import {isConnectedGuard} from './features/auth/guards/is-connected-guard';
import {helloResolver} from './features/home/resolvers/hello-resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
    loadComponent: () => import("./features/home/pages/home/home").then(m => m.Home),

  },
  {
    path: 'hello',
    // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
    loadComponent: () => import("./features/home/pages/hello/hello").then(m => m.Hello),
    canActivate: [
      // isConnectedGuard,
    ],
    resolve: {
      helloResolved: helloResolver,
    },
  },
  {
    path: 'register',
    // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
    loadComponent: () => import("./features/auth/pages/register/register").then(m => m.Register),

  },
  {
    path: 'login',
    // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
    loadComponent: () => import("./features/auth/pages/login/login").then(m => m.Login),

  },
  {
    path: 'house',
    canActivate: [
      isConnectedGuard,
    ],
    // Lazy loading du component (importe le component puis renvois l'instance à l'appel)
    loadComponent: () => import("./features/houses/pages/house-index/house-index").then(m => m.HouseIndex),
  },
];

