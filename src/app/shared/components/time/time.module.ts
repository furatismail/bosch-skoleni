import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time.component';

export const TIME_START_DATE = new InjectionToken<string>('TIME_START_DATE');

@NgModule({
  declarations: [TimeComponent],
  imports: [
    CommonModule
  ],
  exports: [TimeComponent]
})
export class TimeModule {
  static register(startDate: string = new Date().toISOString()): ModuleWithProviders<TimeModule> {
    return {
      ngModule: TimeModule,
      providers: [
        { provide: TIME_START_DATE, useValue: startDate }
      ]
    };
  }
}