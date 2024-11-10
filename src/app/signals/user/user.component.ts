import { Component, effect, inject, input, signal } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { lastValueFrom, switchMap } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';

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
  user = signal({});



  constructor() {
    toObservable(this.userId).pipe(switchMap((res) => {
      return this.userService.getUser(this.userId());
    })).subscribe((res) => {
      this.user.set(res)
    })




  }



}
