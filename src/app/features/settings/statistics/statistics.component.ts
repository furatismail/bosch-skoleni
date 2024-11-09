import { Component } from '@angular/core';
import { TimeModule } from '../../../shared/components/time/time.module';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [TimeModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  
}
