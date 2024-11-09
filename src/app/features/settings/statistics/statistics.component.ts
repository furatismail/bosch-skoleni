import { Component } from '@angular/core';
import { TimeComponent } from '../../../shared/components/time/time.component';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [TimeComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  
}
