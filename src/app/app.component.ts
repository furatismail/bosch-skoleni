import { Component } from '@angular/core';
import { GlitchFreeComponent } from "./signals/glitch-free/glitch-free.component";
import { IsEvenComponent } from './signals/is-even/is-even.component';
import { SignalSearchComponent } from './signals/signal-search/signal-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignalSearchComponent, IsEvenComponent, GlitchFreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  counterValue = 5;

  ngOnInit() {
    setTimeout(() => {
      this.counterValue = 10
    }, 3000);
  }

}
