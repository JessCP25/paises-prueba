import { Routes } from '@angular/router';
import { HomePageComponent } from './paises/pages/home-page/home-page.component';
import { Vista1PageComponent } from './paises/pages/vista1-page/vista1-page.component';
import { Vista2PageComponent } from './paises/pages/vista2-page/vista2-page.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'vista1',
        component: Vista1PageComponent
    },
    {
        path: 'vista2',
        component: Vista2PageComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
