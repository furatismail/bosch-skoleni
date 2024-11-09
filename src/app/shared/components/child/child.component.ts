import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements DoCheck {

  // ngDoCheck is called with every change detection run, which means it is invoked frequently, 
  // so it is crucial to keep the logic inside this method efficient.
  ngDoCheck() {
    console.log('ChildComponent I am here. I am shouting on every detection tick...')
  }
}
