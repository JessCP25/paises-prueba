import { Routes } from '@angular/router';
import HomePageComponent from './paises/pages/home-page/home-page.component';
import Vista1PageComponent from './paises/pages/vista1-page/vista1-page.component';
import Vista2PageComponent from './paises/pages/vista2-page/vista2-page.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./paises/pages/home-page/home-page.component')
    },
    {
        path: 'vista1',
        loadComponent: () => import('./paises/pages/vista1-page/vista1-page.component')
    },
    {
        path: 'vista2',
        loadComponent: () => import('./paises/pages/vista2-page/vista2-page.component')
    },
    {
        path: '**',
        redirectTo: ''
    }
];
