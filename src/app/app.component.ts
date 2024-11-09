import { Component } from '@angular/core';
import { SignalSearchComponent } from './signals/signal-search/signal-search.component';
import { IsEvenComponent } from './signals/is-even/is-even.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignalSearchComponent, IsEvenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



}
