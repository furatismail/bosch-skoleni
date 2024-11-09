import { Routes } from '@angular/router';
import { MainComponent } from './features/dashboard/main/main.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        component: MainComponent,
        path: 'dashboard'
    }
];
