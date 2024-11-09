import { Routes } from '@angular/router';
import { TIME_START_DATE } from '../../shared/components/time/time.component';

export const SettingsRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./overview/overview.component').then(m => m.OverviewComponent),
        providers: [{ provide: TIME_START_DATE, useValue: '01.01.2024' }
        ],
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
