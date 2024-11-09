import { NgFor } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-example1',
  standalone: true,
  imports: [NgFor],
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css'] // Corrected the property name from styleUrl to styleUrls
})
export class Example1Component {
  search = signal('');
  users = signal([
    { id: 1, name: "Carl" },
    { id: 2, name: 'Peter' }
  ])
  filteredUsers = computed(() => this.users().filter((u) => u.name.toLowerCase().startsWith(this.search())))

  setSearchString(e: Event) {
    this.search.set((e.target as HTMLInputElement).value.toLowerCase());
  }

  addUser() {
    this.users.update((users) => [...users, { id: 3, name: "John" }]);
  }

}
