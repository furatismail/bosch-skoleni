import { CommonModule } from '@angular/common';
import { Component, Inject, InjectionToken, OnDestroy, OnInit, Optional } from '@angular/core';
import { interval, Subscription } from 'rxjs';

export const TIME_START_DATE = new InjectionToken<string>('TIME_START_DATE');

@Component({
  imports: [CommonModule],
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  standalone: true,
})
export class TimeComponent implements OnInit, OnDestroy {
  count!: Date;
  private subscription: Subscription = new Subscription();

  constructor(@Optional() @Inject(TIME_START_DATE) private startDate: string) { 
    const start = (this.startDate) ? this.startDate : new Date().toISOString();
    this.count = new Date(start); // Initialize count with the start date
  }

  ngOnInit(): void {
    this.subscription.add(interval(1000).subscribe(() => {
      this.calculateElapsedTime();
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private calculateElapsedTime(): void {
    this.count = new Date(this.count.getTime() + 1000); // Increment count by 1 second
  }
}
