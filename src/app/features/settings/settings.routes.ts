import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { TimeModule } from '../../shared/components/time/time.module';

export const SettingsRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./overview/overview.component').then(m => m.OverviewComponent),
        providers: [importProvidersFrom(TimeModule.register('01.01.2024'))],
        children: [
            {
                path: 'panel',
                loadComponent: () => import('./panel/panel.component').then(m => m.PanelComponent),
                data: { preload: true }
            },
            {
                path: 'statistics',
                loadComponent: () => import('./statistics/statistics.component').then(m => m.StatisticsComponent),
                data: { preload: true, preloadDelay: 3000 }
            }
        ]
    }

]
