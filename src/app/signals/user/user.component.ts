import { Component, effect, inject, input, signal } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { lastValueFrom } from 'rxjs';
import { JsonPipe } from '@angular/common';

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
    effect(async () => {
      // console.log(this.user(), 'user')

      const response = await lastValueFrom(this.userService.getUser(this.userId()));

      this.user.set(response as any); 
    }, {
      allowSignalWrites: true
    });

   
  }

  

}
