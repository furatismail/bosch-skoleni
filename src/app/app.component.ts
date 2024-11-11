import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TimeComponent } from './shared/components/time/time.component';
import { HighlightDirective } from './shared/directives/highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TimeComponent, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bosch-skoleni';
}
