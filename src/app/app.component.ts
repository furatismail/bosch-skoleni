import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TimeComponent } from './shared/components/time/time.component';
import { ChildComponent } from './shared/components/child/child.component';
import { WindowDirective } from './shared/directives/window.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TimeComponent, ChildComponent, WindowDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  title = 'bosch-skoleni';

  ngAfterViewInit(): void {
    const child = document.getElementById('appChild');
    console.log('child: ', child)

    setTimeout(() => {
      child?.remove()
    }, 2000);
  }

  clickMe() {
    console.log('clickMe to run zone.js and detection')
  }

  changeTitle() {
    this.title = 'something'
  }
  
}
