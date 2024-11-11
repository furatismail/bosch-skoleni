import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodoComponent } from '../../../signals/todo/todo.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TodoComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

}
