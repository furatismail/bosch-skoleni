import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TimeModule } from './shared/components/time/time.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TimeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bosch-skoleni';
}
