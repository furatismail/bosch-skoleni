import { JsonPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  private userService = inject(UserService);
  userId = input.required<string>()
  user = toSignal(toObservable(this.userId).pipe(switchMap((res) => {
    return this.userService.getUser(this.userId());
  })))



  constructor() {





  }



}
