import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'ticket',
    loadComponent: () => import('./ticket/ticket.page').then( m => m.TicketPage)
  },
  {
    path: 'movie',
    loadComponent: () => import('./movie/movie.page').then( m => m.MoviePage)
  },
  {
    path: 'user-detail',
    loadComponent: () => import('./user-detail/user-detail.page').then( m => m.UserDetailPage)
  },
];
