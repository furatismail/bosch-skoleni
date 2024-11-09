import { Component } from '@angular/core';
import { Example1Component } from './signals/example1/signal-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Example1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



}
