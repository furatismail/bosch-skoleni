import { Component } from '@angular/core';
import { SignalSearchComponent } from './signals/signal-search/signal-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignalSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



}
