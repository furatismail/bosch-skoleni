import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-glitch-free',
  standalone: true,
  imports: [],
  templateUrl: './glitch-free.component.html',
  styleUrl: './glitch-free.component.css'
})
export class GlitchFreeComponent {
  title = 'signals-17';

  value = signal(5);

  constructor() {
    effect(() => console.log(this.value(), 'effect'))
  }

  ngOnInit() {
    setTimeout(() => {
      this.value.set(10)
      console.log(this.value(), 'setTimeout')
    }, 5000);
  }

  ngDoCheck() {
    console.log(this.value(), 'ngDoCheck')
  }

  noop() {
    this.value.set(11)
    this.value.set(9)
    this.value.set(8)
    this.value.set(7)
    this.value.set(11)
  }

}
