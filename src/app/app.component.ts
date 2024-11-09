import { Component } from '@angular/core';
import { SignalSearchComponent } from './signals/signal-search/signal-search.component';
import { IsEvenComponent } from './signals/is-even/is-even.component';
import { BloatedComponent } from "./signals/bloated/bloated.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignalSearchComponent, IsEvenComponent, BloatedComponent],
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
