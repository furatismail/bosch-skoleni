import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-bloated',
  standalone: true,
  imports: [],
  templateUrl: './bloated.component.html',
  styleUrl: './bloated.component.css'
})
export class BloatedComponent {
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
