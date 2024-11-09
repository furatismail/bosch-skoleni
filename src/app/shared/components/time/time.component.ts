import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { TIME_START_DATE } from './time.module';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit, OnDestroy {
  count!: Date;
  private subscription: Subscription = new Subscription();

  constructor(@Inject(TIME_START_DATE) private startDate: string) { 
    this.count = new Date(this.startDate); // Initialize count with the start date
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
