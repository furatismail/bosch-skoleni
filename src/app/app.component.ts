import { Component, signal } from '@angular/core';
import { GlitchFreeComponent } from "./signals/glitch-free/glitch-free.component";
import { IsEvenComponent } from './signals/is-even/is-even.component';
import { SignalSearchComponent } from './signals/signal-search/signal-search.component';
import { JsonPipe } from '@angular/common';
import { UserComponent } from "./signals/user/user.component";
import { TodoComponent } from "./signals/todo/todo.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, SignalSearchComponent, IsEvenComponent, GlitchFreeComponent, JsonPipe, UserComponent, TodoComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arr = signal([]) as any

  counterValue = 5;

  ngOnInit() {
    setTimeout(() => {
      this.counterValue = 10
      this.arr().push('run')
    }, 3000);
  }

}
