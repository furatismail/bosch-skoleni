import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { CustomPreloadingStrategy } from './core/services/custom-preloading-strategy.service';
import { TimeModule } from './shared/components/time/time.module';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withPreloading(CustomPreloadingStrategy)),
    importProvidersFrom(TimeModule.register('01.01.2000'))
  ]
};
